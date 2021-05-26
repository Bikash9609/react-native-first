import * as API from '../../axios';
import {api as URL} from '../../constants/Globals';

import {
  clearState,
  setError,
  setLoading,
  setBookings,
  setSelectedBooking,
  setListEndPage,
} from './reducers';

export const fetchBookings = () => async (dispatch, getState) => {
  const {
    booking: {pageNo, allBookings},
  } = getState();
  try {
    dispatch(setLoading());
    const res = await API.post(URL.getOrders, {page: pageNo});
    const {data, status} = res;

    if (status !== 'OK') throw Error('Some error ocurred!');

    if (data.length <= 0) {
      return dispatch(setListEndPage(pageNo));
    }

    let items = data;
    if (allBookings) {
      items = [...allBookings, ...data];
    }
    dispatch(setBookings(items));
  } catch (error) {
    dispatch(setError(error));
  }
};
