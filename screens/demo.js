import React, { useEffect } from 'react';
import { StyleSheet, Text, View, Image , ScrollView } from 'react-native';
const Demo = ({navigation})=>
{
    return(
        <>
        <View style = {Styles.container}>
           <ScrollView >
            <Image 
              source = {{ uri:"https://images.pexels.com/photos/1848903/pexels-photo-1848903.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" ,
               height : 200 , width : 150}}/>
               <Text>overgame</Text>
              <Image 
              source = {{ uri:"https://images.pexels.com/photos/2956582/pexels-photo-2956582.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260",
               height : 120 , width : 150}}/>
               <Text>overgame</Text>
               <Image 
              source = {{ uri:"https://images.pexels.com/photos/1848903/pexels-photo-1848903.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" ,
               height : 120 , width : 150}}/>
               <Text>overgame</Text>
           </ScrollView>
        </View>
        </>
    );
};

const Styles = StyleSheet.create ({
    container : {
        flex: 1,
        backgroundColor: '#fff',
        flexDirection :"column",
        // alignItems: 'center',
        justifyContent: 'center',
    }
});
export default Demo ;