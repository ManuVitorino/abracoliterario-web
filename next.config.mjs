/** @type {import('next').NextConfig} */
const nextConfig = {
    // Permitindo imagens de domínio externo
    images: {
    remotePatterns: [
      { //Imagens do vercel blob
        protocol: 'https',
        hostname: 'aqwzkvq0zraom5bg.public.blob.vercel-storage.com',
        pathname: '**', 
      },
      { //Imagens do Google
        protocol: 'https',
        hostname: 'lh3.googleusercontent.com',
        pathname: '**',
      },
    ],
  },
};

export default nextConfig;
