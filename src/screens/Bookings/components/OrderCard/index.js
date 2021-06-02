import React, { useState } from 'react';
import moment from 'moment';
import { TouchableOpacity } from 'react-native';
import { Entypo } from '@expo/vector-icons';
import RippleWrapper from 'react-native-material-ripple';

import { ORDER_STATUS } from '../../../../constants/Globals';
import * as OrderCard from './orderCard-styled';

const Item = ({ label, textColor, noBottomMargin, onPress, children, ...props }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <OrderCard.DisplayRow marginBottom={noBottomMargin ? '0px' : '10px'} {...props}>
        <OrderCard.Span textColor={textColor}>{label.toUpperCase()}</OrderCard.Span>
        <OrderCard.Value textColor={textColor}>{children}</OrderCard.Value>
      </OrderCard.DisplayRow>
    </TouchableOpacity>
  );
};

// TODO: change order status to only five global status in server
const BelowTitleComponentSelector = ({ orderStatus, data }) => {
  let component = null;
  console.log(ORDER_STATUS[orderStatus]);
  switch (ORDER_STATUS[orderStatus]) {
    case ORDER_STATUS.booked:
    case ORDER_STATUS.paymentDone:
      component = (
        <Item label="" textColor={ORDER_STATUS[orderStatus]?.color}>
          {data?.serviceDate &&
            moment(data?.serviceDate).format('DD MMMM, YYYY hh:mm A').toString()}
        </Item>
      );
      break;

    case ORDER_STATUS.onWay:
      component = (
        <Item label="" textColor={ORDER_STATUS[orderStatus]?.color} marginBottom="5px">
          {ORDER_STATUS[orderStatus]?.value}
        </Item>
      );
      break;

    case ORDER_STATUS.paymentNotCompleted:
    case ORDER_STATUS.delayed:
    case ORDER_STATUS.cancelled:
      component = (
        <Item label="" marginBottom="5px">
          {ORDER_STATUS[orderStatus]?.value}
        </Item>
      );

    default:
  }

  return component;
};

export default function Index({ data, onCardPress }) {
  return (
    <RippleWrapper onPress={onCardPress}>
      <OrderCard.CardWrapper>
        <OrderCard.DisplayRow marginBottom="0px" justifyContent="flex-start">
          <OrderCard.CardImage
            source={{
              uri: 'https://i.pinimg.com/564x/03/ea/6d/03ea6ddf5483b653ddcea668e5b68693.jpg',
            }}
          />
          <OrderCard.Item>
            <OrderCard.CardHeader>{data?.name}</OrderCard.CardHeader>
            <BelowTitleComponentSelector data={data} orderStatus={data?.orderStatus} />
          </OrderCard.Item>
          <OrderCard.Item style={{ flex: 1, alignItems: 'flex-end' }}>
            <Entypo name="chevron-right" size={20} />
          </OrderCard.Item>
        </OrderCard.DisplayRow>
      </OrderCard.CardWrapper>
    </RippleWrapper>
  );
}
