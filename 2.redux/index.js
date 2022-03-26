const { createStore, applyMiddleware } = require('redux');
const reducer = require('./reducers');
const { logIn, logOut } = require('./actions/user');
const { addPost } = require('./actions/post');
const initialState = {
  // user: {
  //   isLoggingIn: false,
  //   data: null,
  // },
  // post: [],
  comments: [],
  favorites: [],
  history: [],
  likes: [],
  followers: [],
};

const firstMiddleware = (store) => (dispatch) => (action) => {
  console.log('로깅', action);
  dispatch(action);
};

const thunkMiddleware = (store) => (dispatch) => (action) => {
  if (typeof action === 'function') {
    // 비동기
    return action(store.dispatch, store.getState);
  }
  return dispatch(action); // 동기
};
const enhancer = applyMiddleware(firstMiddleware, thunkMiddleware);

const store = createStore(reducer, initialState, enhancer);

// 밑에부터 리액트에서 컨트롤
// store.dispatch(
//   logIn({
//     id: 1,
//     name: 'woody',
//     admin: true,
//   })
// );

// console.log('logIn', store.getState());

// store.dispatch(
//   addPost({
//     userId: 1,
//     id: 1,
//     content: '안녕하세요',
//   })
// );

// console.log('post', store.getState());

// store.dispatch(logOut());

// console.log('logOut', store.getState());

store.dispatch(
  logIn({
    id: 1,
    name: 'woody',
    admin: true,
  })
);

console.log(store.getState());
