/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {// Permitindo imagens de domínio externo
    remotePatterns: [
      {
        hostname: 'aqwzkvq0zraom5bg.public.blob.vercel-storage.com',
        protocol: 'https', 
      },
    ],
  },
};

export default nextConfig;
