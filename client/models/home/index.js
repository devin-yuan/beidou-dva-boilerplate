/**
 * 首页 Model
 */

export default {
  namespace: 'home',
  state: {
    count: 0,
  },
  effects: {
    * calculate({ payload }, { put }) {
      yield put({
        type: 'updateState',
        payload: {
          count: payload.number,
        },
      });
    },
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
