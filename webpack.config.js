const path = require("path");
const fs = require("fs");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCSSExtractPlugin = require("mini-css-extract-plugin");

const getHtmlFileWithoutScriptTag = () => {
   const htmlFile = fs.readFileSync("./index.html", "utf-8");

   const removeScriptTagRegex =
      /<script src="bundles\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi;

   return htmlFile.replace(removeScriptTagRegex, "");
};

module.exports = (_, { mode }) => ({
   mode,

   entry: ["regenerator-runtime/runtime.js", "./src/index.js"],

   output: {
      filename: "main.js",
      path: path.resolve(__dirname, mode === "production" ? "dist" : "bundles"),
   },

   module: {
      rules: [
         {
            test: /\.(js|jsx)$/i,
            exclude: /nodule_modules/,
            use: {
               loader: "babel-loader",
               options: {
                  compact: true,
                  presets: [
                     "@babel/preset-env",
                     ["@babel/preset-react", { runtime: "automatic" }],
                  ],
               },
            },
         },
         {
            test: /\.html/i,
            use: [
               {
                  loader: "html-loader",
                  options: { minimize: true },
               },
            ],
         },
         {
            test: /.(css|sass|scss)$/i,
            use: [
               mode === "production" ? MiniCSSExtractPlugin.loader : "style-loader",
               "css-loader",
               "sass-loader",
            ],
         },
      ],
   },

   performance: {
      maxEntrypointSize: 512000,
      maxAssetSize: 512000,
   },

   resolve: {
      extensions: ["*", ".js", ".jsx"],
   },

   plugins:
      mode === "production"
         ? [
              new HtmlWebpackPlugin({
                 filename: "index.html",
                 templateContent: getHtmlFileWithoutScriptTag(),
              }),
              new MiniCSSExtractPlugin({ filename: "styles.css" }),
           ]
         : [],
});
