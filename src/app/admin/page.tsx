"use client"

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
  FormLabel,
} from "@/components/ui/form"
import * as z from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { useRouter } from "next/navigation"
import { signIn } from "next-auth/react"
import React from "react"

const loginSchema = z.object({
  email: z.string().email(),
  password: z.string(),
})

type Inputs = z.infer<typeof loginSchema>

const Admin = () => {
  const router = useRouter()
  const form = useForm<Inputs>({
    resolver: zodResolver(loginSchema),
  })

  const { isSubmitting } = form.formState

  async function handleOnSubmit(data: Inputs) {
    const response = await signIn("credentials", { ...data, redirect: false })

    if (response?.ok)
      return setTimeout(() => router.push("/admin/dashboard"), 1000)
  }

  return (
    <div className="flex flex-col items-center justify-center">
      <Card className="w-[450px]">
        <CardHeader>
          <CardTitle className="text-2xl font-semibold uppercase">
            Login
          </CardTitle>
        </CardHeader>
        <CardContent className="grid w-full gap-4">
          <Form {...form}>
            <form
              className="grid gap-4"
              onSubmit={form.handleSubmit(handleOnSubmit)}
            >
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email Address</FormLabel>
                    <FormControl>
                      <Input placeholder="m@example.com" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Password</FormLabel>
                    <FormControl>
                      <Input type="password" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button className="w-full" disabled={isSubmitting} type="submit">
                Sign In
              </Button>
            </form>
          </Form>
        </CardContent>
        <CardFooter className="grid gap-1.5">
          <div className="mt-2 text-left text-sm">For Admin Personel only</div>
        </CardFooter>
      </Card>
    </div>
  )
}

export default Admin
