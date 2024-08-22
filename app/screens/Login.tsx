import { Alert, Button, Dimensions, SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { getUserId } from '../loginSlice';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../store';

const Login = ({navigation}:any) => {
    const dispatch = useDispatch<AppDispatch>()
    const [userName, setUserName] = useState("")
    const [password, setPassword] = useState("")
    const [showPassword, setShowPassword] = useState(false)
    const checkCredentials = async() => {
        let flag ;
        await dispatch(getUserId(userName)).then((res :any)=>{
            if(res.payload[0].password == password)
                flag = true
        })
        if(flag)
            navigation.navigate("HomeStack",{screen:"HomeStack"})
        else 
            Alert.alert("Username or Password incorrect")
    }

  return (
    <SafeAreaView style={{flex:1,alignItems:"center", justifyContent:"center", backgroundColor:"#E3FEF7"}}>
        <View>
                <Text style={{margin:5, textAlign:"center"}}>Username</Text>
                <TextInput
                    style={{borderWidth:1, margin:15, paddingHorizontal:20, backgroundColor:"white", borderRadius:10}}
                    value={userName}
                    onChangeText={setUserName}
                />
                <Text style={{margin:5, textAlign:"center"}}>Password</Text>
                <View>
                <TextInput
                    style={{borderWidth:1, margin:15, paddingHorizontal:20, backgroundColor:"white", borderRadius:10}}
                    secureTextEntry={!showPassword} 
                    value={password}
                    onChangeText={setPassword}
                />
                <MaterialCommunityIcons 
                    name={showPassword? "eye-off" : "eye"}
                    size={30}
                    color={"black"}
                    onPress={()=>setShowPassword(!showPassword)}
                    style={{top:25,right:30 ,position:'absolute'}}
                    />
                </View>
                <View style={styles.loginButton}>
                    <Button title='Login' color='#102C57' onPress={()=>navigation.navigate("HomeStack",{screen:"HomeStack"})}/>
                </View>
                <TouchableOpacity 
                    style={{alignItems:'center', backgroundColor:"#102C57", padding:5,margin:10}}
                    >
                    <Text style={{color:"white", fontSize:18 }}>Don't have account? SignUp</Text>
                </TouchableOpacity>
            </View>
    </SafeAreaView>
  )
}

export default Login

const styles = StyleSheet.create({
    loginButton:{
        // margin:10,
        paddingVertical:10,
        paddingHorizontal:15,
        height: 90,
        width: Dimensions.get("window").width,
    }
})