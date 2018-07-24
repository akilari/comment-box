import { combineReducers } from 'redux';
import commentReducer from './reducers_comment';
import updateReducer from './reducers_update';
import updateForumReducer from './reducers_forums';

const rootReducer = combineReducers({
  comments: commentReducer,
  updated: updateReducer,
  forum: updateForumReducer
});

export default rootReducer;
