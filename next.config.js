/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    formats: ['image/avif', 'image/webp'],
    domains: ['picsum.photos'], // 添加需要允许的图片域名
  },
  async redirects() {
    return [
      // 可以在这里添加重定向规则
    ]
  },
  async rewrites() {
    return [
      // 可以在这里添加重写规则
    ]
  },
}

module.exports = nextConfig