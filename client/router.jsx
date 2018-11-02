/**
 * 客户端路由配置
 */

import React from 'react';
/**
 * dva/router
 * 默认输出 react-router 的接口
 * react-router-redux 的接口通过属性 routerRedux 输出
 * react-router: https://github.com/ReactTraining/react-router
 * react-router-redux: https://github.com/reactjs/react-router-redux
 */
import { Switch, Route, routerRedux } from 'dva/router';
import dynamic from 'dva/dynamic'; // 解决组件动态加载问题的 util 方法

const { ConnectedRouter } = routerRedux; // react router和redux结合使用
const Routers = ({ history, app }) => {
  const routes = [
    {
      path: '/',
      models: () => [
        require('./models/home'),
      ],
      component: () => require('./routes/home'),
    }, {
      path: '/user/:id',
      models: () => [
        require('./models/user/info'),
      ],
      component: () => require('./routes/user/info'),
    }, {
      path: '/news/list',
      component: () => require('./routes/news/list'),
    },
  ];

  console.log('历史记录', history);

  return (
    <ConnectedRouter history={history}>
      <Switch>
        {routes.map(({ path, ...dynamics }, index) => {
          const routeKey = `route_${index}`;

          return (
            <Route
              key={routeKey}
              exact
              path={path}
              component={dynamic({
                app,
                ...dynamics,
              })}
            />
          );
        })}
      </Switch>
    </ConnectedRouter>
  );
};

export default Routers;
