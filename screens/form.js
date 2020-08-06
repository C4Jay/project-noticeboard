import React, { Component, useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { TextInput, Button } from 'react-native-paper';
import axios from 'axios';
import moment from 'moment';

const Form = (props) => {
    
    const [text, setText] = useState('');

    const post = () => {
        if(props.route.params.key) {
            axios.put('https://choolakejinendra.firebaseio.com/posts/' + props.route.params.key + '.json',{
                text: text,
                time: moment().format('MMMM Do YYYY, h:mm:ss a')
            })
        }
        axios.post('https://choolakejinendra.firebaseio.com/posts.json',{
            text: text,
            time: moment().format('MMMM Do YYYY, h:mm:ss a')
        })
    }

    
        return (
            <View>
            <TextInput
            style={{marginTop: 100}}
      label="Notice"
      value={text}
      multiline
      numberOfLines={4}
      onChangeText={text => setText(text)}
    />

    <View style={{width: 100, left: '38%', marginTop: 40}}>
    <Button onPress={() => {post()}} mode="contained" color="#8b32a8"> 
        post
    </Button>
   

    </View>
     </View>
        )
    
}

export default Form;