const path = require("path");
const nodeExternals = require("webpack-node-externals");

module.exports = {
  mode: "development",
  entry: {
    server: "./src/index.ts",
  },
  output: {
    path: path.join(__dirname, "../dist"),
    filename: "index.js",
  },
  target: "node",
  externals: [nodeExternals()],
  module: {
    rules: [
      {
        loader: "ts-loader",
        test: /\.ts$/,
        exclude: [/node_modules/],
        options: {
          configFile: "./config/tsconfig.json",
        },
      },
    ],
  },
  resolve: {
    extensions: [".ts", ".js"],
  },
};
