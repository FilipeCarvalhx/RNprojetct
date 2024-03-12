import React from "react";
import { TouchableOpacity,
     Text,
      StyleSheet }
from 'react-native';

export function CardSkill({skill}){
    return(   
        <TouchableOpacity style={styles.ButtonSkill}>
            <Text style={styles.skill}>{skill}</Text> 
        </TouchableOpacity>              
          )
}

const styles = StyleSheet.create({
ButtonSkill:{
    backgroundColor: '#1f1e25',
    padding: 15,
    borderRadius:50,
    marginVertical: 10

},skill:{
    color: '#fff',
    fontSize: 22,
    fontWeight: 'bold',
    
  }
})