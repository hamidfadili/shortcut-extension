const path = require("path");
module.exports = {
  mode: "none",
  entry: "./src/index.js",
  output: {
    path: __dirname + "/pages/popup",
    filename: "main.js",
  },
  devServer: {
    contentBase: path.join(__dirname, "pages/popup"),
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
            plugins: ["@babel/transform-react-jsx"],
          },
        },
      },
    ],
  },
};
