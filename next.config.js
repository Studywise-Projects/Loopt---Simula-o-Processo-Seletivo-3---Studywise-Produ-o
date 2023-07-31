/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['flagcdn.com'],
    unoptimized: true,
  },
  experimental: {
    images: {
      unoptimized: true,
      loader: 'akamai',
      path: '',
    },
  },
}

module.exports = nextConfig
