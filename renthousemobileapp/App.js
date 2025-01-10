import { StatusBar } from 'expo-status-bar';
import React from 'react';

// gọi component
import SplashScreen from './components/SplashScreen';
import Login from './components/User/Login';
import Register from './components/User/Register';
import Home from './components/Home/Home';
import ProfileDetail from './components/Home/Tabs/Profile/ProfileDetail'
import CreatePost from './components/Home/Tabs/Social/CreatePost'
import RichTextEditor from './components/Home/Tabs/Social/RichTextEditor';
import CreateNew from './components/Home/Tabs/Discover/CreateNew';
import AdminPage from './components/Admin/AdminPage'


import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack'

const Stack = createNativeStackNavigator();

const useFonts = () => {

}

const StackNavigator = () => {
  return (
    <Stack.Navigator>
        <Stack.Screen options={{ headerShown: false }} name="SplashScreen" component={SplashScreen}></Stack.Screen>
        <Stack.Screen name="Login" component={Login}></Stack.Screen>
        <Stack.Screen name="Register" component={Register}></Stack.Screen>
        <Stack.Screen name="Home" component={Home}></Stack.Screen>
        <Stack.Screen name="ProfileDetail" component={ProfileDetail}></Stack.Screen>
        <Stack.Screen name="CreatePost" component={CreatePost}></Stack.Screen>
        <Stack.Screen name="RichTextEditor" component={RichTextEditor}></Stack.Screen>
        <Stack.Screen name="CreateNew" component={CreateNew}></Stack.Screen>
        <Stack.Screen name="AdminPage" component={AdminPage}></Stack.Screen>
    </Stack.Navigator>
  );
}


export default function App() {

  return (
    <NavigationContainer>
      <StackNavigator/>
    </NavigationContainer>
  );
}
