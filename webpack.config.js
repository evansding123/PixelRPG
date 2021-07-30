const webpack = require('webpack');
const path = require('path');

const config = {
  entry: './client/src/index.js',
  output: {

    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)?/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            plugins: [
              ["@babel/plugin-transform-runtime",
                {
                  "regenerator": true
                },
              ],
            ],
          },
        },
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        loader: 'file-loader',
        options: {
          name: '/public/icons/[name].[ext]'
        }
      }

    ],
  },
  mode: 'development',
  devtool: 'eval-source-map',


};

module.exports = config;