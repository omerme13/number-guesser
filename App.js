import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import * as Font from 'expo-font';
import { AppLoading } from 'expo';

import Header from "./components/Header";
import StartGame from "./components/screens/StartGame";
import Game from "./components/screens/Game";
import GameOver from './components/screens/GameOver';

const fetchFonts = () => {
    return Font.loadAsync({
        'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
        'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf')
    });
}

export default function App() {
    const [userNum, setUserNum] = useState("");
    const [isGameOver, setIsGameOver] = useState(false);
    const [numOfGuesses, setNumOfGuesses] = useState(0);
    const [isLoaded, setIsLoaded] = useState(false);

    if (!isLoaded) {
        return (
            <AppLoading 
                startAsync={fetchFonts} 
                onFinish={() => setIsLoaded(true)} 
                onError={err => console.log(err)}
            />
        )
    }

    const setNewGameHandler = () => {
        setUserNum(null);
        setNumOfGuesses(0);
        setIsGameOver(false);
    }

    const startGameHandler = userNum => {
        setUserNum(userNum);
    };

    const finishGameHandler = rounds => {
        setNumOfGuesses(rounds);
        setIsGameOver(true);
    };

    let content = userNum 
        ? <Game userChoice={userNum} finishGame={finishGameHandler} />
        : <StartGame start={startGameHandler} />;

    if (isGameOver) {
        content = <GameOver guesses={numOfGuesses} setNewGame={setNewGameHandler} number={userNum} />;
    }

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
