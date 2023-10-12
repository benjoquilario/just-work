import React from "react"
import db from "@/lib/db"
import { notFound } from "next/navigation"
import JobForm from "./form"

async function getReviewPostFromJobId(jobId: string) {
  return await db.review.findUnique({
    where: {
      id: jobId,
    },
  })
}

export default async function JobId({ params }: { params: { jobId: string } }) {
  const jobId = params.jobId

  const jobPost = await getReviewPostFromJobId(jobId)

  if (!jobPost) return notFound()

  return (
    <div>
      <h1>Review Job Post</h1>
      <JobForm data={jobPost} />
    </div>
  )
}
