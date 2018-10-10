import { get, post, put } from './request';

const URL = '/api';
// const AUTH_URL = `${URL}/auth`;
const ESSAY_URL = `${URL}/essays`;
// const SIGNUP_URL = `${AUTH_URL}/signup`;
// const SIGNIN_URL = `${AUTH_URL}/signin`;

// export const signup = credentials => post(SIGNUP_URL, credentials);
// export const signin = credentials => post(SIGNIN_URL, credentials);

// export const postRecord = game => {
//   delete game.key;
//   post(RECORD_URL, game);
// };

// export const verifyUser = token => {
//   return get(`${AUTH_URL}/verify`, {
//     headers: {
//       Authorization: token
//     }
//   });
// };

export const submitEssay = essay => post(ESSAY_URL, essay);
