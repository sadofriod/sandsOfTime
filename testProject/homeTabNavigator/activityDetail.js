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

export default class ActivityDetail extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: this.props.navigation.state.params.username,
            title: this.props.navigation.state.params.title,
            context: this.props.navigation.state.params.context,
            nopop: this.props.navigation.state.params.nopop,
            nopoc: this.props.navigation.state.params.nopoc,
            src: this.props.navigation.state.params.headImgaeSource,
        }
        // alert(this.props.navigation.state.params);
    }
    // static navigationOptions ={
    //     header: null
    // }
    render() {
        return (
            <View style={{ backgroundColor: '#fff', height: 400 }}>
                <Text>{this.state.title}</Text>
                <View>
                    <Image source={{ uri: this.state.src }} />
                    <Text>{this.state.username}qwewq</Text>
                </View>
                <View><Text>{this.state.context}</Text></View>
                <View>
                    <Text>{this.state.nopop}</Text>
                    <Text>{this.state.nopoc}sadasd</Text>
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
const styles = StyleSheet.create({
    detailBox: {
        height: windowPX.height,
        width: windowPX.width,
        backgroundColor: '#000'
    },

})