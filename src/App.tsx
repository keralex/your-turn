
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack'; // Notice 'createNativeStackNavigator'

import LoginScreen from './screens/LoginScreen/LoginScreen';
import { PaperProvider } from 'react-native-paper';
import MyCustomTheme from './theme/theme';

// Create a Native Stack Navigator instance
const Stack = createNativeStackNavigator();

function App() {
  return (
    <PaperProvider theme={MyCustomTheme}>

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
    </PaperProvider>
  );
}

export default App;