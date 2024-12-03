/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  images: {
    domains: ['avatar.vercel.sh'], // Add any other image domains you're using
  },
}

module.exports = nextConfig 