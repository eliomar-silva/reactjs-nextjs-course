/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  compiler: {
    styledComponents: true, // ISSO AQUI
  },
  trailingSlash: true,
};

module.exports = nextConfig;
