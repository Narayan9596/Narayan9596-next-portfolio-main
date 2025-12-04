/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  transpilePackages: ['three', '@react-three/drei', '@react-three/fiber', 'three-globe'],
  output: 'export',
  images: {
    unoptimized: true,
    domains: ['images.unsplash.com'], // Add any other image domains you use
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  // Add this if you're using static exports with dynamic routes
  // trailingSlash: true,
};

// Remove this if you don't need static exports
if (process.env.NODE_ENV === 'production') {
  nextConfig.output = 'export';
}

export default nextConfig;
