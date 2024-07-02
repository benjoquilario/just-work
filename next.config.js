/** @type {import('next').NextConfig} */
const nextConfig = {
  swcMinify: true,
  images: {
    domains: ["workaron.com", "res.cloudinary.com"],
  },
}

module.exports = nextConfig
