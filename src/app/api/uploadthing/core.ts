import { createUploadthing, type FileRouter } from "uploadthing/next"
import { getCurrentUser } from "@/lib/current-user"

const f = createUploadthing()

async function handleAuth() {
  const currentUser = await getCurrentUser()

  if (!currentUser) throw new Error("Unauthorized")

  return { userId: currentUser.id }
}

export const ourFileRouter = {
  logoUploader: f({ image: { maxFileSize: "4MB", maxFileCount: 1 } })
    .middleware(() => handleAuth())
    .onUploadComplete(() => {}),
} satisfies FileRouter

export type OurFileRouter = typeof ourFileRouter
