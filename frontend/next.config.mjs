/** @type {import('next').NextConfig} */
const nextConfig = {
  reactCompiler: true,


  allowedDevOrigins: ['192.168.0.124'],

  turbopack: {
    root: process.cwd(),
  },

  
};

export default nextConfig;