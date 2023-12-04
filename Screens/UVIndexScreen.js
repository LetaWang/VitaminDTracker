import React, { useState, useEffect } from 'react';
import { View, Text, Button } from 'react-native';
import BottomToolbar from './BottomToolbar';
import UVIndexStyle from '../stylesheets/UVIndexStyle.js'; // Import the stylesheet

const UVIndex = ({ navigation }) => {
  return (
    <View style={UVIndexStyle.container}>
      {/* Your main content */}
      <View>
        <Text>UV Index Content</Text>
        {/* Add your main content here */}
      </View>

      {/* Include the BottomToolbar component with navigation */}
      <BottomToolbar navigation={navigation} pageName={'UVIndex'} />
    </View>
  );
};

export default UVIndex;
