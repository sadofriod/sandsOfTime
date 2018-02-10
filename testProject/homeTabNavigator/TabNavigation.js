import React, { Component } from 'react';
import { TabNavigator, TabBarBottom, TabBarTop } from 'react-navigation';
import firstPage from './FirstPage';
import secondPage from './SecondPage';
export default TabNavigation = TabNavigator(
    {
        Home: { screen: firstPage },
        Settings: { screen: secondPage }
    },
    {
        navigationOptions:({navigation})=>({
            tabBarIcon:({focused, tintColor}) =>{
                const {routeName} = navigation.state;
                let 
            }
        }),
        tabBarOptions: {
            activeTintColor: 'tomato',
            inactiveTintColor: 'gray',
        },
        tabBarComponent: TabBarTop,
        tabBarPosition: 'top',
        animationEnabled: false,
        swipeEnabled: false,
    }
)