import { combineReducers } from 'redux';
import commentReducer from './reducers_comment';
import updateReducer from './reducers_update';

const rootReducer = combineReducers({
  comments: commentReducer,
  updated: updateReducer
});

export default rootReducer;
