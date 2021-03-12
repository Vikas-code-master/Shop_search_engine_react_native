import  React from 'react';
import { View, Text ,Image, Button ,StyleSheet } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Categories from './categories/categories'
import Demo from './screens/demo';
import  { Contact, ShowShop} from './screens/sideNavbar'
import Abouts from './screens/About'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import AddShop from './screens/AddShop';
import Login from './screens/login';
import Register from './screens/Register'
// import Header from './screens/header'
import { AntDesign } from '@expo/vector-icons';
import ApiRequest from './screens/ApiRequest';

//  const Head = ({navigation})=>{
//    return(
//      <View style = {{marginTop:30}}>
//             <AntDesign name="bars" size={30} color="black"
//                 size={25}
//                 // color="#D4AF37"
//                 onPress={() => navigation.openDrawer()}
//               />
//      </View>
//    )
//  }
 function HomeScreen({navigation}) {
  return (
    <>
     <View style = {{marginHorizontal:10}}>
            <AntDesign name="bars" size={30} color="black"
                size={25}
                // color="#D4AF37"
                onPress={() => navigation.openDrawer()}
              />
      </View>
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' ,
          margin : 10, backgroundColor:"aliceblue"}}>
        <Text style = {{ margin: 15}}> I am using react native App. This App is for Learning Purpose </Text>
        <Button title = "Details"
          onPress ={()=> navigation.navigate("Details")}
        />
    </View>
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' ,
          margin : 10, backgroundColor:"aliceblue"}}>
          <Button title = "World Wide"
            onPress ={()=> navigation.navigate("API")}
            />
    </View>
    <View style = {{marginHorizontal:50}}>
             <Image 
              source = {{ uri:"https://cdn.pixabay.com/photo/2019/10/06/10/03/team-4529717_1280.jpg",
               height : 200 , width : 200}}/>
            <Image />
    </View>
    </>
  );
}
const Details = ()=>
{
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>There are many Search engine sites. </Text>
    </View>
  );
}

const Stack = createStackNavigator() ;

const StackApp = ({navigation})=> {
  return (
      <Stack.Navigator>
      {/* <Stack.Screen name="Homes" component={Head} /> */}
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Details" component={Details} />
        <Stack.Screen name="About" component={Abouts} />
        <Stack.Screen name="Categories" component={Categories} />
        <Stack.Screen name="API" component={ApiRequest} />
      </Stack.Navigator>
  );
}
const Drawer = createDrawerNavigator();

export default function App() {
  const a ="kushagra"
  return (
    <NavigationContainer >
     {/* <Head /> */}
     <Drawer.Navigator initialRouteName="Homes">
        <Drawer.Screen name="Homes" component={StackApp} />
        <Drawer.Screen name="Add-Shop" component={AddShop} />
        <Drawer.Screen name="Show-Shop" component={ShowShop} />
        <Drawer.Screen name="Login" component= {Login} />
        <Drawer.Screen name="Contacts" component={Contact} />
        <Drawer.Screen name="Demo" component={Demo} />
        <Drawer.Screen name="Register" component={Register} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  android:{
    color: 'violet'
  }
});