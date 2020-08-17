import {StatusBar} from 'expo-status-bar';
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
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
