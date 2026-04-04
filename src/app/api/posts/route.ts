import { NextRequest, NextResponse } from 'next/server';
import { getServiceSupabase } from '@/lib/supabase';

const FIELDS = 'id, title, content, dance_type, area, role, level, nickname, created_at, line_user_id, line_display_name, line_picture_url, age_range, height, pro_am, dance_experience, direction, practice_frequency, practice_location, smoking, marital_status, std_org, std_level, latin_org, latin_level';

// GET /api/posts - Fetch all partner posts
export async function GET() {
  try {
    const supabase = getServiceSupabase();
    const { data, error } = await supabase
      .from('partner_posts')
      .select(FIELDS)
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
    const {
      lineUserId, lineDisplayName, linePictureUrl,
      nickname, title, content, danceType, area, role, level,
      ageRange, height, proAm, danceExperience,
      direction, practiceFrequency, practiceLocation,
      smoking, maritalStatus,
      stdOrg, stdLevel, latinOrg, latinLevel
    } = await request.json();

    if (!lineUserId || !lineDisplayName || !content || !danceType || !area || !role) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    const supabase = getServiceSupabase();
    const { data, error } = await supabase
      .from('partner_posts')
      .insert({
        line_user_id: lineUserId,
        line_display_name: lineDisplayName,
        line_picture_url: linePictureUrl || null,
        nickname: nickname || lineDisplayName,
        title: title || `${nickname || lineDisplayName}の募集`,
        content,
        dance_type: danceType,
        area,
        role,
        level: level || null,
        age_range: ageRange || null,
        height: height || null,
        pro_am: proAm || null,
        dance_experience: danceExperience || null,
        direction: direction || null,
        practice_frequency: practiceFrequency || null,
        practice_location: practiceLocation || null,
        smoking: smoking || null,
        marital_status: maritalStatus || null,
        std_org: stdOrg || null,
        std_level: stdLevel || null,
        latin_org: latinOrg || null,
        latin_level: latinLevel || null,
      })
      .select(FIELDS)
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
