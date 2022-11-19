const HtmlWebpackPlugin = require('html-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const path = require('path');
const webpack = require('webpack');
const sass = require('sass');

module.exports = (env, argv) => {
  const prod = argv.mode === 'production';

  return {
    mode: prod ? 'production' : 'development',
    devtool: prod ? 'hidden-source-map' : 'eval',
    entry: path.join(__dirname, 'client/src/index.jsx'),
    output: {
      publicPath: '/',
      path: path.join(__dirname, 'client/dist'),
      filename: 'bundle.[hash].js',
      clean: true,
    },
    module: {
      rules: [
        {
          test: /\.s?css$/,
          use: [
            {
              loader: 'style-loader',
              options: {
                injectType: 'singletonStyleTag',
              },
            },
            {
              loader: 'css-loader',
              options: {
                modules: true,
              },
            },
            {
              loader: 'sass-loader',
              options: {
                implementation: sass,
              },
            },
          ],
        },
        {
          test: /\.jsx?$/,
          exclude: /node_modules/,
          use: {
            loader: 'esbuild-loader',
            options: {
              loader: 'jsx',
              target: 'es2021',
            },
          },
        },
      ],
    },
    optimization: {
      minimize: prod,
      minimizer: [
        new TerserPlugin({
          parallel: true,
          minify: TerserPlugin.esbuildMinify,
        }),
      ],
    },
    resolve: {
      extensions: ['.js', '.jsx'],
    },
    plugins: [
      new webpack.ProvidePlugin({
        React: 'react',
      }),
      new HtmlWebpackPlugin({
        template: './client/public/index.html',
        minify: process.env.NODE_ENV === 'production' ? {
          collapseWhitespace: true,
          removeComments: true,
        } : false,
      }),
    ],
    devServer: {
      open: true,
      host: 'localhost',
      historyApiFallback: true,
      port: 8080,
      proxy: {
        '/api': {
          target: 'http://localhost:3000',
          secure: false,
        },
      },
    },
  };
};
