import { redirect } from "next/navigation";
import { getServerAuth } from "~/server/auth";

export default async function UploadLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const { userId } = await getServerAuth();

  if (!userId) {
    redirect("/sign-in");
  }

  return children;
}
