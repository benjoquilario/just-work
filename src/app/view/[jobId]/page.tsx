import Link from "next/link"
import { ArrowLeftIcon } from "@radix-ui/react-icons"
// import { buttonVariants } from "@/components/ui/button"
import JobItem from "@/components/shared/job-item"
import db from "@/lib/db"
import { notFound } from "next/navigation"
import React from "react"

async function getJobPostFromJobId(jobId: string) {
  "use server"

  return await db.jobPost.findUnique({
    where: {
      id: jobId,
    },
  })
}

export default async function ViewJobPost({
  params,
}: {
  params: { jobId: string }
}) {
  const jobId = params.jobId

  const jobPost = await getJobPostFromJobId(jobId)

  if (!jobId && !jobPost) notFound()

  return (
    <div className="flex flex-col gap-3.5">
      <div className="flex items-center">
        <div>
          <Link href="/" aria-label="back home">
            <ArrowLeftIcon className="h-4 w-4" />
            <span className="ml-2 text-xs">Back</span>
          </Link>
        </div>
      </div>
      <div className="flex flex-col gap-3.5">
        <ul>{jobPost ? <JobItem jobPost={jobPost} /> : null}</ul>
        <div className="">
          <div className="bg-primary p-1 text-accent">
            <span className="ml-2 text-sm">Job Description</span>
          </div>
          <div
            className="description border border-input px-2 py-3 text-sm"
            dangerouslySetInnerHTML={{ __html: jobPost?.description as string }}
          />
        </div>
        <div className="flex flex-col">
          {jobPost?.howToApply ? (
            <>
              <div className="bg-primary p-1 text-accent">
                <span className="ml-2 text-sm">How to Apply</span>
              </div>
              <div className="border border-input px-2 py-3 text-sm">
                <p>
                  Kindly send your updated resume to benjoquilario@gmail.com
                </p>
              </div>
            </>
          ) : (
            <Link
              href={jobPost?.companySite ?? ""}
              className="inline-flex h-9 items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
            >
              Apply for this Job
            </Link>
          )}
        </div>
      </div>
    </div>
  )
}
