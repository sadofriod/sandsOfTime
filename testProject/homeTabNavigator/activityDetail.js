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
    AsyncStorage,
    ScrollView
} from 'react-native';
import Storage from 'react-native-storage';
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
    render() {
        return (
            <ScrollView style={{ flex: 1 }} contentContainerStyle={styles.passageContent}>
                <View style={styles.detailBox}>
                    <Text style={styles.passageTitel}>{this.state.title}</Text>
                    <View style={styles.userInfo}>
                        <Image style={styles.userHeader} source={{ uri: this.state.src }} />
                        <Text style={styles.username}>{this.state.username}qwewq</Text>
                    </View>
                    <Text>{this.state.context}</Text>

                    <View style={styles.passageControl}>
                        <Text>{this.state.nopop}</Text>
                        <Text>{this.state.nopoc}</Text>
                        <Button
                            title="Enroll"
                        />
                    </View>
                </View>
            </ScrollView>
        )
    }
}
const windowPX = {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height
}
const styles = StyleSheet.create({
    detailBox: {
        flex: 0,
        height: windowPX.height,
        width: windowPX.width,
    },
    passageTitel: {
        flex: 0,
        justifyContent: 'center',
        height: windowPX.height * 0.10,
        width: windowPX.width,
        fontSize: 30,
        padding: 5,
        paddingLeft: 20,
        fontWeight: '900',
        marginBottom: windowPX.height * 0.01,
        backgroundColor: '#fff',
        elevation: 6,
    },
    userInfo: {
        flex: 0,
        flexDirection: 'row',
        alignItems: 'center',
        height: windowPX.height * 0.09,
        width: windowPX.width,
        borderBottomWidth: 1,
        borderColor: 'rgba(50,50,50,0.25)',
        backgroundColor: '#fff',
        paddingLeft: 20,
    },
    userHeader: {
        flex: 0,
        height: windowPX.height * 0.06,
        width: windowPX.height * 0.06,
        borderRadius: windowPX.height * 0.03,
        borderColor: 'rgba(50,50,50,0.25)',
        borderWidth: 1,
        marginRight: 15,
    },
    username: {
        flex: 3,
        fontSize: 18,
        color: '#222',
    },
    passageContent: {
        backgroundColor: '#fff',
    },
    passageControl: {
        flex: 1,
        alignItems:'center',
        position: 'absolute',
        bottom: 0,
        flexDirection: 'row',
        height: windowPX.height * 0.08,
        width: windowPX.height * 0.08,
    }
})