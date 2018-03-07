const path = require("path");
const appDirectory = path.resolve(__dirname + '/../');
const resolveApp = relativePath => path.resolve(appDirectory, relativePath);

const ModuleScopePlugin = require('react-dev-utils/ModuleScopePlugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const port = process.env.PORT || 3000;
const cssFilename = 'stylesheets/app.css';

module.exports = {
  mode: "development",
  // watch: true,
  entry: {
    bundle: ["./src/index.js", "./src/assets/stylesheets/index.css"],
  },
  output: {
    filename: `javascripts/[name].js`,
  },
  devtool: 'cheap-module-source-map',
  devServer: {
    contentBase: resolveApp('../public'),
    host: 'localhost',
    port: port,
    historyApiFallback: true,
    open: true
  },
  module: {
    strictExportPresence: true,
    rules: [
      {
        test: /\.js?$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        },
      },
      {
        test: /\.css$/,
        use: [
          "style-loader",
          "css-loader",
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'public/index.html',
      favicon: 'public/favicon.ico',
      filename: 'index.html',
    }),
  ],
  resolve: {
    modules: ['node_modules', resolveApp('node_modules')],
    extensions: ['.jsx', '.js'],
    plugins: [
      // Prevents users from importing files from outside of src/ (or node_modules/).
      new ModuleScopePlugin(resolveApp('src'), [resolveApp('package.json')]),
    ],
  }
};
