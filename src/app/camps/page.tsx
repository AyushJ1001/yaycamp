import { db } from "~/server/db";
import { type Metadata } from "next";
import ShowCamps from "~/components/show-camps";
import { posts as dbPosts } from "~/server/db/schema";

export const metadata: Metadata = {
  title: "Camps",
  description: "Find your next camp",
};

export default async function Page() {
  const posts = await db.select().from(dbPosts);

  return <ShowCamps posts={posts} />;
}
