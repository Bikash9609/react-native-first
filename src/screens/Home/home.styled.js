import styled from 'styled-components/native';
import { LinearGradient } from 'expo-linear-gradient';

export const TopHeader = styled.View`
  width: 100%;
`;

export const GradientViewStyled = styled(LinearGradient)`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
  max-height: 70px;
  padding-top: 0;
  max-width: 100%;
`;

export const TopHeaderImage = styled.Image`
  height: 105px;
  width: 100px;
`;

export const TopHeaderRight = styled.View`
  color: #fff;
  display: flex;
  flex-direction: row;
`;

export const HomeSearch = styled.View`
  background-color: transparent;
  max-height: 100%;
  padding: 0;
  /* height: 10; */
`;
export const SearchView = styled.View``;
