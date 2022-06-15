/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack(config, options) {
    /** Webpack 5 */
    console.log(options.webpack.version);

    const { ModuleFederationPlugin } = options.webpack.container;
    config.plugins.push(
      new ModuleFederationPlugin({
        remotes: {
          app2: "app2@http://localhost:3001/_next/static/chunks/remoteEntry.js",
        },
        shared: [],
      })
    );
    return config;
  },
};

module.exports = nextConfig;
