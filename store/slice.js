import { createSlice } from "@reduxjs/toolkit"
import {postContent} from "./post";



const initialState = {
  user: {
    isLoggedIn: false,
    user: null,
    signUpdata: {},
    loginData: {},
  },
  mainPost: {
    mainPosts: [postContent],
  },
};

// slice
const user = createSlice({
  name: "user",
  initialState: initialState.user,
  reducers: {
    changeNickname(state, actions) {
      return (state = { ...state, name: actions.payload });
    },

    loginAction(state, actions) {
      return (state = {
        ...state.user,
        isLoggedIn: true,
        user: actions.payload,
      });
    },

    logoutAction(state, actions) {
      return (state = { ...state.user, isLoggedIn: false, user: null });
    },
  },
});

const post = createSlice({
    name : "post",
    initialState  : initialState.post,
    reducers: {

    }
})

export let { changeNickname, loginAction, logoutAction } = user.actions;

export { user, post };
