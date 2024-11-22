import { db } from "~/server/db";
import { type Metadata } from "next";
import ShowCamps from "~/components/show-camps";

export const metadata: Metadata = {
  title: "Camps",
  description: "Find your next camp",
};

export default async function Page() {
  const posts = await db.query.posts.findMany();

  return <ShowCamps posts={posts} />;
}
