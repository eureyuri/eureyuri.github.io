import { combineReducers } from 'redux';
import { moreTabReducer } from './moreTab';

const rootReducer = combineReducers({ moreTab: moreTabReducer })

export default rootReducer;