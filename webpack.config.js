// const path = require('path');
import path from 'path';
import { dirname } from 'dirname-filename-esm';
import HtmlWebpackPlugin from "html-webpack-plugin";
import {CleanWebpackPlugin} from 'clean-webpack-plugin';
const __dirname = dirname(import.meta);

const config = { 
  mode: 'development',
  entry: './client/src/index.js',  // 依赖入口
  output: {
    filename: 'main.js',	// 最终打包好的文件
    path: path.resolve(__dirname, 'client/reactapp'), // 发布目录
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ["babel-loader"]
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "client/src", "index.html")
    }),
    new CleanWebpackPlugin()
  ],
  devServer: {
    contentBase: './client/reactapp',
    open: true
  },
};

export default config;