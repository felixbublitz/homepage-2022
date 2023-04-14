const path = require('path');
const CopyPlugin = require("copy-webpack-plugin");
var HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {

  mode: 'production',
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
    new HtmlWebpackPlugin({
        template: 'src/index.html',
        filename: 'index.html',
        inject: false
    }), new HtmlWebpackPlugin({
      template: 'src/impress.html',
      filename: 'impress.html',
      inject: false
  }),

    new CopyPlugin({
      patterns: [
        { from: "res/img/hamburg.png", to: "img/hamburg.png" },
        { from: "res/img/tu-berlin.png", to: "img/tu-berlin.png" },
        { from: "res/Immersive_Web__Markerless_Detection_and_Enrichment_of_Billboards.pdf", to: "files/Immersive_Web__Markerless_Detection_and_Enrichment_of_Billboards.pdf" },
        { from: "src/robots.txt", to: "robots.txt" }
      ]})
],
  module: {

    rules: [  
      {
        test: /\.html$/i,
        loader: 'html-loader'
    },
   
   
    {
        test: /\.(png|jpg)$/i,
        type: 'asset/resource',
        generator: {
            filename: 'img/[hash][ext]'
        }
    },
    
      {
        test: /\.css$/i,
        include: path.resolve(__dirname, 'src'),
        use: ['postcss-loader'],

        generator: {
          filename: 'css/[hash][ext]'
      }
      },

      {
        test: /\.css$/i,
        include: path.resolve(__dirname, 'src'),
        use: ['style-loader', 'css-loader' ,'postcss-loader'],
        issuer: /main\.js$/,
        generator: {
          filename: 'css/[hash][ext]'
      }
      },
    ],
  },
};