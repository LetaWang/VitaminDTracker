import React from 'react';
import { View, Text, Button } from 'react-native';
import MainStyles from './stylesheets/MainStyles.js'; // Import the stylesheet
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import BluetoothComponent from './Screens/bluetooth/BluetoothComponent.js'
import HomeScreen from './Screens/HomeScreen.js'

const Stack = createStackNavigator();

function App() {
  const handlePress = () => {
    // Handle button press here
  }


  return (
   <NavigationContainer>
      <Stack.Navigator initialRouteName="HomeScreen">
        <Stack.Screen name="HomeScreen" component={HomeScreen} options={{ headerShown: false }}/>
        <Stack.Screen name="Bluetooth" component={BluetoothComponent} options={{ headerShown: false }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;