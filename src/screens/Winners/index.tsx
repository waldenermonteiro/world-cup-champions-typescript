import React, {useEffect, useState} from 'react';
import {FlatList} from 'react-native';
import {CheckBox} from 'react-native-elements';
import Winner from './components/Winner';

import {Container, Separator} from './styles';

import IWinner from 'interfaces/IWinner';

import {winners} from '../../utils/winners';
import {flags} from '../../utils/flags';

export default function Winners() {
  const [winnersState, setWinnersState] = useState<IWinner[]>([]);
  const [checked, setChecked] = useState(false);
  useEffect(() => {
    async function loadWinners() {
      setWinnersState(winners);
    }
    loadWinners();
  }, []);

  return (
    <Container>
      <CheckBox
        title="View in cards"
        checked={checked}
        onPress={() => setChecked(!checked)}
      />
      <FlatList
        data={winnersState}
        keyExtractor={item => item.key}
        renderItem={({item}) => (
          <Winner item={item} images={flags} viewCards={checked} />
        )}
        ItemSeparatorComponent={() => <Separator viewCards={checked} />}
      />
    </Container>
  );
}
