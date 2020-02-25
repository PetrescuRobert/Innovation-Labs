/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import HomeScreen from "./HomeScreen";
import SwipeScreen from "./SwipeScreen";
import NavigationDrawer from "./NavigationDrawer";

const styles = StyleSheet.create({
  containter: {
    flex: 1,
    backgroundColor: '#fff',
    
  }});

export default class App extends React.Component {
  render(){
    return (
      <View style={styles.containter}>
      <NavigationDrawer />
      </View>
    );
  }
}
