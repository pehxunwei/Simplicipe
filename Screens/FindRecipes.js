import React, { Component } from 'react'
import { Button, Container, Header, Content, Left, Right, Title, Body} from 'native-base'
import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity, Image, ScrollView, DrawerItems } from 'react-native'
import { SearchBar, someMethod} from 'react-native-elements'
import { createSwitchNavigator, createStackNavigator, createBottomTabNavigator, createDrawerNavigator, DrawerActions} from 'react-navigation'
import ManageShoppingList from '../Screens/ManageShoppingList'
import ShopNow from '../Screens/ShopNow'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import PopupDialog from 'react-native-popup-dialog'
import Modal from 'react-native-modal'
import BasicFlatList from '../components/BasicFlatList'
import ComparePricesPage from '../Screens/ComparePricesPage'
import DummyPage from '../Screens/DummyPage'
import { Grid, Row, Col } from 'react-native-easy-grid'

export class FindRecipes extends React.Component{
    
    state = {
        isModalVisible: false
    };

    _toggleModal = () =>
        this.setState({ isModalVisible: !this.state.isModalVisible});
        
    render(){
        return(
        <View>
            <Header style ={{backgroundColor: '#ff0000', height: 65}}>
                <Left style={{ paddingTop: -10}}>
                    <Icon name="menu" style={{fontSize: 28}} onPress={() =>this.props.navigation.openDrawer()}/>
                </Left>
                <Title style={{alignItems:'center', justifyContent: 'center', paddingRight: 40}}>
                <SearchBar
                    round
                    containerStyle={{backgroundColor:'red', borderBottomWidth: 0, borderTopWidth: 0}}
                    onChangeText={someMethod}
                    onClearText={someMethod}
                    placeholder='Search online for recipes'/>
                </Title>
            </Header>
            <View style={{ flexDirection: 'row'}}>
                <View style={styles.recipe1}>
                <TouchableOpacity onPress={this._toggleModal}>
                <Image
                source={require('../Images/ChickenRice.png')}
                /></TouchableOpacity>
                <Modal isVisible={this.state.isModalVisible}>
                
                <View style={{alignItems:'center', backgroundColor:'#fff', marginTop: 50, paddingTop: 50}}>
                <Text style={{marginBottom: 15}}>Chicken Rice</Text>
                <Text style={styles.name}>Ingredient                                           Qty</Text>
                <Text style={styles.name}>Rice                                                     4kg</Text>
                <Text style={styles.name}>Chicken Thigh                                    2kg</Text>
                <Text style={styles.name}>Chicken Stock                                      2L</Text>
                <Text style={styles.name}>Pandan Leaves                                400g</Text>
                <Text style={styles.name}>Bak Choy                                          1.1kg</Text>
                <Text style={styles.name}>Cucumber                                        200g</Text>
                

                <Text style={{paddingRight: 150, marginBottom: 5}}>Method of Cooking</Text>
                <Text style={{paddingLeft: 17}}>1. Boil rice with Pandan Leaves and Chicken Stock</Text>
                <Text style={{paddingLeft: 13}}>2.Chop Chicken Thigh into bite-slice pieces</Text>     
                <Text style={{paddingLeft: 14}}>3. Steam Chicken Thigh pieces until cooked</Text> 
                <Text style={{paddingRight: 95}}>4. Wash and boil Bak Choy</Text> 
                <Text style={{paddingRight: 145}}>5. Chop Cucumber</Text> 
                <Text style={{paddingRight: 38, paddingBottom: 10}}>6. Serve rice separate from chicken</Text> 






                <Button primary style={{marginLeft:110, marginBottom: 25}} onPress={this._toggleModal}>
                <Text style={{color:'#fff'}}>Add this to my list!</Text>
                </Button>
                </View>
                
                </Modal>
                </View>
                <View style={styles.recipe}>
                <Image
                source={require('../Images/BeefStew.png')}
                style={styles.image}
                />
                </View>
            </View>
            <View style={{ flexDirection: 'row'}}>
                <View style={styles.recipe1}>
                <Image
                source={require('../Images/Carbonara.png')}
                style={styles.image}
                />
                </View>
                <View style={styles.recipe}>
                <Image
                source={require('../Images/ChiliCrab.png')}
                style={styles.image}
                />
                </View>
            </View>

</View>


        )
    }
}


const AppTabNavigator = createBottomTabNavigator({
    'Find Recipes':{
        screen:FindRecipes,
        navigationOptions: {
            tabBarOptions:{
            activeTintColor: 'red',
            inactiveTintColor: 'grey',
            style:{
                height: 120,
            },
            labelStyle:{
                    fontSize: 12,
                    fontWeight: 'bold',
                }
            },
            tabBarlabel: 'Find Recipes',
            tabBarIcon: (<Image source={require('../Images/findrecipe.png')}/>
            )}
    },
    'Manage Shopping List':{
        screen:ManageShoppingList,
        navigationOptions: {
            tabBarOptions:{
            activeTintColor: 'red',
            inactiveTintColor: 'grey',
            style:{
                    height: 120,
                },
            labelStyle:{
                        fontSize: 12,
                        fontWeight: 'bold',
                    }
                },
            tabBarLabel: 'Manage Shopping List',
            tabBarIcon: (<Image source={require('../Images/shopping.png')}/>
            )}
    },
    'Shop Now':{
        screen:DummyPage,
        navigationOptions:{
            tabBarOptions:{
            activeTintColor: 'red',
            inactiveTintColor: 'grey',
            style:{
                    height: 120,
                },
            labelStyle:{
                    fontSize: 12,
                    fontWeight: 'bold',
                    }
                },
            tabBarlabel: 'Shop Now!',
            tabBarIcon: (<Image source={require('../Images/shopnow.png')}/>
            )}
        }
    })

export default createSwitchNavigator(
    {
    App: AppTabNavigator,
})

const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    recipe:{
      height: 283.5, 
      width: 186, 
      backgroundColor: '#fff', 
      alignItems: 'center',
      paddingTop: 2,
      paddingLeft:3
    },
    recipe1:{
        height: 283.5, 
      width: 186, 
      backgroundColor: '#fff', 
      alignItems: 'center',
      paddingTop: 2,
      paddingLeft:2
    },
    image:{
        paddingBottom: 100,
        justifyContent:'flex-start'
    },
    name:{
        paddingBottom: 7, 
        paddingRight: 50, 
        paddingLeft: 30
    }
});
