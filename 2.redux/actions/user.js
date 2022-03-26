const logIn = (data) => {
  //async action creator
  return (dispatch, getState) => {
    // async action
    dispatch(logInRequest(data));
    try {
      setTimeout(() => {
        dispatch(
          logInSuccess({
            userId: 1,
            nickname: 'woody',
          })
        );
      }, 2000);
    } catch (e) {
      dispatch(logInFailure(e));
    }
  };
};

const logInRequest = (data) => {
  //sync action creator
  return {
    // action
    type: 'LOG_IN_REQUEST',
    data,
  };
};

const logInSuccess = (data) => {
  return {
    type: 'LOG_IN_SUCCESS',
    data,
  };
};

const logInFailure = (error) => {
  return {
    type: 'LOG_IN_FAILURE',
    error,
  };
};

const logOut = () => {
  return {
    type: 'LOG_OUT',
  };
};

module.exports = {
  logIn,
  logOut,
};
