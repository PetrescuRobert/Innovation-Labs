import React, { Component } from 'react';
import { Platform, Dimensions } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createDrawerNavigator } from 'react-navigation-drawer'

import HomeScreen from "./HomeScreen";
import SwipeScreen from "./SwipeScreen"

const WIDTH = Dimensions.get('window').width;

const DrawerConfig = {
	drawerWidth: WIDTH * 0.83,
}

const NavigationDrawer = createDrawerNavigator(
	{
		Home:{
			screen: HomeScreen
		}
	},
	DrawerConfig
);

export default createAppContainer(NavigationDrawer);