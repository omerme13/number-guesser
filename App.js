import React, {useState} from 'react';
import { StyleSheet, View } from 'react-native';

import Header from './components/Header';
import StartGame from './components/screens/StartGame';
import Game from './components/screens/Game';

export default function App() {
  const [userNum, setUserNum] = useState('');

  const startGameHandler = userNum => {
      setUserNum(userNum);
  }

  let content = userNum
      ? <Game />
      : <StartGame start={startGameHandler} />

  return (
    <View style={styles.screen}>
        <Header>Guess a number</Header>
        {content}
    </View>
  );
}

const styles = StyleSheet.create({
    screen: {
        flex: 1
    }
});
