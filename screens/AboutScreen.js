import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

export default class AboutScreen extends React.Component {
    static navigationOptions = {
        title: `About`,
        titleColor: "#fff",
        headerStyle: {
            backgroundColor: '#0081CF'
        },
    };
    render() {
        return (
            <View style={styles.about}>
                <Text>About Screen</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    about: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
});
