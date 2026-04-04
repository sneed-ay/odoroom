import { NextRequest, NextResponse } from "next/server";
import { getServiceSupabase } from "@/lib/supabase";

export async function POST(request: NextRequest) {
  try {
    const { lineUserId, lineDisplayName, linePictureUrl, page } = await request.json();
    if (!lineUserId) {
      return NextResponse.json({ error: "lineUserId is required" }, { status: 400 });
    }
    const supabase = getServiceSupabase();
    const { error } = await supabase
      .from("login_logs")
      .insert({
        line_user_id: lineUserId,
        line_display_name: lineDisplayName || null,
        line_picture_url: linePictureUrl || null,
        page: page || null,
      });
    if (error) {
      console.error("Error logging login:", error);
      return NextResponse.json({ error: "Failed to log login" }, { status: 500 });
    }
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Login log error:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
