import React from 'react';
import {StyleSheet, Text, View, Button} from 'react-native';

export default class HomeScreen extends React.Component {
    static navigationOptions = {
        title: `Home`,
        headerStyle: {
            backgroundColor: '#0081CF'
        },
    };

    render() {
        const {navigate} = this.props.navigation;
        return (
            <View style={styles.container}>
                <View style={styles.topBox}/>
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
        flex: 2,
        backgroundColor: '#CCE5FF'
    },
    bottomBox: {
        flex: 1,
        backgroundColor: '#FFFFCC'
    }
});
