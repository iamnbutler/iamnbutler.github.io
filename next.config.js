/** @type {import('next').NextConfig} */
const contentlayer = require("next-contentlayer")

module.exports = contentlayer.withContentlayer({
  images: {
    domains: ["github.com", "githubusercontent.com"],
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: ['@svgr/webpack'],
    })

    return config
  },
})