import { clerkMiddleware } from "@clerk/nextjs/server";

// Runs on the Node.js runtime (not Edge). Clerk needs a layer that can send
// response headers so it can finish its session-refresh handshake and update
// the short-lived __session cookie. Route protection stays in the server
// helpers (see ~/server/auth.ts), so this only keeps the session fresh.
export default clerkMiddleware();

export const config = {
  runtime: "nodejs",
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    "/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)",
    // Always run for API routes
    "/(api|trpc)(.*)",
  ],
};
