import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  location: null,
};

const listingReducer = createSlice({
  name: 'listing',
  initialState,
  reducers: {
    clearState() {
      return {...state, location: null};
    },
    setLocation(state, {payload}) {
      return {...state, location: payload};
    },
  },
});

export const {setLocation, clearLocation} = listingReducer.actions;
export default listingReducer.reducer;
