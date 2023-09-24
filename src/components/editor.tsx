"use client"

import dynamic from "next/dynamic"
import { useMemo } from "react"

import "react-quill/dist/quill.snow.css"

// interface EditorProps {
//   onChange: (value: string) => void
//   value: string
// }

export const Editor = () => {
  const ReactQuill = useMemo(
    () => dynamic(() => import("react-quill"), { ssr: false }),
    []
  )

  return (
    <div className="bg-transparent">
      <ReactQuill theme="snow" />
    </div>
  )
}
