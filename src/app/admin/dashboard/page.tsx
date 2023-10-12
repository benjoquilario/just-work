import React from "react"
import db from "@/lib/db"
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import DataRowActions from "../../../components/table/data-row-actions"
import { JobPost } from "@/lib/validations/job"

async function getReviews() {
  return await db.review.findMany()
}

export default async function Dashboard() {
  const reviews = await getReviews()

  return (
    <div className="">
      <Table>
        <TableCaption>A list of recent job posterd.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>Company Name</TableHead>
            <TableHead>Job Title</TableHead>
            <TableHead>Email Address</TableHead>
            <TableHead>Location</TableHead>
            <TableHead>Company Site</TableHead>
            <TableHead></TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {reviews.map((review) => (
            <TableRow key={review.id}>
              <TableCell className="font-medium">
                {review.companyName}
              </TableCell>
              <TableCell>{review.jobTitle}</TableCell>
              <TableCell>{review.sendEmail}</TableCell>
              <TableCell>{review.location}</TableCell>
              <TableCell className="text-right">{review.companySite}</TableCell>
              <TableCell>
                <DataRowActions data={review} />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}
