const paths= require('./paths');
const getCSSModuleLocalIdent = require('react-dev-utils/getCSSModuleLocalIdent');

const cssRegex = /\.css$/;
const cssModuleRegex = /\.module$/;
const sassRegex = /\.(scss|sass)$/;


module.exports = {
    mode: 'production',
    entry: paths.ssrIndexJs,
    target: 'node',
    output: {
        path: paths.ssrBuild,
        filename: 'server.js',
        chunkFilename: 'js/[name].chunk.js',
        publicPath: paths.servedPath,
    },
    module: {
        rules: [
            {
              oneOf: [
                  // for js
                  {
                      test: /\.(js|mjs|jsx|ts|tsx)$/,
                      include: path.appSrc,
                      loader: require.resolve('babel-loader'),
                      options: {
                          customize: require.resolve(
                              'babel-preset-react-app/webpack-overrides'
                          ),
                          plugins: [
                              [
                                  require.resolve('babel-plugin-named-asset-import'),
                                  {
                                      loaderMap: {
                                          svg: {
                                              ReactComponent: '@svgr/webpack?-svgo![path]'
                                          }
                                      }
                                  }
                              ]
                          ],
                          cacheDirectory: true,
                          cacheCompression: false,
                          compact: false
                      }
                  },
                  // for css
                  {
                      test: cssRegex,
                      exclude: cssModuleRegex,
                      loader: require.resolve('css-loader'),
                      options: {
                          exportOnlyLocals: true //not making real css file
                      }
                  },
                  // for CSS module
                  {
                      test: cssModuleRegex,
                      loader: require.resolve('css-loader'),
                      options: {
                          module: true,
                          exportOnlyLocals: true,
                          getLocalIdent: getCSSModuleLocalIdent
                      }
                  },
                  // for Sass
                  {
                      test: sassRegex,
                      exclude: sassModuleRegex,
                      use: [
                          {
                              loader: require.resolve('css-loader'),
                              options: {
                                  exportOnlyLocals: true,
                              }
                          },
                          require.resolve('sass-loader')
                      ]
                  },
                  // sass + css module
                  {
                      test: sassRegex,
                      exclude: sassModuleRegex,
                      use: [
                          {
                              loader: require.resolve('css-loader'),
                              options: {
                                  modules: true,
                                  exportOnlyLocals: true,
                                  getLocalIdent: getCSSModuleLocalIdent
                              }
                          },
                          require.resolve('sass-loader')
                      ]
                  },
                  // for url-loader
                  {
                      test: [/\.bmp$/, /\.gif$/, /\.jpe?g$/, /\.png$/],
                      loader: require.resolve('url-loader'),
                      options: {
                          emitFile: false,
                          limit: 1000,
                          name: 'static/media[name].[hash:8].[ext]'
                      }
                  },
                  // except for ext listed above,
                  // all ext is using file-loader
                  {
                      loader: require.resolve('file-loader'),
                      exclude: [/\.(js|mjs|jsx|ts|tsx)$/, /\.html$/, /\.json$/],
                      options: {
                          emitFile: false,
                          name: 'static/media/[name].[hash:8][ext]'
                      }
                  }
              ]
            },
        ]
    },
    resolve: {
        modules: ['node_modules']
    }
};