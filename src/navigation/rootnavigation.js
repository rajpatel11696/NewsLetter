import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import WelcomeScreen from '../screen/WelcomeScreen/WelcomeScreen';
import SettingScreen from '../screen/SettingScreen/SettingScreen';
import SplashScreen from '../screen/SplashScreen/SplashScreen';
import FavouriteScreen from '../screen/FavouriteScreen/FavouriteScreen';
import DashboardScreeen from '../screen/DashboardScreen/DashboardScreen';
import BookmarkScreen from '../screen/BookmarkScreen/BookmarkScreen';
import BottomNavigation from '../navigation/BottomNavigation';
import WhatsappScreen from '../screen/WhatsAppScreen/whatsappScreen';
import DetailScreen from '../screen/DetailNewsScreen/DetailScreen'
import LoginScreen from '../screen/LoginScreen/LoginScreen';
import CreateAccScreen from '../screen/SignUpScreen/CreateAccScreen'
import NewsSection from '../screen/NewsSection/NewsScreen'
import FollowSection from '../screen/FollowSection/FollowScreen'


const Stack = createStackNavigator();

function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={{
                    headerShown: false,
                }}>
                <Stack.Screen name="Splash" component={SplashScreen} />
                <Stack.Screen name="Signup" component={CreateAccScreen} />
                <Stack.Screen name="Login" component={LoginScreen} />
                <Stack.Screen name="Welcome" component={WelcomeScreen} />
                <Stack.Screen name="Setting" component={SettingScreen} />
                <Stack.Screen name="Bottom" component={BottomNavigation} />
                <Stack.Screen name="News" component={NewsSection} />
                <Stack.Screen name="Follow" component={FollowSection} />
                <Stack.Screen name="Whatsapp" component={WhatsappScreen} />
                <Stack.Screen name="Detail" component={DetailScreen} />


            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default App;