module.exports = {
  distDir: "_next",

  generateBuildId: async () => {
    if (process.env.BUILD_ID) {
      return process.env.BUILD_ID;
    } else {
      return `${new Date().getTime()}`;
    }
  },

  images: {
    domains: ['masterdiskon.com', 'cdn.masterdiskon.com', 'img.icons8.com', 'cdn.via.com', 'ik.imagekit.io', 'eurekalogistics.co.id', 'rajacepat.com', 'jaja.id', 'eurekabookhouse.co.id'],
  },
  
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: ['@svgr/webpack'],
    })

    return config
  },
  
  env: {
    PUBLIC_URL: '/'
  },

  async rewrites() {
    return [
      {
        source: '/flight',
        destination: '/flights',
      },
      {
        source: '/hotel',
        destination: '/hotels',
      },
      {
        source: '/train',
        destination: '/trains',
      },
    ]
  },
}

