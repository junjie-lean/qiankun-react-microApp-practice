/*
 * @Author: junjie.lean
 * @Date: 2020-11-16 10:43:23
 * @Last Modified by: junjie.lean
 * @Last Modified time: 2020-11-16 17:53:34
 */

/**
 * example reducer file should like this,
 *
 */
const defaultVersion = {
  version: {
    redux: require("./../../../node_modules/redux/package").version,
    reactRedux: require("./../../../node_modules/react-redux/package").version,
    reduxPersist: require("./../../../node_modules/redux-persist/package")
      .version,
  },
};

const defaultGloableState = {
  state: {},
};

export const someCompenentValue_reducer = (
  state = defaultVersion,
  { type }
) => {
  switch (type) {
    case "some unique value": {
      return {
        version: undefined,
      };
    }
    default: {
      return state;
    }
  }
};

export const globalState_reducer = (
  defaultState = defaultGloableState,
  { type, globalState }
) => {
  switch (type) {
    case "SET_GLOBAL_STATE": {
      return {
        state: globalState,
      };
    }
    default: {
      return { ...defaultState };
    }
  }
};
