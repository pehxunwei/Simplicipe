import React, { Component } from 'react'
import { Container, Header, Content, Left, Right, Title, Image } from 'native-base'
import { StyleSheet, Text, View, SafeAreaView} from 'react-native'
import { SearchBar, someMethod, Button} from 'react-native-elements'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import CheckBox from 'react-native-check-box'
import { Grid, Col, Row } from 'react-native-easy-grid'

export default class IngredientContainer extends Component {
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


  render() {
      const{ingredient,quantity} = this.props.ingredient
      
      console.log(ingredient);
      console.log(quantity);
    return (
    <Row style={{height:35}}>
            <Col size={3} style={{alignItems:'center'}}><Text style={{fontFamily:'Times New Roman', fontSize:18}}>{ingredient}</Text></Col>
            <Col size={1}><Text style={{fontFamily:'Times New Roman', fontSize:18}}>{quantity}</Text></Col>
            <Col size={0.5}><CheckBox 
                    style={{paddingTop: 0, paddingLeft: 0}}
                    onClick={()=>{
                        this.setState({
                            isChecked:!this.state.isChecked
                        })
                    }}
                    isChecked={this.state.isChecked}
                   />
            </Col>
    </Row>
    );
  }
}
