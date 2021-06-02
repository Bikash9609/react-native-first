import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  loading: false,
  error: null,
  user: null,
  deleteProfile: false,
  logoutUserNow: false,
  isSetToDelete: false,
};

const profileSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {
    onLogout(state, action) {
      return {
        ...state,
        loading: false,
        error: null,
        user: null,
        deleteProfile: false,
        logoutUserNow: true,
        isSetToDelete: false,
      };
    },
    setLoading(state) {
      state.loading = true;
    },
    setError(state, { payload }) {
      state.error = payload;
      state.loading = false;
    },
    setUser(state, { payload }) {
      state.user = payload;
      state.loading = false;
      state.error = null;
    },
    setDeleteProfile(state, { payload }) {
      state.deleteProfile = payload;
      state.isSetToDelete = true;
      state.loading = false;
    },
  },
});

export const { setLoading, setUser, onLogout, setDeleteProfile, setError } = profileSlice.actions;
export default profileSlice.reducer;
