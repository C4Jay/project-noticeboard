import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import navs from './navs/navs';
import Landing from './screens/landing';
import Form from './screens/form';


const HomeStack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
    <HomeStack.Navigator screenOptions={{
      headerStyle: {
        backgroundColor: '#4747d1',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    }}>
      <HomeStack.Screen name="Landing" component={Landing} />
      <HomeStack.Screen name="Form" component={Form} />
    </HomeStack.Navigator>

  </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
