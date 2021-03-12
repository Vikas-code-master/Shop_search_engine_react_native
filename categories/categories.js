import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Image , ScrollView } from 'react-native';

const Categories = ()=>
{
    const [showDialog, setData] = useState([{"name":"Hotels","catImg":"https://cityapl.com/media/catImg/hotel_9.svg","id":1},{"name":"Education","catImg":"https://cityapl.com/media/catImg/colleges.svg","id":7},{"name":"Banks & ATM","catImg":"https://cityapl.com/media/catImg/bank_BK8vnKp.svg","id":10},
    {"name":"Automobile","catImg":"https://cityapl.com/media/catImg/automobile_1.svg","id":11}]);
    useEffect(() => {  
        fetch("https://cityapl.com/api/v1/cityapl/categories/")
        .then((res)=>res.json())
        .then((data)=>setData(data))
        .catch(error => console.log(error) );
      },[]);

      return <View className="home">
                <Text>categories</Text>
                <View >
                <ScrollView>
                {showDialog.map((data,i)=>{
                        return <View>
                        <Text>
                        {(data.id)} : {data.name}
                        </Text>
                </View>
                })}
                </ScrollView>
                   
                </View>
            </View>


}

export default Categories;