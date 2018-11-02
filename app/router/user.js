/**
 * 用户模块 路由
 */

module.exports = (app) => {
  const { router, controller } = app;

  router.get('userInfo', '/user/:id', controller.user.info);
};
