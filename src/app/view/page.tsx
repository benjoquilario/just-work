"use client"
import Link from "next/link"
import { ArrowLeftIcon } from "@radix-ui/react-icons"
import React from "react"
import { buttonVariants } from "@/components/ui/button"
import JobItem from "@/components/shared/job-item"

const ViewPage = () => {
  return (
    <div className="mx-auto w-full max-w-5xl px-2">
      <div className="flex flex-col gap-3.5">
        <div>
          <Link
            href="/"
            className={buttonVariants({ variant: "ghost" })}
            aria-label="back home"
          >
            <ArrowLeftIcon className="h-6 w-6" />
          </Link>
        </div>
        <div className="flex flex-col gap-3.5">
          <ul>
            <JobItem />
          </ul>
          <div className="">
            <div className="bg-primary p-1 text-accent">
              <span className="ml-2 text-sm">Job Description</span>
            </div>
            <div className="px-2 pt-3">
              <p>
                <strong>Qualification and Skills</strong>
              </p>
              <ol className="ml-8 mt-3 list-decimal text-sm">
                <li>
                  A bachelor's or master's degree in computer science or a
                  related field can be beneficial in understanding the
                  theoretical foundations of programming and software
                  development.
                </li>
                <li>
                  Highly proficient in languages commonly used for software
                  development, such as Java, Python, C++, or Ruby.
                </li>
                <li>
                  Knowledge of web development technologies like HTML, CSS,
                  JavaScript, and relevant web frameworks (e.g., React, Angular,
                  or Vue.js).
                </li>
                <li>
                  Strong skills in database design and management using
                  technologies like SQL or NoSQL databases.
                </li>
                <li>
                  Several years of experience in software development,
                  preferably with a focus on building complex systems.
                </li>
                <li>
                  Experience working with full-stack development, including
                  front-end and back-end development.
                </li>

                <li>
                  The ability to design and architect complex software systems,
                  including the ability to make decisions about the system's
                  structure, scalability, and maintainability.
                </li>
                <li>
                  A deep understanding of the education sector, including the
                  needs and challenges of schools and educational institutions.
                </li>
              </ol>
            </div>
          </div>
          <div className="flex flex-col gap-3.5">
            <div className="bg-primary p-1 text-accent">
              <span className="ml-2 text-sm">How to Apply</span>
            </div>
            <div className="p-3">
              <p>Kindly send your updated resume to benjoquilario@gmail.com</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ViewPage
