import { clerkClient } from "@clerk/nextjs/server";
import { headers } from "next/headers";

export async function getServerAuth(): Promise<{ userId: string | null }> {
  const headerList = await headers();
  const host =
    headerList.get("x-forwarded-host") ?? headerList.get("host") ?? "localhost";
  const proto = headerList.get("x-forwarded-proto") ?? "https";
  const request = new Request(`${proto}://${host}`, {
    headers: new Headers(headerList),
  });

  const client = await clerkClient();
  const requestState = await client.authenticateRequest(request);

  if (!requestState.isSignedIn) {
    return { userId: null };
  }

  return { userId: requestState.toAuth().userId };
}
