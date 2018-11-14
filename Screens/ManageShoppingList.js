import React, { Component } from 'react'
import { Container, Header, Content, Left, Right, Title } from 'native-base'
import { StyleSheet, Text, View, SafeAreaView, Image, ImageBackground, FlatList, Alert} from 'react-native'
import { SearchBar, someMethod, Button } from 'react-native-elements'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import flatListData from '../data/flatListData'
import Swipeout from 'react-native-swipeout'
import AddModal from '../components/AddModal'
import EditModal from '../components/EditModal'
import { Grid, Col, Row } from 'react-native-easy-grid'


class FlatListItem extends Component {
    constructor(props) {
        super(props);
        this.state ={
            activeRowKey: null,
            numberOfRefresh: 0
        };
    }
    refreshFlatListItem = () => {
        this.setState((prevState) => {
            return{
                numberOfRefresh: prevState.numberOfRefresh + 1
            };
        });
}
    render() {
        const swipeSettings = {
                autoClose:true,
                onClose: (secId, rowId, direction) => {
                    this.setState({activeRowKey: null})
                },
                onOpen: (secId, rowId, direction) => {
                    this.setState({activeRowKey: this.props.item.key});
                },
                right: [
                    {
                        onPress: () => {
                            //alert("Update");
                            this.props.parentFlatList.refs.editModal.showEditModal(flatListData[this.props.index], this);
                        },
                        text: 'Edit', type: 'primary'
                    },
                    {
                        onPress: () => {
                            const deletingRow = this.state.activeRowKey;
                            Alert.alert(
                                'Alert',
                                'Are you sure you want to delete?',
                                [
                                {text: 'No', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
                                {text: 'Yes', onPress: () => {
                                    flatListData.splice(this.props.index, 1);
                                    this.props.parentFlatList.refreshFlatList(deletingRow);
                                }},

                                ],
                                { cancelable: true}
                            );
                        },
                        text: 'Delete', type: 'delete'
                    }

                ],
                rowId: this.props.index,
                sectionId: 1
        };

        return (
            <Swipeout {...swipeSettings}>
            
        
            <Row style={{backgroundColor:'white', paddingTop: 10}}>
            <Col style={{paddingLeft:45}}><Text style={styles.flatListItem}>{this.props.item.name}</Text></Col>
            <Col style ={{paddingLeft: 80}}><Text style={styles.flatListItem}>{this.props.item.quantity}</Text></Col>
            </Row>
        
            </Swipeout>


        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
      },
      flatListItem:{
        marginLeft: 5,
        marginTop: 15,
        color:'black',
        backgroundColor:'white',
        fontSize:20,
        fontFamily:'Times New Roman'

    }
    })

export default class ManageShoppingList extends Component {
    constructor(props) {
        super(props);
        this.state = ({
            deletedRowKey: null,
        });
        this._onPressAdd = this._onPressAdd.bind(this);
    }
    
    refreshFlatList = (activeKey) => {
        this.setState((prevState) => {
            return {
                deletedRowKey: activeKey
            };
        });
        this.refs.flatList.scrollToEnd();
    }
    _onPressAdd () {
        //alert("You add Item");
        this.refs.addModal.showAddModal();
    }
  render() {
    return (
        <View style={styles.container}>
        <Header style ={{backgroundColor: '#ff0000', height: 65}}>
                <Left style={{ paddingTop: -10}}>
                    <Icon name="menu" style={{fontSize: 28}} onPress={() =>this.props.navigation.openDrawer()} />
                </Left>
                <Title style={{justifyContent: 'center', alignItems:'center'}}>
                <SearchBar
                    round
                    containerStyle={{backgroundColor:'red', borderBottomWidth: 0, borderTopWidth: 0}}
                    onChangeText={someMethod}
                    onClearText={someMethod}
                    placeholder='Search shopping list'/>
                </Title>
                <Right>
                    <View>
                        <Icon name="plus-circle-outline" style ={{fontSize:28}} onPress={this._onPressAdd} />
                            </View>
                </Right>
            </Header>

          <View style={{flex:1}}>
                <FlatList 
                ref={'flatList'}
                data={flatListData}
                renderItem={({item, index})=>{
                    //console.log('Item = ${JSON.stringify(item)}, index = ${index}');
                    return(
                    <FlatListItem item={item} index={index} parentFlatList={this}>;
                    
                    
                    
                    </FlatListItem>);
                }}
                >
                
                
                </FlatList>
                <AddModal ref={'addModal'} parentFlatList={this}>
                
                </AddModal>
                <EditModal ref={'editModal'} parentFlatList={this}>
                
                </EditModal>
            </View>
            
            
        </View>
    )
  }
}