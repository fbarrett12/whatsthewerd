/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: '@svgr/webpack'
    })
    return config
  },
  env: {
    GEO_KEY: process.env.GEO_KEY
  }
  
}

module.exports = nextConfig
