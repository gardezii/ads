const HtmlWebPackPlugin = require("html-webpack-plugin");

module.exports = {
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
        exclude: [/common_styles\/.*\.css$/],
        use:[
          {loader: 'style-loader'},
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
    ]
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: "./src/index.html",
      filename: "./index.html"
    })
  ]
};

// function loadCssLoader(isGlobal, sourceMap, ...additionalLoaders) {
//     const cssLoader = [
//       'stylus-loader',
//       {
//        loader: 'css-loader',
//         options: {
//             camelCase: true,
//             modules: true,
//             importLoaders: 1,
//             localIdentName: isGlobal
//                 ? '[local]'
//                 : `[name]-[local]-[hash:base64:5]'`,
//         },
//       },
//       {
//         loader: 'postcss-loader',
//         options: {
//             sourceMap: sourceMap,
//             plugins: [
//                 require('autoprefixer')({
//                     browsers: ['> 1%', 'last 20 versions', 'Firefox ESR', 'Opera 12.1'],
//                 }),
//             ],
//         },
//       },
//       ...additionalLoaders
//     ]
// }