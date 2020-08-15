import {StatusBar} from 'expo-status-bar';
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation'
import HomeScreen from './screens/HomeScreen';
import AboutScreen from './screens/AboutScreen';

const RootStack = createStackNavigator({
        Home: {
            screen: HomeScreen,
        },
        About: {
            screen: AboutScreen,
        },
    },
    {
        initialRouteName: 'Home',
    }
);

const App = createAppContainer(RootStack);

export default App;

/*export default class App extends React.Component {
    render() {
        return (
           <AppNavigator/>
        );
    }


}*/

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
