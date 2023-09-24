import { registerValidator } from "@/lib/validations/credentials"
import db from "@/lib/db"
import bcrypt from "bcrypt"
import { NextResponse } from "next/server"

export async function POST(req: Request) {
  const body = await req.json()
  const { name, email, password } = registerValidator.parse(body)

  const isEmailExist = await db.user.findFirst({
    where: { email },
  })

  if (isEmailExist) throw new Error("User already exist")

  const hashedPassword = await bcrypt.hash(password, 12)

  const createUser = await db.user.create({
    data: {
      email,
      hashedPassword,
      name,
    },
  })

  return NextResponse.json(createUser)
}
