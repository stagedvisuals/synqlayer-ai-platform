/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['github.com', 'vercel.com'],
  },
  experimental: {
    serverActions: true,
  },
}

module.exports = nextConfig