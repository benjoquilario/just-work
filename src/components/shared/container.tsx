"use client"
import * as React from "react"
import { cn } from "@/lib/utils"

type ContainerProps = {
  className?: string
  children: React.ReactNode
}

const Container: React.FC<ContainerProps> = ({ children, className }) => {
  return (
    <div className={cn("mx-auto w-full max-w-5xl", className)}>{children}</div>
  )
}

export default Container
