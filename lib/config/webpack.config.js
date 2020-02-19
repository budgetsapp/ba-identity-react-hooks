const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const nodeExternals = require('webpack-node-externals');

const BUILD_DIR = path.resolve(__dirname, '../dist');

module.exports = {
  entry: './lib/index.js', // relative to root
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
            plugins: [
              '@babel/transform-runtime',
              '@babel/plugin-proposal-class-properties',
            ],
          },
        },
      },
    ],
  },
  plugins: [new CleanWebpackPlugin()],

  externals: ['react'],
  // https://stackoverflow.com/questions/33157904/how-to-avoid-loaded-two-copies-of-react-error-when-developing-an-external-comp
  // no need to install peers using peers-install
  // When using yarn add ../path there will be conflicts with two react instances
  // To prevent this we need not to have react in lib's node_modules
  // Also it is needed to create lib folder for lib sources only
  // .. and install it locally like yarn add ../ba-identity-react-hooks/lib
  // In this case node_modules should not contain react dependency
  // Is there some npm hook to run `yarn` for app when yarn for lib is called
  // Because we need to have react installed in app and do not do it manually
  resolve: {
    alias: {
      react: '../../app/node_modules/react',
    },
  },
};
