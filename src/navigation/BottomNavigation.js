import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { Image, } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import FavouriteScreen from '../screen/FavouriteScreen/FavouriteScreen';
import BookmarkScreen from '../screen/BookmarkScreen/BookmarkScreen';
import SettingScreen from '../screen/SettingScreen/SettingScreen';
import DashboardScreeen from '../screen/DashboardScreen/DashboardScreen';
import { useDispatch, useSelector } from "react-redux";
import BottomTabBar from '../navigation/BottomTabBar'

const BottomTab = createBottomTabNavigator();

function App() {


   return (
      <BottomTab.Navigator 
      tabBar={(props) => <BottomTabBar {...props}/>}>

         <BottomTab.Screen name="Home" component={DashboardScreeen} />
         <BottomTab.Screen name="Bookmark" component={BookmarkScreen} />
         <BottomTab.Screen name="Favourite" component={FavouriteScreen} />
         <BottomTab.Screen name="Setting" component={SettingScreen} />

      </BottomTab.Navigator>
   );
}

export default App;