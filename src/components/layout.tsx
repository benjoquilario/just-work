import React from "react"
import Header from "./header"
import SiteFooter from "./site-footer"
import { cn } from "@/lib/utils"

type LayoutProps = {
  isHeader?: boolean
  isFooter?: boolean
  children: React.ReactNode
  className?: string
}

export default function Layout({
  isHeader = true,
  isFooter = true,
  children,
  className,
}: LayoutProps) {
  return (
    <div className={cn("min-h-screen", className)}>
      {isHeader && <Header />}
      <main>{children}</main>
      {isFooter && <SiteFooter />}
    </div>
  )
}
