const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');

const port = process.env.PORT || 3000;

module.exports = {
  mode: "development",
  entry: ["./src/index.js"],
  output: {
    filename: "bundle.js"
  },
  devtool: 'inline-source-map',
  devServer: {
    host: 'localhost',
    port: port,
    historyApiFallback: true,
    open: true
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.css$/,
        use: [
            {
              loader: 'style-loader'
            },
            {
              loader: 'css-loader',
              options: {
                modules: true,
                camelCase: true,
                sourceMap: true
              }
            }
          ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'public/index.html',
      favicon: 'public/favicon.ico'
    })
  ],
  resolve: {
    extensions: ['.css', '.js'],
  }
};
