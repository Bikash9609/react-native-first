import styled from 'styled-components/native';

export const FullScreenLoader = styled.View`
  background-color: #fff;
  width: 100%;
  max-height: ${(props) => props.containerHeight || '100%'};
`;

export const LoaderContainer = styled.View`
  height: 100%;
  align-items: center;
  justify-content: center;
`;
