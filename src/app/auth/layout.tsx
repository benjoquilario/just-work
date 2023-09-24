import Layout from "@/components/layout"
import Container from "@/components/shared/container"
import React from "react"

type AuthLayoutProps = {
  children: React.ReactNode
}

export default function AuthLayout({ children }: AuthLayoutProps) {
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
