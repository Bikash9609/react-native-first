import React, {useEffect, useState} from 'react';
import {SafeAreaView} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {MaterialCommunityIcons, AntDesign} from '@expo/vector-icons';
import moment from 'moment';

import * as bookingActions from '../../../../store/booking/actions';
import {PAYMENT_STATUS, PAYMENT_TYPE} from '../../../../constants/Globals';
import Loader from '../../../../components/Loader';
import Button from '../../../../components/Button';
import * as DetailsStyled from './details.styled';

function Widget({icon, text, onPress}) {
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
      <DetailsStyled.PieceWrapper>
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
      </DetailsStyled.PieceWrapper>
      <DetailsStyled.PieceWrapper>
        <Widget text="Address" />
        <Address address={data?.address} />
      </DetailsStyled.PieceWrapper>
      <DetailsStyled.PieceWrapper>
        <Widget text="Add note" />
        <DetailsStyled.NoteText
          placeholder="Write special short note, which services person can see."
          multiline
          maxRow={2}
          maxLength={120}
        />
        <Button fullWidth inverted buttonStyle={{marginTop: 10}}>
          Send note
        </Button>
      </DetailsStyled.PieceWrapper>
    </DetailsStyled.CenterDetails>
  );
}

function RowViewInlineText({tag, value}) {
  return (
    <DetailsStyled.RowView>
      <DetailsStyled.Tag>{tag} </DetailsStyled.Tag>
      <DetailsStyled.Value>{value}</DetailsStyled.Value>
    </DetailsStyled.RowView>
  );
}

function ExtraDetails({data}) {
  return (
    <DetailsStyled.PieceWrapper>
      <Widget text="Payment information" />
      <RowViewInlineText
        tag="Payment status:"
        value={PAYMENT_STATUS[data?.paymentStatus]}
      />
      <RowViewInlineText
        tag="Payment mode:"
        value={PAYMENT_TYPE[data?.paymentType].label}
      />
    </DetailsStyled.PieceWrapper>
  );
}

function ExtraContent({data}) {
  return (
    <DetailsStyled.PieceWrapper>
      <Widget text="Similar services" />
    </DetailsStyled.PieceWrapper>
  );
}

function BottomDetails({data}) {
  return (
    <DetailsStyled.BottomDetails>
      <Button fullWidth>Request cancellation</Button>
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
      <DetailsStyled.PageWrapper showsVerticalScrollIndicator={false}>
        <TopDetails data={selectedBooking} />
        <CenterDetails data={selectedBooking} />
        <ExtraDetails data={selectedBooking} />
        <BottomDetails data={selectedBooking} />
        <ExtraContent />
      </DetailsStyled.PageWrapper>
    </SafeAreaView>
  );
};

export default Index;
