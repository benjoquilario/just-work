"use client"
import { FiGithub } from "react-icons/fi"
import { AiOutlineGoogle } from "react-icons/ai"
import { useForm } from "react-hook-form"
import { signIn, useSession } from "next-auth/react"
import { useRouter } from "next/navigation"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import Link from "next/link"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { userAuthSchema } from "@/lib/validations/auth"
import React, { useCallback, useState } from "react"
import { CardContent, CardFooter } from "@/components/ui/card"

interface AuthFormProps {
  type: "login" | "register"
}

type Inputs = z.infer<typeof userAuthSchema>

export default function AuthForm({ type }: AuthFormProps) {
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>({
    resolver: zodResolver(userAuthSchema),
  })

  async function handleOnSubmit(data: Inputs) {
    if (type === "register") {
      const res = await fetch("/api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: data.name,
          email: data.email,
          password: data.password,
        }),
      })
      setIsLoading(true)

      if (res.ok) return setTimeout(() => router.push("/auth/login"), 2000)

      if (!res.ok) return console.log("Something went wrong!")
    } else {
      const res = await signIn("credentials", { ...data, redirect: false })

      if (res?.ok) {
        router.refresh()

        router.push("/")
      }

      if (!res?.ok) {
        setIsLoading(false)

        console.log("Login Failed")
      }
    }
  }

  return (
    <React.Fragment>
      <CardContent className="grid w-full gap-4">
        <div className="flex w-full flex-col items-center gap-3">
          <Button variant="outline" className="w-full">
            <AiOutlineGoogle aria-hidden="true" className="mr-2 h-4 w-4" />
            Google
          </Button>
          <Button variant="outline" className="w-full">
            <FiGithub aria-hidden="true" className="mr-2 h-4 w-4" />
            Github
          </Button>
        </div>
        <div className="relative">
          <div className="absolute inset-0 flex items-center">
            <span className="w-full border-t" />
          </div>
          <div className="relative flex justify-center text-xs uppercase">
            <span className="bg-background px-2 text-muted-foreground">
              Or continue with
            </span>
          </div>
        </div>
        <form className="grid gap-4" onSubmit={handleSubmit(handleOnSubmit)}>
          {type === "register" && (
            <div className="grid gap-2">
              <Label htmlFor="name">Name</Label>
              <Input
                {...register("name")}
                type="text"
                id="name"
                autoCapitalize="none"
                autoCorrect="off"
                disabled={isLoading}
              />
            </div>
          )}
          <div className="grid gap-2">
            <Label htmlFor="email">Email</Label>
            <Input
              {...register("email", { required: true })}
              id="email"
              placeholder="m@example.com"
              autoCapitalize="none"
              autoComplete="email"
              autoCorrect="off"
              type="email"
              disabled={isLoading}
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="password">Password</Label>
            <Input
              {...register("password", { required: true })}
              type="password"
              id="password"
              autoCapitalize="none"
              autoCorrect="off"
              disabled={isLoading}
            />
          </div>
          <Button className="w-full" disabled={isLoading} type="submit">
            {type === "login" ? "Sign In" : "Create an account"}
          </Button>
        </form>
      </CardContent>
      <CardFooter className="grid gap-1.5">
        <div className="mt-2 text-left text-sm">
          <span className="text-muted-foreground">
            {type === "login"
              ? `Don't have an account?`
              : "Already have an account?"}
          </span>
          <Link
            href={type === "login" ? "/auth/register" : "/auth/login"}
            className="ml-1 text-muted-foreground underline transition duration-200 ease-in-out hover:text-primary"
          >
            {type === "login" ? "Register" : "Login"}
          </Link>
        </div>
      </CardFooter>
    </React.Fragment>
  )
}
