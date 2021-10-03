import styled from 'styled-components/native';

interface Props {
  viewCards: boolean;
}

export const Container = styled.SafeAreaView`
  flex: 1;
`;
export const Separator = styled.View<Props>`
  height: ${({viewCards}) => (viewCards ? 0 : 0.5)}px;
  width: 100%;
  background-color: ${({theme}) => theme.colors.text};
`;
