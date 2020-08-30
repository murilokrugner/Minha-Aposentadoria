import React from 'react';
import { createStackNavigator, HeaderBackButton } from '@react-navigation/stack';

import Home from '../pages/Home';

const Homepage = createStackNavigator();

export default HomeRoutes = () => (      
    <Homepage.Navigator
        screenOptions={{
            headerTintColor: '#000',
            headerTitleAlign: 'center',
            headerTitle: 'titulo',
            headerStyle: {
            },
            headerShown: true,
        }}
        initialRouteName="Home">
        <Homepage.Screen name="Home" component={Home} 
          options={{
              headerTitle: 'Calculo de aposentadoria',            
            }}
        />
    </Homepage.Navigator>                
)