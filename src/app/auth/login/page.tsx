import AuthForm from "@/components/auth-form"
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card"
import * as React from "react"

const Login = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <Card className="w-[450px]">
        <CardHeader>
          <CardTitle className="text-2xl">
            Welcome to{" "}
            <span className="text-3xl font-extrabold underline decoration-primary decoration-double">
              Just work
            </span>
            !
          </CardTitle>
          <CardDescription>
            Enter your email and password to login.
          </CardDescription>
        </CardHeader>
        <AuthForm type="login" />
      </Card>
    </div>
  )
}

export default Login
