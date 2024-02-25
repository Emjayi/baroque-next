/** @type {import('next').NextConfig} */

const nextConfig = {

    images: {
        remotePatterns: [
            {
                protocol: 'http',
                hostname: 'localhost:3000',

            },
        ],
    },

}

export default nextConfig;
