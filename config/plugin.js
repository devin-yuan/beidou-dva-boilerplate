/**
 * 插件配置
 */

'use strict';

// 参数校验
exports.validate = {
  enable: true, // 是否开启此插件，默认为 true
  package: 'egg-validate', // npm 模块名称，通过 npm 模块形式引入插件
  // {String} path - 插件绝对路径，跟 package 配置互斥
  // {Array} env - 只有在指定运行环境才能开启，会覆盖插件自身 package.json 中的配置
};
