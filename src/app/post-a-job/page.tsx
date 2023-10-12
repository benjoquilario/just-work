"use client"

import { TypographyH2, TypographyH4 } from "@/components/typography"
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
import { toast } from "@/components/ui/use-toast"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { jobPostSchema } from "@/lib/validations/job"
import type { JobPost } from "@/lib/validations/job"
import React, { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { uploadPicture } from "@/lib/cloudinary"

const JobPost = () => {
  const router = useRouter()
  const [isApplyOpen, setIsApplyOpen] = useState(false)

  const form = useForm<JobPost>({
    resolver: zodResolver(jobPostSchema),
  })
  const [checkSalary, setCheckSalary] = useState<boolean>(false)

  const { isSubmitSuccessful, isSubmitting } = form.formState

  useEffect(() => {
    if (isSubmitSuccessful) {
      form.reset()
    }
  }, [isSubmitSuccessful, form])

  async function handleOnSubmit(data: JobPost) {
    const imageUrl = await uploadPicture(data.companyLogo as File)

    if (imageUrl) {
      const response = await fetch("/api/review", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          companyName: data.companyName,
          companySite: data.companySite,
          location: data.location,
          companyLogo: imageUrl,
          jobTitle: data.jobTitle,
          employeesNumber: data.employeesNumber,
          sendEmail: data.sendEmail,
          experience: data.experience,
          minumumSalary: data.minimumSalary,
          maximumSalaray: data.maximumSalary,
          schedule: data.schedule,
          jobType: data.jobType,
          description: data.description,
          howToApply: data.howToApply,
        }),
      })

      if (!response?.ok) {
        return toast({
          title: "Something went wrong.",
          description: "Your post was not saved. Please try again.",
          variant: "destructive",
        })
      }

      return toast({
        title: "Form submitted. We will review it and post it after review.",
      })
    } else {
      return toast({
        title: "Company Logo is required",
        variant: "destructive",
      })
    }
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
        <Form {...form}>
          <form onSubmit={form.handleSubmit(handleOnSubmit)}>
            <div className="flex flex-col gap-3.5">
              <FormField
                control={form.control}
                name="companyName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>
                      Company Name <span className="text-destructive">*</span>
                    </FormLabel>
                    <FormControl>
                      <Input disabled={isSubmitting} {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="companyLogo"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>
                      Company Logo <span className="text-destructive">*</span>
                    </FormLabel>
                    <FormControl>
                      <Input
                        accept=".jpg, .jpeg, .png, .svg, .webp"
                        type="file"
                        onChange={(e) =>
                          field.onChange(
                            e.target.files ? e.target.files[0] : null
                          )
                        }
                        disabled={isSubmitting}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <div className="flex w-full flex-col items-center gap-3.5 md:flex-row">
                <FormField
                  control={form.control}
                  name="jobTitle"
                  render={({ field }) => (
                    <FormItem className="w-full">
                      <FormLabel>
                        Job Title <span className="text-destructive">*</span>
                      </FormLabel>
                      <FormControl>
                        <Input
                          disabled={isSubmitting}
                          placeholder="Front-end Developer"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="employeesNumber"
                  render={({ field }) => (
                    <FormItem className="w-full">
                      <FormLabel>
                        Number of people to hire for this job{" "}
                        <span className="text-destructive">*</span>
                      </FormLabel>
                      <Select
                        disabled={isSubmitting}
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      >
                        <FormControl>
                          <SelectTrigger
                            disabled={isSubmitting}
                            className="w-full"
                          >
                            <SelectValue placeholder="Select an option" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectGroup>
                            <SelectLabel>Select an option</SelectLabel>
                            {["1", "2", "3", "4", "5", "5+", "10+"].map(
                              (number) => (
                                <SelectItem key={number} value={number}>
                                  {number}
                                </SelectItem>
                              )
                            )}
                            <SelectItem value="I have an ongoing need to fill this role">
                              I have an ongoing need to fill this role
                            </SelectItem>
                          </SelectGroup>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <Separator className="my-4" />
              <FormField
                control={form.control}
                name="location"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>
                      Where would you like to advertise this job?
                      <span className="text-destructive">*</span>
                    </FormLabel>
                    <FormDescription>
                      Enter your location
                      <span className="text-destructive">*</span>
                    </FormDescription>
                    <FormControl>
                      <Input
                        disabled={isSubmitting}
                        placeholder="Quezon City, Philippines"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Separator className="my-4" />

              <FormField
                control={form.control}
                name="sendEmail"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email Address</FormLabel>
                    <FormControl>
                      <Input
                        disabled={isSubmitting}
                        placeholder="name@company.com"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="experience"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>
                      Experience
                      <span className="text-destructive">*</span>
                    </FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger className="w-full">
                          <SelectValue placeholder="Select an experience" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectGroup>
                          <SelectLabel>Select an experience</SelectLabel>
                          <SelectItem value="no">No Experience</SelectItem>
                          {["1", "2+", "5+", "10+"].map((experience) => (
                            <SelectItem key={experience} value={experience}>
                              {experience} years of experience
                            </SelectItem>
                          ))}
                        </SelectGroup>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <Separator className="my-4" />
              <div className="flex items-center space-x-2">
                <Checkbox
                  checked={checkSalary}
                  onClick={() => setCheckSalary((checkSalary) => !checkSalary)}
                  id="salary"
                />
                <Label
                  htmlFor="salary"
                  className="cursor-pointer text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  I want to add a salary indication for this job
                </Label>
              </div>

              {checkSalary && (
                <div className="flex flex-col items-center gap-3.5 md:flex-row">
                  <FormField
                    control={form.control}
                    name="minimumSalary"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Minimum Salary</FormLabel>
                        <FormControl>
                          <Input
                            disabled={isSubmitting}
                            type="number"
                            {...field}
                            placeholder="₱"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="maximumSalary"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Maximum Salary</FormLabel>
                        <FormControl>
                          <Input
                            disabled={isSubmitting}
                            type="number"
                            {...field}
                            placeholder="₱"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
              )}
              <FormField
                control={form.control}
                name="schedule"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>
                      Work Arrangement
                      <span className="text-destructive">*</span>
                    </FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger className="w-full">
                          <SelectValue placeholder="Select work arrangement" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectGroup>
                          <SelectLabel>Select work arrangement</SelectLabel>
                          <SelectItem value="onsite">OnSite</SelectItem>
                          <SelectItem value="work from home">
                            Work From Home
                          </SelectItem>
                          <SelectItem value="hybrid">Hybrid</SelectItem>
                        </SelectGroup>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="jobType"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>
                      Job Type
                      <span className="text-destructive">*</span>
                    </FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger className="w-full">
                          <SelectValue placeholder="Select Shift" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
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
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="description"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Description</FormLabel>
                    <FormControl>
                      <Editor {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <div className="flex items-center space-x-2">
                <Checkbox
                  checked={isApplyOpen}
                  onClick={() => setIsApplyOpen((isApplyOpen) => !isApplyOpen)}
                  id="apply"
                />
                <Label
                  htmlFor="apply"
                  className="cursor-pointer text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Use my Career Website(A Valid Url)
                </Label>
              </div>
              <div className="flex flex-col">
                {!isApplyOpen ? (
                  <>
                    <TypographyH4>How to Apply</TypographyH4>
                    <FormField
                      control={form.control}
                      name="howToApply"
                      render={({ field }) => (
                        <FormItem>
                          <FormControl>
                            <Editor {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </>
                ) : (
                  <FormField
                    control={form.control}
                    name="companySite"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Company Website</FormLabel>
                        <FormControl>
                          <Input
                            disabled={isSubmitting}
                            placeholder="https://company.com"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                )}
              </div>

              <Button disabled={isSubmitting} className="mt-3" type="submit">
                Post Job Now - Start Hiring
              </Button>
            </div>
          </form>
        </Form>
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
