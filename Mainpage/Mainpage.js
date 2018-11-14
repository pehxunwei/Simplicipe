import React, { Component } from 'react';
import { StyleSheet, Text, View, SafeAreaView, ScrollView, List } from 'react-native';
import Proptypes from 'prop-types';
import {Icon} from 'native-base';
import {createMaterialTopTabNavigator} from 'react-navigation';

export default class App extends Component {
  
    render(){
    return(
      <SafeAreaView style={{ flex: 1,
      backgroundColor: '#f2f2f2'}}>
      <AppTabNavigator />
      </SafeAreaView>
    );
  }
}

class HomeScreen extends React.Component {

  render(){
    return (
      <View>
      <View style={{height: 40, width: 100 + '%', backgroundColor: '#fff', alignItems: 'center', justifyContent: 'center'}}>
      </View>
      </View>
    )
  }
}


class CalendarScreen extends React.Component {

    render() {
    return (
      
      <View style={styles.container}>
      <Text>Enough is enough</Text>
    </View>
    );

    }
}

class SettingsScreen extends React.Component {

  render() {
    return (
      <View style={styles.container}>
        <Text>That's enough for tonight</Text>
      </View>
    );
  }
}

const AppTabNavigator = createMaterialTopTabNavigator({
    Title: {
        screen: HomeScreen, SettingsScreen, CalendarScreen,
        navigationOptions:{
            title: 'Instagram',
        }
},
  Home: { 
    screen: HomeScreen,
    navigationOptions:{
      tabBarLabel:'Home',
      tabBarIcon:({tintColor})=>(
        <Icon name = "ios-home" color={tintColor} size={24}/>
      )
    } },
  Settings: {
    screen: SettingsScreen,
    navigationOptions:{
      tabBarLabel: 'Settings',
      tabBarIcon:({tintColor})=>(
        <Icon name = "ios-settings" color={tintColor} size={24}/>
      ) 
    } },

  Calendar: { 
    screen: CalendarScreen,
    navigationOptions:{
      tabBarLabel:'Calendar',
      tabBarIcon:({tintColor})=>(
        <Icon name = "ios-calendar" color={tintColor} size={24}/>
      )
    } },
},{
    initialRouteName: 'Settings',
    order:['Settings', 'Home', 'Calendar'],
    tabBarPosition: 'bottom',
    swipeEnabled: true,
    animationEnabled: false,
    tabBarOptions: {
      activeTintColor: 'orange',
      inactiveTintColor: 'grey',
      style: {
        backgroundColor: '#f2f2f2'
      },
      indicatorStyle: {
        height: 0
      },
      showIcon: true
    }
})

const styles = StyleSheet.create({
  tempNav:{
      width: 100 + "%",
      height: 60,
      marginTop: 50,
      backgroundColor: '#ff0000',
      borderBottomWidth: StyleSheet.hairlineWidth,
      justifyContent: "center",
      alignItems: "center"
  },  
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
});