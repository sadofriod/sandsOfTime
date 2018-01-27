import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Button,
    TextInput,
    Keyboard,
    Dimensions,
} from 'react-native';
export default class HomePage extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            date: new Date(),
            hour: new Date().getHours(),
            min: new Date().getMinutes(),
            sec: new Date().getSeconds(),
        }
        var timeUpdate = null;
    }
    componentDidMount() {
        this.timeUpdate = setInterval(
            () => {
                if (this.state.sec < 10) {
                    this.setState({
                        sec: '0' + new Date().getSeconds()
                    })
                }
                else{
                    this.setState({
                        sec: new Date().getSeconds()
                    })
                }
                if (this.state.min < 10) {
                    this.setState({
                        min: '0' + new Date().getMinutes(),

                    })
                }
                else {
                    this.setState({
                        min:  new Date().getMinutes()
                    })
                }
                if (this.state.hour < 10) {
                    this.setState({
                        hour: '0' + new Date().getHours(),
                    })
                }
                else{
                    this.setState({
                        hour:  new Date().getHours()
                    })
                }
            }
        )
    }

    render() {
        return (
            <View style={styles.topBox}>
                <View style={styles.timeBox}>
                    <Text style={styles.timeSpan}>{this.state.hour}</Text>
                    <Text style={styles.timeDivide}>:</Text>
                    <Text style={styles.timeSpan}>{this.state.min}</Text>
                    <Text style={styles.timeDivide}>:</Text>
                    <Text style={styles.timeSpan}>{this.state.sec}</Text>
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
    topBox: {
        height: windowPX.height * 0.40,
        width: windowPX.width,
        backgroundColor: '#00345a',
        borderBottomLeftRadius: (windowPX.height * 0.40)/2,
        borderBottomRightRadius: (windowPX.height * 0.40)/2,
        // flex: 1,
        // justifyContent: 'flex-end',
        // alignItems: 'center',
        shadowColor: '#ffffff',
        shadowOffset: { width: 0, height: 0 },
        shadowRadius: 10,
        shadowOpacity: 1,
        elevation:20,
    },
    timeBox: {
        flex: 1,
        flexDirection: 'row',
        height: windowPX.height * 0.26,
        width: windowPX.width ,
        marginTop: windowPX.height * 0.14,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ff6c00',
        borderTopLeftRadius: 15,
        borderTopRightRadius: 15,
        borderBottomLeftRadius: (windowPX.height * 0.40)/2,
        borderBottomRightRadius: (windowPX.height * 0.40)/2,
        shadowColor: '#ffffff',
        shadowOffset: { width: 0, height: 0 },
        shadowRadius: 10,
        shadowOpacity: 1,
        elevation:4,
    },
    timeSpan: {
        height: windowPX.height * 0.06,
        width: windowPX.width * 0.13,
        backgroundColor: '#00345a',
        borderWidth: 1,
        borderColor: 'rgba(255,255,255,.35)',
        color: '#fff',
        textAlign: 'center',
        lineHeight: windowPX.height * 0.05,
        borderRadius: 8,
        fontSize: 30,
        padding: 5,
    },
    timeDivide: {
        height: windowPX.height * 0.06,
        width: 30,
        color: '#222',
        textAlign: 'center',
        fontSize: 30,
        fontWeight: "900",
    }
})