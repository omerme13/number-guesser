import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";

import NumberContainer from '../NumberContainer';

import Card from "../Card";
import { colors } from "../../variables";


const generateNumBetween = (min, max) => {
    return Math.round(Math.random()*(max - min) + min)
}

const game = props => {
    const [curGuess, setCurGuess] = useState(generateNumBetween(1,3));

    return (
        <View>
            <Text>Opponent's  Guess</Text>
            <NumberContainer>{curGuess}</NumberContainer>

        </View>
    );

};

const styles = StyleSheet.create({

});

export default game;
