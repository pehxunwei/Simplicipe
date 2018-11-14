import React, { Component } from 'react'
import { Button, Container, Header, Content, Left, Right, Title } from 'native-base'
import { StyleSheet, Text, View, SafeAreaView } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import CheckBox from 'react-native-check-box'

export default class ManageHomeInventory extends Component {

  render() {
    return (
        <View style={styles.container}>
            <Header style ={{backgroundColor: '#ff0000', height: 65}}>
                 <Left style={{ paddingTop: -10}}>
                    <Icon name="menu" style={{fontSize: 28}} onPress={() =>this.props.navigation.openDrawer()} />
                </Left>
                <Title style={{fontFamily: 'SnellRoundhand', fontSize: 24, alignItems:'center', justifyContent: 'center', paddingTop: 6, paddingRight: 93}}>
                <Text>Home Inventory</Text>
                </Title>
            </Header>
            <View style={{flexDirection:'row'}}>
                <Text style={{fontFamily:'Times New Roman', fontSize:20, fontWeight:'bold', paddingLeft: 80, paddingTop: 50}}>Item</Text>
                <Text style={{fontFamily:'Times New Roman', fontSize:20, fontWeight:'bold', paddingLeft: 145, paddingTop: 50}}>Qty</Text>
            </View>

            <View style={{flexDirection:'row'}}>
                <Text style={{fontFamily:'Times New Roman', fontSize:24, paddingLeft: 65, paddingTop: 30}}>Rice</Text>
                <Text style={{fontFamily:'Times New Roman', fontSize:24, paddingLeft: 170, paddingTop: 30}}>2kg</Text>
            </View>
            
            <View style={{flexDirection:'row'}}>
                <Text style={{fontFamily:'Times New Roman', fontSize:24, paddingLeft: 65, paddingTop: 30}}>Chicken Thigh</Text>
                <Text style={{fontFamily:'Times New Roman', fontSize:24, paddingLeft: 70, paddingTop: 30}}>1kg</Text>
            </View>

            <View style={{flexDirection:'row'}}>
                <Text style={{fontFamily:'Times New Roman', fontSize:24, paddingLeft: 65, paddingTop: 30}}>Pandan Leaves</Text>
                <Text style={{fontFamily:'Times New Roman', fontSize:24, paddingLeft: 70, paddingTop: 30}}>200g</Text>
            </View>

            <View style={{flexDirection:'row'}}>
                <Text style={{fontFamily:'Times New Roman', fontSize:24, paddingLeft: 65, paddingTop: 30}}>Chicken Stock</Text>
                <Text style={{fontFamily:'Times New Roman', fontSize:24, paddingLeft: 75, paddingTop: 30}}>1L</Text>
            </View>

            <View style={{flexDirection:'row'}}>
                <Text style={{fontFamily:'Times New Roman', fontSize:24, paddingLeft: 65, paddingTop: 30}}>Bak Choy</Text>
                <Text style={{fontFamily:'Times New Roman', fontSize:24, paddingLeft: 120, paddingTop: 30}}>500g</Text>
            </View>
            <View style={{flexDirection:'row'}}>
                <Text style={{fontFamily:'Times New Roman', fontSize:24, paddingLeft: 65, paddingTop: 30}}>Cucumber</Text>
                <Text style={{fontFamily:'Times New Roman', fontSize:24, paddingLeft: 115, paddingTop: 30}}>100g</Text>
            </View>
            <View style={{flexDirection:'row'}}>
                <Text style={{fontFamily:'Times New Roman', fontSize:24, paddingLeft: 65, paddingTop: 30}}>Beef</Text>
                <Text style={{fontFamily:'Times New Roman', fontSize:24, paddingLeft: 170, paddingTop: 30}}>1kg</Text>
            </View>
            <View style={{flexDirection:'row'}}>
                <Text style={{fontFamily:'Times New Roman', fontSize:24, paddingLeft: 65, paddingTop: 30}}>Garlic</Text>
                <Text style={{fontFamily:'Times New Roman', fontSize:24, paddingLeft: 155, paddingTop: 30}}>200g</Text>
            </View>
            <View style={{flexDirection:'row'}}>
                <Text style={{fontFamily:'Times New Roman', fontSize:24, paddingLeft: 65, paddingTop: 30}}>Potato</Text>
                <Text style={{fontFamily:'Times New Roman', fontSize:24, paddingLeft: 155, paddingTop: 30}}>1kg</Text>
            </View>
            <View style={{flexDirection:'row'}}>
                <Text style={{fontFamily:'Times New Roman', fontSize:24, paddingLeft: 65, paddingTop: 30}}>Crab</Text>
                <Text style={{fontFamily:'Times New Roman', fontSize:24, paddingLeft: 170, paddingTop: 30}}>1kg</Text>
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
