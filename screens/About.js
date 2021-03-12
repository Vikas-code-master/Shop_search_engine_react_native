import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Item , SafeAreaView } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';

const Abouts = ()=>
{
    // const DATA = ['flipkart' , 'myntra' , 'amazon']
    const [DATA , setdata] = useState ([
    {
        id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
        title: 'Flipkart',
      },
      {
        id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
        title: 'Myntra',
      },
      {
        id: '58694a0f-3da1-471f-bd96-145571e29d72',
        title: 'Amazon',
      },
    ]  );
    return(
        <View style = {Styles.container}>
        <View style={{width: 200, height: 150, backgroundColor: 'powderblue'}}>
        <Text>It contains Description of Shops like</Text>
        {/* <SafeAreaView style={Styles.container}> */}
        <FlatList
        // horizontal
        keyExtractor ={(item)=>{item.id}}
        data = {DATA}
        renderItem = {({item})=><Text>{item.title}</Text>}
        // onRefresh={}
        // refreshing={}
      />
    {/* </SafeAreaView> */}
        </View>
        </View>
 );
};

const Styles = StyleSheet.create ({
 container : {
     flex: 1,
     backgroundColor: '#fff',
     flexDirection :"column",
     alignItems: 'center',
     justifyContent: 'center',
 }
});
export default Abouts ;