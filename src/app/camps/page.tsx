import { db } from "~/server/db";

export default async function Page() {
  const posts = await db.query.posts.findMany();

  if (posts.length === 0) {
    return <div>No camps found</div>;
  }

  return posts.map((post) => <div key={post.id}>{post.title}</div>);
}
