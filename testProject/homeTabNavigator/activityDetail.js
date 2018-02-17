import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Button,
    TextInput,
    Keyboard,
    Dimensions,
    Image,
    ImageBackground,
    ListView,
    AsyncStorage
} from 'react-native';
import Storage from 'react-native-storage';
export default class activityDetail extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            title: '',
            context: '',
            nopop: '',
            nopoc: '',
            src: '',
        }
    }
    render() {
        return (
            <View>
                <Text>{this.state.title}</Text>
                <View>
                    <Image />
                    <Text>{this.state.username}</Text>
                </View>
                <View>{this.state.context}</View>
                <View>
                    <Text>{this.state.nopop}</Text>
                    <Text>{this.state.nopoc}</Text>
                    <Button
                        title="Enroll"
                    />
                </View>
            </View>
        )
    }
}
const windowPX = {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height
}
const style = StyleSheet.create({
    detailBox: {
        height: windowPX.height,
        width: windowPX.width
    },

})