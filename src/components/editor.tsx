"use client"

import dynamic from "next/dynamic"
import { useMemo } from "react"

import "react-quill/dist/quill.snow.css"

type EditorProps = {
  onChange: (value: string) => void
  value: string
}

export function Editor({ onChange, value }: EditorProps) {
  const ReactQuill = useMemo(
    () => dynamic(() => import("react-quill"), { ssr: false }),
    []
  )

  return (
    <div className="bg-transparent">
      <ReactQuill value={value} onChange={onChange} theme="snow" />
    </div>
  )
}
