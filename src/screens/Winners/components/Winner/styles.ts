import styled from 'styled-components/native';
import {RFValue} from 'react-native-responsive-fontsize';

interface Props {
  viewCards: boolean;
}

export const Container = styled.View<Props>`
  flex-direction: ${({viewCards}) => (viewCards ? 'column' : 'row')};
  justify-content: ${({viewCards}) => (viewCards ? 'center' : 'space-between')};
  background-color: ${({theme}) => theme.colors.background};
  align-items: center;
  padding: 12px;
  margin: ${({viewCards}) => (viewCards ? 10 : 0)}px
    ${({viewCards}) => (viewCards ? 20 : 0)}px;

  border-width: ${({viewCards}) => (viewCards ? 1 : 0)}px;
  border-radius: ${({viewCards}) => (viewCards ? 2 : 0)}px;
  border-color: ${({viewCards}) => (viewCards ? '#ddd' : '')};
  border-bottom-width: 0;
  elevation: ${({viewCards}) => (viewCards ? 3 : 0)};
`;

export const AvatarFlag = styled.Image<Props>`
  margin-right: ${({viewCards}) => (viewCards ? 0 : 10)}px;
  width: ${({viewCards}) => (viewCards ? RFValue(100) : RFValue(40))}px;
  height: ${({viewCards}) => (viewCards ? RFValue(100) : RFValue(40))}px;
`;

export const AvatarTrophy = styled.Image`
  width: ${RFValue(20)}px;
  height: ${RFValue(40)}px;
`;

export const Content = styled.View<Props>`
  flex-direction: ${({viewCards}) => (viewCards ? 'column' : 'row')};
  justify-content: ${({viewCards}) => (viewCards ? 'center' : 'space-between')};
  align-items: center;
  text-align: center;
`;

export const ContentTexts = styled.View<Props>`
  align-items: ${({viewCards}) => (viewCards ? 'center' : 'flex-start')};
`;

export const ContentTitle = styled.Text<Props>`
  font-size: ${RFValue(18)}px;
  color: ${({theme}) => theme.colors.title};
  margin-top: ${({viewCards}) => (viewCards ? 10 : 0)}px;
`;

export const ContentSubtitle = styled.Text<Props>`
  font-size: ${RFValue(14)}px;
  color: ${({theme}) => theme.colors.subTitle};
  margin-bottom: ${({viewCards}) => (viewCards ? 10 : 0)}px;
`;

export const ListTrophies = styled.View`
  flex-direction: row;
`;
