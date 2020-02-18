const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

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
};
