import React from 'react';
import {Text,View,Button, TextInput, Alert} from 'react-native';
import Icon from '@expo/vector-icons/AntDesign';
import { useLinkProps } from '@react-navigation/native';

const  Login =({navigation})=>{

        return(
            
            <View style={{backgroundColor:"#FFF",height:"100%" , marginTop : 50}}>
                 <Text
                style={{
                    fontSize:20,
                    fontFamily:"sans-serif",
                    marginHorizontal:55,
                    textAlign:'center',
                    marginTop:5,
                    opacity:0.6
                }}>
                This is a login page.
                    </Text>

                <View style={{
                    flexDirection:"row",
                    alignItems:"center",
                    marginHorizontal:55,
                    borderWidth:2,
                    marginTop:50,
                    paddingHorizontal:10,
                    borderColor:"#00716F",
                    borderRadius:23,
                    paddingVertical:2
                }}>
                    <Icon name="mail" color="#00716F" size={24}/>
                    <TextInput 
                        style={{paddingHorizontal:10}}
                        placeholder="Username"
                    />

                </View>
                <View style={{
                    flexDirection:"row",
                    alignItems:"center",
                    marginHorizontal:55,
                    borderWidth:2,
                    marginTop:15,
                    paddingHorizontal:10,
                    borderColor:"#00716F",
                    borderRadius:23,
                    paddingVertical:2
                }}>
                    <Icon name="mail" color="#00716F" size={24}/>
                    <TextInput 
                        style={{paddingHorizontal:10}}
                        placeholder="Password"
                    />
                </View>
                <View style={{
                    marginHorizontal:55,
                    alignItems:"center",
                    justifyContent:"center",
                    marginTop:30,
                    backgroundColor:"#00716F",
                    paddingVertical:10,
                    borderRadius:23
                }}>
                    <Text style={{
                        color:"white",
                        fontFamily:"sans-serif"
                    }}>Already a member</Text>
                </View>
                <Text 
                onPress={()=>navigation.navigate('Register')} 
                style={{
                    alignSelf:"center",
                    color:"#00716F",
                    fontFamily:"sans-serif",
                    paddingVertical:30
                }}>New User</Text>
            </View>
        )
}
export default  Login ;