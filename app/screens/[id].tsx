import { Button, Image, Pressable, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import products from '../assets/products'
import { CartItem, PizzaSize, Product } from '../types'
import { useDispatch, useSelector } from 'react-redux'
import { getItems, updateItem } from '../cartSlice'
// import { useCart } from '../Provider'

const SingleProduct = ({ route, navigation } :any) => {
  const dispatch = useDispatch()
  const sizes: PizzaSize[] = ['S', 'M', 'L', 'XL'];
  const {productId} = route.params
  const product = products.find((data :any)=>data.id == productId)
  const [selected, setSelected] = useState<PizzaSize>('M')
  // const { addItem } = useCart();

  const items :CartItem[] = useSelector(getItems)
  const addItem = (product: Product, size: CartItem["size"]) =>{
    const existingItem = items.find(
      (item :any) => item.product.id === product.id && item.size === size
    );
    if (existingItem) {
      updateQuantity(existingItem.id, 1);
      return;
    }

    const newCartItem :CartItem = {
        id: Math.random().toString(),
        product,
        product_id: product.id,
        size,
        quantity: 1
    }    
    dispatch(updateItem([...items, newCartItem]))
  }
  const updateQuantity = (itemId: string, amount: -1|1) =>{    
    const updated = items.map((data :any) => {      
      if(data.id == itemId)
        return {...data, quantity : data.quantity+=amount}
      return data
    }).filter((data :any) => data.quantity > 0)
    dispatch(updateItem(updated))
  }

  const addCart = () =>{
    if(!product) return
    addItem(product,selected)
    navigation.navigate("Cart")
  }

  return (
    <View style={styles.container}>
      <View>
        <Image 
          source={{ uri: product?.image }}
          style={styles.imgae}/>
        <Text style={styles.select}>Select Size</Text>
        <View style={styles.sizes}>
        {
          sizes.map((size :any)=>
            <Pressable
              onPress={()=>setSelected(size)}
              key={size}
              style={[styles.selectedSize,{backgroundColor: selected == size ? "lightgrey": "transparent"}]}>
              <Text style={styles.inch}>{size}</Text>
            </Pressable>
          )
        }
        </View>
      </View>
      <View>
        <Text style={styles.productCost}>Price: ${product?.price}</Text>
        <View style={styles.cartBtn}>
          <Button title={'Add to Cart'} onPress={addCart}/>
        </View>
      </View>
    </View>
  )
}

export default SingleProduct

const styles = StyleSheet.create({
  container:{
    padding:10,
    flex:1,
    justifyContent:'space-between'
  },
  select:{
    color: "black",
    fontSize: 20,
    fontWeight: "700"
  },
  sizes:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding:20
  },
  selectedSize:{
    padding:10,
    borderRadius:25,
    width:50,
    alignItems:'center'
  },
  inch:{
    fontSize: 22,
    color:"black"
  },
  imgae:{
    width:"100%",
    aspectRatio:1,
  },
  productCost:{
    paddingLeft:10,
    fontSize:20,
    fontWeight:"800",
    color:"black"
  },
  cartBtn:{
    marginTop:10,
    borderRadius:100,
    overflow:'hidden'
  }
})