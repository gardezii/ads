const path = require('path')
var webpack = require("webpack");
const HtmlWebPackPlugin = require("html-webpack-plugin");
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin
var CompressionPlugin = require('compression-webpack-plugin')

// var mode = process.env.NODE_ENV || 'development';
var  mode = 'production'

module.exports = {
  mode: 'production',
  devtool: (mode === 'development') ? 'inline-source-map' : 'cheap-module-source-map',
  resolve: {
     modules: [
      'node_modules',
      // 'src',
      path.resolve(__dirname, "src"),
    ],
    extensions: ['.js', '.jsx', '.styl'],
    alias: {
      'owl.carousel': 'owl.carousel/dist/owl.carousel.min.js'
    }
  },
  output: {
    filename: '[name].bundle.js',
    chunkFilename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  // optimization: {
  //   splitChunks: {
  //     chunks: 'all'
  //   }
  // },
  optimization: {
    splitChunks: {
      cacheGroups: {
        vendors: {
          test: /[\\/]node_modules[\\/].*\.js/,
          name: 'vendors',
          chunks: 'all',
        },
      }
    }
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: [
              [
                '@babel/preset-env',
                {
                    'targets': {
                        'chrome': '40',
                        'ie': '10',
                    },
                },
              ],
              '@babel/preset-react',
            ],
            plugins: [
              "@babel/plugin-proposal-class-properties"
            ]
          }
        }
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader"
          }
        ]
      },
      {
        test:/\.css$/,
        // exclude: [/common_styles\/.*\.css$/],
        use:[
          {loader: 'style-loader'},
          {
            loader: 'css-loader',
            options: { 
              camelCase: true,
              modules: true,
              importLoaders: 1,
              localIdentName:'[local]',
            }
          },
          {
            loader: 'postcss-loader',
            options: {
                sourceMap: true,
                plugins: [
                    require('autoprefixer')({
                        browsers: ['> 1%', 'last 20 versions', 'Firefox ESR', 'Opera 12.1'],
                    }),
                ],
            },  
          }
        ]
      },
      {
        test:/\.styl$/,
        use:[
          'style-loader',
          {
            loader: 'css-loader',
            options: { 
              camelCase: true,
              modules: true,
              importLoaders: 1,
              localIdentName:'[name]-[local]-[hash:base64:5]',
            }
          },
          {
            loader: 'postcss-loader',
            options: {
              sourceMap: true,
              plugins: [
                  require('autoprefixer')({
                      browsers: ['> 1%', 'last 20 versions', 'Firefox ESR', 'Opera 12.1'],
                  }),
              ],
            }
          }, 
          'stylus-loader'
        ]
      },
      {
        test: /(common_styles|node_modules)\/.*\.styl$/,
        use:[
          'style-loader',
          {
            loader: 'css-loader',
            options: { 
              camelCase: true,
              modules: true,
              importLoaders: 1,
              localIdentName:'[local]',
            }
          },
          {
            loader: 'postcss-loader',
            options: {
              sourceMap: true,
              plugins: [
                  require('autoprefixer')({
                      browsers: ['> 1%', 'last 20 versions', 'Firefox ESR', 'Opera 12.1'],
                  }),
              ],
            }
          }, 
          'stylus-loader'
        ]
      },
      {
        test: /\.svg$/,
        use: [
          {
              loader: "babel-loader"
          },
          {
              loader: "react-svg-loader",
              options: {
                jsx: true // true outputs JSX tags
              }
          }
        ]
      },
      {
        test: /\.(jpe?g|png|gif|cur)$/i,
        use: getFileLoader(path.join('public-files', 'img/'))
      },
    ]
  },
  plugins: [
    new HtmlWebPackPlugin({
        template: "./src/index.html",
        filename: "./index.html"
    }),
    new webpack.ProvidePlugin({
        $: 'jquery',
        jQuery: 'jquery',
        'window.jQuery': 'jquery'
    }),
    // new BundleAnalyzerPlugin(),
    new webpack.DefinePlugin({
        'process.env.NODE_ENV': '"production"'
    }),
    new webpack.LoaderOptionsPlugin({
        minimize: true
    }),
    // new webpack.optimize.DedupePlugin(),
    // new webpack.optimize.minimize({
    //   mangle: true,
    //   compress: {
    //     warnings: false, // Suppress uglification warnings
    //     pure_getters: true,
    //     unsafe: true,
    //     unsafe_comps: true,
    //     screw_ie8: true
    //   },
    //   output: {
    //     comments: false,
    //   },
    //   exclude: [/\.min\.js$/gi] // skip pre-minified libs
    // }),
    new CompressionPlugin({
        filename: "[path].gz[query]",
        algorithm: "gzip",
        test: /\.js$|\.css$|\.html$/,
        threshold: 8192,
        minRatio: 0
    })
  ]
};


function getFileLoader(outputPath, publicPath) {
    return {
        loader: 'file-loader',
        options: {
            hash: 'sha512',
            digest: 'hex',
            name: '[name]_[hash].[ext]',
            outputPath: outputPath,
            publicPath: publicPath,
        },
    }
}
