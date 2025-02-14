import { combineReducers } from '@reduxjs/toolkit';
import { getPostsSliceData } from './features/bestPractices/GetPosts';

const rootReducer = combineReducers({
  getPostsData:getPostsSliceData
});

export default rootReducer;