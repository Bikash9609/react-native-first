import React, {useState} from 'react';
import moment from 'moment';
import {TouchableOpacity} from 'react-native';
import {Entypo} from '@expo/vector-icons';

import {ORDER_STATUS} from '../../../../constants/Globals';
import * as OrderCard from './orderCard-styled';

const Item = ({
  label,
  textColor,
  noBottomMargin,
  onPress,
  children,
  ...props
}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <OrderCard.DisplayRow
        marginBottom={noBottomMargin ? '0px' : '10px'}
        {...props}>
        <OrderCard.Span textColor={textColor}>
          {label.toUpperCase()}
        </OrderCard.Span>
        <OrderCard.Value textColor={textColor}>{children}</OrderCard.Value>
      </OrderCard.DisplayRow>
    </TouchableOpacity>
  );
};

export default function Index({data}) {
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

          <Item
            label=""
            textColor={ORDER_STATUS[data?.orderStatus]?.color}
            marginBottom="5px">
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
          <OrderCard.OrderNumber>
            ORDER #
            {data?.orderData.id?.substring(6, 14).toUpperCase() ||
              data?.orderId.substring(0, 8).toUpperCase()}
          </OrderCard.OrderNumber>
        </OrderCard.Item>
        <OrderCard.Item style={{flex: 1, alignItems: 'flex-end'}}>
          <Entypo name="chevron-right" size={20} />
        </OrderCard.Item>
      </OrderCard.DisplayRow>
    </OrderCard.CardWrapper>
  );
}
