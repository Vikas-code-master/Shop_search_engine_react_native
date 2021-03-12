import React from 'react';
import { Alert, Button, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

const Header = ({press , press1})=>{

    return (
        <View style={{width:"100%",flexDirection :"row" , height:50, backgroundColor:"#3297a8", borderRadius:15,marginTop:25}}>
           {/* <View style = {{marginHorizontal :10 , marginTop:10}}>
           <AntDesign name="bars" size={30} color="black"
            onPress={press} 
            // onPress={() => navigation.openDrawer()}
            />
            </View> */}
            <View style = {{marginLeft :200 , marginTop:10 }}>
           <AntDesign name="home" size={24} color="black" 
            onPress ={press1} />
           </View>
        </View>      
    )
}

export default Header ;