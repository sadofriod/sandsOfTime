/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  Keyboard,
  DrawerLayoutAndroid,
  Dimensions,
} from 'react-native';
import { StackNavigator } from 'react-navigation';
const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});
class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'welcome'
  };
  constructor(props) {
    super(props)
    this.state = {
      accountValue: '',
      passwordValue: ''
    }
  }
  render() {
    const { navigate } = this.props.navigation;

    return (
      <View style={styles.container}>
      
        <TextInput
          style={styles.loginInput}
          placeholder='账号'
          onChangeText={(text) => {
            this.setState({
              accountValue: text
            })
          }}
          onBlur={
            () => {
              Keyboard.dismiss();
              alert(this.state.accountValue)
            }
          }
          value={this.state.text}
        />
        <TextInput
          style={styles.loginInput}
          placeholder='密码'
          onChangeText={(text) => {
            this.setState({
              passwordValue: text
            })
          }}
          value={this.state.text}
        />
        <Button
          onPress={() => navigate('Main')}
          title="Chat with Morning"
          style={styles.loginInput}
        />
      </View>
    );
  }
}

class ChatScreen extends React.Component {
  static navigationOptions = {
    title: ' chat with morning'
  };
  render() {
    return (
      <View>
        <Text>Chat with Morning</Text>
      </View>
    );
  }
}
class MainScreen extends React.Component {
  render() {
    const { navigate } = this.props.navigation;
    const menuView = (<View>
      <Text>
        main View touch move left
      </Text>
      <Button
        onPress={() => navigate('Chat')}
        title="Chat with Morning"
        style={styles.loginInput}
      />
    </View>)
    return (
      <DrawerLayoutAndroid
        drawerWidth={300}
        drawerPosition={DrawerLayoutAndroid.positions.Left}
        renderNavigationView={() => <Test />}
      >
        <View style={styles.container}>
          <Text style={styles.instructions}>first</Text>
          <Text style={styles.instructions}>second</Text>
          
        </View>
      </DrawerLayoutAndroid>
    )
  }
}
class Test extends React.Component {
  render(){
    return (
      <View>
       <Text> sadasdasd</Text>
      </View>
    )
  }
}
const SimpleApp = StackNavigator({
  Home: { screen: HomeScreen },
  Chat: { screen: ChatScreen },
  Main: { screen: MainScreen },
});

export default class App extends React.Component {
  render() {
    return (
      // <View style={styles.container}>
      //   <Text style={styles.welcome}>
      //     Welcome to React Native!
      //   </Text>
      //   <Text style={styles.instructions}>
      // To get started, edit App.js
      <View style={{height:Dimensions.get('window').height,width:Dimensions.get('window').width}}>
        <SimpleApp />
      </View>

      /*{ </Text>
      <Text style={styles.instructions}>
        {instructions}
      </Text>
    </View> }*/
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
    width: 50,

  },
  loginInput: {
    paddingLeft: 20,
    width: 350,
    height: 50,
    fontSize: 14,
    borderRadius: 8,
    shadowRadius: 8,
    shadowColor: 'rgba(34,34,34,.35)',
    shadowOffset: { width: 0, height: 10 },
    marginBottom: 30,
  }
});
