import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  TextInput,
  View
} from 'react-native';

import Colors from '../Themes/Colors';
import StringConstants from './StringConstants';

export default class NavBar extends Component {
    constructor(props){
        super(props);
        this.state = { text: '' };
    }

    render(){
        return(
            <View style={styles.container}>
                <View style={styles.search}>
                <TextInput underlineColorAndroid='transparent' style={styles.title} onChangeText={(text) => this.props.onChangeText({text})} placeholder={StringConstants.search}
                 value={ this.props.value}/>
                </View>
            </View>
        );
    }

}

const styles = StyleSheet.create({
    container: {
      marginTop:20,  
      height:60,
      alignItems:'center',
      justifyContent:'center',
      backgroundColor:Colors.lightPrimaryColor
    },
    title:{
        
    },
    search:{
        padding:(Platform.OS === 'ios') ? 10 : 0,
        width:'90%',
        backgroundColor:Colors.white
    }

});