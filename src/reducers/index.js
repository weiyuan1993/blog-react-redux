import { combineReducers } from 'redux'; //合併多個reducer用
import PostsReducer from './reducer_posts';
import { reducer as formReducer } from 'redux-form';
const rootReducer = combineReducers({
  posts:PostsReducer,
  form:formReducer
});

export default rootReducer;
