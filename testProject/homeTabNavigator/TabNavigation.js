import React, { Component } from 'react';
import { TabNavigator, TabBarBottom, TabBarTop } from 'react-navigation';
import FirstPage from './FirstPage';
import SecondPage from './SecondPage';
export default TabNavigation = TabNavigator(
    {
        Home: { screen: FirstPage },
        Settings: { screen: SecondPage }
    },
    {
    //     navigationOptions:({navigation})=>({
    //         tabBarIcon:({focused, tintColor}) =>{
    //             const {routeName} = navigation.state;
    //             let 
    //         }
    //     }),
        tabBarOptions: {
            activeTintColor: 'blue',
            inactiveTintColor: 'gray',
            style:{
                backgroundColor:'#fff',
            }
        },
    //     tabBarComponent: TabBarTop,
    //     tabBarPosition: 'top',
    //     animationEnabled: false,
    //     swipeEnabled: false,
    }
)