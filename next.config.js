/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'dev.to',
            port: '',
          },
          {
            protocol: 'https',
            hostname: 'res.cloudinary.com',
            port: '',
            pathname: '/practicaldev/image/fetch/**'
          },
        ],
      },
}

module.exports = nextConfig
