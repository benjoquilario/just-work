import Layout from "@/components/layout"
import Container from "@/components/shared/container"
import React from "react"

export default function LayoutPostJob({
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
