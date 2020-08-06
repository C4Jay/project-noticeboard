import { createStackNavigator } from '@react-navigation/stack';
import Landing from '../screens/landing';
import Form from '../screens/form';
import SigninScreen from '../screens/login';
import RegisterScreen from '../screens/register';

const Stack = createStackNavigator();

function navs() {
  return (
    <Stack.Navigator
      initialRouteName="SignIn"
      headerMode="screen"
      screenOptions={{
        headerTintColor: 'white',
        headerStyle: { backgroundColor: 'tomato' },
      }}
    >
      
      <Stack.Screen
        name="SignIn"
        component={SigninScreen}
        options={{
          title: 'Sign In',
        }}
      />

<Stack.Screen
        name="SignUp"
        component={RegisterScreen}
        options={{
          title: 'Sign Up',
        }}
      />

      <Stack.Screen
        name="Landing"
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