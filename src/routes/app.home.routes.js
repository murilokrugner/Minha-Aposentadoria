import React from 'react';
import { createStackNavigator, HeaderBackButton } from '@react-navigation/stack';

import Home from '../pages/Home';
import Result from '../pages/Result';

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
        <Homepage.Screen name="Result" component={Result} 
          options={{
              headerTitle: 'Resultado',            
            }}
        />
    </Homepage.Navigator>                
)