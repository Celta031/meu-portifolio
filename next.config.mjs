/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // <-- ADICIONE ESTA LINHA
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
}

export default nextConfig
