import styled from 'styled-components/native';
import RippleWrapper from 'react-native-material-ripple';

import * as colors from '../../../../styles/colors';

// Main Wrapper
export const PageWrapper = styled.View``;

export const NotFoundText = styled.Text`
  font-size: 16px;
  color: ${colors.textColors.secondary};
`;

export const Widget = styled(RippleWrapper)`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 10px;
`;
export const WidgetText = styled.Text`
  font-size: 20px;
`;
export const WidgetIcon = styled.View`
  font-size: 20px;
`;

// Top details
export const TopDetails = styled.View`
  width: 100%;
  max-height: 100%;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  background-color: #fff;
  padding: 20px;
  padding-left: 20px;
  padding-right: 20px;
  margin-bottom: 5px;
  border-color: #eee;
  border-bottom-width: 1px;
`;
export const MainImage = styled.Image`
  border-radius: 10px;
  width: 100px;
  height: 100px;
`;
export const TopDetailsRight = styled.View`
  width: 100%;
  padding-left: 20px;
  padding-top: 10px;
`;
export const HeaderText = styled.Text`
  font-size: 20px;
`;
export const ServiceDate = styled.Text`
  font-size: 16px;
  font-weight: 600;
  margin-top: 10px;
`;

// Center Details
export const CenterDetails = styled.View`
  width: 100%;
  max-height: 100%;
  background-color: #fff;
  padding: 20px;
  padding-left: 20px;
  padding-right: 20px;
  margin-bottom: 5px;
  border-color: #eee;
  border-bottom-width: 1px;
`;

// Bottom Details
export const BottomDetails = styled.View`
  width: 100%;
  max-height: 100%;
  background-color: #fff;
  padding: 20px;
  padding-left: 20px;
  padding-right: 20px;
  margin-bottom: 10px;
  border-color: #eee;
  border-bottom-width: 1px;
`;

export const Address = styled.View``;
export const AddressText = styled.Text`
  font-size: 16px;
  margin-bottom: 5px;
  color: ${colors.textColors.secondary};
`;
