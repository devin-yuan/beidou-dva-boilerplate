import '@babel/polyfill';
import React, { Component } from 'react';
import dva from 'dva';
// import { memoryHistory, browserHistory } from 'dva/router';
import router from './router';

function createApp(opts) {
  const app = dva(opts);

  app.router(router);

  return app;
}

export default class Index extends Component {
  static async getStore() {
    return {
      abc: 123,
    };
  }

  static getPartial({ store, ctx }) {
    console.log('看下这两个', store, ctx);

    // const app = createApp({
    //   history: memoryHistory,
    // });

    const app = createApp();

    return {
      html: app.start()(),
    };
  }

  render() {
    const { html, state, helper } = this.props;

    console.log('妈的，这是个啥', state);

    return (
      <html>
        <head>
          <title>Beidou example with dva</title>
        </head>
        <body>
          <div id="container" dangerouslySetInnerHTML={{ __html: html }} />

          {/* <script src="https://cdnjs.cloudflare.com/ajax/libs/react/16.4.2/umd/react.production.min.js" />
          <script src="https://cdnjs.cloudflare.com/ajax/libs/react-dom/16.4.2/umd/react-dom.production.min.js" /> */}
          <script src={helper.asset('manifest.js')} />
          <script src={helper.asset('index.js')} />
        </body>
      </html>
    );
  }
}

if (__CLIENT__) {
  // const app = createApp({
  //   history: browserHistory,
  // });

  const app = createApp();

  // 5. Start
  app.start('#container');
}
