import Container from "@/components/shared/container"
import React from "react"

type AuthLayoutProps = {
  children: React.ReactNode
}

export default function AuthLayout({ children }: AuthLayoutProps) {
  return <Container className="px-3">{children}</Container>
}
