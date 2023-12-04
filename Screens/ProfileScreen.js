import React, { useState, useEffect } from 'react';
import { View, Text, Button } from 'react-native';
import BottomToolbar from './BottomToolbar';
import ProfileStyle from '../stylesheets/ProfileStyle.js'; // Import the stylesheet

const Profile = ({ navigation }) => {
  return (
    <View style={ProfileStyle.container}>
      {/* Your main content */}
      <View>
        <Text>Profile</Text>
        {/* Add your main content here */}
      </View>

      {/* Include the BottomToolbar component with navigation */}
      <BottomToolbar navigation={navigation} pageName={'Profile'} />
    </View>
  );
};

export default Profile;
