import React from 'react';
import {StyleSheet, Text, View, Button} from 'react-native';

export default class HomeScreen extends React.Component {
    static navigationOptions = {
        title: 'Welcome',
    };

    render() {
        const {navigate} = this.props.navigation;
        return (
            <View style={styles.home}>
                <Text>Home Screen</Text>
                <Button
                    title="Go About Page"
                    onPress={() => navigate('About')
                    }
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    home: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
});
