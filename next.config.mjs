import { withContentlayer } from 'next-contentlayer'

/**
 * @type {import('next').NextConfig}
 */

export default withContentlayer()({
  swcMinify: true,
  reactStrictMode: true,
})
