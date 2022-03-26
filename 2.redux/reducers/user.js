const initialState = {
  isLoggingIn: false,
  data: null,
};

const userReducer = (prevState = initialState, action) => {
  switch (action.type) {
    case 'LOG_IN':
      return {
        ...prevState,
        data: action.data,
        isLoggingIn: true,
      };
    case 'LOG_OUT':
      return {
        ...prevState,
        data: null,
        isLoggingIn: false,
      };
    default:
      return prevState;
  }
};

module.exports = userReducer;
