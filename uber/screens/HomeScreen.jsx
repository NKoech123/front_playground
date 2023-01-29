import { StyleSheet, Text, View, SafeAreaView, Image } from 'react-native'
import React from 'react'
import tw from 'tailwind-react-native-classnames';
import NavOptions from '../components/NavOptions';
const HomeScreen = () => {
  const imgURI = "https://logos-world.net/wp-content/uploads/2020/05/Uber-Logo.png"
  return (
    <SafeAreaView style={tw`bg-white h-full`}>
        <View style={tw`p-5`}>
          <Image
            style={{
              width: 100, 
              height: 60, 
              resizeMode: "contain",
            }}
            source={{
              uri: imgURI
            }}
          />
          <NavOptions/>
        </View>
        
    </SafeAreaView>
  )
}

export default HomeScreen

const styles = StyleSheet.create({})