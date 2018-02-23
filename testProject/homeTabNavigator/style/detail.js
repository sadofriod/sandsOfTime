import React, { Component } from 'react';
import {
    StyleSheet,
    Dimensions,
} from 'react-native';
const windowPX = {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height
}

export const styles = StyleSheet.create({
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
        alignItems: 'center',
        position: 'absolute',
        bottom: 0,
        paddingRight: 5,
        flexDirection: 'row',
        height: windowPX.height * 0.08,
        width: windowPX.width,
        borderTopWidth: 1,
        borderColor: 'rgba(50,50,50,0.25)',
    },
    passageControlBox: {
        flex: 3,
        flexDirection: 'row',
        paddingRight: 5,
    },
    nopopStyle: {
        flex: 1,
        // padding: 5,
        // paddingLeft: 10,
        textAlign: 'center',
        paddingTop: 8
    },
    enrollStyle: {
        flex: 1
    }
})