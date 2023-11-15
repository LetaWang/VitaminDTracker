import React, { useState, useEffect } from 'react';
import { View, Text, Button } from 'react-native';
import BottomToolbar from './BottomToolbar';
import HomeScreenStyle from '../stylesheets/HomeScreenStyle.js'; // Import the stylesheet

const HomeScreen = ({ navigation }) => {
  return (
    <View style={HomeScreenStyle.container}>
      {/* Your main content */}
      <View>
        <Text>Main Content</Text>
        {/* Add your main content here */}
      </View>

      {/* Include the BottomToolbar component with navigation */}
      <BottomToolbar navigation={navigation} pageName={'HomeScreen'} />
    </View>
  );
};
//
//function HomeScreen({ navigation }) {
//
//  return (
//    <View style={HomeScreenStyle.container} >
//      <Text>HomeScreen</Text>
//       <BottomToolbar navigation={navigation} />
//    </View>
//  );
//}

export default HomeScreen;
