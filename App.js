import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, ImageBackground } from 'react-native';
import CartItem from './components/CarItem';

export default function App() {
  return (
    <View style={styles.container}>
      <CartItem
        name={"Model 3"}
        tagline={"Order Online For"}
        taglineCTA={"Touchless Delivery"}
        image={require('./assets/images/ModelX.jpeg')}
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
    alignItems: 'center',
    justifyContent: 'center',
  }
});
