/** @type {import('next').NextConfig} */
const nextConfig = {
  reactCompiler: true,
  allowedDevOrigins: ["172.29.80.1"],
  turbopack: {
    root: process.cwd(),
  },


};

export default nextConfig;