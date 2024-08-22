import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Order } from '../types'
import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime';
dayjs.extend(relativeTime);

type OrderProp = {
    Item :Order,
    navigation?: any
}
const OrderListItem = ({ Item, navigation } :OrderProp) => {
    const orderId = Item.id
  return (
    <Pressable onPress={()=> navigation.navigate('OrderDetails',{orderId})} style={styles.container}>
        <View style={styles.LeftHalf}>
            <Text style={styles.OrderNo}>Order #{Item.id}</Text>
            <Text style={styles.Time}>{dayjs(Item.created_at).fromNow()}</Text>
        </View>
        <Text style={styles.Status}>{Item.status}</Text>
    </Pressable>
  )
}

export default OrderListItem

const styles = StyleSheet.create({
    container:{
        padding:10,
        backgroundColor: "white",
        justifyContent:'space-between',
        flexDirection:'row',
        alignItems:'center'
    },
    LeftHalf:{
        gap:5
    },
    OrderNo:{
        fontSize:15,
        fontWeight:"700",
        color:"black"
    },
    Time:{
        fontSize:15
    },
    Status:{
        fontSize:15,
        fontWeight:"600",
        color:"black"
    }
})