/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'bedrock.p82.dbm-local.com',
            }
        ]
    }
};

export default nextConfig;
