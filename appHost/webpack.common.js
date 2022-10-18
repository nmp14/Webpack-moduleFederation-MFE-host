const path = require('path');

const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const Dotenv = require('dotenv-webpack');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');

module.exports = {
  entry: {
    main: {
      filename: 'main.[contenthash].js',
      import: './src/index.ts'
    },
  },

  cache: false,

  optimization: {
    moduleIds: 'deterministic',
    minimizer: [
      new CssMinimizerPlugin(),
    ],
  },

  output: {
    filename: 'static/scripts/[name].[contenthash].js',
    path: path.resolve(__dirname, 'dist'),
    publicPath,
    chunkFileName: 'static/scripts/[id].[contenthash].js',
    clean: true,
  },

  resolve: {
    extensions: ['.tsx', '.ts', 'jsx', '.js', '.json'],
    alias: {
      '@Components': path.resolve(__dirname, 'src/components'),
      '@Pages': path.resolve(__dirname, 'src/pages'),
      '@Types': path.resolve(__dirname, 'src/types'),
    },
  },

  module: {
    rules: [
      
    ]
  }
}