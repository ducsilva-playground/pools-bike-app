/** @format */

import { combineReducers } from 'redux';
import home from './home/Reducer';
import notify from './notify/Reducer';
import user from './user/Reducer';

export default combineReducers({
  home,
  user,
  notify,
  
});
