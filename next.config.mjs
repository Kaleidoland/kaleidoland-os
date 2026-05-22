const nextConfig = { output: 'standalone' };
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  experimental: {
    optimizePackageImports: ['@react-three/fiber', '@react-three/drei', 'three'],
  },
  webpack: (config) => {
    config.externals.push({ 'utf-8-validate': 'commonjs utf-8-validate', 'bufferutil': 'commonjs bufferutil' })
    return config
  },
}
export default nextConfig
