import { combineReducers } from 'redux';
import user from './user';
import quiz from './quiz';

const rootReducer = combineReducers({
    user,
    quiz
});

export default rootReducer;
