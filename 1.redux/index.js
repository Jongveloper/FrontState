const { createStore } = require('redux');

const reducer = (prevState, action) => {
  switch (action.type) {
    case 'CHANGE_COMP_A':
      return {
        ...prevState,
        compA: action.data,
      };
    case 'CHANGE_COMP_B':
      return {
        ...prevState,
        compB: action.data,
      };
    case 'CHANGE_COMP_C':
      return {
        ...prevState,
        compC: action.data,
      };
    default:
      return prevState;
  }
};

const initialState = {
  compA: 'a',
  combB: 12,
  compC: null,
};

const store = createStore(reducer, initialState);

console.log(store.getState());

const changeCompA = (data) => {
  return {
    // action
    type: 'CHANGE_COMP_A',
    data,
  };
};

store.dispatch(changeCompA('b'));

console.log(store.getState());
