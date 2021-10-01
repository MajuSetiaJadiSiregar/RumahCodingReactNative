import React, {useState, useEffect} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import { View, Text, TextInput, Button, FlatList, Alert } from 'react-native';
import STYLES from '../utils/styles';
import KaryawanComponent from '../component/KaryawanComponent';

const Profile = () => {
   const [nameLogin, setNameLogin] = useState('');
   const [token, setToken] = useState('');
   const [dataKaryawan, setDataKaryawan] = useState([]);

   const [name, setName] = useState('');
   const [email, setEmail] = useState('');
   const [position, setPosition] = useState('');
   const [imageUrl, setImageUrl] = useState('');

   const deleteKaryawan = async (id) => {
     try
     {
       const res = await axios.delete(`http://10.0.2.2:5000/karyawan/delete/${id}`);
       console.log(res);
       readDataKaryawan();
     }
     catch(err)
     {
       console.log(err.response.data.message)
     }
   }

   const addKaryawan = async () => {
     try
     {
       const dataInputan = {name, email, position, imageUrl};
       const res = await axios.post('http://10.0.2.2:5000/karyawan/create', dataInputan);
       console.log(res.data);
       readDataKaryawan();
     }
     catch(err)
     {
       console.log(err.response.data.message);
     }
   }

   const readDataKaryawan = async () => {
     try
     {
       const res = await axios.get('http://10.0.2.2:5000/karyawan/read');
       setDataKaryawan(res.data.karyawan);
  
     }
     catch(err)
     {
       console.log(err.response.data.message)
     }
   }

   const getToken = async () => {
      try {
        const value = await AsyncStorage.getItem('@storage_Key')
        if(value !== null) {
           //setToken(value);
           await axios.get('http://10.0.2.2:5000/user/info',{
              headers : {
               Authorization : value
              }
           })
           .then((res) => {
              setNameLogin(res.data.name);
           })
        }
      } catch(e) {
        // error reading value
        console.log(e.response.data.msg);
      }
    }

    const getUser = async () => {
       try
       {
          getToken();
          const res = await axios.get('http://10.0.2.2:5000/user/info',{
             headers : {
               Authorization : token
             }
          });
          setNameLogin(res.data.name);
          //console.log(res.data.name);
       }
       catch(err)
       {
          console.log(err.response.data.msg);
       }
    }

    useEffect(() => {
       //getToken();
       getUser();
       readDataKaryawan();
    },[]);


   return(
      <View style={STYLES.containerProfile}>
        <View>
          <Text style={{textAlign : 'center', fontSize : 16}}>Welcome {nameLogin}</Text>
        </View>

        <View style={STYLES.containerInputKaryawan}>
          <Text style={{textAlign :'center', fontSize : 16}}>ACTION KARYAWAN</Text>
          <Text style={STYLES.lineBatas}></Text>

          <TextInput 
            placeholder='Name' 
            style={STYLES.inputProfile}
            value={name}
            onChangeText={(value) => setName(value)} />
          <TextInput 
            placeholder='Email' 
            style={STYLES.inputProfile}
            value={email}
            onChangeText={(value) => setEmail(value)} />
          <TextInput 
            placeholder='position' 
            style={STYLES.inputProfile}
            value={position}
            onChangeText={(value) => setPosition(value)} />
          <TextInput 
            placeholder='Image Url' 
            style={STYLES.inputProfile}
            value={imageUrl}
            onChangeText={(value) => setImageUrl(value)} />

          <Button title='Add Karyawan' onPress={() => addKaryawan()}/>
          <Text style={STYLES.lineBatas}></Text>
        </View>

        <View style={{flex : 1}}>
          <FlatList 
            style={{flex : 1}}
            data={dataKaryawan}
            renderItem={({item}) => <KaryawanComponent 
                name={item.name} 
                position={item.position} 
                email={item.email} 
                image={item.imageUrl}
                onDelete={() => {
                  Alert.alert(
                    'Information',
                    'Apakah Yakin Untuk Menghapus ?',
                    [
                      {text : "No", onPress : () => console.log('No')},
                      {text : 'Yes', onPress : () => deleteKaryawan(item._id)}
                    ]
                  )
                }} />}
            keyExtractor={item => item._id} />
        </View>
      </View>
   )
};

export default Profile;