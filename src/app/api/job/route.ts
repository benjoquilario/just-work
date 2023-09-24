import { jobPostSchema } from "@/lib/validations/job"
import db from "@/lib/db"
import { NextResponse } from "next/server"

export async function POST(req: Request) {
  try {
    const body = await req.json()

    const {
      companyName,
      companySite,
      companyLogo,
      description,
      location,
      jobType,
      jobTitle,
      sendEmail,
      maximumSalary,
      minimumSalary,
      qualification,
      experience,
      schedule,
    } = jobPostSchema.parse(body)

    const createJobPost = await db.jobPost.create({
      data: {
        companyName,
        companySite,
        companyLogo,
        description,
        phoneNumber: "09063251198",
        employeesNumber: "10+",
        location,
        jobType,
        jobTitle,
        sendEmail,
        qualification,
        experience,
        schedule,
        maximumSalary,
        minimumSalary,
      },
    })

    return NextResponse.json(createJobPost)
  } catch (error) {
    console.log(error, "ERROR_MESSAGES")
    return new NextResponse("Error", { status: 500 })
  }
}

export async function GET() {
  const jobPost = await db.jobPost.findMany()
}
