import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TouchableOpacity
} from 'react-native';
import Colors from '../Themes/Colors';


export default class ListAdapter extends Component {
    constructor(props){
        super(props);
    }
    render(){
        const {item={}} = this.props.listitem;
        const {name='',Place='',Address=''} = item;
        return(
            <TouchableOpacity  style={styles.container}>
               <Text numberOfLines={1} style={styles.namefield}>{name}</Text>
               <Text numberOfLines={1} style={styles.placefield}>{Place}</Text>
               <Text numberOfLines={2} style={styles.addressfield}>{Address}</Text>
            </TouchableOpacity>    
        );
    }

}

const styles = StyleSheet.create({
    container: {
      padding:10,
      marginHorizontal:15,  
      marginVertical:5, 
      flex: 1,
      flexDirection:'column' ,
      backgroundColor:Colors.lightPrimaryColor
    },
    namefield:{
        fontSize:14,
        color:Colors.white
    },
    placefield:{
        fontSize:14,
        color:Colors.white
    },
    addressfield:{
        fontSize:12,
        color:Colors.darkneutralColor
    }
});


