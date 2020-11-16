/*
 * @Author: junjie.lean
 * @Date: 2020-11-16 10:40:07
 * @Last Modified by: junjie.lean
 * @Last Modified time: 2020-11-16 17:06:51
 */

import { combineReducers } from "redux";

//example:
import { someCompenentValue_reducer,globalState_reducer } from "./reducers/some.component.reducer";

export default combineReducers({ someCompenentValue_reducer ,globalState_reducer});
