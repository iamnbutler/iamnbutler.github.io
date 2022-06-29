/** @type {import('next').NextConfig} */
const contentlayer = require("next-contentlayer")

module.exports = contentlayer.withContentlayer({
  images: {
    domains: ["github.com", "githubusercontent.com"],
  },
})
