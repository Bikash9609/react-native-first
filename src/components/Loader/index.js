import React from 'react';
import { ActivityIndicator } from 'react-native';
import { View } from 'native-base';

import * as Style from './loader.styled';

function Index({ containerHeight }) {
  return (
    <Style.FullScreenLoader containerHeight={containerHeight}>
      <Style.LoaderContainer>
        <ActivityIndicator size="large" size={49} color="#FFA500" />
      </Style.LoaderContainer>
    </Style.FullScreenLoader>
  );
}

export default Index;
