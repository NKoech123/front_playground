import { View, Text, FlatList, TouchableOpacity, Image, ImageBackground } from 'react-native'
import React from 'react'
import tw from 'tailwind-react-native-classnames';

const data = [
    {
        id: "123",
        title: "Get a ride",
        image: "https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,w_1116,h_744/v1568070387/assets/b5/0a5191-836e-42bf-ad5d-6cb3100ec425/original/UberX.png",
        screen: "MapScreen"
    },
    {
        id: "456",
        title: "Order food",
        image: "https://cdn-icons-png.flaticon.com/512/3081/3081098.png",
        screen: "EatsScreen"
    }
];


const NavOptions = () => {
  return (
    <FlatList
    data = { data }
    keyExtractor= { (item) => item.id }
    horizontal
    renderItem={({ item })=>(
        <TouchableOpacity style={tw`p-2 pl-6 pb-8 pt-4 bg-gray-200 m-2 w-40`}>
            <View>
                <Image
                  style={{height:120, width:120, resizeMode:"contain"}}
                  source = {{uri: item.image}}
                />
                <Text style={tw`mt-2 text-lg font-semibold`}>{ item.title }</Text>
            </View>
        </TouchableOpacity>
    )}
    />
  )
}

export default NavOptions