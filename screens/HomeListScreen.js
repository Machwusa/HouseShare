import React from 'react';
import { Text, View} from 'react-native';

export default class HomeScreen extends React.Component {

    static navigationOptions = {
        title: `Home List`,
        titleColor: "#fff",
        headerStyle: {
            backgroundColor: '#0081CF'
        },
    };

    render() {
        return (
            <View>
                <Text> Home List Screen </Text>
            </View>
        );
    }
}
