import React from 'react';
import {StyleSheet, Text, View, Button, Image, TouchableHighlight} from 'react-native';

export default class HomeScreen extends React.Component {
    static navigationOptions = {
        title: `Home`,
        titleColor: "#fff",
        headerStyle: {
            backgroundColor: '#0081CF'
        },
    };

    render() {
        const {navigate} = this.props.navigation;
        return (
            <View style={styles.container}>
                <TouchableHighlight style={styles.topBox} onPress = {() => navigate('HomeListScreen')}>
                    <Image
                        style={styles.homeBanner}
                        source={require('../assets/house.png')}/>
                </TouchableHighlight>
                <View style={styles.bottomBox}/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column'
    },
    topBox: {
        flex: 1,
        backgroundColor: '#CCE5FF'
    },
    bottomBox: {
        flex: 2,
        backgroundColor: '#FFF'
    },
    homeBanner: {
        bottom: 0,
        flex: 1,
        alignSelf: 'stretch',
        width: undefined,
        height: undefined,}
});
