import React, { useState }  from 'react'
import {
    Alert,
    Button,
    Dimensions,
    FlatList,
    Image,
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    TextInput,
    useColorScheme,
    View,
  } from 'react-native';
  
  import {
    Colors,
    DebugInstructions,
    Header,
    LearnMoreLinks,
    ReloadInstructions,
  } from 'react-native/Libraries/NewAppScreen';
  

export default function Login() {
    const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: "lightblue",
    flex:1
  };
  const [text, changeText] = useState("")
  const [list, updateList] = useState<Array<String>>([])
  const addList = () => {
    if(text=='')
      Alert.alert("No data")
    else{
      updateList([...list, text])
      changeText('')
    }
  }
    const Item =({name, index}:any) =>(
        <View key={index} style={{justifyContent:"space-evenly",flexDirection:"row", width:Dimensions.get('window').width}}>
          <Text style={styles.item}>{name}</Text>
          <View style={{justifyContent:"center"}}>
          <Button title='Delete' onPress={()=>updateList(list.filter((data:any)=>data !== name))} />
          </View>
        </View>
      )
  return (
    <SafeAreaView style={backgroundStyle}>
      <ScrollView>
      <View>
        <TextInput style={{height:90, margin:2, borderWidth:3, padding: 10,fontSize:40}}
        value={text}
        onChangeText={changeText}
        placeholder='Enter text'
        />
        
        <View style={{flexDirection:'row',justifyContent:'space-evenly', padding:10 }}>
          <Button title='Delete All' onPress={()=>updateList([])}/>
          <Button title='Add' onPress={addList}/>
        </View>
        
          {/* <Text style={{fontSize:50}}> */}
           {/* {list.map((data, index)=> <Item name={data} index={index}/>)} */}
           {/* </Text> */}
            <FlatList
              data={list}
              renderItem={({item}:any)=><Item name={item}/>}
              scrollEnabled={false}
              /> 
      </View>
      </ScrollView>
    </SafeAreaView>
  )
  
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
  buttonStyle: {
    borderWidth: 0
  },
  item:{
    padding:10,
    marginTop:5,
    fontSize:20,
    width: "80%" 
  }
});