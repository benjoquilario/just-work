import { jobPostSchema } from "@/lib/validations/job"
import db from "@/lib/db"
import { NextResponse } from "next/server"
import { getServerSession } from "next-auth/next"
import { authOptions } from "@/lib/auth"

export async function POST(req: Request) {
  try {
    const session = await getServerSession(authOptions)
    const body = await req.json()

    if (!session) {
      return new Response("Unauthorized", { status: 403 })
    }

    const { user } = session

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
      phoneNumber,
      employeesNumber,
    } = jobPostSchema.parse(body)

    if (!user?.email) return null

    const currentUser = await db.user.findUnique({
      where: { email: user.email },
    })

    if (!currentUser) return null

    const createJobPost = await db.jobPost.create({
      data: {
        companyName,
        companySite,
        companyLogo,
        description,
        phoneNumber,
        employeesNumber,
        location,
        jobType,
        jobTitle,
        sendEmail,
        experience,
        schedule,
        maximumSalary,
        minimumSalary,
        userId: currentUser.id,
      },
      include: {
        user: true,
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
