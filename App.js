import React from 'react';
import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation'
import HomeScreen from './screens/HomeScreen';
import AboutScreen from './screens/AboutScreen';
import HomeListScreen from './screens/HomeListScreen';

const RootStack = createStackNavigator({
        Home: {
            screen: HomeScreen,
        },
        About: {
            screen: AboutScreen,
        },
        HomeListScreen: {
            screen: HomeListScreen
        },
    },

    {
        initialRouteName: 'Home',
        navigationOptions: {
            headerStyle: {
                backgroundColor: '#48BBEC',
            },
        },
        headerTintColor: '#48BBEC',
        headerTitleStyle: {
            fontWeight: 'bold',
        }
    }
);

export default createAppContainer(RootStack);


