import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

export default function App() {

 const [number,setNumber] = useState(0)

 const info = "Arvaa numero väliltä 1 - 100"

 const [text,setText] = useState("")

 const [random] = useState(randomNumber())

 const [counter,setCounter] = useState(1)

      function randomNumber(){ 
        return Math.floor(Math.random() * 100) + 1
      };



 function painike(i){
  if(i < 1 || i > 100){
    alert("Kirjoita numero väliltä 1 - 100!")
    setText("")
  }
    else if(i == random){
     alert("Arvasit oikein! Siihen meni " + counter + " yritystä!")
     setCounter(1)
     setText("")

    }else if (i > random){
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
