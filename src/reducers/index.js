import { combineReducers } from 'redux'; //合併多個reducer用
import titleReducer from './reducer_title';
import postsReducer from './reducer_posts';
import { reducer as formReducer } from 'redux-form';
const rootReducer = combineReducers({
  title:titleReducer,
  posts:postsReducer,
  form:formReducer
});

export default rootReducer;
