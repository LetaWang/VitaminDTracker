import { React, useState, useEffect} from 'react';
import { View, StyleSheet, TouchableOpacity, Text, Image } from 'react-native';

const BottomToolbar = ({ navigation, pageName }) => {
  const [selectedItem, setSelectedItem] = useState(pageName);

    return (
        <View style={styles.toolbar}>
            <TouchableOpacity
                style={styles.toolbarItem, selectedItem === 'HomeScreen' && styles.selectedItem}
                onPress={() => navigation.navigate('HomeScreen')}
            >
                <Image
                    source={require('./assets/home-icon.png')}  // Replace with the correct path to your image
                    style={styles.image}
                />
                <Text style={styles.toolbarText}>Home</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.toolbarItem, selectedItem === 'History' && styles.selectedItem}
                onPress={() => navigation.navigate('HomeScreen')}
            >
                <Image
                source={require('./assets/history-icon.png')}  // Replace with the correct path to your image
                style={styles.image}
                />
                <Text style={styles.toolbarText}>History</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.toolbarItem, selectedItem === 'Bluetooth' && styles.selectedItem}
                onPress={() =>navigation.navigate('Bluetooth')}
            >
                <Image
                source={require('./assets/bluetooth-icon.png')}  // Replace with the correct path to your image
                style={styles.image}
                />
                <Text style={styles.toolbarText}>Device</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.toolbarItem, selectedItem === 'Bluetooth' && styles.selectedItem}
                onPress={() =>navigation.navigate('Bluetooth')}
            >
                <Image
                source={require('./assets/uv-icon.png')}  // Replace with the correct path to your image
                style={styles.image}
                />
                <Text style={styles.toolbarText}>UV Index</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.toolbarItem, selectedItem === 'Bluetooth' && styles.selectedItem}
                onPress={() =>navigation.navigate('Bluetooth')}
            >
                <Image
                source={require('./assets/profile-icon.png')}  // Replace with the correct path to your image
                style={styles.image}
                />
                <Text style={styles.toolbarText}>Profile</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
  toolbar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    height: 70,
    backgroundColor: '#FFFFFF',
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
  },
  toolbarItem: {
       flex: 1,
       justifyContent: 'center',
       alignItems: 'center',
  },
    selectedItem: {
//       flex: 1,
//       justifyContent: 'center',
//       alignItems: 'center',
//      backgroundColor: '#D9D9D9',
//      width: '20vw',
//      height: 70,
    },
  toolbarText: {
    color: 'black',
  },
  image: {
    height: 35,
    width: 35,
  },
});

export default BottomToolbar;
