import {StyleSheet} from 'react-native';
import COLORS from './color';

const STYLES = StyleSheet.create({
   container : {
      paddingHorizontal : 20,
      flex : 1,
      backgroundColor : COLORS.white
   },
   txtRow : {
      //marginTop : 20,
      flexDirection : 'row',
      backgroundColor : COLORS.white
   },
   txtRm : {
      flexDirection : 'row',
      fontSize : 22,
      color : COLORS.dark,
      marginRight : 5
   },
   txtMern : {
      fontWeight : 'bold',
      fontSize : 22,
      color : COLORS.secodary
   },
   txtWelcome : {
      fontSize : 27,
      fontWeight : 'bold',
      color : COLORS.dark
   },
   txtRegister : {
      fontSize : 19,
      fontWeight : 'bold',
      color : COLORS.light
   },
   inputIcon : {
      marginTop : 15,
      position : 'absolute'
   },
   input : {
      color : COLORS.light,
      paddingLeft : 30,
      borderBottomWidth : 1,
      borderColor : COLORS.light,
      flex : 1,
      fontSize : 18
   },
   inputContainer : {
      flexDirection : 'row', marginTop : 20
   },
   btnPrimary : {
      backgroundColor : COLORS.primary,
      height : 50,
      borderRadius : 5,
      justifyContent: 'center',
      alignItems : 'center',
      marginTop : 50
   },
   txtLogin : {
      color : '#fff',
      fontWeight : 'bold',
      fontSize : 18
   },
   dahlah : {
      marginVertical : 20,
      flexDirection : 'row',
      justifyContent: 'center',
      alignItems: 'center'
   },
   line : {
      height : 1,
      width : 30,
      backgroundColor : '#a5a5a5'
   },
   or : {
      marginHorizontal : 5,
      fontWeight : 'bold'
   },
   batas : {
      flexDirection : 'row',
      justifyContent : 'space-between'
   },
   btnSecondary : {
      height : 50,
      borderWidth : 1,
      borderColor : COLORS.light,
      justifyContent : 'center',
      alignItems : 'center',
      borderRadius : 5,
      flex : 1,
      flexDirection : 'row'
   },
   btnImage : {
      width : 20,
      height : 30,
      backgroundColor : COLORS.light
   },
   ending : {
      flexDirection :'row',
      alignItems : 'flex-end',
      justifyContent : 'center',
      marginTop : 40,
      marginBottom : 20
   },
   containerProfile : {
      flex: 1,
      backgroundColor: '#F7F7F7',
      marginTop:10
   },
   containerInputKaryawan : {
      padding : 20
   },
   lineBatas : {
      backgroundColor : 'black', 
      height : 2, marginVertical : 10
   },
   inputProfile : {
      borderRadius : 8,
      marginBottom : 12,
      borderWidth : 1
   },
   karyawan : {
      margin:10,
      padding:10,
      backgroundColor:"#FFF",
      width:"80%",
      flex:1,
      alignSelf:"center",
      flexDirection:"row",
      borderRadius:5
   }
});

export default STYLES;