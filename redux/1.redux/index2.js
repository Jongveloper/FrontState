const { createStore } = require('redux');

const reducer = (prevState, action) => {
  switch (action.type) {
    case 'LOG_IN':
      return {
        ...prevState,
        user: action.data,
      };
    case 'ADD_POST':
      return {
        ...prevState,
        post: [...initialState.post, action.data],
      };
    case 'LOG_OUT':
      return {
        ...prevState,
        user: null,
      };
    default:
      return prevState;
  }
};

const initialState = {
  user: null,
  post: [],
};

const store = createStore(reducer, initialState);

console.log(store.getState());

const logIn = (data) => {
  return {
    // action
    type: 'LOG_IN',
    data,
  };
};

const logOut = () => {
  return {
    type: 'LOG_OUT',
  };
};

const addPost = (data) => {
  return {
    type: 'ADD_POST',
    data,
  };
};

// 밑에부터 리액트에서 컨트롤
store.dispatch(
  logIn({
    id: 1,
    name: 'woody',
    admin: true,
  })
);

console.log('logIn', store.getState());

store.dispatch(
  addPost({
    userId: 1,
    id: 1,
    content: '안녕하세요',
  })
);

console.log('post', store.getState());

store.dispatch(logOut());

console.log('logOut', store.getState());
