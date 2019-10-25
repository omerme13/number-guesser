import React from 'react';
import { View, StyleSheet, Button, Image } from 'react-native';

import {colors} from '../../variables';

import Card from '../Card';
import StyledText from '../StyledText';
import StyledButton from '../StyledButton';

const gameOver = props => (
    <Card style={styles.message}>
        <StyledText type="title">Game is over!</StyledText>
        <View style={styles.imageContainer}>
            <Image 
                source={require('../../assets/success.png')} 
                style={styles.image} 
                resizeMode="cover" 
            />
        </View>
        <StyledText type="body" style={styles.text}>
            It took 
            <StyledText style={styles.num}> {props.guesses} </StyledText>  
            guesses to guess the number 
            <StyledText style={styles.num}> {props.number}</StyledText> 
        </StyledText>
        <View style={styles.buttonContainer}>
            <StyledButton title="New Game" onPress={props.setNewGame} />    
        </View>
    </Card>
);

const styles = StyleSheet.create({
    message: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    image: {
        width: '100%',
        height: '100%'
    },
    imageContainer: {
        width: '80%',
        height: 300,
        borderRadius: 500,
        borderWidth: 2,
        borderColor: colors.secondary,
        overflow: 'hidden',
        marginVertical: 20
    },
    buttonContainer: {
        marginVertical: 10
    },
    num: {
        color: colors.primary,
        fontWeight: 'bold',
        fontSize: 22,
    },
    text : {
        fontSize: 18
    }
})

export default gameOver;