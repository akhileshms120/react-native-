import React,{useState,useEffect} from 'react'
import {View,TouchableHighlight,Text,Button} from 'react-native'

const App =()=>{
  const [count,setCount]=useState(0);
  const pressMe=()=>setCount(count=>count+1)
  const countLess=()=>setCount(count=>count-1)
  const resetButton=()=>setCount(count=>0)
  const poda=()=>setCount(count=>'nee poda')
  useEffect(()=>{
     setInterval(()=>{                             // syntax ethille ollathe anne 
      setCount(count+10)
    },1000);
  });
  

  return(
    <View>
      <Text>Count:{count}</Text>
      <TouchableHighlight onPress={pressMe}>
        <Text>Press me!</Text>
      </TouchableHighlight>
      <View>
        <TouchableHighlight onPress={countLess}>
          <Text>Press count less</Text>
        </TouchableHighlight>
      </View>
      <View>
        <TouchableHighlight onPress={resetButton}>
          <Text>Reset Button</Text>
        </TouchableHighlight>
      </View>
      <View>
        <TouchableHighlight onPress={poda}>
          <Text>Press </Text>
        </TouchableHighlight>
      </View>
      
    </View>
  )
}

export default App