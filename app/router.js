/**
 * 自定义路由
 */

module.exports = (app) => {
  const { router, controller } = app;

  router.get('home', '/', controller.home.index); // 首页

  require('./router/user')(app); // 用户模块
  require('./router/news')(app); // 新闻模块
};
