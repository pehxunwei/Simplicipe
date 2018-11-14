import React, { Component } from 'react'
import { Button, Container, Header, Content, Left, Right, Title } from 'native-base'
import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity, Image, Navigator, ScrollView } from 'react-native'
import { createStackNavigator, createSwitchNavigator, StackNavigator, createBottomTabNavigator } from 'react-navigation'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import FindRecipes from '../Screens/FindRecipes'
import ShopNow from '../Screens/ShopNow'
import HomeScreen from '../Screens/HomeScreen'

export default class ComparePricesPage extends Component {
    static navigationOptions ={
        header:null
    }
  render() {
    return (
        <ScrollView>
        <View style={styles.container}>
            <Header style ={{backgroundColor: '#ff0000', height: 65}}>
                <Left style={{ paddingTop: -10}}>
                    <Icon name="menu" style={{fontSize:28}} onPress={() =>this.props.navigation.openDrawer()} />
                </Left>
                <Title style={{fontFamily: 'SnellRoundhand', fontSize: 30, alignItems:'center', justifyContent: 'center', paddingTop: 0, paddingRight: 118}}>
                Simplicipe
                </Title>
            </Header>
            
            <View>
            <TouchableOpacity
                onPress={() => this.props.navigation.navigate('Compare Prices Page')}>
                <Image 
                source={require('../Images/ComparePricesPage2.png')}
                />
                </TouchableOpacity>
            </View>
        </View>
        </ScrollView>
    )
  }
}



const styles = StyleSheet.create({
    container: {
      flex: 1,
    }
});