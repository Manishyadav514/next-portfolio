/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },
  // images: {
  //   loader: 'imgix',
  //   path: '/',
  // },
  experimental: {
    newNextLinkBehavior: false,
  },
};

module.exports = nextConfig;
