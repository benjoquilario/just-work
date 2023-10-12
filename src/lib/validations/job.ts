import * as z from "zod"

export const jobPostSchema = z.object({
  companyName: z
    .string()
    .trim()
    .min(2, { message: "Company Name must be 2 or more characters long" }),
  jobTitle: z.string().trim(),
  description: z.string().trim(),
  howToApply: z.string().trim().optional(),
  experience: z.string(),
  employeesNumber: z.string().optional(),
  jobType: z.string(),
  schedule: z.string(),
  minimumSalary: z.string().optional(),
  maximumSalary: z.string().optional(),
  sendEmail: z
    .string()
    .email({ message: "Invalid email" })
    .toLowerCase()
    .optional(),
  companySite: z
    .string()
    .url({ message: "Invalid url make sure there is https://" })
    .optional(),
  // Can't solve type for File
  companyLogo: z.any(),
  location: z
    .string()
    .trim()
    .min(2, { message: "City must be 2 or more characters long" })
    .optional(),
})

export type JobPost = z.infer<typeof jobPostSchema>
