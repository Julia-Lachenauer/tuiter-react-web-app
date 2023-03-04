import {createSlice} from "@reduxjs/toolkit";
import tuits from './tuits.json';

const currentUser = {
  "userName": "NASA",
  "handle": "@nasa",
  "image": "nasa.png"
};

const templateTuit = {
  ...currentUser,
  "topic": "Space",
  "time": "2h",
  "liked": false,
  "replies": 0,
  "retuits": 0,
  "likes": 0
};

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
    },
    createTuit(state, action) {
      state.unshift({
        ...action.payload,
        ...templateTuit,
        _id: (new Date()).getTime()
      });
    },
    deleteTuit(state, action) {
      const index = state
      .findIndex(tuit =>
          tuit._id === action.payload);
      state.splice(index, 1);
    }
  }
});

export const {toggleTuitLiked, createTuit, deleteTuit} = tuitsSlice.actions;
export default tuitsSlice.reducer;