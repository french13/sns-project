import { createSlice } from "@reduxjs/toolkit"
import {postContent} from "./post";



const initialState = {
  user: {
    isLoggedIn: false,
    user: null,
    signUpdata: {},
    loginData: {},
  },
};

const initialStatePost ={
    mainPosts: [postContent],
  
}
const dummyPost = {
  id : 2,
  content : "더미데이터",
  User : {
    id : 1,
    nickname : "dummy",
  },
  Image : [],
  Comments : [],
}

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
    initialState  : initialStatePost.mainPosts,
    reducers: {
      addPost(state, actions){
        return (state = [...state, dummyPost])
      }
    }
})

export let { changeNickname, loginAction, logoutAction } = user.actions;
export let { addPost } = post.actions;

export { user, post };
