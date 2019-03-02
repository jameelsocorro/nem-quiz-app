import { combineReducers } from 'redux';
import user from './user';
import quiz from './quiz';
import userQuiz from './user-quiz';

const rootReducer = combineReducers({
    user,
    quiz,
    userQuiz
});

export default rootReducer;
