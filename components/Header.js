import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import { colors } from '../variables';

const header = props => (
    <View style={styles.header}>
        <Text style={styles.headerTitle}>{props.children}</Text>
    </View>
)

const styles = StyleSheet.create({
    header: {
        padding: 25,
        alignItems: 'center',
        backgroundColor: colors.primary
    },
    headerTitle: {
        fontSize: 18,
        color: 'white',
        marginTop: 25,
        fontFamily: 'open-sans-bold'
    } 
});

export default header;