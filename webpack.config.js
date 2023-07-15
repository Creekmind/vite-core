const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
  entry: './src/client/core.js',
  mode: 'development',
  output: {
    filename: 'core.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  devServer: {
    hot: false,
    liveReload: false,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "index.html"
    })
  ]
};
