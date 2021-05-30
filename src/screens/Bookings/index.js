import React, {useCallback, useEffect} from 'react';
import {
  SafeAreaView,
  StatusBar,
  FlatList,
  Text,
  RefreshControl,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';

import * as bookingActions from '../../store/booking/actions';

import ItemCard from './components/OrderCard';
import Loader from '../../components/Loader';
import Button from '../../components/Button';

import * as BookingStyled from './bookings.styled';

export const FooterComponent = ({hidePrevious, hideNext, onNextPage}) => {
  return (
    <BookingStyled.FooterWrapper>
      {!hidePrevious && <Button fullWidth>Previous</Button>}
      {!hideNext && (
        <Button fullWidth onPress={onNextPage}>
          Load more
        </Button>
      )}
    </BookingStyled.FooterWrapper>
  );
};

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

  const fetchBookings = useCallback(
    (refresh) => {
      dispatch(bookingActions.fetchBookings(refresh));
    },
    [dispatch],
  );

  const onLoadMore = () => {
    if (pageNo === 0 || loading) return;
    fetchBookings();
  };

  const renderBookingItems = useCallback(
    ({item}) => <ItemCard data={item} />,
    [allBookings],
  );

  useEffect(() => {
    fetchBookings();
  }, []);

  const isLastPage = listEndPage && listEndPage === pageNo;
  return (
    <SafeAreaView>
      <StatusBar barStyle="dark-content" />
      <FlatList
        refreshControl={
          <RefreshControl
            refreshing={loading}
            onRefresh={() => fetchBookings(true)}
          />
        }
        refreshing={loading}
        keyExtractor={(item) => item._id}
        data={allBookings}
        renderItem={renderBookingItems}
        showsVerticalScrollIndicator={false}
        ListFooterComponent={
          (!loading && !isLastPage && (
            <FooterComponent onNextPage={onLoadMore} hidePrevious />
          )) ||
          (isLastPage && (
            <Text
              style={{padding: 10, textAlign: 'center', color: '#000000a1'}}>
              No more bookings
            </Text>
          ))
        }
      />
    </SafeAreaView>
  );
}
