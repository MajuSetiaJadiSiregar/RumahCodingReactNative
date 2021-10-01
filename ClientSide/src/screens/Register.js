import 'react-native-gesture-handler';
import React from "react";
import { TouchableOpacity, SafeAreaView, ScrollView, Text, TextInput, View, Image, Button } from "react-native";
import Icon  from 'react-native-vector-icons/MaterialIcons';
import STYLES from '../utils/styles';

const Register = ({navigation}) => {

   const moveLogin = () => {
      console.log('login');
      navigation.goBack();
   }
   return(
      <SafeAreaView style={STYLES.container}>
         <ScrollView showsVerticalScrollIndicator={false}>
            <View style={STYLES.txtRow}>
               <Text style={STYLES.txtRm}>Rumah Coding</Text>
               <Text style={STYLES.txtMern}>MERN</Text>
            </View>
            <View style={{marginTop : 70}}>
               <Text style={STYLES.txtWelcome}>Welcome to MERN</Text>
               <Text style={STYLES.txtRegister}>And Upgrade Your Skill</Text>
            </View>
            <View style={{marginTop : 20}}>

               <View>
                  <Icon 
                     name="account-circle" 
                     size={20}
                     color="#a5a5a5"
                     style={STYLES.inputIcon}  />
                  
                  <TextInput placeholder="Name" style={STYLES.input} />
               </View>

               <View style={STYLES.inputContainer}>
                  <Icon 
                     name="mail-outline" 
                     size={20}
                     color="#a5a5a5"
                     style={STYLES.inputIcon}  />
                  
                  <TextInput placeholder="Email" style={STYLES.input} />
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
                     secureTextEntry />
               </View>

               <View style={STYLES.btnPrimary}>
                  <TouchableOpacity onPress={() => console.log('a')}>
                     {/* <Button title="s" onPress={() => console.log('as')} /> */}
                     <Text style={STYLES.txtLogin}>Register</Text>
                  </TouchableOpacity>
               </View>

               <View style={STYLES.dahlah}>
                  <View style={STYLES.line}></View>
                  <Text style={STYLES.or}>OR</Text>
                  <View style={STYLES.line}></View>
               </View>

               <View style={STYLES.batas}>
                  <View style={STYLES.btnSecondary}>
                     <Text style={{fontWeight : 'bold', fontSize : 16, padding : 5}}>Register In With</Text>
                     <Image style={STYLES.btnImage} source={require('../utils/facebook.png')} />
                  </View>

                  <View style={{width : 10}}></View>
                  <View style={STYLES.btnSecondary}>
                     <Text style={{fontWeight : 'bold', fontSize : 16, padding : 5}}>Register In With</Text>
                     <Image style={STYLES.btnImage} source={require('../utils/google.png')} />
                  </View>
               </View>
            </View>

            <View style={STYLES.ending}>
               <Text>Have an Account ?</Text>
               <TouchableOpacity onPress={() => moveLogin()}>
                  <Text style={{color : '#ff2d5f', fontWeight : 'bold', marginLeft : 5}}>Login</Text>
               </TouchableOpacity>
            </View>
         </ScrollView>
      </SafeAreaView>
   );
};
export default Register;