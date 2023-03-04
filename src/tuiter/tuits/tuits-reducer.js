import {createSlice} from "@reduxjs/toolkit";
import tuits from './tuits.json';

const tuitsSlice = createSlice({
  name: 'tuits',
  initialState: tuits,
  reducers: {
    toggleTuitLiked(state, action) {
      console.log(action);
      const tuitToToggle = state.find(tuit => tuit._id === action.payload._id);
      if (tuitToToggle.liked) {
        tuitToToggle.liked = false;
        tuitToToggle.likes = Math.max(0, tuitToToggle.likes - 1);
      } else {
        tuitToToggle.liked = true;
        tuitToToggle.likes++;
      }
    }
  }
});

export const {toggleTuitLiked} = tuitsSlice.actions;
export default tuitsSlice.reducer;