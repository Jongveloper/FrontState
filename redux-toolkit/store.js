const { configureStore } = require('@reduxjs/toolkit');

const reducer = require('./reducers');
const { addPost } = require('./actions/post');
const { logIn, logOut } = require('./actions/user');

const firstMiddleware = (store) => (next) => (action) => {
  console.log('로깅', action);
  next(action);
};

const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(firstMiddleware),
  devTools: process.env.NODE_ENV !== 'production',
});

module.exports = store;
