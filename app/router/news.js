/**
 * 新闻模块 路由
 */

module.exports = (app) => {
  const { router, controller } = app;

  router.get('newsList', '/news/list', controller.news.list);
};
