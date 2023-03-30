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
    })
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
        issuer: /index\.html$/,
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