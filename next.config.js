const withPlugins = require('next-compose-plugins')
const withTM = require('next-transpile-modules')(['@react-three/drei'])
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})

module.exports = withPlugins([withBundleAnalyzer, withTM], {
  reactStrictMode: false,
  eslint: {
    ignoreDuringBuilds: true,
  },
  assetPrefix: '',
  webpack(config) {
    config.module.rules.push({
      test: /\.(glb|gltf)$/,
      use: {
        loader: 'file-loader',
      },
    })

    return config
  },
})
