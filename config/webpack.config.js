const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const nodeExternals = require('webpack-node-externals');

const BUILD_DIR = path.resolve(__dirname, '../dist');

module.exports = {
  entry: './index.js', // relative to root
  mode: 'production', // mode: 'development',
  output: {
    filename: 'ba-identity-react-hooks.js',
    path: BUILD_DIR,
    libraryTarget: 'umd',
    library: 'ba-identity-react-hooks',
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-react', '@babel/preset-env'],
            plugins: ['@babel/transform-runtime'],
          },
        },
      },
    ],
  },
  plugins: [new CleanWebpackPlugin()],
  externals: [nodeExternals()],
  // https://stackoverflow.com/questions/33157904/how-to-avoid-loaded-two-copies-of-react-error-when-developing-an-external-comp
  resolve: {
    alias: {
      react: path.resolve('../node_modules/react'),
    },
  },
};
