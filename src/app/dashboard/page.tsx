import { auth } from "@clerk/nextjs/server";
import { eq } from "drizzle-orm";
import { type Metadata } from "next";
import { redirect } from "next/navigation";
import ShowCamps from "~/components/show-camps";
import { db } from "~/server/db";
import { posts } from "~/server/db/schema";
export const metadata: Metadata = {
  title: "Dashboard",
  description: "Manage your camps",
};

export default async function Page() {
  const { userId } = await auth();

  if (!userId) {
    redirect("/sign-in");
  }

  const camps = await db.query.posts.findMany({
    where: eq(posts.userId, userId),
  });

  return <ShowCamps posts={camps} />;
}
