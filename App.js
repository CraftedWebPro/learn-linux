// App.js

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ThemeProvider } from './Screens/ThemeContext';
import Home from './Screens/home';
import Beginner from './Screens/Beginner';
import Intermediate from './Screens/Intermediate';
import Advanced from './Screens/Advanced';
import ExploreMore from './Screens/ExploreMore';
import StartingLinux from './Screens/StartingLinux';
import Credit from './Screens/Credit';
import FunFact from './Screens/FunFact';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <ThemeProvider>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
          <Stack.Screen name="Beginner" component={Beginner} options={{ title: 'Beginner Level' }} />
          <Stack.Screen name="Intermediate" component={Intermediate} options={{ title: 'Intermediate Level' }} />
          <Stack.Screen name="Advanced" component={Advanced} options={{ title: 'Advanced Level' }} />
          <Stack.Screen name="ExploreMore" component={ExploreMore} options={{ title: 'Explore More' }} />
          <Stack.Screen name="StartingLinux" component={StartingLinux} options={{ title: 'Things to do after installing Linux' }} />
          <Stack.Screen name="Credit" component={Credit} options={{ title: 'Know the Developer' }} />
          <Stack.Screen name="FunFact" component={FunFact} options={{ title: 'Fun Facts' }} />
        </Stack.Navigator>
      </ThemeProvider>
    </NavigationContainer>
  );
};

export default App;
