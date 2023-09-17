"use client"

import Link from "next/link"
import * as React from "react"
import { Button, buttonVariants } from "./ui/button"
import { Toggle } from "./ui/toggle"
import { DropdownMenuIcon, HamburgerMenuIcon } from "@radix-ui/react-icons"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export default function Header() {
  return (
    <header className="mb-6 flex w-full items-center justify-center pb-6">
      <div className="mx-0 flex w-full max-w-5xl items-center justify-between p-2">
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
                    className="text-sm text-muted-foreground/70 transition-colors hover:text-muted-foreground/80"
                  >
                    Find Jobs
                  </Link>
                </li>
              </ul>
            </div>
          </nav>
        </div>
        <div className="hidden items-center gap-2 md:flex">
          <Link className={buttonVariants()} href="/login">
            Sign in
          </Link>
          <Link
            href="/"
            className={buttonVariants({
              variant: "ghost",
            })}
          >
            Employers/Post Job
          </Link>
        </div>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="block md:hidden">
              <HamburgerMenuIcon />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="mr-2">
            <DropdownMenuItem>
              <Link href="/">Find Jobs</Link>
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <Link className={buttonVariants()} href="/login">
                Sign in
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Link
                href="/"
                className={buttonVariants({
                  variant: "ghost",
                })}
              >
                Employers/Post Job
              </Link>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  )
}
