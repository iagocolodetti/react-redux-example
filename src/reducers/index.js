import counter from './counter';
import text from './text';
import todo from './todo';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  counter,
  text,
  todo
})

export default rootReducer;
