import { jobPostSchema } from "@/lib/validations/job"
import db from "@/lib/db"
import { NextResponse } from "next/server"

export async function POST(req: Request) {
  try {
    const body = await req.json()

    const {
      companyName,
      companySite,
      description,
      location,
      jobType,
      jobTitle,
      companyLogo,
      sendEmail,
      maximumSalary,
      minimumSalary,
      experience,
      schedule,
      employeesNumber,
    } = jobPostSchema.parse(body)

    if (!companyLogo) throw new Error("Company Logo is required")

    const createJobPost = await db.review.create({
      data: {
        companyName,
        companySite,
        companyLogo,
        description,
        employeesNumber,
        location,
        jobType,
        jobTitle,
        sendEmail,
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
