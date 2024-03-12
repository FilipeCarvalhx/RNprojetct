import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native"


export function Botton({onPress}){
    return(
<TouchableOpacity style={styles.button} activeOpacity={0.5} onPress={onPress}>
        <Text style={styles.buttonText}>Add</Text>
      </TouchableOpacity>
    )
        
        
}
const styles = StyleSheet.create({
button:{
    backgroundColor: '#cc22ff',
    borderRadius: 7,
    padding: 15,
    marginTop: 20,
    alignItems: 'center'
  },
  buttonText:{
    color: '#fff',
    fontSize: 17,
    fontWeight: 'bold'
  },
})