import React, { useCallback, useEffect } from 'react';
import {
  SafeAreaView,
  StatusBar,
  FlatList,
  Text,
  RefreshControl,
  ActivityIndicator,
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import * as bookingActions from '../../store/booking/actions';

import ItemCard from './components/OrderCard';
import Loader from '../../components/Loader';
import Button from '../../components/Button';

import * as BookingStyled from './bookings.styled';

export const FooterComponent = ({ hidePrevious, hideNext, onNextPage, loading, isLastPage }) => {
  const loadMoreButton = (
    <Button fullWidth onPress={onNextPage}>
      Load more
    </Button>
  );
  const loadPreviousButton = <Button fullWidth>Previous</Button>;

  let component = (
    <Text style={{ padding: 10, textAlign: 'center', color: '#000000a1' }}>No more bookings</Text>
  );

  if (!loading && !isLastPage) {
    component = loadMoreButton;
  }

  if (loading) {
    component = <ActivityIndicator size={20} color="skyblue" />;
  }

  return <BookingStyled.FooterWrapper>{component}</BookingStyled.FooterWrapper>;
};

export default function Index({ navigation }) {
  const dispatch = useDispatch();

  const { loading, error, allBookings, pageNo, listEndPage } = useSelector((state) => ({
    loading: state.booking.loading,
    error: state.booking.error,
    allBookings: state.booking.allBookings,
    pageNo: state.booking.pageNo,
    listEndPage: state.booking.listEndPage,
  }));

  const fetchBookings = useCallback(
    (refresh) => {
      dispatch(bookingActions.fetchBookings(refresh));
    },
    [dispatch],
  );

  const onLoadMore = () => {
    if (pageNo === 0 || loading) return;
    fetchBookings(false);
  };

  const onCardPress = (data) => {
    dispatch(bookingActions.fetchBookingById(data._id));
    navigation.navigate('Booking Details', { data });
  };

  const renderBookingItems = useCallback(
    ({ item }) => <ItemCard onCardPress={() => onCardPress(item)} data={item} />,
    [allBookings],
  );

  useEffect(() => {
    fetchBookings(true);
  }, []);

  const isLastPage = listEndPage && listEndPage === pageNo;
  return (
    <SafeAreaView>
      <StatusBar barStyle="dark-content" />
      <FlatList
        refreshControl={
          <RefreshControl refreshing={loading} onRefresh={() => fetchBookings(true)} />
        }
        refreshing={loading}
        keyExtractor={(item) => item._id}
        data={allBookings}
        renderItem={renderBookingItems}
        showsVerticalScrollIndicator={false}
        extraData={allBookings}
        ListFooterComponent={
          <FooterComponent isLastPage={isLastPage} loading={loading} onNextPage={onLoadMore} />
        }
      />
    </SafeAreaView>
  );
}
