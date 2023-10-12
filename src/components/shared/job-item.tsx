"use client"

import Link from "next/link"
import Image from "next/image"
import * as React from "react"
import { Badge } from "../ui/badge"
import { Card, CardContent, CardFooter, CardHeader } from "../ui/card"
import { JobPost } from "@prisma/client"

type JobItemProps = {
  jobPost?: JobPost
}

const JobItem = ({ jobPost }: JobItemProps) => {
  return (
    <li>
      <Link
        href={`/view/${jobPost?.id}`}
        className="group rounded-xl focus-visible:ring-1 focus-visible:ring-ring"
      >
        <Card>
          <CardContent className="pt-3">
            <div className="flex flex-col gap-3.5">
              <div className="flex justify-between gap-2.5">
                <div className="flex items-center gap-3.5 max-[575px]:flex-col max-[575px]:items-start">
                  <div className="relative flex h-14 w-14 items-center">
                    <Image
                      src={jobPost?.companyLogo ?? ""}
                      fill
                      alt={jobPost?.companyName ?? ""}
                    />
                  </div>
                  <div className="flex flex-col">
                    <div className="flex gap-3.5">
                      <span className="font-semibold group-hover:underline">
                        {jobPost?.jobTitle}
                      </span>
                      <Badge variant="secondary">New</Badge>
                    </div>
                    <div>
                      <span className="text-sm">{jobPost?.companyName}</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-wrap gap-1.5 capitalize">
                <Badge>{jobPost?.location}</Badge>
                <Badge>{jobPost?.jobType} Shift</Badge>
                <Badge>{jobPost?.experience} Experience</Badge>
                <Badge>{jobPost?.schedule}</Badge>
                {jobPost?.minimumSalary && jobPost?.maximumSalary ? (
                  <Badge>
                    ₱{jobPost?.minimumSalary} - ₱{jobPost?.maximumSalary}
                  </Badge>
                ) : null}
              </div>
            </div>
          </CardContent>
          <CardFooter>
            <span className="text-xs text-muted-foreground/80">
              Post a while ago
            </span>
          </CardFooter>
        </Card>
      </Link>
    </li>
  )
}

export default JobItem
