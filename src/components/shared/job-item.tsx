"use client"

import Link from "next/link"
import Image from "next/image"
import * as React from "react"
import { Badge } from "../ui/badge"
import { Card, CardContent, CardFooter, CardHeader } from "../ui/card"
import { buttonVariants } from "../ui/button"

const JobItem = () => {
  return (
    <li>
      <Link
        href="/view"
        className="group rounded-xl focus-visible:ring-1 focus-visible:ring-ring"
      >
        <Card>
          <CardContent className="pt-3">
            <div className="flex flex-col gap-3.5">
              <div className="flex justify-between gap-2.5">
                <div className="flex items-center gap-3.5 max-[575px]:flex-col max-[575px]:items-start">
                  <div className="relative flex h-14 w-14 items-center">
                    <Image
                      src="https://workaron.com/_astro/sli-consulting-inc.2edd7740_1YM3he.webp"
                      fill
                      alt=""
                    />
                  </div>
                  <div className="flex flex-col">
                    <div className="flex gap-3.5">
                      <span className="font-semibold group-hover:underline">
                        Full Stack Web
                      </span>
                      <Badge variant="secondary">New</Badge>
                    </div>
                    <div>
                      <span className="text-sm">Flexisource IT</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-wrap gap-1.5">
                <Badge>Metro Manila, Quezon City</Badge>
                <Badge>Onsite</Badge>
                <Badge>Full-time</Badge>
                <Badge>Day Shift</Badge>
                <Badge>5+ Years Experience</Badge>
                <Badge>₱10, 000 - ₱20, 000</Badge>
              </div>
            </div>
          </CardContent>
          <CardFooter>
            <span className="text-xs text-muted-foreground/80">
              Post a while ago
            </span>
          </CardFooter>
        </Card>
      </Link>
    </li>
  )
}

export default JobItem
