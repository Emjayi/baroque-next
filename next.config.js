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