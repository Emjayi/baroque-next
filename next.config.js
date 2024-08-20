/** @type {import('next-sitemap').IConfig} */
module.exports = {
    siteUrl: 'https://baroquegp.com',
    generateRobotsTxt: true,
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