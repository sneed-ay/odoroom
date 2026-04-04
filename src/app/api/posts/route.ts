import { NextRequest, NextResponse } from 'next/server';
import { getServiceSupabase } from '@/lib/supabase';

// GET /api/posts - Fetch all partner posts
export async function GET() {
  try {
    const supabase = getServiceSupabase();

    const { data, error } = await supabase
      .from('partner_posts')
      .select('id, title, content, dance_type, area, role, level, nickname, created_at')
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

// POST /api/posts - Create a new partner post
export async function POST(request: NextRequest) {
  try {
    const { nickname, title, content, danceType, area, role, level, deletePassword } = await request.json();

    if (!nickname || !title || !content || !danceType || !area || !role || !deletePassword) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    const supabase = getServiceSupabase();

    const { data, error } = await supabase
      .from('partner_posts')
      .insert({
        nickname,
        title,
        content,
        dance_type: danceType,
        area,
        role,
        level: level || 'beginner',
        delete_password: deletePassword,
      })
      .select('id, title, content, dance_type, area, role, level, nickname, created_at')
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

// DELETE /api/posts - Delete a post (verify by delete password)
export async function DELETE(request: NextRequest) {
  try {
    const { postId, deletePassword } = await request.json();

    if (!postId || !deletePassword) {
      return NextResponse.json(
        { error: 'postId and deletePassword are required' },
        { status: 400 }
      );
    }

    const supabase = getServiceSupabase();

    // Fetch the post and verify delete password
    const { data: post, error: fetchError } = await supabase
      .from('partner_posts')
      .select('id, delete_password')
      .eq('id', postId)
      .single();

    if (fetchError || !post) {
      return NextResponse.json({ error: 'Post not found' }, { status: 404 });
    }

    if (post.delete_password !== deletePassword) {
      return NextResponse.json({ error: 'Incorrect delete password' }, { status: 403 });
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
