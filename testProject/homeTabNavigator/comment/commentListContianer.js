import React, { Component } from 'react';
import {
    Text,
    TextInput,
    ListView,
    StyleSheet,
    View,
} from 'react-native';
import CommentListItem from './commentListItem'
export default class commentListContianer extends React.Component {
    constructor(props) {
        super(props);
        let rowData = [];
        let ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
        this.state = {
            dataSource: ds.cloneWithRows(rowData),
            rowData: rowData,
        }
    }
    static navigationOptions = {
        header: null
    }
    _renderRow(listData) {
        alert(this.state.rowData.length)
        return (
            <CommentListItem
                src={listData.src}
                username={listData.username}
                commentContext={listData.commentContext}
                nopop={listData.nopop}
            />
        )
    }
    render() {
        return (
            // <View>
                
                    this.state.rowData.length == 0 ?
                    <View><Text>no comment</Text></View>
                    :
                    <ListView
                        style={{ backgroundColor: '#fff' }}
                        dataSource={this.state.dataSource}
                        renderRow={
                            (listData) => this._renderRow(listData)
                        }
                    />
                
                //  <View>
                //     <TextInput
                //         placeholder='发表评论'
                //         onChangeText={
                //             (userInput) => {
                //                 let ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
                //                 this.setState({
                //                     rowData: this.state.rowData.push({
                //                         username: 'test',
                //                         commentContext: userInput,
                //                         nopop: '0',
                //                         src:''
                //                     }),
                //                     dataSource:ds.cloneWithRows(this.state.rowData)
                //                 })
                //             }
                //         }
                //         value=''
                //     />
                // </View> 
            // </View>
        )
    }
}
const styles = StyleSheet.create({
    textInputBox:{
        position:'absolute',
        bottom:0,
        flex:0,
        flexDirection:'row',
        height:30
    }
})