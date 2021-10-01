import React from 'react';
import { Text, View, Image, TouchableOpacity  } from 'react-native';
import STYLES from '../utils/styles';

const KaryawanComponent = (props) => {

   return(
      <View style={STYLES.karyawan}>
         <Image source={{uri: props.image}}  style={{width:60, height:60,borderRadius:30}} />

         <View style={{alignItems:"center",flex:1}}>
            <Text style={{fontWeight:"bold"}}>{props.name}</Text>
            <Text>{props.email}</Text>
            <Text>{props.position}</Text>
         </View>

         <TouchableOpacity style={{height:50,width:50, justifyContent:"center",alignItems:"center"}}>
            <Text style={{color:"green"}}>Edit</Text>
         </TouchableOpacity>
         <TouchableOpacity onPress={props.onDelete} style={{height:50,width:50, justifyContent:"center",alignItems:"center"}}>
            <Text style={{color:"green"}}>Delete</Text>
         </TouchableOpacity>
    </View>
   );
};

export default KaryawanComponent;