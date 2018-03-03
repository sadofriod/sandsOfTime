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
    TouchableHighlight,
    DeviceEventEmitter,
} from 'react-native';
export default class SecondPage extends React.Component {
    constructor(props) {
        super(props);
        let td = [];
        let ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
        this.state = {
            dataSource: ds.cloneWithRows(td),
            td: td,
            rowLenght:0
        };
    }
    componentDidMount() {
        DeviceEventEmitter.addListener('addListItem', (enrollData) => {
            this.state.td.push(enrollData)
            this.setState ({
                td: this.state.td,
            });
            let ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
            this.setState ({
                dataSource: ds.cloneWithRows(this.state.td),
            });
        })
    }

    render() {
        let { navigate } = this.props.screenProps.navigator;
        return (
            (this.state.td.length == 0) ?
                <View><Text>nothing</Text></View>
                :
                <ListView
                    style={{ width: windowPX.width, backgroundColor: '#fff' }}
                    dataSource={this.state.dataSource}
                    renderRow={(rowData) => <ListItem
                        username={rowData.username}
                        title={rowData.title}
                        context={rowData.context}
                        numberOfPointsOfPraise={rowData.numberOfPointsOfPraise}
                        numberOfPointsOfCheck={rowData.numberOfPointsOfCheck}
                        src={rowData.headImgaeSource}
                        nav={(itemData) => {
                            navigate('ListDetail', itemData)
                            console.log(itemData);
                        }}
                    />}
                />
        );
    }
}
class ListItem extends React.Component {
    // constructor(props) {
    //     super(porps);
    // }
    render() {
        return (
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
                        <Image />
                        <Text>
                            name:{this.props.username}
                        </Text>
                    </View>
                    <View style={styles.contextBox}>
                        <Text style={{ fontSize: 20, fontWeight: '900' }}>
                            {this.props.title}
                        </Text>
                        <Text>{this.props.context}</Text>
                    </View>
                    <View style={{ flex: 1, justifyContent: 'flex-start', flexDirection: "row", }}>
                        <Text style={{ flex: 1, marginRight: 8 }}>good  {this.props.numberOfPointsOfPraise}</Text>
                        <Text style={{ flex: 3 }}>see{this.props.numberOfPointsOfCheck}</Text>
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