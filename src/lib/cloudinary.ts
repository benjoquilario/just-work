export async function uploadPicture(currentFile: File) {
  const formData = new FormData()
  formData.append("file", currentFile)
  formData.append("upload_preset", "just_work")

  const CLOUDINARY_URL = process.env.NEXT_PUBLIC_CLOUDINARY_URL as string
  const request = await fetch(CLOUDINARY_URL, {
    method: "POST",
    body: formData,
  })

  const data = await request.json()

  return data.secure_url
}
