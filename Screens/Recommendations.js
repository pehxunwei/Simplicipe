import React, { Component } from 'react';
import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity, Image, ScrollView, DrawerItems } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import { Button, Container, Header, Content, Left, Right, Title, Body} from 'native-base'



export default class Recommendations extends Component {

  render() {
    return (
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
                <Image source= {require('../Images/Recommendations.png')}/>
            </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
});
