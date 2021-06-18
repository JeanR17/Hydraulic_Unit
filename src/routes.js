import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


const AppStack = createStackNavigator();

import Initial from './pages/Initial';
import Inputs from './pages/Inputs';
import Output from './pages/Output';
import Graphics from './pages/Graphics';

export default function Routes() {
    return (
        <NavigationContainer>

            <AppStack.Navigator screenOptions={{ headerShown: false }}>
                <AppStack.Screen name={'Initial'} component={Initial} />
                <AppStack.Screen name={'Inputs'} component={Inputs} />
                <AppStack.Screen name={'Output'} component={Output} />
                <AppStack.Screen name={'Graphics'} component={Graphics} />
            </AppStack.Navigator>

        </NavigationContainer>
    );
}