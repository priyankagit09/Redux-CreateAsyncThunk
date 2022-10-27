import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";


export const getPosts =createAsyncThunk("posts/details", async() => 
       {
        const response= await fetch("https://jsonplaceholder.typicode.com/posts");
          console.log(response)

    return response.json()
       }
);

const initialState= {
    posts: [],
    loading: false,
    rejected: false
}




const postSlice=createSlice({
    name: "postDetails",
    initialState,
    extraReducers: {
        [getPosts.pending] : (state, action) => {
              state.loading=true;
        },
        [getPosts.fulfilled] : (state, action) => {
            state.loading=false;
            state.posts=action.payload
      },
      [getPosts.rejects] : (state, action) => {
        state.loading=false;
        state.rejected=true
  },
    }


})


export default postSlice.reducer