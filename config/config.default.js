/**
 * 默认配置
 */

'use strict';

const path = require('path');

module.exports = {
  mobile: false, // 是否是移动端项目
  keys: 'secrets', // Cookie 加解密和延签的秘钥
  // webpack 配置
  webpack: {
    custom: {
      configPath: path.join(__dirname, './webpack.config.js'),
    },
  },
  react: {
    static: true,
  },
};
