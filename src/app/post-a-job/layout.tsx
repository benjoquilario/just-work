import Layout from "@/components/layout"
import Container from "@/components/shared/container"
import { getSession } from "@/lib/session"
import { redirect } from "next/navigation"
import React from "react"

export default async function LayoutPostJob({
  children,
}: {
  children: React.ReactNode
}) {
  const session = await getSession()

  if (!session) redirect("/auth/login")

  return (
    <Layout>
      <Container className="px-3">{children}</Container>
    </Layout>
  )
}
