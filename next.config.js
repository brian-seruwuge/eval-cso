const path = require("path");
const withPlugins = require("next-compose-plugins");
const typescript = require("@zeit/next-typescript");
const less = require("@zeit/next-less");
const images = require("next-images");
const dotenv = require("next-runtime-dotenv");

const RewriteImportPlugin = require("less-plugin-rewrite-import");

const ROOT_DIR = path.resolve(__dirname, "./");
const NODE_MODULES_DIR = path.resolve(__dirname, "../node_modules");

const config = {

  webpack(nextConfig, {isServer}) {

    nextConfig.resolve.alias = {
      ...nextConfig.resolve.alias || {},

      "src": path.resolve(__dirname, "./src"),
    };

    const assetPrefix = nextConfig.assetPrefix || "";
    const limit = nextConfig.inlineImageLimit || 8192;

    nextConfig.module.rules.push(
      {
        test: /\.(woff|eot|ttf|woff2)$/,
        use: [
          {
            loader: "url-loader",
            options: {
              fallback: "file-loader",
              limit,
              name: "[name]-[hash].[ext]",
              outputPath: `${isServer ? "../" : ""}static/images/`,
              publicPath: `${assetPrefix}/_next/static/images/`,
            },
          },
        ],
      },
    );

    return nextConfig;
  },

};

module.exports = withPlugins([

  [dotenv, {
    public: ["BACKEND_URL"],
    server: [],
  }],

  [typescript],

  [less, {
    lessLoaderOptions: {
      paths: [ROOT_DIR, NODE_MODULES_DIR],
      plugins: [
        new RewriteImportPlugin({
          paths: {
            "../../theme.config": __dirname + "/style/semantic-ui/theme.config",
          },
        }),
      ],
    },
  }],

  [images],

], config);
