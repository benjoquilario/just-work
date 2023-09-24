"use client"

import Container from "@/components/shared/container"
import { TypographyH2 } from "@/components/typography"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Separator } from "@/components/ui/seperator"
import { Checkbox } from "@/components/ui/checkbox"
import { Editor } from "@/components/editor"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { jobPostSchema } from "@/lib/validations/job"
import type { JobPost } from "@/lib/validations/job"
import React, { useState } from "react"

const JobPost = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<JobPost>({
    resolver: zodResolver(jobPostSchema),
  })
  const [checkSalary, setCheckSalary] = useState<boolean>(false)

  async function handleOnSubmit(data: JobPost) {
    const res = await fetch("/api/job", {})
  }

  return (
    <Card>
      <CardHeader>
        <TypographyH2>Post a Job</TypographyH2>
        <p className="text-xs">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloribus,
          libero magnam illo ratione voluptatem repellat alias dolor unde? Quas
          deserunt, possimus necessitatibus blanditiis quae voluptate laboriosam
          voluptatem reprehenderit explicabo reiciendis.
        </p>
      </CardHeader>
      <CardContent>
        <form>
          <div className="grid gap-3.5">
            <div className="grid gap-2">
              <Label htmlFor="companyName">
                Company Name <span className="text-destructive">*</span>
              </Label>
              <Input {...register("companyName")} id="companyName" />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="companyLogo">
                Company Logo <span className="text-destructive">*</span>
              </Label>
              <Input
                type="file"
                id="companyLogo"
                {...register("companyLogo")}
              />
            </div>
            <div className="flex w-full flex-col items-center gap-3.5 md:flex-row">
              <div className="grid w-full gap-2">
                <Label htmlFor="jobtitle">
                  Job Title
                  <span className="text-destructive">*</span>
                </Label>
                <Input
                  {...register("jobTitle")}
                  id="jobtitle"
                  placeholder="Front-end Developer"
                />
              </div>
              <div className="grid w-full gap-2">
                <Label htmlFor="employeesNumber">
                  Number of people to hire for this job
                  <span className="text-destructive">*</span>
                </Label>
                <Select>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select an option" />
                  </SelectTrigger>
                  <SelectContent
                    {...register("employeesNumber")}
                    id="employeesNumber"
                  >
                    <SelectGroup>
                      <SelectLabel>Select an option</SelectLabel>
                      {["1", "2", "3", "4", "5", "5+", "10+"].map((number) => (
                        <SelectItem key={number} value={number}>
                          {number}
                        </SelectItem>
                      ))}
                      <SelectItem value="I have an ongoing need to fill this role">
                        I have an ongoing need to fill this role
                      </SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div>
            </div>
            <Separator className="my-4" />
            <div className="grid gap-2">
              <Label htmlFor="location">
                Where would you like to advertise this job?
                <span className="text-destructive">*</span>
              </Label>
              <p className="text-muted-foregroun/80 text-xs">
                Enter your location <span className="text-destructive">*</span>
              </p>
              <Input {...register("location")} id="location" />
            </div>
            <Separator className="my-4" />

            <div className="grid gap-2">
              <Label htmlFor="companySite">Company Website</Label>
              <Input
                {...register("companySite")}
                id="companySite"
                placeholder="name@company.com"
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="sendEmail">Email Address</Label>
              <Input
                {...register("sendEmail")}
                id="sendEmail"
                type="email"
                placeholder="m@example.com"
              />
            </div>
            <div className="grid w-full gap-2">
              <Label htmlFor="numberOfPeople">
                Experience
                <span className="text-destructive">*</span>
              </Label>
              <Select>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select an experience" />
                </SelectTrigger>
                <SelectContent {...register("experience")} id="experience">
                  <SelectGroup>
                    <SelectLabel>Select an experience</SelectLabel>
                    {["1", "2+", "5+", "10+"].map((experience) => (
                      <SelectItem key={experience} value={experience}>
                        {experience} years of experience
                      </SelectItem>
                    ))}
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
            <div className="grid w-full gap-2">
              <Label htmlFor="phoneNumber">Your Phone Number</Label>
              <Input
                id="phoneNumber"
                {...register("phoneNumber")}
                type="number"
              />
            </div>
            <Separator className="my-4" />
            <div className="flex items-center space-x-2">
              <Checkbox
                checked={checkSalary}
                onClick={() => setCheckSalary((checkSalary) => !checkSalary)}
                id="salary"
              />
              <Label
                htmlFor="salary"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                I want to add a salary indication for this job
              </Label>
            </div>
            {checkSalary && (
              <div className="flex flex-col items-center gap-3.5 md:flex-row">
                <div className="grid w-full gap-2">
                  <Label htmlFor="salary">
                    Minimum Salary <span className="text-destructive">*</span>
                  </Label>
                  <Input
                    {...register("minimumSalary")}
                    type="number"
                    id="minumun"
                    placeholder="₱"
                  />
                </div>
                <div className="grid w-full gap-2">
                  <Label htmlFor="salary">
                    Maximum Salary <span className="text-destructive">*</span>
                  </Label>
                  <Input type="number" id="maximum" placeholder="₱" />
                </div>
              </div>
            )}
            <div className="flex flex-col items-center gap-3.5 md:flex-row">
              <div className="grid w-full gap-2">
                <Label htmlFor="workArrangement">
                  Work Arrangements
                  <span className="text-destructive">*</span>
                </Label>
                <Select>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select work arrangement" />
                  </SelectTrigger>
                  <SelectContent id="workArrangement">
                    <SelectGroup>
                      <SelectLabel>Select work arrangement</SelectLabel>
                      <SelectItem value="onsite">OnSite</SelectItem>
                      <SelectItem value="workfromhome">
                        Work From Home
                      </SelectItem>
                      <SelectItem value="hybrid">Hybrid</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div>
              <div className="grid w-full gap-2">
                <Label htmlFor="shift">
                  Shift
                  <span className="text-destructive">*</span>
                </Label>
                <Select>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select Shift" />
                  </SelectTrigger>
                  <SelectContent id="shift">
                    <SelectGroup>
                      <SelectLabel>Select Shift</SelectLabel>
                      <SelectItem value="day">Day Shift</SelectItem>
                      <SelectItem value="mid">Mid Shift</SelectItem>
                      <SelectItem value="night">Night Shift</SelectItem>
                      <SelectItem value="flexible">Flexible</SelectItem>
                      <SelectItem value="rotating">Rotating</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div>
            </div>
            <div className="grid w-full gap-2">
              <Label htmlFor="description">
                Description <span className="text-destructive">*</span>
              </Label>
              <Editor />
            </div>
          </div>
          <Button type="submit">Submit</Button>
        </form>
      </CardContent>
      <CardFooter>
        <p className="text-xs text-muted-foreground/80">
          Please mention “I found this job at just work!” in your application,
          to bring more jobs to justwork.com
        </p>
      </CardFooter>
    </Card>
  )
}

export default JobPost
