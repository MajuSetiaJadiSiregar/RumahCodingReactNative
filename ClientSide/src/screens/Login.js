import 'react-native-gesture-handler';
import React,{useState, useEffect} from "react";
import { TouchableOpacity, SafeAreaView, ScrollView, Text, TextInput, View, Image, Alert } from "react-native";
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Icon  from 'react-native-vector-icons/MaterialIcons';
import STYLES from '../utils/styles';


const Login = ({navigation}) => {
   const [email, setEmail] = useState('');
   const [password, setPassword] = useState('');
   //const [token, setToken] = useState('');


   const storeData = async (value) => {
      try {
        await AsyncStorage.setItem('@storage_Key', value)
      } catch (e) {
        console.log(e);
      }
    }


   const btnLogin = async () => {
      const dataUser = {email, password}
      try
      {
         const res = await axios.post('http://10.0.2.2:5000/user/login', dataUser);
         storeData(res.data.token);
         navigation.navigate('Profile');
      }catch(err){
         console.log(err.response.data.msg);
         Alert.alert(
            "Information", 
            err.response.data.msg,
            [
               { text: "OK", onPress: () => console.log("OK Pressed") }
             ]
         )
      }
   }

   const moveRegister = () => {
      console.log('a');
      navigation.navigate('Register');
   }
   return(
      <SafeAreaView style={STYLES.container}>
         <ScrollView showsVerticalScrollIndicator={false}>
            <View style={STYLES.txtRow}>
               <Text style={STYLES.txtRm}>Rumah Coding</Text>
               <Text style={STYLES.txtMern}>MERN</Text>
            </View>
            <View style={{marginTop : 70}}>
               <Text style={STYLES.txtWelcome}>Welcome Back</Text>
               <Text style={STYLES.txtRegister}>Register in to Continue</Text>
            </View>
            <View style={{marginTop : 20}}>
               <View>
                  <Icon 
                     name="mail-outline" 
                     size={20}
                     color="#a5a5a5"
                     style={STYLES.inputIcon}  />
            
                  <TextInput 
                     placeholder="Email" 
                     style={STYLES.input}
                     value={email}
                     onChangeText={(value) => setEmail(value)} />
               </View>

               <View style={STYLES.inputContainer}>
                  <Icon 
                     name="lock-outline"
                     color="#a5a5a5"
                     size={20}
                     style={STYLES.inputIcon} />

                  <TextInput 
                     placeholder="Password"  
                     style={STYLES.input}
                     secureTextEntry
                     value={password}
                     onChangeText={(value) => setPassword(value)} />
               </View>

               <View style={STYLES.btnPrimary}>
                  <TouchableOpacity onPress={() => btnLogin()}>
                     <Text style={STYLES.txtLogin}>Login</Text>
                  </TouchableOpacity>
               </View>

               <View style={STYLES.dahlah}>
                  <View style={STYLES.line}></View>
                  <Text style={STYLES.or}>OR</Text>
                  <View style={STYLES.line}></View>
               </View>

               <View style={STYLES.batas}>
                  <View style={STYLES.btnSecondary}>
                     <Text style={{fontWeight : 'bold', fontSize : 16}}>Sign In With</Text>
                     <Image style={STYLES.btnImage} source={require('../utils/facebook.png')} />
                  </View>

                  <View style={{width : 10}}></View>
                  <View style={STYLES.btnSecondary}>
                     <Text style={{fontWeight : 'bold', fontSize : 16}}>Sign In With</Text>
                     <Image style={STYLES.btnImage} source={require('../utils/google.png')} />
                  </View>
               </View>
            </View>

            <View style={STYLES.ending}>
               <Text>Don't Have an Account</Text>
               <TouchableOpacity onPress={() => moveRegister()}>
                  <Text style={{color : '#ff2d5f', fontWeight : 'bold', marginLeft : 5}}>Sign Up</Text>
               </TouchableOpacity>
            </View>
         </ScrollView>
      </SafeAreaView>
   );
};
export default Login;