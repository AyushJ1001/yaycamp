"use server";

import { db } from "~/server/db";
import { type FormSchema } from "./page";
import { getServerAuth } from "~/server/auth";
import { redirect } from "next/navigation";
import { Decimal } from "@prisma/client/runtime/library";

export async function uploadPost(formInput: FormSchema) {
  const { userId } = await getServerAuth();
  if (!userId) {
    redirect("/sign-in");
  }

  await db.post.create({
    data: {
      title: formInput.title,
      description: formInput.description,
      date: new Date(formInput.date),
      latitude: new Decimal(formInput.coordinates.latitude),
      longitude: new Decimal(formInput.coordinates.longitude),
      userId,
    },
  });
}
