import React from "react";
import { View, Text, StyleSheet} from "react-native";

import {colors} from '../variables';

console.log(colors)
const numberContainer = props => (
    <View style={styles.numContainer}>
        <Text style={styles.numOutput}>{props.children}</Text>
    </View>
);

const styles = StyleSheet.create({
    numContainer: {
        borderWidth: 3,
        borderColor: colors.primary,
        borderRadius: 10,
        padding: 10,
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 10

    },
    numOutput: {
        fontSize: 25,
        color: colors.primary,
    }
})

export default numberContainer;
