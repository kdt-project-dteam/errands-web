import { combineReducers } from 'redux';
import testCounter from './testCounter';

const rootReducer = combineReducers({
    test: testCounter,
})

export default rootReducer;