import React, { Component } from 'react'
import { Button, Container, Header, Content, Left, Right, Title } from 'native-base'
import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity, Image, Navigator, ScrollView } from 'react-native'
import { createStackNavigator, createSwitchNavigator, StackNavigator, createBottomTabNavigator } from 'react-navigation'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import FindRecipes from '../Screens/FindRecipes'
import ManageShoppingList from '../Screens/ManageShoppingList'
import ComparePricesPage from '../Screens/ComparePricesPage'
import ShopNow from '../Screens/ShopNow'
import HomeScreen from '../Screens/HomeScreen';

export default class DummyPage extends React.Component{
    
    render() {
        return (
                <AppStackNavigator />
        )}}



const AppStackNavigator = createStackNavigator ({
    'Shop Now': {
        screen:ComparePricesPage}
        ,
    'Compare Prices Page': {
        screen: ShopNow}
})