import React, { Component } from 'react';
import {
  FlatList,
  StyleSheet,
  Text,
  View
} from 'react-native';

import ListAdapter from '../../commons/ListAdapter';

const HomeView = ({
    numOfItems,
    dataSourceModal,
    onEndReachedCalled
}) => {

    return (
        <View style={styles.container}>
            <Text style={styles.numOfItems}>{numOfItems}</Text>
            <FlatList
               data={dataSourceModal}
               renderItem={(row) => {
                        return <ListAdapter listitem={row} />;}
                }
                keyExtractor={(item, index) => index.toString()}
                onEndReached={ () => onEndReachedCalled()}
             />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1
    },
    numOfItems:{
        marginHorizontal:15,
        marginVertical:10, 
        fontSize:12,
        color:'black'
     }
});

export default HomeView;
