import React, { useState, useRef, useEffect } from "react";
import { View, Text, StyleSheet, Button, Alert, ScrollView } from "react-native";
import {Ionicons} from '@expo/vector-icons';

import NumberContainer from '../NumberContainer';
import Card from "../Card";
import StyledButton from '../StyledButton';
import StyledText from '../StyledText';
import { colors } from "../../variables";

const generateNumBetween = (min, max, exclude) => {
    const random = Math.round(Math.random()*(max - min) + min);

    if (random === exclude) {
        return generateNumBetween(min, max, exclude);
    } else {
        return random;
    }
}

const game = props => {
    const initialGuess = generateNumBetween(1,99, props.userChoice);

    const [curGuess, setCurGuess] = useState(initialGuess);
    const [pastGuesses, setPastGuesses] = useState([initialGuess]);

    // i used useRef instead of useState. because useState will render the component with every update opposed to useRef. 
    const curLow = useRef(1);
    const curHigh = useRef(99);

    useEffect(() => {
        if (curGuess === props.userChoice) {
            props.finishGame(pastGuesses.length)
        }
    })

    const nextGuessHandler = direction => {
        if (direction === 'lower' && curGuess < props.userChoice ||
            direction === 'greater' && curGuess > props.userChoice) {
                Alert.alert('Please don\'t lie', 'try again', [{text: 'Sorry', style: 'cancel'}]);
                return;
        }

        if (direction === 'lower') {
            curHigh.current = curGuess - 1;
        } 
        else if (direction === 'greater') {
            curLow.current = curGuess + 1;
        } 

        const nextNum = generateNumBetween(curLow.current, curHigh.current);
        setCurGuess(nextNum);
        setPastGuesses([nextNum, ...pastGuesses])
    } 

    return (
        <View style={styles.screen}>
            <Text>Opponent's Guess</Text>
            <NumberContainer>{curGuess}</NumberContainer>
            <Card style={styles.buttonsContainer}>
                <StyledButton 
                    title={<Ionicons name="md-remove" size={24} />} 
                    onPress={() => nextGuessHandler('lower')} 
                />
                <StyledButton 
                    title={<Ionicons name="md-add" size={24} />} 
                    onPress={() => nextGuessHandler('greater')} 
                />
            </Card>
            <View style={styles.listContainer}>
                <ScrollView contentContainerStyle={styles.list}>
                    {pastGuesses.map((guess, i) => (
                        <View key={guess} style={styles.listItem}>
                            <StyledText>{`# ${pastGuesses.length - i}`}</StyledText>
                            <StyledText>{guess}</StyledText>
                        </View>
                    ))}
                </ScrollView>
            </View>
        </View>
    );

};

const styles = StyleSheet.create({
    screen: {
        flex: 1, 
        padding: 10,
        alignItems: 'center',
    },
    buttonsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: 20, 
        width: 300, 
        maxWidth: '80%'
    },
    listContainer : {
        width: '80%',
        maxWidth: 300,
        flex: 1 // in order to make the list scrollable
    },
    list: {
        alignItems: 'center'
    },
    listItem: {
        borderWidth: 2,
        borderColor: 'lightgray',
        borderRadius: 3,
        padding: 15,
        marginVertical: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '60%'
    }
});

export default game;
