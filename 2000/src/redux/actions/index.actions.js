/*
 * @Author: junjie.lean
 * @Date: 2020-11-23 13:02:08
 * @Last Modified by: junjie.lean
 * @Last Modified time: 2020-11-23 13:27:02
 */

export const modifyToken_action = (token) => {
  return {
    type: "modify_token",
    token: token,
  };
};
