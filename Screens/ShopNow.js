import React, { Component } from 'react'
import { Container, Header, Content, Left, Right, Title, Image } from 'native-base'
import { StyleSheet, Text, View, SafeAreaView, ImageBackground} from 'react-native'
import { SearchBar, someMethod, Button} from 'react-native-elements'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import CheckBox from 'react-native-check-box'
import IngredientContainer from './IngredientContainer.js'
import {Grid} from 'react-native-easy-grid'

export default class ShopNow extends Component {
        constructor(props){
            super(props);
            this.state ={
                checked: false
            };
        }

        handlePressCheckedBox = (checked) => {
            this.setState({
                isChecked: checked,
            });
        }
            static navigationOptions ={
                header:null
            }
  render() {
    return (
        <View style={styles.container}>
            <Header style ={{backgroundColor: '#ff0000', height: 65}}>
                <Left style={{ paddingTop: -10}}>
                    <Icon name="menu" style={{fontSize: 28}} onPress={() =>this.props.navigation.openDrawer()} />
                </Left>
                <Title style={{fontFamily: 'SnellRoundhand', fontSize: 24, alignItems:'center', justifyContent: 'center', paddingTop: 6, paddingRight: 67}}>
                <Text>Currently Shopping...</Text>
                </Title>
            </Header>
            
            <View>
            <ImageBackground style={{width: '100%', height:'100%'}} source={require('../Images/notepad.png')}>
            <View style={{flexDirection:'row'}}>
                <Text style={{fontFamily:'Times New Roman', fontSize:24, fontWeight:'bold', paddingLeft: 100, paddingTop: 30, paddingBottom: 15}}>Item</Text>
                <Text style={{fontFamily:'Times New Roman', fontSize:24, fontWeight:'bold', paddingLeft: 105, paddingTop: 30}}>Qty</Text>
             
            </View>

            <IngredientContainer ingredient={{ingredient:'Golden Umbrella Thai Rice', quantity:'5kg'}}/>
            <IngredientContainer ingredient={{ingredient:'BestFarm Chicken Thigh', quantity:'1kg'}}/>
            <IngredientContainer ingredient={{ingredient:'Campbell Chicken Stock', quantity:'1L'}}/>
            <IngredientContainer ingredient={{ingredient:'Loose Pandan Leaves', quantity:'200g'}}/>
            <IngredientContainer ingredient={{ingredient:'Freshest Bak Choy', quantity:'600g'}}/>
            <IngredientContainer ingredient={{ingredient:'Cucumber', quantity:'100g'}}/>
            </ImageBackground>
            </View>
           
            
        </View>
        
    )
  }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
    }
});
