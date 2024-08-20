/** @type {import('next-sitemap').IConfig} */
module.exports = {
    output: "standalone",
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'img.gs',
                port: '',
                pathname: '/**',
            },
        ],
    },
}