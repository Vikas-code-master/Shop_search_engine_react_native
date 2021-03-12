import React from 'react';
import { StyleSheet, Text, View, Image ,Button, ScrollView } from 'react-native';

  const ShowShop = ({navigation})=> {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' , backgroundColor : "aqua" }}>
        <Button onPress={() => navigation.navigate("Categories")} title = "Show-Shop" />
      </View>
    );
  }
  const About = ({navigation})=> {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Button onPress={() => navigation.navigate("About")} title="Demo" />
      </View>
    );
  }
  const Contact = ({navigation})=> {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Button onPress={() => navigation.navigate("Contact")} title="Contact" />
      </View>
    );
  }

export { ShowShop , About , Contact} ;
