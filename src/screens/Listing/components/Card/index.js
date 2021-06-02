import React from 'react';
import { Text, View, Image, TouchableOpacity } from 'react-native';
import { Rating } from 'react-native-ratings';

import { gridStyles as gStyles } from './styles';
import * as CardStyled from './card.styled';

export const GridItem = ({ data, onPress }) => {
  return (
    <TouchableOpacity onPress={() => onPress(data?._id)} activeOpacity={0.8}>
      <CardStyled.CardWrapper style={gStyles.item}>
        <CardStyled.Left>
          <CardStyled.CardImage
            source={{
              uri: 'https://images.unsplash.com/photo-1457449940276-e8deed18bfff?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
            }}
            height="100%"
            width="100%"
            resizeMode="cover"
          />
        </CardStyled.Left>
        <View style={gStyles.right}>
          <View style={gStyles.top}>
            <Text style={gStyles.name} adjustsFontSizeToFit>
              {data.name?.firstName} {data.name?.lastName}
            </Text>
            <Text style={gStyles.price} adjustsFontSizeToFit>
              ₹{data.price} / day
            </Text>
          </View>
          <View style={gStyles.ratingView}>
            <Rating
              fractions={1}
              imageSize={20}
              showReadOnlyText={false}
              readonly
              startingValue={data?.rating || 0}
              ratingCount={5}
            />
            <Text style={gStyles.ratingText} adjustsFontSizeToFit>
              ({data?.rating || 0}) (20+ ratings)
            </Text>
          </View>
          <Text style={gStyles.description} adjustsFontSizeToFit>
            {data?.bio.substring(0, 60)}...
          </Text>
        </View>
      </CardStyled.CardWrapper>
    </TouchableOpacity>
  );
};

export default GridItem;
