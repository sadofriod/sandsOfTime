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
import testData from './testData.json'
export default class FirstPage extends React.Component {
    constructor(props) {
        super(props);
        let td = testData
        let ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
        this.state = {
            dataSource: ds.cloneWithRows(td),
        };
    }
    render() {
        return (
            <ListView
                dataSource={this.state.dataSource}
                renderRow={(rowData) => <ListItem name={rowData.username} title={rowData.title} context={rowData.context} />}
            />
        );
    }
}
class ListItem extends React.Component {
    // constructor(props) {
    //     super(porps);
    // }
    render() {
        return(
        <View>
            <View>
                <Image />
                <Text>
                    name:{this.props.username}
                </Text>
            </View>
            <Text>
                {this.props.title}
            </Text>
            <Text>{this.props.context}</Text>
            <View>
                <Text>good  {this.props.numberOfPointsOfPraise}</Text>
                <Text>see{this.props.numberOfPointsOfCheck}</Text>
            </View>
        </View>
        )
    }
}
