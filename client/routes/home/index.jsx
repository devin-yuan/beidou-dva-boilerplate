/**
 * 首页
 */

import React, { PureComponent } from 'react';
import { Link } from 'dva/router';
import { connect } from 'dva';

class Home extends PureComponent {
  render() {
    const { dispatch, count } = this.props;

    return (
      <div>
        这里是首页

        <a href="/user/2">123</a>
        <br />
        <Link to="/user/3">234</Link>

        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'column',
          }}
        >
          <h1>Beidou example with dva</h1>
          <h2>{count}</h2>
          <div>
            <button
              key="add"
              onClick={() => {
                dispatch({
                  type: 'home/calculate',
                  payload: {
                    number: count + 1,
                  },
                });
              }}
              style={{
                marginRight: '10px',
              }}
            >
              +
            </button>
            <button
              key="minus"
              onClick={() => {
                dispatch({
                  type: 'home/calculate',
                  payload: {
                    number: count - 1,
                  },
                });
              }}
            >
              -
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default connect(({ home }) => ({
  count: home.count,
}))(Home);
