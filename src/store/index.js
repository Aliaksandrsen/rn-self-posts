import { createStore, combineReducers } from 'redux';
import { postReducer } from './reducers/post'

const rootReduser = combineReducers({
    post: postReducer,
})

export default createStore(rootReduser);
