import { auth } from "@clerk/nextjs/server";
import { type Metadata } from "next";
import { redirect } from "next/navigation";
import ShowCamps from "~/components/show-camps";
import { db } from "~/server/db";

export const metadata: Metadata = {
  title: "Dashboard",
  description: "Manage your camps",
};

export default async function Page() {
  const { userId } = await auth();

  if (!userId) {
    redirect("/sign-in");
  }

  const camps = await db.post.findMany({
    where: {
      userId,
    },
  });

  return <ShowCamps posts={camps} />;
}
