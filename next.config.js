/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        appDir: true,
    },
    env: {
        NEXTAUTH_URL: process.env.NEXTAUTH_URL,
    },
    images: {
        domains: [
            "placeimg.com",
            "images.unsplash.com",
            "avatars.githubusercontent.com",
        ],
    },
};

module.exports = nextConfig;
