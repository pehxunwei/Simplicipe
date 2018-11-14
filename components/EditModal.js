import React, { Component } from 'react';
import {  FlatList, StyleSheet, Image, Alert, Dimensions, View, Text, TextInput, Platform } from 'react-native';
import Modal from 'react-native-modalbox';
import Button from 'react-native-button';
import flatListData from '../data/flatListData';


var screen = Dimensions.get('window');

export default class EditModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
        foodName: '',
        foodQuantity: ''
    }

  }
  showEditModal = (editingFood, flatlistItem) => {
      //console.log('editingFood =$(JSON.stringify(editingFood)}');
      this.setState({
          key: editingFood.key,
          foodName: editingFood.name,
          foodQuantity: editingFood.foodQuantity,
          flatlistItem: flatlistItem
      })
        this.refs.myModal.open();
  }
  generateKey = (numberOfCharacters) => {
        return require('random-string')({length: numberOfCharacters});
  }

  render() {
    return (
      <Modal 
        ref={'myModal'}
        style ={{
          justifyContent: 'center',
          borderRadius: Platform.OS === 'ios' ? 30 : 0,
          shadowRadius: 10,
          width: screen.width - 80,
          height: 280
      }}
      position='center'
      backdrop={true}
      onClosed={() => {
            //alert("Item Added!");
    
    }}
    >
        <Text style={{
            fontSize: 16,
            fontWeight:'bold',
            textAlign:'center',
            marginTop: 40
        }}>Ingredient information</Text>
        <TextInput
            style={{
                height:40,
                borderBottomColor: 'gray',
                marginLeft: 30,
                marginRight: 30,
                marginTop: 20,
                marginBottom: 10,
                borderBottomWidth: 1
            }}
            onChangeText={(text) => this.setState({ foodName: text})}
            placeholder="Enter ingredient's name"
            value={this.state.foodName}
            />
            <TextInput
            style={{
                height:40,
                borderBottomColor: 'gray',
                marginLeft: 30,
                marginRight: 30,
                marginTop: 20,
                marginBottom: 10,
                borderBottomWidth: 1
            }}
            onChangeText={(text) => this.setState({ foodQuantity: text})}
            placeholder="Enter ingredient's quantity"
            value={this.state.foodQuantity}
            />
            <Button
            style={{ fontSize: 18, color:'white'}}
            containerStyle={{
                padding: 8,
                marginLeft: 70,
                marginRight: 70,
                height: 40,
                borderRadius: 6,
                backgroundColor: 'mediumseagreen'
            }}
            onPress={() => {
                if (this.state.foodName.length == 0 || this.state.foodQuantity.length == 0) {
                    alert("You must enter food's name and quantity");
                    return;
                }
                var foundIndex = flatListData.findIndex(item => this.state.key == item.key);
                if (foundIndex < 0) {
                    return;
                }
                flatListData[foundIndex].name = this.state.foodName;
                flatListData[foundIndex].quantity = this.state.foodQuantity;
                this.state.flatlistItem.refreshFlatListItem();
                this.refs.myModal.close();
            }}>
            Save
            </Button>
      </Modal>
    );
  }
}
