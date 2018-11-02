/**
 * webpack 配置
 */

'use strict';

// const webpack = require('webpack');

module.exports = (app, defaultConfig) => ({
  ...defaultConfig,
  // externals: {
  //   react: 'React',
  //   'react-dom': 'ReactDOM',
  // },
});

// module.exports = (app, defaultConfig) => {
//   defaultConfig.plugins = [
//     ...defaultConfig.plugins,
//     new webpack.DefinePlugin({
//       __AAA__: 'aaa',
//     }),
//   ];

//   console.log('看一下', defaultConfig.plugins);

//   return defaultConfig;
// };
