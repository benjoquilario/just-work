import JobItem from "@/components/shared/job-item"
import { Input } from "@/components/ui/input"
import Container from "@/components/shared/container"
import * as React from "react"

export default function Home() {
  return (
    <Container className="px-3">
      <div className="mb-5">
        <Input placeholder="Search Positon Title, Company, Location and more" />
      </div>
      <ul className="grid grid-cols-1 gap-3.5 md:grid-cols-2">
        <JobItem />
        <JobItem />
        <JobItem />
      </ul>
    </Container>
  )
}
