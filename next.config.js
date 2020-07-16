// const withLess = require('@zeit/next-less');
const path = require('path');
const withLess = require(path.join(process.cwd(), './webpack_config/index'));

let config = {
  distDir: '__next',
  assetPrefix: '/imagegenerator',
  // cssModules: true,
  // cssLoaderOptions: {
  //   importLoaders: 1,
  //   localIdentName: '[local]___[hash:base64:5]',
  // },
  webpack: (conf) => {
    // conf.module.rules.push(
    //   {
    //     test: /\.(eot|woff|woff2|ttf|svg|png|jpg|gif)$/,
    //     use: {
    //       loader: 'url-loader',
    //       options: {
    //         limit: 100000,
    //         name: '[name].[ext]',
    //       },
    //     },
    //   },
    // {
    //   test: /\.css/,
    //   loader: 'emit-file-loader',
    //   options: {
    //     name: 'dist/[path][name].[ext]',
    //   },
    // },
    // {
    //   test: /\.css$/,
    //   use: ['babel-loader', 'raw-loader', 'postcss-loader'],
    // }
    // );
    Object.assign(conf.resolve, {
      alias: {
        ...conf.resolve.alias,
        '@': path.resolve(__dirname, 'src'),
        '@components': path.resolve(__dirname, 'src/components'),
        '@lib': path.resolve(__dirname, 'src/lib'),
        '@util': path.resolve(__dirname, 'src/util'),
        '@config': path.resolve(__dirname, 'src/config'),
        '@pages': path.resolve(__dirname, 'pages'),
      },
    });

    return conf;
  },
};

config = withLess(config);
module.exports = config;
