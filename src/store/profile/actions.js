import axios, { post } from '../../axios';
import { api as URLS } from '../../constants/Globals';
import { onLogout, setDeleteProfile, setError, setLoading, setUser } from './reducers';

export function fetchUserProfile() {
  return async (dispatch) => {
    dispatch(setLoading());
    try {
      const res = await post(URLS.getProfileData);

      if (!res) {
        if (res) throw new Error(res);
      }

      dispatch(setUser(res.fetchedUser));
    } catch (error) {
      dispatch(setError({ error: JSON.stringify(error) }));
    }
  };
}

export function updateProfile(data) {
  const _data = data;
  return async (dispatch) => {
    dispatch(setLoading());
    try {
      const res = await axios.post(URLS.changeProfileData, {
        ..._data,
      });
      if (!res) {
        return new Error('Error updating profile. Please try again.');
      }
      dispatch(setUser(res));
    } catch (error) {
      dispatch(setError({ error: JSON.stringify(error) }));
    }
  };
}

export function deleteProfile({ token, password }) {
  return async (dispatch) => {
    dispatch(setLoading());
    try {
      const res = await axios.post(URLS.deleteProfile, {
        token,
        password,
      });
      if (!res) {
        new Error('Some error occurred. Please try again!');
      }

      const { data } = res;
      dispatch(setDeleteProfile(data));
    } catch (error) {
      dispatch(setError({ error: JSON.stringify(error) }));
    }
  };
}

// Logout Action
export const clearProfile = () => async (dispatch) => {
  dispatch(onLogout());
};

export const updateTags = (payload) => async (dispatch, getState) => {
  const {
    profile: { user },
  } = getState();
  try {
    const res = await post(URLS.addTags, payload);
    if (!res) throw Error('Some error ocurred. Please refresh page and try again');
    const updatedData = { ...user, tags: res.tags };
    dispatch(setUser(updatedData));
  } catch (error) {}
};
