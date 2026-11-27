import { auth } from "@clerk/nextjs/server";

/**
 * Returns the signed-in user's id, or null when the visitor is signed out.
 *
 * Clerk's middleware (src/middleware.ts, Node.js runtime) handles the
 * session-refresh handshake before the request reaches a page, so a signed-in
 * user whose short-lived session token expired is refreshed instead of being
 * treated as signed out.
 */
export async function getServerAuth(): Promise<{ userId: string | null }> {
  const { userId } = await auth();
  return { userId };
}
