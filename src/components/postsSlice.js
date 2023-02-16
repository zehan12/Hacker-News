import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { getStories } from '../utils/apis';

const initialState = {
  posts: [],
  loading: false,
  error: null,
}

export const fetchPosts = createAsyncThunk('posts/fetchPosts', async () => {
  const response = await getStories();
  return response;
})

const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    likePost(state, action) {
      const { postId } = action.payload
      const existingPost = state.posts.find((post) => post.id === postId)
      if (existingPost) {
        existingPost.starred = !existingPost.starred;
      }
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchPosts.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(fetchPosts.fulfilled, (state, action) => {
        state.loading = false;
        state.posts = action.payload;
      })
      .addCase(fetchPosts.rejected, (state, action) => {
        state.status = false;
        state.error = action.error.message;
      })
  }
})

export const { likePost } = postsSlice.actions

export default postsSlice.reducer

export const savedPosts = (state) => {
  return state.posts.posts.filter((post) => post.starred === true);
}