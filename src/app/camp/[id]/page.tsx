import { db } from "~/server/db";
import { posts } from "~/server/db/schema";
import { eq } from "drizzle-orm";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "~/components/ui/card";
import ShowMap from "~/app/camps/showMap";

export const generateMetadata = async ({
  params,
}: {
  params: Promise<{ id: string }>;
}) => {
  const id = (await params).id;

  const post = await db.query.posts.findFirst({
    where: eq(posts.id, Number(id)),
  });

  return { title: post?.title };
};

export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const id = (await params).id;

  const post = await db.query.posts.findFirst({
    where: eq(posts.id, Number(id)),
  });

  return (
    <Card className="mx-auto max-h-[80vh] overflow-y-auto p-4">
      <CardHeader className="p-4">
        <CardTitle className="text-2xl font-bold">{post?.title}</CardTitle>
        <CardDescription className="mt-2">{post?.description}</CardDescription>
      </CardHeader>
      <CardContent className="p-4">
        <ShowMap
          latitude={post?.latitude ?? ""}
          longitude={post?.longitude ?? ""}
        />
      </CardContent>
      <CardFooter className="p-4">
        <p className="text-sm text-muted-foreground">{post?.date}</p>
      </CardFooter>
    </Card>
  );
}
