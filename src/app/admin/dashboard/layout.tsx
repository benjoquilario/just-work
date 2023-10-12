import React from "react"
import { getSession } from "@/lib/session"
import { notFound } from "next/navigation"

export default async function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  const session = await getSession()

  if (!session) notFound()

  return (
    <div>
      <h1>Dashboard</h1>
      {children}
    </div>
  )
}
