import Layout from "@/components/layout"
import Container from "@/components/shared/container"
import * as React from "react"

export default function ViewLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <Layout>
      <Container className="px-3">{children}</Container>
    </Layout>
  )
}
