import React, {useState} from 'react';
import moment from 'moment';
import {decode} from 'html-entities';
import {Entypo} from '@expo/vector-icons';
import {TouchableOpacity} from 'react-native';

import {
  CURRENCY,
  ORDER_STATUS,
  PAYMENT_TYPE,
} from '../../../../constants/Globals';
import * as OrderCard from './orderCard-styled';

const Item = ({label, textColor, noBottomMargin, onPress, children}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <OrderCard.DisplayRow marginBottom={noBottomMargin ? '0px' : '10px'}>
        <OrderCard.Span textColor={textColor}>
          {label.toUpperCase()}
        </OrderCard.Span>
        <OrderCard.Value textColor={textColor}>{children}</OrderCard.Value>
      </OrderCard.DisplayRow>
    </TouchableOpacity>
  );
};

export default function Index({data}) {
  console.log(data);
  const [showMoreInfo, setShowMoreInfo] = useState(false);

  return (
    <OrderCard.CardWrapper>
      <OrderCard.DisplayRow marginBottom="20px" justifyContent="flex-start">
        <OrderCard.CardImage
          source={{
            uri: 'https://i.pinimg.com/564x/03/ea/6d/03ea6ddf5483b653ddcea668e5b68693.jpg',
          }}
        />
        <OrderCard.Item>
          <OrderCard.CardHeader>{data?.name}</OrderCard.CardHeader>

          <Item label="" textColor={ORDER_STATUS[data?.orderStatus]?.color}>
            {ORDER_STATUS[data?.orderStatus]?.value}
          </Item>

          <Item
            label=""
            textColor={
              moment(data?.serviceDate).diff(moment(), 'days') <= 1 && 'green'
            }>
            {data?.serviceDate &&
              moment(data?.serviceDate)
                .format('DD MMMM, YYYY hh:mm A')
                .toString()}
          </Item>
        </OrderCard.Item>
      </OrderCard.DisplayRow>

      <Item
        label={showMoreInfo ? 'Show less' : 'Show more'}
        onPress={() => setShowMoreInfo(!showMoreInfo)}>
        <OrderCard.Item>
          <Entypo
            name={showMoreInfo ? 'chevron-up' : 'chevron-down'}
            size={19}
          />
        </OrderCard.Item>
      </Item>

      {showMoreInfo && (
        <>
          <OrderCard.DisplayRow marginBottom="10px">
            <OrderCard.Item />
            <OrderCard.OrderNumber>
              ORDER #
              {data?.orderData.id?.substring(6, 14).toUpperCase() ||
                data?.orderId.substring(0, 8).toUpperCase()}
            </OrderCard.OrderNumber>
          </OrderCard.DisplayRow>
          <Item
            label="order status"
            textColor={ORDER_STATUS[data?.orderStatus]?.color}>
            {ORDER_STATUS[data?.orderStatus]?.value}
          </Item>
          <Item
            label="service date"
            textColor={
              moment(data?.serviceDate).diff(moment(), 'days') <= 1 && 'green'
            }>
            {data?.serviceDate &&
              moment(data?.serviceDate)
                .format('DD MMMM, YYYY hh:mm A')
                .toString()}
          </Item>
          <Item label="total">
            {decode(CURRENCY.INR.symbol)}
            {data?.grandTotal}
          </Item>
          <Item label="request placed">
            {data?.createdAt &&
              moment(data?.createdAt).format('DD MMMM, YYYY').toString()}
          </Item>
          <Item label="payment method" noBottomMargin>
            {PAYMENT_TYPE[data?.paymentType].label}
          </Item>
        </>
      )}
    </OrderCard.CardWrapper>
  );
}
