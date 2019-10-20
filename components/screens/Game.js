import React, { useState } from "react";
import { View, Text, StyleSheet, Button } from "react-native";

import NumberContainer from '../NumberContainer';

import Card from "../Card";
import { colors } from "../../variables";


const generateNumBetween = (min, max) => {
    return Math.round(Math.random()*(max - min) + min)
}

const game = props => {
    const [curGuess, setCurGuess] = useState(generateNumBetween(1,3));

    return (
        <View style={styles.screen}>
            <Text>Opponent's Guess</Text>
            <NumberContainer>{curGuess}</NumberContainer>
            <Card style={styles.buttonsContainer}>
                <Button title="Lower" />
                <Button title="Greater" />
            </Card>
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
    }
});

export default game;
