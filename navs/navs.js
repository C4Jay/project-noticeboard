import { createStackNavigator } from '@react-navigation/stack';
import Landing from '../screens/landing';
import Form from '../screens/form';

const Stack = createStackNavigator();

function navs() {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      headerMode="screen"
      screenOptions={{
        headerTintColor: 'white',
        headerStyle: { backgroundColor: 'tomato' },
      }}
    >
      <Stack.Screen
        name="Home"
        component={Landing}
        options={{
          title: 'Landing Page',
        }}
      />

      <Stack.Screen
      name="Form"
      component={Form}
      options={{
        title: 'Form'
      }}
      />
      </Stack.Navigator>
  )
    }

export default navs;