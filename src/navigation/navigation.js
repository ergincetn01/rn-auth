import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from '../screens/LoginScreen';
import { NavigationContainer } from '@react-navigation/native';
import SignupScreen from '../screens/SignupScreen';

const Stack = createNativeStackNavigator();

export default function AppNavigator() {
    return (
        <NavigationContainer>
    <Stack.Navigator initialRouteName='signup'>
      <Stack.Screen name='signup' options={{headerShown: false}} component={SignupScreen} />
      <Stack.Screen name='login' options={{headerShown: false}} component={LoginScreen} />
    
    </Stack.Navigator>
  </NavigationContainer>
    )
  
}
