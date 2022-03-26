const { createAsyncThunk } = require('@reduxjs/toolkit');

const delay = (time, value) =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(value);
    }, time);
  });

const logIn = createAsyncThunk('user/login', async (data, thunkAPI) => {
  console.log(data);
  const result = await delay(500, {
    userId: 1,
    nickname: 'woody',
  });
  return result;
});

// const logIn = (data) => {
//   // async action creator
//   return (dispatch, getState) => {
//     // async action
//     dispatch(logInRequest(data));
//     try {
//       setTimeout(() => {
//         dispatch(
//           logInSuccess({
//             userId: 1,
//             nickname: 'zerocho',
//           })
//         );
//       }, 2000);
//       // axios.post().then().catch()으로 나중에 대체
//     } catch (e) {
//       dispatch(logInFailure(e));
//     }
//   };
// };
module.exports = {
  logIn,
};
