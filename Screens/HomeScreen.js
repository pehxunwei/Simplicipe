import React, { Component } from 'react'
import { Button, Container, Header, Content, Left, Right, Title } from 'native-base'
import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity, Image, Navigator, ScrollView } from 'react-native'
import { createStackNavigator, createSwitchNavigator, StackNavigator } from 'react-navigation'
import FindRecipes from '../Screens/FindRecipes'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import Modal from 'react-native-modal'

export default class HomeScreen extends Component {
    
  render() {
    return (
        <ScrollView>
        <View style={styles.container}>
            <Header style ={{backgroundColor: '#ff0000', height: 65}}>
                <Left style={{ paddingTop: -10}}>
                    <Icon name="menu" style={{fontSize:28}} onPress={() =>this.props.navigation.openDrawer()} />
                </Left>
                <Title style={{fontFamily: 'SnellRoundhand', fontSize: 30, justifyContent: 'center', paddingTop: 0, paddingRight: 118}}>
                Simplicipe
                </Title>
            </Header>
            
            <View>
            <TouchableOpacity
                onPress={() => this.props.navigation.navigate('Find Recipes')}>
                <Image
                resizeMode='cover' 
                source={require('../Images/Recipes.png')}
                style={styles.imageStyle}
                />
                </TouchableOpacity>
            </View>
            <View>
            <TouchableOpacity
                onPress={() => this.props.navigation.navigate('Manage Shopping List')}>
                <Image 
                source={require('../Images/ShoppingList.png')}
                style={styles.imageStyle}
                />
                </TouchableOpacity>
            </View>
            <View>
            <TouchableOpacity
                onPress={() => this.props.navigation.navigate('Manage Home Inventory')}>
                <Image 
                source={require('../Images/HomeInventory.png')}
                style={styles.imageStyle}
                />
                </TouchableOpacity>
            </View>
            <View>
            <TouchableOpacity
                onPress={() => this.props.navigation.navigate('Shop Now')}>
                <Image 
                source={require('../Images/ShopNow1.png')}
                style={styles.imageStyle}
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
    },

    imageStyle:{
        marginBottom: 2,
        height: 255,
        width: 375,
    }
});