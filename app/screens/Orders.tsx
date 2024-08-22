import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
// import orders from '../assets/orders'
import OrderListItem from '../components/OrderListItem'
import { useSelector } from 'react-redux'
import { getOrders } from '../orderSlice'

const Orders = ({ navigation } :any) => {
  const orders = useSelector(getOrders)
  
  return (
    <View>
      {
        orders.length > 0 ?
        <FlatList
          data={orders}
          renderItem={({item})=> <OrderListItem Item={item} navigation={navigation}/>}
          contentContainerStyle={{padding:10,gap:10}}
          />
          :
          <Text style={styles.message}>No Current Orders</Text>
      }
    </View>
  )
}

export default Orders

const styles = StyleSheet.create({
  message:{
    textAlign:'center',
    fontSize:20,
    marginTop:40,
    fontWeight:'700'
  }
})