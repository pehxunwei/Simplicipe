import React, { Component } from 'react';
import { StyleSheet, Text, View, SafeAreaView, ScrollView, Dimensions, Image } from 'react-native';
import { createDrawerNavigator, DrawerItems, createStackNavigator } from 'react-navigation';
import HomeScreen from './Screens/HomeScreen';
import SettingsScreen from './Screens/SettingsScreen';
import ManageAccount from './Screens/ManageAccount';
import FindRecipes from './Screens/FindRecipes';
import ManageShoppingList from './Screens/ManageShoppingList';
import ManageHomeInventory from './Screens/ManageHomeInventory';
import ShopNow from './Screens/ShopNow';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Recommendations from './Screens/Recommendations';

export default class App extends Component {

  render() {
    return (
      <MyApp />
    );
  }
}

const CustomDrawerComponent = (props) => (
  <SafeAreaView style ={{ flex: 1 }}>
    <View style ={{ height: 150, backgroundColor: 'white', alignItems: 'center', justifyContent: 'center'}}>
      <Image source ={require('./Images/Usericon.png')} style= {{ height: 120, width: 120, borderRadius: 60}} />
      <Text style={{fontWeight: 'bold', fontSize: 18, alignItems:'center', justifyContent:'center'}}>Name</Text>
    </View>
    <ScrollView>
      <DrawerItems {...props} />
    </ScrollView>
    </SafeAreaView>
)

const MyApp = createDrawerNavigator({
  Home: {
    screen:HomeScreen,
    navigationOptions: {
      drawerIcon: ({tintColor }) => (
        <Icon name = "google-home" style={{fontSize: 24,color:tintColor, fontWeight: 'bold'}} />)
  }},
  'Manage Account': {
    screen:ManageAccount,
    navigationOptions: {
      drawerIcon: ({tintColor }) => (
        <Icon name = "account-edit" style={{fontSize: 24, color:tintColor}} />
    )
    }},
  'Grocery': {
    screen:FindRecipes,
    navigationOptions:{
    drawerIcon: ({tintColor }) => (
      <Icon name = "food-variant" style={{fontSize: 24,color:tintColor, fontWeight: 'bold'}} />)
  }},
  'Manage Home Inventory': {
    screen:ManageHomeInventory,
    navigationOptions:{
    drawerIcon: ({tintColor }) => (
      <Icon name = "cart" style={{fontSize: 24,color:tintColor, fontWeight: 'bold'}} />
  )
  }},
  'Recommendations': {
    screen:Recommendations,
    navigationOptions:{
      drawerIcon:({tintColor}) => (
        <Icon name ="thumb-up" style={{fontSize: 24,color:tintColor, fontWeight: 'bold'}}/>
      )
    }},
  Settings:{
    screen:SettingsScreen,
    navigationOptions:{
    drawerIcon: ({tintColor }) => (
      <Icon name = "settings" style={{fontSize: 24, color:tintColor}} />
  )
  }}
},{
  contentComponent: CustomDrawerComponent
})

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});