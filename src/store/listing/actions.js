import {
  clearState,
  setError,
  setLoading,
  setProfiles,
  setQuery,
  setSelectedProfile,
  clearSelectedProfile,
} from './reducers';
import {publicUrls as URL} from '../../constants/Globals';
import {post, get} from '../../axios';

export function searchProfiles(category, page) {
  return async (dispatch) => {
    dispatch(clearState());
    dispatch(setLoading(true));
    try {
      let payload = {
        category,
        page: page || 0,
      };
      const results = await post(URL.getProfiles, payload);
      dispatch(setProfiles(results));
      dispatch(setQuery(category));
      dispatch(setLoading(false));
    } catch (error) {
      dispatch(setError(error));
      dispatch(setLoading(false));
    }
  };
}

export function searchProfilesById(profileId) {
  return async (dispatch) => {
    dispatch(clearSelectedProfile());
    dispatch(setLoading(true));
    try {
      let payload = {
        profileId,
      };
      const results = await post(URL.getById, payload);
      dispatch(setSelectedProfile(results));
      dispatch(setLoading(false));
    } catch (err) {
      dispatch(setError(err));
      dispatch(setLoading(false));
    }
  };
}
