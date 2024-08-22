import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
// import orders from '../assets/orders'
import OrderListItem from '../components/OrderListItem';
import OrderItemListItem from '../components/OrderItemListItem';
import { getOrders } from '../orderSlice';
import { useSelector } from 'react-redux';

const OrderDetails = ({ route } :any) => {
  const {orderId} = route.params
  const orders = useSelector(getOrders)
  const Order = orders.find((data :any)=> data.id == orderId)
  return (
    <View style={styles.container}>
      {Order && <OrderListItem Item={Order} />}
      <FlatList
        data={Order?.order_items}
        renderItem={({ item })=><OrderItemListItem Item={item}/>}
        contentContainerStyle={{gap:10}}
      />
      <Text style={styles.total}>Total: ${Order.total}</Text>
    </View>
  )
}

export default OrderDetails

const styles = StyleSheet.create({
  container:{
    padding:10,
    gap:10
  },
  total:{
    textAlign:'center',
    fontSize:20,
    color:"black",
    fontWeight:'700'
  }
})