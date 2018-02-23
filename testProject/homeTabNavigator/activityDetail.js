import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Button,
    TextInput,
    Keyboard,
    Image,
    ImageBackground,
    ListView,
    AsyncStorage,
    ScrollView,
    DeviceEventEmitter,
} from 'react-native';
import Storage from 'react-native-storage';
import { styles } from './style/detail';
import comment from './comment/commentListContianer';
import { StackNavigator } from 'react-navigation';
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
        // alert(this.state.src);
    }
    // static navigationOptions ={
    //     header: null
    // }
    enrollActivity() {
        DeviceEventEmitter.emit('addListItem', {
            username: this.state.username,
            title: this.state.title,
            context: this.state.context,
            nopop: this.state.nopop,
            nopoc: this.state.nopoc,
            src: this.state.headImgaeSource,
        });
        alert('post');
    }
    render() {
        return (
            <ScrollView style={{ flex: 1 }} contentContainerStyle={styles.passageContent}>
                <View style={styles.detailBox}>
                    <Text style={styles.passageTitel}>{this.state.title}</Text>
                    <View style={styles.userInfo}>
                        <Image style={styles.userHeader} source={{ uri: this.state.src }} />
                        <Text style={styles.username}>{this.state.username}qwewq</Text>
                    </View>
                    <View>
                        <Text style={{ padding: 8 }}>{this.state.context}</Text>
                    </View>
                    <View style={styles.passageControl}>
                        <View style={styles.passageControlBox}>
                            <Text style={styles.nopopStyle}>see: {this.state.nopop}</Text>
                            <Text style={styles.nopopStyle}>good: {this.state.nopoc}</Text>
                            <Button
                                title="comment"
                                style={styles.enrollStyle}
                                onPress={this.props.navigation.navigte('comment')}
                            />
                        </View>
                        <Button
                            title="Enroll"
                            style={styles.enrollStyle}
                            onPress={()=>{
                                DeviceEventEmitter.emit('addListItem', {
                                    username: this.state.username,
                                    title: this.state.title,
                                    context: this.state.context,
                                    nopop: this.state.nopop,
                                    nopoc: this.state.nopoc,
                                    src: this.state.headImgaeSource,
                                });
                            }}
                        />
                    </View>
                </View>
            </ScrollView>
        )
    }
}
export const ActivityStack = StackNavigator({
    Home: { screen: ActivityDetail },
    comment: { screen: comment},
})
