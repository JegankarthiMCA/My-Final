import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import mainlogo from '../assets/main.jpg';
import { FontAwesome } from '@expo/vector-icons';

const MainScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Image style={styles.logoimg} source={mainlogo} />
      <Text
        style={styles.button2}  // Use the defined style
        onPress={() => navigation.navigate('Home')}
      >
        Get Started
      </Text>
    </View>
  );
};

export default MainScreen;

const styles = StyleSheet.create({
  container: {
    height: '100%',
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  head: {
    color: 'white',
    fontSize: 53,
    top: -135,
    fontWeight: 'bold',
    textAlign: 'justify',
    fontFamily: 'serif',
  },
  head1: {
    color: 'white',
    textAlign: 'center',
    top: -60,
    fontSize: 22,
  },
  logoimg: {
    position: 'absolute',
    width: '100%',
    height: '100%',
  },
  searchIcon: {
    top: '17.2%',
    marginRight: 30,
    marginLeft: '-21%',
  },
  button2: {
    color: 'white',
    fontSize: 18,
    backgroundColor: '#9c6bff',
    padding: 10,
    borderRadius: 30,
    marginTop: 450
    
  },
});
