"use client"

import dynamic from "next/dynamic"
import { useMemo, useEffect, useState } from "react"

import "react-quill/dist/quill.snow.css"

type EditorProps = {
  onChange?: (value: string) => void
  value?: string
}

export function Editor({ onChange, value }: EditorProps) {
  const [hasMounted, setHasMounted] = useState(false)

  useEffect(() => {
    setHasMounted(true)
  }, [])

  const ReactQuill = useMemo(
    () => dynamic(() => import("react-quill"), { ssr: false }),
    []
  )

  return (
    <div className="bg-transparent">
      {hasMounted ? (
        <ReactQuill value={value} onChange={onChange} theme="snow" />
      ) : null}
    </div>
  )
}
