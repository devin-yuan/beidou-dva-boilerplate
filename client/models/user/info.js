/**
 * 用户信息 Model
 */

export default {
  namespace: 'userInfo',
  state: {
    info: {},
  },
  effects: {

  },
  reducers: {
    updateState(state, { payload }) {
      return {
        ...state,
        ...payload,
      };
    },
  },
};
