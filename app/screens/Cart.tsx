import { Alert, Button, FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
// import { useCart } from '../Provider'
import CartListItem from '../components/CartListItem'
import { useDispatch, useSelector } from 'react-redux'
import { getItems, updateItem } from '../cartSlice'
import { CartItem, Order } from '../types'
import { getOrders, setOrder } from '../orderSlice'
import dayjs from 'dayjs'
import { fetchtUserId } from '../loginSlice'

const Cart = ({ navigation }: any) => {
  // const {items, total} = useCart()
  const orders :Order[] = useSelector(getOrders)
  const items: CartItem[] = useSelector(getItems)
  const dispatch = useDispatch()
  const userId = useSelector(fetchtUserId)

  var randomWholeNumberWithARange = (min :number, max :number) => Math.floor(Math.random() * (max - min + 1) + min);
  const total = items.reduce((sum :number, item :any)=> (sum += item.product.price * item.quantity),0)
  const checkout = () =>{
    if(typeof(userId) == 'number'){

      const Id :number = randomWholeNumberWithARange(2000, 3000)
      const newOrder :Order = {
        id:  Id,
        created_at: dayjs().toISOString(),
        total: total,
        status:'New',
        user_id:'1',
        order_items: items.map((item :any) => ({
          id: item.id,
          order_id: Id,
          size: item.size,
          quantity: item.quantity,
          product_id: item.product_id,
          products: item.product
        }))
      }
      dispatch(setOrder([...orders, newOrder]))
      navigation.navigate("Orders")
      dispatch(updateItem([]))
    }
    else
      Alert.alert("Login to order the items")
  }
  return (
    <View style={{padding:10}}>
      <FlatList
        data={items}
        renderItem={({item})=><CartListItem cartItem={item}/>}
        contentContainerStyle={{padding:10, gap:10}}
        />
      <Text style={{fontSize:20, fontWeight:'500', textAlign:'center', marginTop:5, color:'black'}}>
        Total: ${total?.toFixed(2) || 0}
      </Text>
      <View style={{borderRadius: 100, overflow:'hidden', marginTop:20}}>
        <Button
          title="Checkout" onPress={checkout}/>
      </View>
    </View>
  )
}

export default Cart

const styles = StyleSheet.create({})