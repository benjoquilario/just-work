import JobItem from "@/components/shared/job-item"

export default function Home() {
  return (
    <div className="mx-auto w-full max-w-5xl px-2">
      <ul className="grid grid-cols-1 gap-3.5 md:grid-cols-2">
        <JobItem />
        <JobItem />
        <JobItem />
      </ul>
    </div>
  )
}
