import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Text, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

const ApiRequest = ()=>{

    const [Name , setName] = useState([]);
    useEffect(()=>{
        axios.get('https://restcountries.eu/rest/v2/all')
        .then((res)=>setName(res.data))
        .catch ((error=>{console.log("error")}))}
    ,[])
    return(
        <>
        <View >
                <ScrollView>
                {Name.map((data,i)=>{
                        return <View>
                        <Text>
                        {i} : {data.name}
                        </Text>
                </View>
                })}
                </ScrollView>
                   
                </View>
        </>
    )
}
export default ApiRequest ;