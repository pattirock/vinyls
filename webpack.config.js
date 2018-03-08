const path = require("path");
// const appDirectory = path.resolve(__dirname);
const appDirectory = path.resolve(__dirname + '/../');
const resolveApp = relativePath => path.resolve(appDirectory, relativePath);

const ModuleScopePlugin = require('react-dev-utils/ModuleScopePlugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const port = process.env.PORT || 3003;
const cssFilename = 'stylesheets/app.css';

module.exports = {
  mode: "development",
  // watch: true,
  entry: {
    // bundle: [resolveApp("src/index.js"), resolveApp("src/assets/stylesheets/index.css")],
    bundle: ["./src/index.js", "./src/assets/stylesheets/index.css"],
  },
  output: {
    filename: `javascript/[name].js`,
    // filename: `[name].js`,
    // path: path.resolve(__dirname, 'public/javascript'),
    // publicPath: path.resolve(__dirname, 'public/javascript'),
  },
  devtool: 'source-map',
  devServer: {
    // contentBase: path.resolve(__dirname, 'public/javascript'),
    contentBase: path.resolve(__dirname, 'public'),
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
