import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { defaultPizza } from '../assets/products'

const OrderItemListItem = ({Item}: any) => {
  return (
    <View style={styles.container}>
            <Image 
                source={{ uri: Item?.products.image || defaultPizza }}
                style={styles.imgae}/>
            <View>
                <Text style={styles.name}>{Item.products.name}</Text>
                <View style={styles.costSize}>
                    <Text style={styles.price}>$ {Item.products.price * Item.quantity}</Text>
                    <Text>Size: {Item.size}</Text>
                </View>
            </View>
        <Text>{Item.quantity}</Text>
    </View>
  )
}

export default OrderItemListItem

const styles = StyleSheet.create({
    container:{
        padding:10,
        backgroundColor: "white",
        justifyContent:'space-between',
        flexDirection:'row',
        alignItems:'center',
    },
    imgae:{
        width:100,
        height:100
    },
    name:{
        fontSize:18,
        color:"black"
    },
    costSize:{
        flexDirection:"row",
        gap:20
    },
    price:{
        color:"lightblue",
        fontWeight:"800",
        fontSize:16
    }
})