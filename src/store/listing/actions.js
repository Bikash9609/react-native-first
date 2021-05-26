import {
  clearState,
  setError,
  setLoading,
  setProfiles,
  setQuery,
  setSelectedProfile,
  setServices,
  setServicesError,
  setServicesLoading,
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

export function searchServices(profileId, page) {
  return async (dispatch) => {
    dispatch(setServicesLoading());
    try {
      const payload = {
        sellerId: profileId,
        page: page,
      };
      const allServices = await post(URL.getServices, payload);
      dispatch(
        setServices({
          items: allServices?.data,
          page,
        }),
      );
    } catch (error) {
      dispatch(
        setServicesError({
          message: error.message,
          status: error.status,
          data: JSON.stringify(error),
        }),
      );
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
      dispatch(searchServices(profileId, 0));
      dispatch(setSelectedProfile(results));
      dispatch(setLoading(false));
    } catch (err) {
      dispatch(setError(err));
      dispatch(setLoading(false));
    }
  };
}
