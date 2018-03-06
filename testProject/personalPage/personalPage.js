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
    ScrollView,
} from 'react-native';
export default class personalPage extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <ScrollView>
                <TouchableHighlight>
                    <Image/>
                    <View>
                        <Text></Text>
                        <Text></Text>
                    </View>
                </TouchableHighlight>
                <View>
                    <Text></Text>
                    <Text></Text>                    
                </View>
                <View>
                    {map()}                    
                </View>
            </ScrollView>
        )
    }
}