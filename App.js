import { StyleSheet, Text, View, TextInput, Platform, FlatList} from 'react-native';
import React, {useState} from 'react';
import { Botton } from './src/components/button';
import { CardSkill } from './src/components/skillCard';

export default function App() {
  const [newSkill, setNewSkill] = useState("")
  const [mySkills, setMySkills] = useState([])

  function handleAddNewSkill(){
    setMySkills(oldstate => [ ...oldstate, newSkill])
  }
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Welcome Filipe!!</Text>
      <TextInput style={styles.inputs} placeholder='Click Here' placeholderTextColor='#fff' onChangeText={setNewSkill}/>

      <Text style={[styles.text, {marginVertical: 30}]}>
        My Skills
        </Text>
        <Botton onPress={handleAddNewSkill}/>
        <FlatList 
        data={mySkills}
        keyExtractor={item=> (item)}
        renderItem={({item }) => (
          <CardSkill  skill={item}/>
        )}/>
      
     
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121015',
    paddingHorizontal: 20,
    paddingVertical: 70,
    paddingHorizontal: 30
  },
  text:{
    color:'white',
    fontSize: 30,
    fontWeight: 'bold'
  },
  inputs: {
    backgroundColor:'#1f1e25',
    color:'#fff',
    fontSize: 18,
    padding: Platform.OS === 'ios' ? 15 : 10,
    marginTop: 30,
    borderRadius: 7
  },
 
});
