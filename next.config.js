/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        appDir: true,
    },
    env: {
        NEXTAUTH_URL: process.env.NEXTAUTH_URL,
    },
    images: {
        domains: ["placeimg.com"],
    },
};

module.exports = nextConfig;
