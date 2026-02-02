/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    formats: ['image/webp', 'image/avif'],
  },
  eslint: {
    ignoreDuringBuilds: false,
  },
};

export default nextConfig;
