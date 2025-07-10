
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack'; // Notice 'createNativeStackNavigator'

import LoginScreen from './screens/LoginScreen/LoginScreen';

// Create a Native Stack Navigator instance
const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      {/* Define your native stack navigator with screens */}
      <Stack.Navigator>
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{ headerShown: false }} // Hides the header for the login screen
        />
        {/* Add more screens here for your main app flow */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;