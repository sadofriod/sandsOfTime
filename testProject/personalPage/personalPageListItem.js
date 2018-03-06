import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    Dimensions,
    TouchableHighlight,
    DeviceEventEmitter,
    ScrollView,
} from 'react-native';
export default class listItem extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <TouchableHighlight onPress={() => {
                this.props.nav({
                    username: this.props.username,
                    title: this.props.title,
                    context: this.props.context,
                    nopop: this.props.numberOfPointsOfPraise,
                    nopoc: this.props.numberOfPointsOfCheck,
                    headImgaeSource: this.props.src,
                })
                // alert('click')
            }} underlayColor='#fff'>
                <View style={styles.listItem}>
                    <View style={styles.userInfoBox}>
                        <Image style={{ width: 20, height: 20, marginRight: 15, borderRadius: 10, borderWidth: 1, borderColor: '#000' }} source={{ uri: this.props.src }} />
                        <Text>
                            {this.props.username}
                        </Text>
                    </View>
                    <View style={styles.contextBox}>
                        <Text style={{ fontSize: 20, fontWeight: '900' }}>
                            {this.props.title}
                        </Text>
                        <Text>{this.props.context}</Text>
                    </View>
                    <View style={{ flex: 1, justifyContent: 'flex-start', flexDirection: "row", }}>
                        <Text style={{ flex: 1, marginRight: 8 }}>good: {this.props.numberOfPointsOfPraise}</Text>
                        <Text style={{ flex: 3 }}>see: {this.props.numberOfPointsOfCheck}</Text>
                    </View>
                </View>
            </TouchableHighlight>
        )
    }
}
const windowPX = {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height
}
const styles = StyleSheet.create({
    listItem: {
        height: 160,
        width: windowPX.width * 0.95,
        marginTop: 8,
        marginBottom: 4,
        marginLeft: windowPX.width * 0.025,
        paddingLeft: windowPX.width * 0.04,
        paddingRight: windowPX.width * 0.04,
        paddingTop: 5,
        borderRadius: 5,
        shadowColor: 'black',
        shadowOpacity: 0.8,
        shadowRadius: 5,
        shadowOffset: { width: 0, height: 0 },
        elevation: 6,
    },
    userInfoBox: {
        flex: 0,
        justifyContent: 'flex-start',
        flexDirection: 'row',
        alignItems: 'center',
        height: 35,
        width: windowPX.width * 0.885,
        borderBottomWidth: 1,
        borderBottomColor: 'rgba(50,50,50,0.25)'
    },
    contextBox: {
        height: 80,
        width: windowPX.width * 0.91,
    },
})