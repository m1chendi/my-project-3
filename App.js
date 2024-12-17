import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import AboutScreen from './screens/AboutScreen';
import MyLanguagesScreen from './screens/MyLanguagesScreen'; 
import NotFoundScreen from './screens/NotFoundScreen';

const Tab = createBottomTabNavigator();

function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="О Себе" component={AboutScreen} />
        <Tab.Screen name="Мои языки программирования" component={MyLanguagesScreen} />
        <Tab.Screen name="Не найдено" component={NotFoundScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default App;

