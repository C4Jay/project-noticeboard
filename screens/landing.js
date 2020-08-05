import React, { Component, useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import axios from 'axios';

const Landing = (props) => {
   
    const [messages, setMessages] = useState([{text: "Everyone come to the hall", time: Date.now()},{text:"Conference at 11", time: Date.now()},{text: "Everyone come to the hall", time: Date.now()}])
    const [premessages, setPremessages] = useState();

    useEffect(() => {
        axios.get('https://choolakejinendra.firebaseio.com/posts.json')
        .then(response => {
            // setMessages(response.data)
            const messagesfromuri = []
            var premessagesfromuri = []
            const obj = response.data
            
            for(let key in obj) {
                messagesfromuri.push({
                    id: key,
                    text: obj[key].text,
                    time: obj[key].time
                })
            }
            premessagesfromuri = messagesfromuri.reverse()
            setMessages(premessagesfromuri)
            
        }).catch(er => {
            console.log(er)
        })
        // setMessages(premessagesfromuri)
    },[messages])
        return(
            <View>
                <TouchableOpacity onPress={() => {props.navigation.navigate('Form')}}>
                <View style={styles.btn}>
                    <Text style={styles.plus}>Create a Post</Text>
                </View>
                </TouchableOpacity>
                <View style={{marginBottom: 100}}>
                
                <ScrollView>
                    
                {messages.map(message => {
                    return <View style={styles.tile}>
                        <Text style={styles.message}>{message.text}</Text>
                        <Text>{message.time}</Text>
                    <View style={{flexDirection: 'row', width: '100%'}}>
                        <TouchableOpacity>
                            <View><Text style={styles.cancel}>Remove</Text></View>
                            </TouchableOpacity>
                            <TouchableOpacity>
                            <View><Text style={styles.patch}>Update</Text></View>
                            </TouchableOpacity>
                        </View></View>
                })}
                
                </ScrollView>
               
                </View>
                
            </View>
        )
            }

const styles = StyleSheet.create({
    tile: {
        backgroundColor: '#d48e59',
        borderRadius: 10,
        padding: 8,
        margin: 5
    },

    message: {
        lineHeight: 50,
        color: 'white',
        fontWeight: 'bold',
        fontSize: 30
        
    },

    btn : {
        borderRadius: 20,
        backgroundColor: '#b4f0f0',
        position: 'relative',
        marginTop: 10
        
    },

    plus: {
        fontSize: 28,
        textAlign: 'center'
    },

    cancel: {
        color: '#ed0909',
        marginTop: 16,
        
        fontSize: 20
    },

    patch: {
        color: '#2a8ed1',
        marginTop: 16,
      
        fontSize: 20
    }


})

export default Landing;