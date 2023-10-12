import Container from "@/components/shared/container"
import { getSession } from "@/lib/session"
import { notFound } from "next/navigation"
import React from "react"

export default async function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  const session = await getSession()

  if (!session) notFound()

  return (
    <div className="flex min-h-screen flex-col items-center justify-center">
      <Container className="px-3">{children}</Container>
    </div>
  )
}
