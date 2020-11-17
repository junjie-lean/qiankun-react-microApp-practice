/*
 * @Author: junjie.lean
 * @Date: 2020-11-16 17:33:02
 * @Last Modified by: junjie.lean
 * @Last Modified time: 2020-11-16 17:54:16
 */

export const setGlobal_action = (globalState) => {
  return {
    type: "SET_GLOBAL_STATE",
    globalState,
  };
};
