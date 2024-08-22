import { FlatList, StyleSheet, View } from 'react-native'
import React from 'react'
import products from '../assets/products';
import ViewProduct from '../components/ViewProduct';

const Home = ({navigation}: any) => {
  return (
    <View>
        <FlatList
            data={products}
            renderItem={({item})=><ViewProduct product={item} navigation={navigation}/>}
            numColumns={2}
            contentContainerStyle={{padding:10, gap:10}}
            columnWrapperStyle={{gap:10}}
            />
    </View>
  )
}

export default Home

const styles = StyleSheet.create({})