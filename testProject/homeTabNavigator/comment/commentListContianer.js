import React, { Component } from 'react';
import {
    Text,
    TextInput,
    ListView,
    StyleSheet,
} from 'react-native';
import CommentListItem from './commentListItem'
export default class commentListContianer extends React.Component {
    constructor(props) {
        super(props);
    }
    _renderRow(listData){
        let rowData = [];
        let ds = new ListView.DataSource({ rowHasChanged: (r1,r2) => r1 !== r2});
        this.state = {
            dataSource: ds.cloneWithRows(rowData),
            rowData:rowData
        }
        return (
            <CommentListItem
                src={listData.src}
                username={listData.username}
                commentContext={listData.commentContext}
                nopop={listData.nopop}
                nopoc={listData.nopoc}
            />
        )
    }
    render(){
        return (
            this.state.rowData.length == 0 ?
            <View><Text>no comment</Text></View>
            :
            <ListView
                style={{backgroundColor:'#fff'}}
                dataSource={this.state.dataSource}
                renderRow={
                    (listData)=>this._renderRow(listData)
                }
            />
        )
    }
}