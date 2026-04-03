import { NextRequest, NextResponse } from 'next/server';
import { getServiceSupabase } from '@/lib/supabase';

// POST /api/auth/line - Register or update user from LIFF profile
export async function POST(request: NextRequest) {
  try {
      const { userId, displayName, pictureUrl } = await request.json();

          if (!userId || !displayName) {
                return NextResponse.json(
                        { error: 'userId and displayName are required' },
                                { status: 400 }
                                      );
                                          }

                                              const supabase = getServiceSupabase();

                                                  // Upsert user
                                                      const { data, error } = await supabase
                                                            .from('users')
                                                                  .upsert(
                                                                          {
                                                                                    line_user_id: userId,
                                                                                              display_name: displayName,
                                                                                                        picture_url: pictureUrl || null,
                                                                                                                },
                                                                                                                        { onConflict: 'line_user_id' }
                                                                                                                              )
                                                                                                                                    .select()
                                                                                                                                          .single();

                                                                                                                                              if (error) {
                                                                                                                                                    console.error('Error upserting user:', error);
                                                                                                                                                          return NextResponse.json({ error: 'Failed to save user' }, { status: 500 });
                                                                                                                                                              }

                                                                                                                                                                  return NextResponse.json({ user: data });
                                                                                                                                                                    } catch (error) {
                                                                                                                                                                        console.error('Auth error:', error);
                                                                                                                                                                            return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
                                                                                                                                                                              }
                                                                                                                                                                              }