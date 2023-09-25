import Layout from "@/components/layout"
import Container from "@/components/shared/container"
import { getSession } from "@/lib/session"
import { redirect } from "next/navigation"
import React from "react"

type AuthLayoutProps = {
  children: React.ReactNode
}

export default async function AuthLayout({ children }: AuthLayoutProps) {
  const session = await getSession()

  if (session) redirect("/")

  return (
    <Layout
      isHeader={false}
      isFooter={false}
      className="flex flex-col items-center justify-center"
    >
      <Container className="px-3">{children}</Container>
    </Layout>
  )
}
