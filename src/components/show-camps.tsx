import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import Link from "next/link";

type Post = {
  date: string;
  id: number;
  userId: string;
  title: string;
  description: string;
  latitude: string;
  longitude: string;
  createdAt: Date;
  updatedAt: Date | null;
};

export default function ShowCamps({ posts }: { posts: Post[] }) {
  if (posts.length === 0)
    return (
      <Card className="mx-auto mt-20 max-w-md p-4">
        <CardContent className="text-center text-lg font-semibold">
          No posts!
        </CardContent>
      </Card>
    );

  return (
    <Card className="mx-auto max-h-[80vh] overflow-y-auto p-4">
      <CardHeader>
        <CardTitle>Camping Spots</CardTitle>
      </CardHeader>
      <CardContent>
        <div
          className={`grid place-items-center gap-6 ${
            posts.length >= 3
              ? "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
              : "grid-cols-1 sm:grid-cols-2"
          }`}
        >
          {posts.map((post) => (
            <Link
              href={`/camp/${post.id}`}
              key={post.id}
              className="w-full transition-transform hover:scale-105"
            >
              <Card className="h-full w-full cursor-pointer">
                <CardHeader className="p-4">
                  <CardTitle className="text-xl font-bold">
                    {post.title}
                  </CardTitle>
                  <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
                    {new Date(post.date).toLocaleDateString(undefined, {
                      weekday: "long",
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </p>
                </CardHeader>
              </Card>
            </Link>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
