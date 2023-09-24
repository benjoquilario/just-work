import AuthForm from "@/components/auth-form"
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import React from "react"

const Register = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <Card className="w-full md:w-[450px]">
        <CardHeader>
          <CardTitle className="text-2xl">Create an account!</CardTitle>
          <CardDescription>
            Enter your email below to create your account.
          </CardDescription>
        </CardHeader>
        <AuthForm type="register" />
      </Card>
    </div>
  )
}

export default Register
