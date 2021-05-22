import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  loading: false,
  error: null,
  user: null,
  isUserLogged: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState: initialState,
  reducers: {
    userAuthStart(state, action) {
      return {
        ...state,
        loading: true,
        error: null,
        user: null,
        isUserLogged: false,
      };
    },
    userAuthSuccess(state, {payload}) {
      return {...state, loading: false, user: payload, isUserLogged: true};
    },
    userAuthFail(state, {payload}) {
      return {...state, loading: false, error: payload, isUserLogged: false};
    },
    userLogout(state) {
      return {
        ...state,
        loading: false,
        error: null,
        user: null,
        isUserLogged: false,
      };
    },
  },
});

export const {
  userAuthStart,
  userAuthSuccess,
  userAuthFail,
  userLogout,
} = authSlice.actions;

export default authSlice.reducer;
