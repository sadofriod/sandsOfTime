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
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View>
        <Text>Home Screen</Text>
        <Button
          onPress={() => navigate('Chat')}
          title="Chat with Morning"
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
const SimpleApp = StackNavigator({
  Home: { screen: HomeScreen },
  Chat: { screen: ChatScreen }
});
export default class App extends React.Component {
  render() {
    return <SimpleApp />;
    // (
    //   <View style={styles.container}>
    //     <Text style={styles.welcome}>
    //       Welcome to React Native!
    //     </Text>
    //     <Text style={styles.instructions}>
    //       To get started, edit App.js
    //     </Text>
    //     <Text style={styles.instructions}>
    //       {instructions}
    //     </Text>
    //   </View>
    // );
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
  },
});
