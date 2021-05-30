import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  loading: false,
  error: null,
  allBookings: null,
  selectedBooking: null,
  pageNo: 0,
  listEndPage: null,
};

const bookingSlice = createSlice({
  name: 'booking',
  initialState,
  reducers: {
    clearState(state) {
      state.loading = false;
      state.error = null;
      state.allBookings = null;
      state.selectedBooking = null;
    },
    setLoading(state) {
      state.loading = true;
    },
    setError(state, {payload}) {
      state.error = payload;
      state.loading = false;
    },
    setBookings(state, {payload}) {
      state.listEndPage = null;
      state.allBookings = payload;
      state.loading = false;
    },
    setPageNo(state, {payload}) {
      state.pageNo = payload;
    },
    setSelectedBooking(state, {payload}) {
      state.selectedBooking = payload;
      state.loading = false;
    },
    setListEndPage(state, {payload}) {
      state.listEndPage = payload;
      state.loading = false;
    },
  },
});

export const {
  clearState,
  setLoading,
  setError,
  setBookings,
  setSelectedBooking,
  setListEndPage,
  setPageNo,
} = bookingSlice.actions;

export default bookingSlice.reducer;
