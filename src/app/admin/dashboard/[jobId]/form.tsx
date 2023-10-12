"use client"

import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import type { JobPost } from "@prisma/client"
import Image from "next/image"
import React from "react"
import { Editor } from "@/components/editor"
import { saveJobPost } from "@/app/actions"
import { Button } from "@/components/ui/button"
import { useRouter } from "next/navigation"
import { toast } from "@/components/ui/use-toast"
import { TypographyH4 } from "@/components/typography"

type JobFormProps = {
  data: JobPost
}

const JobForm = ({ data }: JobFormProps) => {
  const router = useRouter()
  async function handleOnSubmit() {
    await saveJobPost(data)

    router.push("/admin/dashboard")

    return toast({
      title: "Form submitted. We will review it and post it after review.",
    })
  }

  return (
    <div className="mt-5">
      <form onSubmit={handleOnSubmit}>
        <div className="flex flex-col gap-3.5">
          <div className="grid w-full max-w-sm items-center gap-1.5">
            <Label htmlFor={data.companyName}>Company Name</Label>
            <Input value={data.companyName} disabled />
          </div>
          <div className="flex flex-col">
            <div className="relative flex h-14 w-14 items-center">
              <Image src={data.companyLogo} fill alt={data.companyName} />
            </div>
            <Input
              className="sr-only"
              type="text"
              disabled
              value={data.companyLogo}
            />
          </div>
          <div className="flex">
            <div className="grid w-full max-w-sm items-center gap-1.5">
              <Label htmlFor="job title">Job Title</Label>
              <Input placeholder="Job Title" value={data.jobTitle} disabled />
            </div>
            <div className="grid w-full max-w-sm items-center gap-1.5">
              <Label htmlFor="employees number">
                Number of people to hire for this job
              </Label>
              <Input value={data.employeesNumber ?? ""} disabled />
            </div>
          </div>

          <div className="grid w-full max-w-sm items-center gap-1.5">
            <Label htmlFor="location">Location</Label>
            <Input value={data.location ?? ""} disabled />
          </div>
          <div className="grid w-full max-w-sm items-center gap-1.5">
            <Label htmlFor="company website">Company Website</Label>
            <Input value={data.companySite ?? ""} disabled />
          </div>
          <div className="grid w-full max-w-sm items-center gap-1.5">
            <Label htmlFor="Send Email">Email Address</Label>
            <Input value={data.sendEmail ?? ""} disabled />
          </div>
          <div className="grid w-full max-w-sm items-center gap-1.5">
            <Label htmlFor="Experience">Experienct</Label>
            <Input value={data.experience ?? ""} disabled />
          </div>

          <div>
            <div>Salary</div>
            <div className="flex ">
              <div className="grid w-full max-w-sm items-center gap-1.5">
                <Label id="minimum salary">Minimum Salary</Label>
                <Input value={data.minimumSalary ?? "0"} disabled />
              </div>
              <div className="grid w-full max-w-sm items-center gap-1.5">
                <Label id="maximum salary">Maximum Salary</Label>
                <Input value={data.maximumSalary ?? "0"} disabled />
              </div>
            </div>
          </div>
          <div className="grid w-full max-w-sm items-center gap-1.5">
            <Label id="Work Arrangement">Work Arrangement</Label>
            <Input value={data.schedule ?? ""} disabled />
          </div>
          <div className="grid w-full max-w-sm items-center gap-1.5">
            <Label id="Job Type">Job Type</Label>
            <Input value={data.jobType} disabled />
          </div>
          <div className="grid w-full max-w-sm items-center gap-1.5">
            <Editor value={data.description} />
          </div>
          <TypographyH4>How to Apply</TypographyH4>
          <div className="grid w-full max-w-sm items-center gap-1.5">
            <Editor value={data.howToApply ?? ''} />
          </div>
        </div>

        <Button type="submit">Save to database</Button>
      </form>
    </div>
  )
}

export default JobForm
