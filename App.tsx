import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from './src/screens/LoginScreen';
import { NavigationContainer } from '@react-navigation/native';
import SignupScreen from './src/screens/SignupScreen';
import { StyleSheet } from 'react-native';
import { Provider } from 'react-redux';
import { store } from './src/store';
import WelcomeScreen from './src/screens/WelcomeScreen';
export default function App() {
  const Stack = createNativeStackNavigator();

  return (

      <NavigationContainer>
        <Stack.Navigator initialRouteName='welcome'>
          <Stack.Screen
            name='signup'
            options={{ headerShown: false }}
            component={SignupScreen}
          />
          <Stack.Screen
            name='login'
            options={{ headerShown: false }}
            component={LoginScreen}
          />
          <Stack.Screen
            name='welcome'
            options={{ headerShown: false }}
            component={WelcomeScreen}
          />
        </Stack.Navigator>
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
