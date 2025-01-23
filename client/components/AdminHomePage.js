import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native'; // Import useNavigation hook

const AdminHomePage = () => {
  const navigation = useNavigation(); // Initialize navigation

  const navigateToCodeHomepage = () => {
    navigation.navigate('codehome'); // Navigate to Codehomepage screen
  };

  const navigateToUserHomePage = () => {
    navigation.navigate('UserHomePage'); // Navigate to UserHomePage screen
  };

  return (
    <View style={styles.container}>
      <Text style={styles.Title}>Admin HomePage</Text>

      {/* Image at the top of the page */}
      <Image 
        source={require('../assets/admin.png')} // Adjust the path based on your file structure
        style={styles.image} 
      />

      {/* Button to navigate to Codehomepage */}
      <TouchableOpacity style={styles.button} onPress={navigateToCodeHomepage}>
        <Text style={styles.buttonText}> User Detail</Text>
      </TouchableOpacity>

      {/* Button to navigate to UserHomePage */}
      <TouchableOpacity style={styles.button} onPress={navigateToUserHomePage}>
        <Text style={styles.buttonText}> User Home Page</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#c6dff7', // Set your desired background color
    justifyContent: 'center', // Center the button vertically
    alignItems: 'center', // Center the button horizontally
  },
  image: {
    width: 350, // Set width of the image
    height: 250, // Set height of the image
    marginBottom: 180, // Add margin below the image
    borderRadius: 10,
  },
  button: {
    marginTop: 20,
    backgroundColor: '#9c6bff',
    padding: 12,
    borderRadius: 25, // Same border radius for both buttons
    alignItems: 'center',
    width: '80%', // Ensure the buttons have the same width
    height: 50, // Set a consistent height for buttons
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 20,
    textAlign: 'center',
  },
  Title: {
    fontSize: 30,
    textAlign: 'center',
    fontWeight: 'bold',
    marginBottom: 30,
    marginTop: 20,
    color: '#4A148C', // Set the color for the title text (e.g., dark purple)
  },
});

export default AdminHomePage;
