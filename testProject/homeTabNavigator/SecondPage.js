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
} from 'react-native';
export default class SecondPage extends React.Component{
    render(){
        return(
            <Text>nothing in here</Text>
        );
    }
}
class ListItem extends React.Component {
    // constructor(props) {
    //     super(porps);
    // }
    render() {
        return (
            <View style={styles.listItem}>
                <View style={styles.userInfoBox}>
                    <Image />
                    <Text>
                        name:{this.props.username}
                    </Text>
                </View>
                <View style={styles.contextBox}>
                    <Text style={{fontSize:20,fontWeight:'900'}}>
                        {this.props.title}
                    </Text>
                    <Text>{this.props.context}</Text>
                </View>
                <View style={{flex:1,justifyContent:'flex-start',flexDirection:"row",}}>
                    <Text style={{flex:1,marginRight:8}}>good  {this.props.numberOfPointsOfPraise}</Text>
                    <Text style={{flex:3}}>see{this.props.numberOfPointsOfCheck}</Text>
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
    listItem: {
        height: 180,
        width: windowPX.width * 0.95,
        marginTop: 8,
        marginBottom: 4,
        marginLeft: windowPX.width * 0.025,
        paddingLeft:  windowPX.width *0.04,
        paddingRight:  windowPX.width *0.04,
        paddingTop:  5,
        borderRadius: 5,
        shadowColor: 'black',
        shadowOpacity: 0.8,
        shadowRadius: 5,
        shadowOffset: { width: 0, height: 0 },
        elevation: 6,
    },
    userInfoBox: {
        flex: 0,
        justifyContent: 'center',
        height: 35,
        width: windowPX.width * 0.885,
        borderBottomWidth: 1,
        borderBottomColor: 'rgba(50,50,50,0.25)'
    },
    contextBox:{
        height:100,
        width: windowPX.width * 0.91,
    },
})