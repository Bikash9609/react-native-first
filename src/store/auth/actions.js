import * as API from '../../axios';
import { userAuthFail, userAuthStart, userAuthSuccess, userLogout as useLogout } from './reducers';
import URL from '../../constants/Globals';
import jwtDecode from 'jwt-decode';
import * as SecureStore from 'expo-secure-store';

export function userLogin({ email, password }) {
  return async (dispatch) => {
    dispatch(userAuthStart());
    try {
      const res = await API.post(URL.login, { email, password }, true);
      if (!res) {
        throw new Error('Problem logging in! Please try again.');
      }

      const decodedToken = jwtDecode(res.token);
      const exp = decodedToken.exp;
      const userType = decodedToken.userType;

      await SecureStore.setItemAsync('token', res.token);
      dispatch(userAuthSuccess({ ...res, tokenExp: exp, viewType: userType }));
    } catch (error) {
      dispatch(userAuthFail({ error: JSON.stringify(error) }));
    }
  };
}

export function pageRefreshPersist() {
  return async (dispatch, getState) => {
    const {
      auth: { user },
    } = getState();
    try {
      const data = { userId: null, token: null };

      data.userId = user?.userId;
      data.token = user?.token;
      dispatch(userAuthStart());
      // dispatch(profileActions.fetchProfileStart());
      const res = await API.post(
        URL.getProfileData,
        {
          token: data.token,
        },
        true,
      );
      if (!res || res.status !== 200) {
        throw new Error('Could not login!');
      }
      const { name, userName, email } = res.data.fetchedUser;
      const updatedData = {
        name,
        userName,
        email,
        ...data,
      };
      dispatch(userAuthSuccess(updatedData));
      // dispatch(profileActions.fetchProfileSuccess(res.data.fetchedUser));
    } catch (error) {
      dispatch(
        userAuthFail({
          error: JSON.stringify(error),
          message: error?.message,
          data: JSON.stringify(error?.data),
        }),
      );
    }
  };
}

export function userSignup(data) {
  return async (dispatch) => {
    try {
      dispatch(userAuthStart());
      const res = await API.post(URL.signup, {
        ...data,
      });
      if (!res) {
        return new Error('Some error occurred. Signup failed!');
      }
      dispatch(userAuthSuccess(res));
    } catch (error) {
      dispatch(
        userAuthFail({
          error: JSON.stringify(error),
          message: error?.message,
          data: JSON.stringify(error?.data),
        }),
      );
    }
  };
}

export function userLogout() {
  return async (dispatch) => {
    dispatch(useLogout());
    // dispatch(clearProfile());
  };
}
