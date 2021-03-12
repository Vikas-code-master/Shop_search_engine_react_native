import  React from 'react';
import { View, Text ,StyleSheet } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import Header from './header';

const AddShop = ({navigation})=>
{
    return(
        <>
        <Header press ={()=>{navigation.navigate("Demo")}} />
        <View style = {Styles.container1}>
            <Text> This page is for Adding shops</Text>
        <View>
            <TextInput placeholder = "Add your Shop"/>
            <TextInput placeholder = "password"/>
        </View>
        </View>
        </>
    )
}
export default AddShop ;

const Styles = StyleSheet.create ({
    container1 :{
        flex: 1,
        margin : 100,
        // border : 5 , "red" ,  "solid"
    } 
})