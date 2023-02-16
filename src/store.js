import { configureStore } from '@reduxjs/toolkit';

import postsReducer from './components/postsSlice';

export default configureStore({
  reducer: {
    posts: postsReducer,
  },
})
