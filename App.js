import React from 'react';
import { View, Text, Button } from 'react-native';
import MainStyles from './stylesheets/MainStyles.js'; // Import the stylesheet
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import BluetoothComponent from './bluetooth/BluetoothComponent.js'
const Stack = createStackNavigator();

function App() {
  const handlePress = () => {
    // Handle button press here
  }


  return (
   <NavigationContainer>
      <Stack.Navigator initialRouteName="Bluetooth">
        <Stack.Screen name="Bluetooth" component={BluetoothComponent} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;