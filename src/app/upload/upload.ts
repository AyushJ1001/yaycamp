"use server";

import { db } from "~/server/db";
import { type FormSchema } from "./page";
import { posts } from "~/server/db/schema";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

export async function uploadPost(formInput: FormSchema) {
  const user = await auth();

  const userId = user.userId;
  if (!userId) {
    redirect("/sign-in");
  }

  const newPost: typeof posts.$inferInsert = {
    title: formInput.title,
    description: formInput.description,
    date: formInput.date.toLocaleString(),
    latitude: formInput.coordinates.latitude.toString(),
    longitude: formInput.coordinates.longitude.toString(),
    userId,
  };

  console.log(newPost);

  await db.insert(posts).values(newPost);
}
