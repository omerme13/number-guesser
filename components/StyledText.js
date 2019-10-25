import React from 'react';
import { Text, StyleSheet } from 'react-native';

const findStyle = type => {
    switch(type) {
        case 'title':
            return styles.title;
        case 'body':
            return styles.body;
        default:  break;    
    }  
}

const bodyText = props => {
    const style = findStyle(props.type);

    return (
        <Text style={{...style, ...props.style}}>
            {props.children}
        </Text>
    );
}

const styles = StyleSheet.create({
    body: {
        fontFamily: 'open-sans'
    },
    title: {
        fontFamily: 'open-sans-bold',
        fontSize: 20,
        marginVertical: 10
    }
})

export default bodyText;