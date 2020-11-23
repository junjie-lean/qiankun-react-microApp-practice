/*
 * @Author: junjie.lean
 * @Date: 2020-11-16 15:22:12
 * @Last Modified by: junjie.lean
 * @Last Modified time: 2020-11-23 13:08:07
 */

import { combineReducers } from "redux";

import {
  someCompenentValue_reducer,
  token_reducer,
} from "./reducers/some.component.reducer";

export default combineReducers({ someCompenentValue_reducer, token_reducer });
