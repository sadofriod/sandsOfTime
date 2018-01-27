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
            <View style={styles.topBox}>
                <ImageBackground style={styles.topBoxBgI} source={require('./img/timg.jpg')}>
                    <View style={styles.topLeftBox}>
                        <View style={styles.topLeftWordBox}>
                            <Text style={styles.topLeftWord}>week{this.state.day}</Text>
                        </View>
                    </View>
                    <View style={styles.topRightBox}>

                    </View>
                </ImageBackground>

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
        height: windowPX.height * 0.30,
        width: windowPX.width,
    },
    topLeftBox: {
        flex: 0,
        justifyContent: 'center',
        alignItems: 'center',
        height: windowPX.height * 0.30,
        width: windowPX.width * 0.36,
        padding: windowPX.width * 0.02,
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
        justifyContent: 'center',
        alignItems: 'center',
        height: windowPX.height * 0.30,
        width: windowPX.width * 0.60,
        padding: windowPX.width * 0.02,
    },
    timeBox: {
        flex: 1,
        flexDirection: 'row',
        height: windowPX.height * 0.26,
        width: windowPX.width,
        marginTop: windowPX.height * 0.14,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ff6c00',
        borderTopLeftRadius: 15,
        borderTopRightRadius: 15,
        borderBottomLeftRadius: (windowPX.height * 0.40) / 2,
        borderBottomRightRadius: (windowPX.height * 0.40) / 2,
        shadowColor: '#ffffff',
        shadowOffset: { width: 0, height: 0 },
        shadowRadius: 10,
        shadowOpacity: 1,
        elevation: 4,
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