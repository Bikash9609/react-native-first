import styled from 'styled-components/native';
import {Button} from 'native-base';
import * as Colors from '../../styles/colors';

export const LogoMainWrapper = styled.View`
  height: 70%;
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  align-self: center;
  padding: 10px;
`;

export const LogoWrapper = styled.View`
  max-height: 100px;
  min-height: 80px;
  width: 150px;
  background-color: rgba(255, 255, 255, 1);
  border-radius: 20px;
  padding: 10px;
  padding-bottom: 10px;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  align-self: center;
`;

export const LogoImage = styled.Image`
  max-height: 100%;
  width: 100%;
`;

export const InnerWrapper = styled.View`
  background-color: rgba(255, 255, 255, 1);
  padding: 30px;
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
`;

export const AuthButton = styled(Button)`
  padding: 10px;
  padding-top: 10px;
  padding-bottom: 10px;
  padding-left: 40px;
  height: 60px;
  padding-right: 40px;
  margin-bottom: 20px;
  background-color: ${(props) =>
    props.loginButton ? Colors.primaryColor : '#fff'};
  border: 1px solid #eee;
  border-radius: 10px;
  box-shadow: 0 5px 5px #eee;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;
