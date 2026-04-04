import { NextRequest, NextResponse } from 'next/server';
import { getServiceSupabase } from '@/lib/supabase';

// GET /api/posts - Fetch all partner posts
export async function GET() {
  try {
    const supabase = getServiceSupabase();

    const { data, error } = await supabase
      .from('partner_posts')
      .select('id, title, content, dance_type, area, role, level, nickname, created_at, line_user_id, line_display_name, line_picture_url')
      .order('created_at', { ascending: false });

    if (error) {
      console.error('Error fetching posts:', error);
      return NextResponse.json({ error: 'Failed to fetch posts' }, { status: 500 });
    }

    return NextResponse.json({ posts: data });
  } catch (error) {
    console.error('Posts fetch error:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}

// POST /api/posts - Create a new partner post (LINE authenticated)
export async function POST(request: NextRequest) {
  try {
    const { lineUserId, lineDisplayName, linePictureUrl, title, content, danceType, area, role, level } = await request.json();

    if (!lineUserId || !lineDisplayName || !title || !content || !danceType || !area || !role) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    const supabase = getServiceSupabase();

    const { data, error } = await supabase
      .from('partner_posts')
      .insert({
        line_user_id: lineUserId,
        line_display_name: lineDisplayName,
        line_picture_url: linePictureUrl || null,
        nickname: lineDisplayName,
        title,
        content,
        dance_type: danceType,
        area,
        role,
        level: level || null,
      })
      .select('id, title, content, dance_type, area, role, level, nickname, line_display_name, line_picture_url, created_at, line_user_id')
      .single();

    if (error) {
      console.error('Error creating post:', error);
      return NextResponse.json({ error: 'Failed to create post' }, { status: 500 });
    }

    return NextResponse.json({ post: data }, { status: 201 });
  } catch (error) {
    console.error('Post creation error:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}

// DELETE /api/posts - Delete own post (verify LINE user ID)
export async function DELETE(request: NextRequest) {
  try {
    const { postId, lineUserId } = await request.json();

    if (!postId || !lineUserId) {
      return NextResponse.json({ error: 'postId and lineUserId are required' }, { status: 400 });
    }

    const supabase = getServiceSupabase();

    // Verify ownership
    const { data: post, error: fetchError } = await supabase
      .from('partner_posts')
      .select('id, line_user_id')
      .eq('id', postId)
      .single();

    if (fetchError || !post) {
      return NextResponse.json({ error: 'Post not found' }, { status: 404 });
    }

    if (post.line_user_id !== lineUserId) {
      return NextResponse.json({ error: 'Not authorized' }, { status: 403 });
    }

    const { error: deleteError } = await supabase
      .from('partner_posts')
      .delete()
      .eq('id', postId);

    if (deleteError) {
      console.error('Error deleting post:', deleteError);
      return NextResponse.json({ error: 'Failed to delete post' }, { status: 500 });
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Post deletion error:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
