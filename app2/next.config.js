const HtmlWebpackPlugin = require("html-webpack-plugin");

/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack(config, options) {
    /** Webpack 5 */
    console.log(options.webpack.version);

    const { ModuleFederationPlugin } = options.webpack.container;
    config.plugins.push(
      new ModuleFederationPlugin({
        name: "app2",
        filename: "static/chunks/remoteEntry.js",
        exposes: {
          "./Button": "./components/Button",
        },
        shared: {
          react: {
            singleton: true,
            eager: true,
            // Notice shared are NOT eager here.
            requiredVersion: false,
            // singleton: true react@17
          },
        },
      }),
      new HtmlWebpackPlugin()
    );
    return config;
  },
  reactStrictMode: true,
};

module.exports = nextConfig;
