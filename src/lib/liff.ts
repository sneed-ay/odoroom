'use client';

import liff from '@line/liff';

const LIFF_ID = process.env.NEXT_PUBLIC_LIFF_ID!;

let liffInitialized = false;

export async function initLiff(): Promise<void> {
  if (liffInitialized) return;

  try {
    await liff.init({ liffId: LIFF_ID });
    liffInitialized = true;
  } catch (error) {
    console.error('LIFF init failed:', error);
    throw error;
  }
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
  return await liff.getProfile();
}

export function getAccessToken(): string | null {
  return liff.getAccessToken();
}

export function isInClient(): boolean {
  return liff.isInClient();
}
