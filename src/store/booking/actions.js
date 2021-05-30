import * as API from '../../axios';
import {api as URL} from '../../constants/Globals';

import {
  clearState,
  setError,
  setLoading,
  setBookings,
  setSelectedBooking,
  setListEndPage,
  setPageNo,
} from './reducers';

export const fetchBookings = (refresh) => async (dispatch, getState) => {
  const {
    booking: {pageNo, allBookings},
  } = getState();
  try {
    dispatch(setLoading());

    const payload = {
      page: refresh ? 0 : pageNo,
    };

    const res = await API.post(URL.getOrders, payload);
    const {data, status} = res;

    if (status !== 'OK') throw Error('Some error ocurred!');

    if (data.length <= 0) {
      return dispatch(setListEndPage(pageNo));
    }

    let items = data;
    if (payload.page !== 0) {
      items = [...allBookings, ...data];
    }
    dispatch(setBookings(items));
    dispatch(setPageNo(payload.page + 1));
  } catch (error) {
    dispatch(setError(error));
  }
};
