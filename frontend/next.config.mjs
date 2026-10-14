/** @type {import('next').NextConfig} */
const nextConfig = {
  reactCompiler: true,
  allowedDevOrigins: ["192.168.1.153", "192.168.32.1",],
  turbopack: {
    root: process.cwd(),
  },


};

export default nextConfig;