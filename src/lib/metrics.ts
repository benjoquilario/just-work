"use server"
import db from "@/lib/db"

export async function getAllJobPosts() {
  return await db.jobPost.findMany()
}
