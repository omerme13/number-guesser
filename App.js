import React from 'react';
import { StyleSheet, View } from 'react-native';

import Header from './components/Header';
import StartGame from './components/screens/StartGame';
import Game from './components/screens/Game';

export default function App() {
  return (
    <View style={styles.screen}>
        <Header>Guess a number</Header>
        <StartGame />
        <Game />
    </View>
  );
}

const styles = StyleSheet.create({
    screen: {
        flex: 1
    }
});
