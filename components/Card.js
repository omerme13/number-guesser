import React from 'react';
import { View, StyleSheet } from 'react-native';

const card = props => (
    <View style={{...styles.card, ...props.style}}>
        {props.children}
    </View>
);

const styles = StyleSheet.create({
    card: {
        padding: 15,
        shadowColor: 'black',
        alignItems: 'center',
        shadowOffset: {
            width: 0, 
            height: 2
        },
        shadowRadius: 5,
        backgroundColor: 'white',
        elevation: 8, 
        borderRadius: 3
    }
})

export default card;