const HtmlWebpackPlugin = require('html-webpack-plugin')
const TerserPlugin = require('terser-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const path = require('path')
const webpack = require('webpack')
const sass = require('sass')
const { resolve } = require('path')

module.exports = (env, argv) => {
  const prod = argv.mode === 'production'

  return {
    target: 'web',
    mode: prod ? 'production' : 'development',
    devtool: prod ? 'hidden-source-map' : 'source-map',
    entry: path.join(__dirname, 'client/src/index.jsx'),
    output: {
      publicPath: '/',
      path: path.join(__dirname, 'client/dist'),
      filename: 'bundle.[fullhash].js',
      clean: true,
    },
    devServer: {
      open: false,
      hot: true,
      host: 'localhost',
      historyApiFallback: true,
      port: 8080,
      proxy: {
        '/api': {
          target: 'http://localhost:3000',
          changeOrigin: true,
        },
      },
    },
    module: {
      rules: [
        {
          test: /\.(woff|woff2)$/,
          type: 'asset/resource',
        },
        {
          test: /\.css$/,
          use: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader'],
        },
        {
          test: /\.scss$/i,
          use: [
            {
              loader: 'style-loader',
              options: {
                injectType: 'singletonStyleTag',
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
      modules: ['node_modules'],
      alias: {
        '@': resolve(__dirname, './client/src'),
      },
    },
    plugins: [
      new MiniCssExtractPlugin(),
      new webpack.ProvidePlugin({
        React: 'react',
      }),
      new HtmlWebpackPlugin({
        inject: true,
        template: resolve(__dirname, 'client/public/index.html'),
      }),
    ],
  }
}
