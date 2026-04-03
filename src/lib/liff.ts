'use client';

import liff from '@line/liff';

const LIFF_ID = process.env.NEXT_PUBLIC_LIFF_ID!;

let liffInitialized = false;

export async function initLiff(): Promise<void> {
  if (liffInitialized) return;

    await liff.init({ liffId: LIFF_ID });
      liffInitialized = true;
      }

      export function isLoggedIn(): boolean {
        return liff.isLoggedIn();
        }

        export function login(): void {
          liff.login();
          }

          export function logout(): void {
            liff.logout();
              window.location.reload();
              }

              export async function getProfile() {
                const profile = await liff.getProfile();
                  return {
                      userId: profile.userId,
                          displayName: profile.displayName,
                              pictureUrl: profile.pictureUrl || null,
                                };
                                }

                                export function getAccessToken(): string | null {
                                  return liff.getAccessToken();
                                  }

                                  export { liff };