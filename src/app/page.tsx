import JobItem from "@/components/shared/job-item"
import { Input } from "@/components/ui/input"
import Container from "@/components/shared/container"
import * as React from "react"
import Layout from "@/components/layout"
import db from "@/lib/db"

async function getAllJobPosts() {
  return await db.jobPost.findMany()
}

export default async function Home() {
  const jobPosts = await getAllJobPosts()

  if (!jobPosts) return <div>Nothing to show here...</div>

  return (
    <Layout>
      <Container className="px-3">
        <div className="mb-5">
          <Input placeholder="Search Positon Title, Company, Location and more" />
        </div>
        <ul className="grid grid-cols-1 gap-3.5 md:grid-cols-2">
          {jobPosts ? (
            jobPosts.map((jobPost) => (
              <JobItem jobPost={jobPost} key={jobPost.id} />
            ))
          ) : (
            <div>Loading...</div>
          )}
        </ul>
      </Container>
    </Layout>
  )
}
