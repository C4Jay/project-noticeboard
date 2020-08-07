import React, { Component, useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import axios from 'axios';
import { TextInput, Button } from 'react-native-paper';

const Landing = (props) => {
   
    const [messages, setMessages] = useState([{text: "Everyone come to the hall", time: Date.now()},{text:"Conference at 11", time: Date.now()},{text: "Everyone come to the hall", time: Date.now()}])
    const [premessages, setPremessages] = useState();
    const [highpriv, setHighpriv] = useState(false); 
    const [text, setText] = useState('');
    const [showform, setShowform] = useState(false);
    const [showmessage, setShowmessage] = useState('');
    

    const post = () => {
        if(text == "CooperatePass") {
            setHighpriv(true)
            setShowform(false)
        }else{
            setShowmessage("Password is wrong")
        }
    }

    const removepost = (key) => {
        axios.delete('https://choolakejinendra.firebaseio.com/posts/' + key + '.json')
        .then(response => {
            console.log(response)
        }).catch(er => {
            console.log(er)
        })
    }

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
                {!highpriv ? 
                <TouchableOpacity onPress={() => {setShowform(!showform)}}>
                
                <View style={styles.btn}>
                    <Text style={styles.plus1}>Login for admins</Text>
                </View> 
                </TouchableOpacity>: null  }

                {showform ? 

                <View>
            <TextInput
            style={{marginTop: 40}}
      label="Password"
      value={text}
      secureTextEntry={true}
    //   multiline
    //   numberOfLines={4}
      onChangeText={text => setText(text)}
    />
    <Text style={{textAlign: 'center', color: '#fc2403'}}>{showmessage}</Text>

    <View style={{width: 100, left: '38%', marginTop: 20}}>
    <Button onPress={() => {post()}} mode="contained" color="#8b32a8"> 
        login
    </Button>
   

    </View>
     </View>  : null }
                
                {highpriv ? 
                <TouchableOpacity onPress={() => {props.navigation.navigate('Form', {key: 'foo'})}}>
                
                <View style={styles.btn}>
                    <Text style={styles.plus}>Create a Post</Text>
                </View> 
                </TouchableOpacity>: null  }
                <View style={{marginBottom: 100}}>
                
                <ScrollView>
                    
                {messages.map(message => {
                    return <View key={message.id} style={styles.tile}>
                        <Text style={styles.message}>{message.text}</Text>
                        <Text style={{fontWeight: 'bold', fontSize: 16}}>{message.time}</Text>
                    {highpriv ? 
                    <View style={{flexDirection: 'row', width: '100%'}}>
                        <TouchableOpacity onPress={() => removepost(message.id)}>
                            <View><Text style={styles.cancel}>Remove</Text></View>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => {props.navigation.navigate('Form', {key: message.id})}}>
                            <View><Text style={styles.patch}>Update</Text></View>
                            </TouchableOpacity>
                        </View>
                        : null }
                        </View>
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

    plus1: {
        fontSize: 20,
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