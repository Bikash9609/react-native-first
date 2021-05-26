import styled from 'styled-components/native';
import LottieView from 'lottie-react-native';

export const LoaderContainer = styled.View`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const LoadingLottie = styled(LottieView)`
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
