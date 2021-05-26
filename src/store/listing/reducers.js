import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  loading: false,
  error: null,
  profiles: null,
  query: null,
  selectedProfile: null,
  services: {
    loading: false,
    page: 0,
    items: null,
    error: null,
  },
};

const listingReducer = createSlice({
  name: 'listing',
  initialState,
  reducers: {
    clearState(state) {
      return {
        ...state,
        loading: false,
        error: null,
        profiles: null,
        query: null,
        selectedProfile: null,
      };
    },
    setLoading(state, {payload}) {
      return {...state, loading: payload};
    },
    setProfiles(state, {payload}) {
      return {...state, profiles: payload};
    },
    setError(state, {payload}) {
      return {...state, error: payload};
    },
    setQuery(state, {payload}) {
      return {...state, query: payload};
    },
    setSelectedProfile(state, {payload}) {
      return {...state, selectedProfile: payload};
    },
    setServices(state, {payload}) {
      state.services.items = payload.items;
      state.services.page = payload.page;
      state.services.loading = false;
    },
    setServicesError(state, {payload}) {
      state.services.error = payload;
      state.services.loading = false;
    },
    setServicesLoading(state) {
      state.services.loading = true;
    },
    clearSelectedProfile(state) {
      return {...state, selectedProfile: null};
    },
  },
});

export const {
  clearState,
  setError,
  setProfiles,
  setLoading,
  setQuery,
  setServices,
  setServicesError,
  setServicesLoading,
  setSelectedProfile,
  clearSelectedProfile,
} = listingReducer.actions;
export default listingReducer.reducer;
