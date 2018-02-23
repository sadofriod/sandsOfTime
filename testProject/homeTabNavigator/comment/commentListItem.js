import React, { Component } from 'react';
import {
    View,
    Image,
    Text,
    StyleSheet,
} from 'react-native';
export default class commentListItem extends React.Component {
    render(){
        return(
            <View style={styles.itemBox}>
                <View style={styles.userInfo}>
                    <Image style={styles.userHeader} source={{uri: this.props.src}}/>
                    <Text>username{this.props.username}</Text>
                </View>
                <View style={styles.commentContext}>
                    <Text>commentContext{this.props.commentContext}</Text>
                </View>
                <View  style={styles.commentTargetBox}>
                    <Text style={styles.commentTarget}>{this.props.nopop}</Text>
                    <Text style={styles.commentTarget}>{this.props.nopoc}</Text>
                </View>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    itemBox:{
        backgroundColor:'#fff',
        borderBottomWidth:1,
        borderColor: '#222'
    },
    userInfo: {
        flex: 0,
        flexDirection: 'row',
        height:60,
        alignItems: 'center',
    },
    userHeader: {
        height:40,
        width:40,
        borderRadius:20,
        borderWidth:1,
        borderColor:'rgba(34,34,34,0.25)'
    },
    commentContext: {
        paddingLeft:20,
        paddingRight:20,
        paddingTop:10,
    },
    commentTargetBox: {
        flex: 0,
        flexDirection: 'row',
        alignItems: 'center',
        height:20,
    },
    commentTarget: {
        flex:1,
        paddingLeft:20
    }
})