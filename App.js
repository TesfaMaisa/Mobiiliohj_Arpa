import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

export default function App() {

 const [number,setNumber] = useState(0)

 const info = "Arvaa numero väliltä 1 - 100"

 const [text,setText] = useState("")

 const [random, setRandom] = useState(null)

 const [counter,setCounter] = useState(1)

 function painike(i){
   const randomNumber = Math.floor(Math.random() * 100) + 1
   setRandom("Oikea vastaus oli " + randomNumber)
     if(i < 1 || i > 100){
     alert("Arvaa numero väliltä 1 - 100!")
     setCounter(1)
     setText("")
     setRandom("")
  }
   else if(i == randomNumber){
     alert("Arvasit oikein! Siihen meni " + counter + " yritystä!")
     setCounter(1)
     setText("")
     setRandom("")

    }else if (i > randomNumber){
      setText('Arvaus ' + i  + ' oli liian paljon')
      setCounter(counter + 1)

    }else{
      setText('Arvaus ' + i + ' oli liian vähän')
      setCounter(counter + 1)
    }
 }

  return (
    <View style={styles.container}>
      <Text style={{fontWeight:'bold', color:'lightblue',fontSize:25}}> {info} {"\n"} </Text> 
      <Text style={{ fontWeight:'bold', color:'white',fontSize:20}}> {random} {"\n"}</Text> 
      <Text style={{fontWeight:'bold', color:'white',fontSize:15}}> {text} {"\n"} </Text> 
      <TextInput keyboardType='numeric' returnKeyType='done' placeholder='Kirjoita luku' placeholderTextColor={'grey'} style={{borderBottomWidth:2, color:'white'}} onChangeText={number => setNumber(number)} value={Number(number)} /> 
      <Button title='Arvaa' onPress={() => painike(number)}/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000ff',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom:200
  },
});
