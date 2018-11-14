import React, { Component } from 'react'
import { Button, Container, Header, Content, Left, Right, Title } from 'native-base'
import { StyleSheet, Text, View, SafeAreaView, Image } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'


export default class SettingsScreen extends Component {
    render() {
      return (
        <View style={styles.container}>
         <Header style ={{backgroundColor: '#ff0000', height: 65}}>
                <Left style={{ paddingTop: -10}}>
                    <Icon name="menu" style={{fontSize:28}} onPress={() =>this.props.navigation.openDrawer()} />
                </Left>
                <Title style={{fontFamily: 'SnellRoundhand', fontSize: 30, alignItems:'center', justifyContent: 'center', paddingTop: 0, paddingRight: 118}}>
                Simplicipe
                </Title>
            </Header>
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <Image source ={require('../Images/alertpage.png')}/>
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