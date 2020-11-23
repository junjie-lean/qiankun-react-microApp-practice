/*
 * @Author: junjie.lean
 * @Date: 2020-11-16 10:43:23
 * @Last Modified by: junjie.lean
 * @Last Modified time: 2020-11-23 13:29:49
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

export const someCompenentValue_reducer = (
  state = defaultVersion,
  { type, data }
) => {
  switch (type) {
    case "some unique value": {
      return {
        version: data,
      };
    }
    default: {
      return state;
    }
  }
};
const defaultToken = {
  token: "unset",
};

export const token_reducer = (state = defaultToken, { type, token }) => {
  switch (type) {
    case "modify_token": {
      return {
        token: token,
      };
    }
    default: {
      return defaultToken;
    }
  }
};
