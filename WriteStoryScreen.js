import { StatusBar } from 'expo-status-bar';
import React,{ Component } from 'react';
import { StyleSheet, Text, View,Image } from 'react-native';
import {createAppContainer} from 'react-navigation'
import {creatBottomTabNavigator} from 'react-navigation-tabs'
import { Header } from 'react-native-elements';
import { SafeAreaProvider } from 'react-native-safe-area-context';

export default class WriteStoryScreen extends Component  {
  constructor(){
    super();
  }
  render(){
  return(
    <View>
       <Header
            backgroundColor={'brown'}
            centerComponent={{
              text: 'Stories',
              style: { color: 'FEF153', fontSize: 25 },
            }}
            
            
          />
          <TextInput
          placeholder="Enter Title Here"
          onChangeText={(text) => {
          this.setState({ text: text });
}}

/>
<TextInput
          placeholder="Enter Author Name Here"
          onChangeText={(text) => {
          this.setState({ text: text });
}}

/>
<TextInput
          placeholder="Enter Story Here"
          onChangeText={(text) => {
          this.setState({ text: text });
}}

/>
    </View>
  )
}
}




