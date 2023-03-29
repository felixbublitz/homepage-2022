const path = require('path');
const CopyPlugin = require("copy-webpack-plugin");


module.exports = {

  mode: 'development',
  entry: path.resolve(__dirname, 'src/main'),
  devServer: {
    static: {
      directory: path.resolve(__dirname, 'dist'),
    },
    port: 3000,
    open: true,
    hot: true,
    compress: true,
    historyApiFallback: true,
  },
  plugins: [
    new CopyPlugin({
      patterns: [
        { from: "./src/index.html", to: "index.html" }
      ],
    }),
  ],

  module: {
    rules: [
      {
        test: /\.css$/i,
        include: path.resolve(__dirname, 'src'),
        use: ['style-loader', 'css-loader', 'postcss-loader'],
      },
    ],
  },
};