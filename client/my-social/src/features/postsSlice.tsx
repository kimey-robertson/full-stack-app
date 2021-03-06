import { createSlice } from "@reduxjs/toolkit";

const initialState: any = {
    redditData: {},
    onPosts: false,
    postsLoaded: false
  };

export const postsSlice = createSlice({
    name: "posts",
    initialState: initialState,
    reducers: {
        setRedditData: (state, action) => {
            state.redditData = action.payload;
          },
        setOnPosts: (state, action) => {
            state.onPosts = action.payload;
          },
        setPostsLoaded: (state, action) => {
            state.postsLoaded = action.payload;
          }
    }

});

export const { setRedditData, setOnPosts, setPostsLoaded } = postsSlice.actions;
export default postsSlice.reducer;