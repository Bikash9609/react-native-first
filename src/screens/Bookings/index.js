import React, {useEffect} from 'react';
import {
  SafeAreaView,
  StatusBar,
  FlatList,
  ActivityIndicator,
  ToastAndroid,
  Platform,
  Alert,
  Text,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';

import * as bookingActions from '../../store/booking/actions';

import ItemCard from './components/OrderCard';
import Loader from '../../components/Loader';

export default function Index() {
  const dispatch = useDispatch();

  const {loading, error, allBookings, pageNo, listEndPage} = useSelector(
    (state) => ({
      loading: state.booking.loading,
      error: state.booking.error,
      allBookings: state.booking.allBookings,
      pageNo: state.booking.pageNo,
      listEndPage: state.booking.listEndPage,
    }),
  );

  useEffect(() => {
    dispatch(bookingActions.fetchBookings());
  }, []);

  const onEndReached = () => {
    if (pageNo === 0 || loading) return;
    dispatch(bookingActions.fetchBookings());
  };

  const isLastPage = listEndPage && listEndPage === pageNo;
  return (
    <SafeAreaView>
      <StatusBar barStyle="dark-content" />
      <FlatList
        keyExtractor={(item) => item._id}
        data={allBookings}
        renderItem={({item}) => <ItemCard data={item} />}
        showsVerticalScrollIndicator={false}
        onEndReachedThreshold={10}
        ListFooterComponent={
          (loading && (
            <ActivityIndicator size="large" size={49} color="#FFA500" />
          )) ||
          (isLastPage && (
            <Text
              style={{padding: 10, textAlign: 'center', color: '#000000a1'}}>
              No more bookings
            </Text>
          ))
        }
        onEndReached={() => {
          if (isLastPage) return;
          onEndReached();
        }}
      />
    </SafeAreaView>
  );
}
