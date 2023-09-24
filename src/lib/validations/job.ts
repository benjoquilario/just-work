import * as z from "zod"

export const jobPostSchema = z.object({
  companyName: z
    .string()
    .trim()
    .min(2, { message: "Company Name must be 2 or more characters long" }),
  jobTitle: z.string().trim(),
  description: z.string().trim(),
  experience: z.string(),
  employeesNumber: z.string().optional(),
  jobType: z.string(),
  schedule: z.string(),
  minimumSalary: z.number().optional(),
  maximumSalary: z.number().optional(),
  qualification: z.string(),
  sendEmail: z.string().email().toLowerCase().optional(),
  companySite: z.string().url().optional(),
  companyLogo: z.string(),
  location: z
    .string()
    .trim()
    .min(2, { message: "City must be 2 or more characters long" }),
  phoneNumber: z
    .string()
    .min(10, { message: "Phone numbers are a minimum of 10 digits" })
    .optional(),
})

export type JobPost = z.infer<typeof jobPostSchema>
