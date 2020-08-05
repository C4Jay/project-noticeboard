import React, { Component, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { TextInput, Button } from 'react-native-paper';

const Form = (props) => {
    
    const [text, setText] = useState('');

        return (
            <View>
            <TextInput
      label="Notice"
      value={text}
      onChangeText={text => setText(text)}
    />

    <Button color="#8b32a8"> 
        post
    </Button>
    </View>
        )
    
}

export default Form;