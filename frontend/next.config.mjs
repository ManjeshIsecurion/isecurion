/** @type {import('next').NextConfig} */
const nextConfig = {
  reactCompiler: true,
  allowedDevOrigins: ['192.168.1.152'],
  turbopack: {
    root: process.cwd(),
  },


};

export default nextConfig;