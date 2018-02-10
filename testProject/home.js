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
} from 'react-native';
import TabNavigation from './homeTabNavigator/TabNavigation'
export default class HomePage extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            day: new Date().getDay(),
        }
        var timeUpdate = null;
    }
    componentDidMount() {
    }

    render() {
        return (
            <View>
                <View style={styles.topBox}>
                    <ImageBackground style={styles.topBoxBgI} source={require('./img/timg.jpg')}>
                        <View style={styles.topLeftBox}>
                            <View style={styles.topLeftWordBox}>
                                <Text style={styles.topLeftWord}>week{this.state.day}</Text>
                            </View>
                        </View>
                        <View style={styles.topRightBox}>
                            <View style={styles.userDataTube}>
                                <View style={styles.tubeBox}>
                                    <View style={styles.tube}></View>
                                </View>
                                <Text style={styles.tubePlan}>Lead</Text>
                            </View>
                            <View style={styles.userDataTube}>
                                <View style={styles.tubeBox}>
                                    <View style={styles.tube}></View>
                                </View>
                                <Text style={styles.tubePlan}>Play</Text>
                            </View>
                            <View style={styles.userDataTube}>
                                <View style={styles.tubeBox}>
                                    <View style={styles.tube}></View>
                                </View>
                                <Text style={styles.tubePlan}> Time</Text>
                            </View>
                            {/* <View style = {styles.userWorth}>
                            <Text>Worth</Text>
                            <Text></Text>
                        </View> */}
                        </View>
                    </ImageBackground>
                </View>
                <View style={{ height: windowPX.height * 0.7 }}>
                    <TabNavigation/>
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
        flex: 0,
        justifyContent: 'center',
        alignItems: 'center',
        height: windowPX.height * 0.30,
        width: windowPX.width,
        backgroundColor: '#00345a',
    },
    topBoxBgI: {
        flex: 0,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        height: windowPX.height * 0.30,
        width: windowPX.width,
    },
    topLeftBox: {
        flex: 0,
        justifyContent: 'center',
        alignItems: 'center',
        height: windowPX.height * 0.30,
        width: windowPX.width * 0.40,
        padding: windowPX.width * 0.02,
        backgroundColor: 'rgba(0,0,0,.75)',
    },
    topLeftWordBox: {
        flex: 0,
        justifyContent: 'flex-end',
        alignItems: 'center',
        height: windowPX.height * 0.15,
        width: windowPX.width * 0.18,
        borderTopLeftRadius: 15,
        borderTopRightRadius: 15,
        borderWidth: 1,
        borderColor: '#fff',
    },
    topLeftWord: {
        flex: 0,
        justifyContent: 'center',
        alignItems: 'center',
        color: '#fff',
        fontSize: 28,
        fontWeight: 'bold',
        borderTopWidth: 6,
        width: windowPX.width * 0.18,
        height: windowPX.height * 0.12,
        textAlign: 'center',
        borderColor: '#fff',
        paddingTop: windowPX.width * 0.02,
    },
    topRightBox: {
        flex: 0,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        height: windowPX.height * 0.30,
        width: windowPX.width * 0.60,
        backgroundColor: 'rgba(0,0,0,.75)',
        padding: windowPX.width * 0.02,
    },
    timeDivide: {
        height: windowPX.height * 0.06,
        width: 30,
        color: '#222',
        textAlign: 'center',
        fontSize: 30,
        fontWeight: "900",
    },
    userDataTube: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    tube: {
        flex: 0,
        height: windowPX.height * 0.08,
        width: windowPX.width * 0.05,
        borderRadius: 20,
        backgroundColor: '#ff6c00',
    },
    tubeBox: {
        flex: 0,
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
        height: windowPX.height * 0.17,
        width: windowPX.width * 0.06,
        borderRadius: 20,
        borderWidth: 2,
        borderColor: '#fff',
        marginBottom: 8,
    },
    tubePlan: {
        color: '#fff',
        textAlign: 'center',
        fontSize: 18,
    },
    userWorth: {
        flex: 2,
        justifyContent: 'center',
        alignItems: 'center',
    }
})