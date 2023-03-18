/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        appDir: true,
    },
    images: {
        domains: ["placeimg.com"],
    },
};

module.exports = nextConfig;
