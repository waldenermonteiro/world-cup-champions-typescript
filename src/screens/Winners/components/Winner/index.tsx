import React from 'react';

import IWinner from 'interfaces/IWinner';
import IFlag from 'interfaces/IFlag';

import {
  Container,
  AvatarFlag,
  AvatarTrophy,
  Content,
  ContentTexts,
  ContentTitle,
  ContentSubtitle,
  ListTrophies,
} from './styles';

interface Props {
  item: IWinner;
  images: Array<IFlag>;
  viewCards: boolean;
}

export default function Winner({item, images, viewCards}: Props) {
  function returnSourceFlag(flag: IWinner) {
    const flagImage = images.filter(image => image.name === flag.country)[0];
    return flagImage.source;
  }
  return (
    <Container viewCards={viewCards}>
      <Content viewCards={viewCards}>
        <AvatarFlag viewCards={viewCards} source={returnSourceFlag(item)} />
        <ContentTexts viewCards={viewCards}>
          <ContentTitle viewCards={viewCards}>{item.country}</ContentTitle>
          <ContentSubtitle viewCards={viewCards}>{item.year}</ContentSubtitle>
        </ContentTexts>
      </Content>
      <ListTrophies>
        {Array(item.winner)
          .fill(1)
          .map((key, index) => (
            <AvatarTrophy
              key={index}
              source={require('../../../../assets/trophy.png')}
            />
          ))}
      </ListTrophies>
    </Container>
  );
}
