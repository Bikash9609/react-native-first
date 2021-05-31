import * as colors from '../../../../styles/colors';
import styled from 'styled-components/native';

export const CardWrapper = styled.View`
  border: 1px solid #eee;
  border-width: 0;
  border-bottom-width: 1px;
  background: #fff;
  padding: 10px;
  text-align: left;
  margin-bottom: 0px;
  border-radius: 10px;
  box-shadow: 0 5px 10px #eee;
  min-height: 120px;
  padding-left: 25px;
`;

export const DisplayRow = styled.View`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  align-items: center;
  justify-content: ${(props) => props.justifyContent || 'space-between'};
  margin-bottom: ${(props) => props.marginBottom};
`;

export const CardImage = styled.Image`
  height: 100px;
  width: 100px;
  border-radius: 10px;
`;

export const OrderNumber = styled.Text`
  font-weight: normal;
  color: ${colors.textColors.secondaryLight};
`;

export const CardHeader = styled.Text`
  font-size: 20px;
  font-weight: bold;
  /* width: 100%; */
  border-width: 0;
  border-color: #eee;
  border-style: solid;
`;

export const Item = styled.View`
  text-align: right;
  align-items: ${(props) => props.alignItems || 'flex-start'};
  padding-left: 20px;
`;

export const Value = styled.Text`
  font-size: 16px;
  margin-top: 10px;
  color: ${(props) => props.textColor || colors.textColors.primary};
`;

export const Span = styled.Text`
  font-weight: normal;
  color: ${(props) => props.textColor || colors.textColors.secondary};
`;
