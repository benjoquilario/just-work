import Container from "@/components/shared/container"
import React from "react"

export default async function Layout({
  children,
}: {
  children: React.ReactNode
}) {

  return (
    <div className="flex min-h-screen flex-col items-center justify-center">
      <Container className="px-3">{children}</Container>
    </div>
  )
}
