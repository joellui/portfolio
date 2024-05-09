/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'img.shields.io'
          },
        ],
        dangerouslyAllowSVG: true,
      }
};

export default nextConfig;
