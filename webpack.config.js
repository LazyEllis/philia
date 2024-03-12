const path = require("path");
const autoprefixer = require("autoprefixer");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  entry: {
    common: "./src/js/common.js",
    index: "./src/js/index.js",
    sign_up: "./src/js/sign_up.js",
    dashboard: "./src/js/dashboard.js",
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: "index.html",
      template: "./src/index.html",
      chunks: ["common", "index"],
      inject: "body",
    }),
    new HtmlWebpackPlugin({
      filename: "sign_up.html",
      template: "./src/sign_up.html",
      chunks: ["common", "sign_up"],
      inject: "body",
    }),
    new HtmlWebpackPlugin({
      filename: "sign_in.html",
      template: "./src/sign_in.html",
      chunks: ["common"],
      inject: "body",
    }),
    new HtmlWebpackPlugin({
      filename: "files.html",
      template: "./src/files.html",
      chunks: ["common", "dashboard"],
      inject: "body",
    }),
    new MiniCssExtractPlugin(),
  ],
  module: {
    rules: [
      {
        test: /\.html$/i,
        loader: "html-loader",
      },
      {
        test: /\.(scss)$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
          },
          {
            loader: "css-loader",
          },
          {
            loader: "postcss-loader",
            options: {
              postcssOptions: {
                plugins: [autoprefixer],
              },
            },
          },
          {
            loader: "sass-loader",
          },
        ],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif|webp)$/i,
        type: "asset/resource",
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: "asset/resource",
      },
    ],
  },
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "dist"),
    clean: true,
  },
};
