import { createWrapper } from "next-redux-wrapper";
import {
  applyMiddleware,
  compose,
  configureStore,
} from "@reduxjs/toolkit";
import { composeWithDevTools } from "redux-devtools-extension";
import {user, post} from './slice'


const createStore = () => {
  // 개발용일때만 데브툴즈 연결
  const middlewares = [];
  const enhancer =
    process.env.NODE_ENV === "production"
      ? compose(applyMiddleware(...middlewares))
      : composeWithDevTools(applyMiddleware(...middlewares));
  // sage나 thunk가 []안에 들어감
  const store = configureStore({
    reducer: {
      user: user.reducer,
      post : post.reducer,
    },
    enhancer,
  });
  return store;
};

const wrapper = createWrapper(createStore, {
  // debug 를 true로 하면 자세한 설명이 나와서 개발하기 편하다
  debug: process.env.NODE_ENV === "development",
});

export default wrapper;

// componenets는 화면을 그리는데 집중하고 데이터 관리는 따로 관리하자
