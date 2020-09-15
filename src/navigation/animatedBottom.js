import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { Image, } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import FavouriteScreen from '../screen/FavouriteScreen/FavouriteScreen';
import BookmarkScreen from '../screen/BookmarkScreen/BookmarkScreen';
import SettingScreen from '../screen/SettingScreen/SettingScreen';
import DashboardScreeen from '../screen/DashboardScreen/DashboardScreen';
import { useSelector } from "react-redux";
import AnimatedTabBar from '@gorhom/animated-tabbar';
import Svgimg from '../assets/Images/backArrow.svg'


const BottomTab = createBottomTabNavigator();

const tabs = {
    Home: {
        labelStyle: {
            color: '#5B37B7',
        },
        icon: {
            component: <Svgimg />,
            activeColor: 'rgba(91,55,183,1)',
            inactiveColor: 'rgba(0,0,0,1)',
        },
        background: {
            activeColor: 'rgba(223,215,243,1)',
            inactiveColor: 'rgba(223,215,243,0)',
        },
    },
    Profile: {
        labelStyle: {
            color: '#1194AA',
        },
        icon: {
            component: <Svgimg />,
            activeColor: 'rgba(17,148,170,1)',
            inactiveColor: 'rgba(0,0,0,1)',
        },
        background: {
            activeColor: 'rgba(207,235,239,1)',
            inactiveColor: 'rgba(207,235,239,0)',
        },
    },
};


function animateBottom() {


    return (
        <BottomTab.Navigator

            tabBar={props => (
                <AnimatedTabBar tabs={tabs} {...props} />
            )}>

            <BottomTab.Screen name="Home" component={DashboardScreeen}/>
            <BottomTab.Screen name="Profile" component={BookmarkScreen}/>
           
        </BottomTab.Navigator>
    );
}

export default animateBottom;