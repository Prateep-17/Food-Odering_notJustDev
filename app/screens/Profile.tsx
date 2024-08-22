import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { fetchtUserId, fetchtUserName, setUserId } from '../loginSlice';
import { useDispatch, useSelector } from 'react-redux';


const Profile = ({navigation} :any) => {
    const dispatch = useDispatch()
    const name = useSelector(fetchtUserName)
    const userId = useSelector(fetchtUserId)
    
  return (
    <View style={styles.container}>
      {
            typeof(userId) != 'number' ?
            <View>
                <Button title="Login" onPress={()=> navigation.navigate("Login",{screen:"Login"})}/>
            </View>
            :
            <View style={styles.box}>
                <Text style={styles.userName}>
                    User Name : {name}
                </Text>
                <Button title='Logout' onPress={()=>{dispatch(setUserId(null)); navigation.navigate("Home")}}/>
            </View>
        }
    </View>
  )
}

export default Profile

const styles = StyleSheet.create({
    container:{
        padding:10,
        flex:1,
        alignItems:'center',
        justifyContent:'center',
    },
    box:{
        gap:10
        // textAlign:"center"
    },
    userName:{
        fontSize:20
    }
})