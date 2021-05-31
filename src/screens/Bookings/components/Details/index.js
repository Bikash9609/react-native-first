import React, {useEffect, useState} from 'react';
import {SafeAreaView} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {MaterialCommunityIcons} from '@expo/vector-icons';

import * as bookingActions from '../../../../store/booking/actions';
import Loader from '../../../../components/Loader';

import * as DetailsStyled from './details.styled';
import moment from 'moment';

function Widget({icon, text, spanText, onPress}) {
  return (
    <DetailsStyled.Widget onPress={onPress} rippleOpacity={0.03}>
      <DetailsStyled.WidgetText>{text}</DetailsStyled.WidgetText>

      <DetailsStyled.WidgetIcon>{icon}</DetailsStyled.WidgetIcon>
    </DetailsStyled.Widget>
  );
}

function Address({address}) {
  return (
    <DetailsStyled.Address>
      <DetailsStyled.AddressText>
        {address?.addressText}
      </DetailsStyled.AddressText>
      <DetailsStyled.AddressText>(+91) 81204 23222</DetailsStyled.AddressText>
    </DetailsStyled.Address>
  );
}

function TopDetails({data}) {
  return (
    <DetailsStyled.TopDetails>
      <DetailsStyled.MainImage
        source={{
          uri: 'https://i.pinimg.com/564x/03/ea/6d/03ea6ddf5483b653ddcea668e5b68693.jpg',
        }}
      />
      <DetailsStyled.TopDetailsRight>
        <DetailsStyled.HeaderText>{data?.name}</DetailsStyled.HeaderText>
        <DetailsStyled.ServiceDate>
          {moment(data?.serviceDate).format('DD MMMM, YYYY [at] hh:mm A')}
        </DetailsStyled.ServiceDate>
      </DetailsStyled.TopDetailsRight>
    </DetailsStyled.TopDetails>
  );
}

function CenterDetails({data}) {
  const [showAdditionalService, setShowAdditionalServices] = useState(true);
  return (
    <DetailsStyled.CenterDetails>
      <Widget
        icon={
          <MaterialCommunityIcons
            name={
              showAdditionalService ? 'collapse-all' : 'collapse-all-outline'
            }
            size={29}
            color="rgba(0, 0, 0, 0.8)"
          />
        }
        text="Additional Services"
        onPress={() => setShowAdditionalServices(!showAdditionalService)}
      />
      {!data?.additionalServices && showAdditionalService && (
        <DetailsStyled.NotFoundText>
          No additional services
        </DetailsStyled.NotFoundText>
      )}
    </DetailsStyled.CenterDetails>
  );
}
function BottomDetails({data}) {
  return (
    <DetailsStyled.BottomDetails>
      <Widget text="Address" />
      <Address address={data?.address} />
    </DetailsStyled.BottomDetails>
  );
}

const Index = ({navigation}) => {
  const dispatch = useDispatch();

  const {loading, selectedBooking, selectedBookingId} = useSelector(
    (state) => ({
      loading: state.booking.loading,
      selectedBooking: state.booking.selectedBooking,
      selectedBookingId: state.booking.selectedBookingId,
    }),
  );

  useEffect(() => {
    if (!selectedBookingId) {
      navigation.navigate('Bookings');
    }
    if (!loading && !selectedBooking) {
      dispatch(bookingActions.fetchBookingById(selectedBookingId));
    }
  }, [selectedBookingId, loading, selectedBooking]);

  return (
    <SafeAreaView>
      {loading && <Loader />}
      <DetailsStyled.PageWrapper>
        <TopDetails data={selectedBooking} />
        <CenterDetails data={selectedBooking} />
        <BottomDetails data={selectedBooking} />
      </DetailsStyled.PageWrapper>
    </SafeAreaView>
  );
};

export default Index;
