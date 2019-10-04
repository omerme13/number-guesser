import React, { useState } from "react";
import {
    View,
    Text,
    Button,
    StyleSheet,
    TouchableWithoutFeedback,
    Keyboard,
    Alert
} from "react-native";

import Card from "../Card";
import Input from "../Input";

import { colors } from "../../variables";

const startGame = props => {
    const [enteredValue, setEnteredValue] = useState('');
    const [confirmed, setConfirmed] = useState(false);
    const [selectedNum, setSelectedNum] = useState('');

    const numberInputHandler = inputText => {
        setEnteredValue(inputText.replace(/[^0-9]/g, "")); // the regEx take care of typing something other than numbers
    };

    const resetInputHandler = () => {
        setEnteredValue('');
        setConfirmed(false);
    }

    const confirmInputHandler = () => {
        const chosenNum = Number(enteredValue);
        if (isNaN(chosenNum) || chosenNum <= 0) {
            Alert.alert(
                'Invalid number!',
                'Please Enter number between 1 and 99',
                [{text: 'OK', style: 'destructive', onPress: resetInputHandler}]
            )
            return;
        }
        setEnteredValue('');
        setConfirmed(true);
        setSelectedNum(chosenNum);
    }

    let confirmedOutput = confirmed 
        ? <Text>Chosen Number: {selectedNum}</Text>
        : null;

    return (
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
            <View style={styles.screen}>
                <Text style={styles.title}>Start a new game!</Text>
                <Card style={styles.inputContainer}>
                    <Text>Select a number</Text>
                    <Input
                        style={styles.input}
                        maxLength={2}
                        keyboardType="number-pad"
                        onChangeText={numberInputHandler}
                        value={enteredValue}
                    />
                    <View style={styles.buttonContainer}>
                        <View style={{ flex: 1, marginRight: 20 }}>
                            <Button 
                                title="reset" 
                                color={colors.secondary} 
                                onPress={resetInputHandler}
                            />
                        </View>
                        <View style={{ flex: 1 }}>
                            <Button 
                                title="confirm" 
                                color={colors.primary} 
                                onPress={confirmInputHandler}
                            />
                        </View>
                    </View>
                </Card>
                {confirmedOutput}
            </View>
        </TouchableWithoutFeedback>
    );
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 10,
        alignItems: "center"
    },
    title: {
        fontSize: 20,
        marginVertical: 10
    },
    inputContainer: {
        width: 300,
        maxWidth: "70%"
    },
    input: {
        marginBottom: 20,
        width: 40
    },
    buttonContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        width: "100%",
        paddingHorizontal: 15
    }
});

export default startGame;
