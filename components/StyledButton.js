import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';

import {colors} from '../variables';

const styledButton = props => {
    const textStyle = {
        ...styles.buttonText,
        color: props.color ? props.color : 'white'
    };
    const generalStyle = {
        ...styles.button, 
        backgroundColor: props.background ? props.background : colors.primary 
    };

    return (
        <TouchableOpacity 
            activeOpacity={0.7} 
            onPress={props.onPress}
        >
            <View style={generalStyle}>
                <Text style={textStyle}>{props.title}</Text>
            </View>
        </TouchableOpacity>
    ); 
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: colors.primary,
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 300
    },
    buttonText: {
        fontSize: 16,
        fontFamily: 'open-sans-bold',
        textTransform: 'capitalize'
    }
});

export default styledButton;