import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Dimensions,
    Image,
    ImageBackground,
    ListView,
    TouchableHighlight,
    DeviceEventEmitter,
} from 'react-native';
export default class personalPage extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <View>
                <TouchableHighlight>
                    <Image/>
                    <View>
                        <Text></Text>
                        <Text></Text>
                    </View>
                </TouchableHighlight>
            </View>
        )
    }
}