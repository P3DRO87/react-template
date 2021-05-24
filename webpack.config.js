const path = require("path");
const MiniCSSExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  mode: "development",
  entry: "./src/index.js",
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "bundles"),
  },

  module: {
    rules: [
      {
        test: /\.(js|jsx)$/i,
        exclude: /nodeModules/,
        loader: "babel-loader",
      },
      {
        test: /\.css$/i,
        use: [MiniCSSExtractPlugin.loader, "css-loader"],
      },
      {
        test: /\.s[ac]ss$/i,
        use: [MiniCSSExtractPlugin.loader, "css-loader", "sass-loader"],
      },
    ],
  },
  resolve: {
    extensions: ["*", ".js", ".jsx"],
    modules: [path.join(__dirname, "src"), "node_modules"],
  },

  plugins: [
    new MiniCSSExtractPlugin({
      filename: "styles.css",
    }),
  ],
};
