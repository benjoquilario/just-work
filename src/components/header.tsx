"use client"

import Link from "next/link"
import * as React from "react"
import { Button, buttonVariants } from "./ui/button"
import { HamburgerMenuIcon } from "@radix-ui/react-icons"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import Container from "./shared/container"
import ThemeToggle from "./theme-toggle"

export default function Header() {
  return (
    <header className="mb-4 flex w-full items-center justify-center pb-4">
      <Container className="max-0 flex items-center justify-between p-3">
        <Link
          href="/"
          className="font-logo relative z-10 text-3xl font-extrabold underline decoration-primary decoration-double md:text-5xl"
          aria-label="Just Work"
        >
          Just Work
          {/* <span className="absolute -bottom-2 left-0 h-2 w-full bg-primary "></span> */}
        </Link>
        <div className="ml-5 flex h-12 flex-1 items-center justify-between gap-3">
          <nav aria-label="primary">
            <div className="relative hidden md:block">
              <ul className="flex gap-3">
                <li>
                  <Link
                    href="/jobs"
                    className="text-sm text-muted-foreground/70 transition-colors hover:text-muted-foreground/90"
                  >
                    Find Jobs
                  </Link>
                </li>
              </ul>
            </div>
          </nav>
        </div>
        <div className="hidden items-center gap-2 md:flex">
          <Link className={buttonVariants()} href="/auth/login">
            Sign in
          </Link>
          <Link
            href="/post-a-job"
            className={buttonVariants({
              variant: "ghost",
            })}
          >
            Employers/Post Job
          </Link>
          <ThemeToggle />
        </div>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="block md:hidden">
              <HamburgerMenuIcon className="h-6 w-6" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="mr-2">
            <DropdownMenuItem asChild>
              <div>
                <Link href="/" className="w-full">
                  Find Jobs
                </Link>
              </div>
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem className="hover:bg-transparent">
              <div className="hover:bg-transparent">
                <Link
                  className={buttonVariants({ className: "w-full" })}
                  href="/auth/login"
                >
                  Sign in
                </Link>
              </div>
            </DropdownMenuItem>
            <DropdownMenuItem asChild>
              <div className="hover:bg-transparent">
                <Link
                  href="/post-a-job"
                  className={buttonVariants({
                    variant: "ghost",
                  })}
                >
                  Employers/Post Job
                </Link>
              </div>
            </DropdownMenuItem>
            <DropdownMenuItem asChild>
              <div>
                <ThemeToggle />
              </div>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </Container>
    </header>
  )
}
