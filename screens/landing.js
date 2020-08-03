import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

class Landing extends Component {
    state = {
        messages: [{text: "Everyone come to the hall", time: Date.now()},{text:"Conference at 11", time: Date.now()}]
    }
    render () {
        return(
            <View>
                {this.state.messages.map(message => {
                    <View style={styles.tile}><Text style={styles.message}>{message.text}</Text></View>
                })}
            </View>
        )
    }
}

const styles = StyleSheet.create({
    tile: {
        backgroundColor: '#eb7b0c',
        borderRadius: 10,
        padding: 4
    },

    message: {
        lineHeight: 4,
        color: '#8c9096',
        fontWeight: 'bold'
    }
})

export default Landing;