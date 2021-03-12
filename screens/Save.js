
import  React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer'
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native';
import { View } from 'react-native'
import { AntDesign } from '@expo/vector-icons';
// import Icon from 'react-native-vector-icons/dist/Feather'
const Drawer = createDrawerNavigator()
const Stack = createStackNavigator()

const Main = () => <View></View>
const Food = () => <View></View>

const Home = ({ navigation }) => (
    <Stack.Navigator>
        <Stack.Screen name="Main" component={Main} options={{
            headerLeft: () => 
            <AntDesign name="bars" size={30} color="black"
                size={25}
                // color="#D4AF37"
                onPress={() => navigation.openDrawer()}
              />
      }} />
    </Stack.Navigator>
)


const DrawerNavigator = () => (
    <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={Home} />
        <Drawer.Screen name="Contacts" component={Food} />
      </Drawer.Navigator>
)

export default props => (
    <NavigationContainer>
        <DrawerNavigator />
    </NavigationContainer>
)