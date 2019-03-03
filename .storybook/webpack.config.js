const path = require('path');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');

const TS_CONFIG_FILE = path.join(__dirname, "../tsconfig.json");

const ROOT_DIR = path.join(__dirname, "./");
const NODE_MODULES_DIR = path.join(__dirname, "../node_modules");

module.exports = ({config, mode}) => {
  config.module.rules.push({
    test: /\.(ts|tsx)$/,
    loader: require.resolve('babel-loader'),
    options: {
      presets: [require.resolve('babel-preset-react-app')],
    },
  });

  config.resolve.extensions.push('.ts', '.tsx');

  config.resolve.alias = {
    ...config.resolve.alias || {},

    "components": path.join(__dirname, "../src/components"),
  };


  config.plugins.push(
    new ForkTsCheckerWebpackPlugin({
      async: false,
      checkSyntacticErrors: true,
      formatter: require('react-dev-utils/typescriptFormatter'),
    })
  );

  return config
}
