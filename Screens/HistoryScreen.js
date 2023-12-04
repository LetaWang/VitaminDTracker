import React, { useState, useEffect } from 'react';
import { View, Text, Button } from 'react-native';
import BottomToolbar from './BottomToolbar';
import HistoryStyle from '../stylesheets/HistoryStyle.js'; // Import the stylesheet

const History = ({ navigation }) => {
  return (
    <View style={HistoryStyle.container}>
        <Text style={HistoryStyle.title}>Vitamin D</Text>
        <Text style={HistoryStyle.title}>History</Text>

      {/* Include the BottomToolbar component with navigation */}
      <BottomToolbar navigation={navigation} pageName={'History'} />
    </View>
  );
};

export default History;
