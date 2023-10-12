/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  experimental: {
    serverActions: true,
  },
  images: {
    domains: ["workaron.com", "res.cloudinary.com"],
  },
}

module.exports = nextConfig
