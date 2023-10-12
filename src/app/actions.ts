"use server"

import { getCurrentUser } from "@/lib/current-user"
import db from "@/lib/db"
import type { JobPost } from "@prisma/client"
import { revalidatePath } from "next/cache"
import { redirect } from "next/navigation"

export async function deleteJobPost(jobId?: string) {
  const currentUser = await getCurrentUser()
  if (!currentUser) throw new Error("Unauthorized")

  const deleteJob = await db.review.delete({
    where: {
      id: jobId,
    },
  })

  revalidatePath("/admin/dashboard")

  return deleteJob
}

export async function saveJobPost(data: JobPost) {
  const currentUser = await getCurrentUser()
  if (!currentUser) throw new Error("Unauthorized")

  const createPost = await db.jobPost.create({
    data,
  })

  if (createPost) {
    await deleteJobPost(data.id)
  }

  redirect("/admin/dashboard")
}
