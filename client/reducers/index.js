import { combineReducers } from 'redux';

import swapReducer from './swapReducer';
import renderingReducer from './renderingReducer';

const reducers = combineReducers({
  swap: swapReducer,
//   main: mainReducer,
  rendering: renderingReducer,
})


export default reducers;