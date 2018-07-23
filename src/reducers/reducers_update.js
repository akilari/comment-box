import _ from '../actions/index';

export default function(state=[],action){
  switch(action.type){
    case 'UPDATE_COMMENT':
    return [action, ...state];
  }
  return state;
}
