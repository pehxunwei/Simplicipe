import React, { Component } from 'react';
import {  FlatList, StyleSheet, Image, Alert, Dimensions, View, Text, TextInput, Platform, TouchableHighlight } from 'react-native';
import Modal from 'react-native-modalbox';
import Button from 'react-native-button';
import flatListData from '../data/flatListData';


var screen = Dimensions.get('window');

export default class AddModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
        newFoodName: '',
        newFoodQuantity: ''
    }

  }
  showAddModal = () => {
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
            alert("Item Added!");
    
    }}
    >
        <Text style={{
            fontSize: 16,
            fontWeight:'bold',
            textAlign:'center',
            marginTop: 40
        }}>New ingredient information</Text>
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
            onChangeText={(text) => this.setState({ newFoodName: text})}
            placeholder="Enter new ingredient's name"
            value={this.state.newFoodname}
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
            onChangeText={(text) => this.setState({ newFoodQuantity: text})}
            placeholder="Enter new ingredient's quantity"
            value={this.state.newFoodQuantity}
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
                if (this.state.newFoodName.length == 0 || this.state.newFoodQuantity.length == 0) {
                    alert("You must enter food's name and quantity");
                    return;
                }
                const newKey = this.generateKey(10);
                const newFood = {
                    key: newKey,
                    name: this.state.newFoodName,
                    quantity: this.state.newFoodQuantity
                };
                flatListData.push(newFood);
                this.props.parentFlatList.refreshFlatList(newKey);
                this.refs.myModal.close();
            }}>
            Save
            </Button>
      </Modal>
    );
  }
}
