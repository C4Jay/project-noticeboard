import { createStackNavigator } from '@react-navigation/stack';
import Landing from '../screens/landing';

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
      </Stack.Navigator>
  )
    }

export default navs;