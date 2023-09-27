"use client"

import { UploadButton, UploadDropzone } from "@/lib/uploadthing"
import { ourFileRouter } from "@/app/api/uploadthing/core"
import { cn } from "@/lib/utils"
import { buttonVariants } from "./ui/button"

interface FileUploadProps {
  onChange: (url?: string) => void
  endpoint: keyof typeof ourFileRouter
}

export const FileUpload = ({ onChange, endpoint }: FileUploadProps) => {
  return (
    <UploadButton
      endpoint={endpoint}
      onClientUploadComplete={(res) => {
        onChange(res?.[0].url)
      }}
      onUploadError={(error: Error) => {
        console.log(error.message)
      }}
    />
  )
}
