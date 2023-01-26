/**
 * @type {import('next').NextConfig}
 */

const nextConfig = {
  /* config options here */
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**.tmdb.org',
      },
      {
        protocol: 'https',
        hostname: '**.upload.wikimedia.org/*',
      },
    ],
  },

}

module.exports = nextConfig


