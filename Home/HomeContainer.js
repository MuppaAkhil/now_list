import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';

import HomeView from './Components/HomeView'; 
import NavBar from '../commons/NavBar';
import {fetchCards} from './Controller';

export default class HomeContainer extends Component {
    constructor(props){
        super(props);
        this.state = {
            dataSourceModal:[],
            searchText:'',
            numOfItems:0
        }
        this.cardsBucket = [];
        this.page = 1;
        this.itemCount = 10;
        this.searchValue = '';
    }

    componentWillMount(){
        fetchCards(this.page,this.itemCount,this.onCardsReceived);
    }

    onCardsReceived = (err,res) => {
        if(res){
            this.cardsBucket = [...this.cardsBucket,...res.data];
            this.page++;
            this.setState({
                dataSourceModal: this.cardsBucket,
                numOfItems:`Items: ${this.cardsBucket.length}`
            });
        }else{
            alert(err.message);
        }
    }

    onChangeText = (textvalue) => {
        this.searchValue = textvalue.text;
        let newArray = this.filterSearch(textvalue.text);
        this.setState({searchText:textvalue.text, dataSourceModal: newArray, numOfItems:`Items: ${newArray.length}`});
    }

    filterSearch = (text) => {
       text = text.toLowerCase();
       let filterArray = this.cardsBucket.filter((each) => {
            let nameMatched = each.name.toLowerCase().includes(text);
            let placeMatched = each.Place.toLowerCase().includes(text);
            let addressMatched = each.Address.toLowerCase().includes(text);
            return nameMatched || placeMatched || addressMatched;
        });
        return filterArray;
    }

    onEndReachedCalled = () => {
        if(this.page > 0 &&  this.searchValue == ''){
            fetchCards(this.page,this.itemCount,this.onCardsReceived);
        }
        
    }

    render(){
        return(
            <View style={styles.container}>
            <NavBar onChangeText={this.onChangeText} value={this.state.searchText}/>
            <HomeView numOfItems={this.state.numOfItems} dataSourceModal ={this.state.dataSourceModal}
               onEndReachedCalled = {this.onEndReachedCalled}/>
            </View>
        );
    }

}
const styles = StyleSheet.create({
    container: {
      flex: 1
    }
});