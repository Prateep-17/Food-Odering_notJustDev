import { Text, Image, Pressable } from 'react-native'
import React from 'react'
import { StyleSheet } from 'react-native'
import { Product } from '../types'
import { defaultPizza } from '../assets/products';

type ProductListItemProps = {
    product: Product;
    navigation?: any
  };
const ViewProduct = ({product, navigation} :ProductListItemProps) => {
  
  const productId= product.id
  return (
      <Pressable onPress={()=> navigation.navigate("Details", {productId})} style={styles.container}>
          <Image 
              source={{ uri: product.image || defaultPizza }}
              style={styles.imgae}/>
        <Text style={styles.productTitle}>{product.name}</Text>
        <Text style={styles.productCost}>$ {product.price}</Text>
      </Pressable>
  )
}
const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:"center",
        padding:10,
        overflow:"hidden",
        maxWidth:"50%",
        backgroundColor:"white"
    },
    imgae:{
        width:"100%",
        aspectRatio:1,
    },
    productTitle:{
        fontSize:18,
        color:"black"
    },
    productCost:{
        fontSize:14,
        fontWeight:"800",
        color:"red",
        textAlign:"center"
    }
})

export default ViewProduct