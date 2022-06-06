import {  StyleSheet, Text, TextInput, View ,Pressable,  TouchableOpacity} from 'react-native';
// import '../global/stylesCss.css'
import React, { useState,useContext } from 'react'
import { Ionicons } from "@expo/vector-icons";
import  Stylecontext  from '../context/Stylecontext';

import CartIcon from '../components/CartIcon';

import { Button } from 'react-native-elements';
 

const Footer = ({navigation}) => {
  let values=useContext(Stylecontext );



  return (
    <View style={[styles.footer,{backgroundColor:values.backgroundMarket}]}>


        <View style={{ flex: 1,flexDirection:"row" }}>       
          <TouchableOpacity
          onPress={()=>{
             navigation.navigate('Home')
          }}
          style={{ margin:10, flex:1 , alignItems:"center" , justifyContent:"center"}}>
            <Ionicons name='home' size={30} color="#ea580c"/>
            </TouchableOpacity>
          <TouchableOpacity 
          onPress={()=>{
              navigation.navigate('Profile')
          }}
          style={{ margin:10, flex:1   , alignItems:"center" , justifyContent:"center"}}>
          <Ionicons name='person' size={30}  color="#ea580c" /> 
          </TouchableOpacity>
          <TouchableOpacity
          onPress={()=>{
              navigation.navigate('Setting')
          }}
          style={{  margin:10, flex:1  , alignItems:"center" , justifyContent:"center"}}>
          <Ionicons name='settings' size={30}  color="#ea580c" ></Ionicons>
          </TouchableOpacity>
          <TouchableOpacity
                    
           style={{  margin:10, flex:1 , alignItems:"center" , justifyContent:"center"}}>
            {/* <Ionicons name='briefcase' size={30}  color="#ea580c" ></Ionicons> */}
            <Pressable
        onPress={() => {
          // navigation.navigate('Cart', {products});
          navigation.navigate('Cart');
        }}>
        <CartIcon />
        </Pressable>
          </TouchableOpacity>
        </View>

      </View>
  )
}

export default Footer

const styles = StyleSheet.create({
  footer:{
    flex:1,
    width:'100%',
     height:70,
     margin:'auto',
     justifyContent:'center',
     alignItem:'center',
     position:'fixed',
     flex:1,
     left:30,
     borderRadius:20,
     shadowColor: '#171717',
     shadowOffset: {width: -2, height: 4},
     shadowOpacity: 0.2,
     shadowRadius: 3,       
     bottom: 15 ,
     zIndex:1000,
     width:'85%'

  }
})










// import { StyleSheet, Text, TextInput, View, TouchableOpacity } from 'react-native';
// import React,{ useContext } from 'react'
// import { Ionicons } from "@expo/vector-icons";
// import  Stylecontext  from '../context/Stylecontext';


// const Footer = ({ navigation }) => {
//   let values = useContext(Stylecontext);

//   return (
//     <View style={{
//       flex: 1, width: '100%', backgroundColor: values.footerbackground, height: 50
//       , justifyContent: 'center', position: 'fixed', bottom: 0, right: 0, zIndex: 1000
//     }}>
//       <View style={{ flex: 1, flexDirection: "row" }}>
//         <TouchableOpacity
//           onPress={() => {
//             navigation.navigate('Home')

//           }}
//           style={{ margin: 10, flex: 1, width: 50, height: 30, alignItems: "center", justifyContent: "center" }}>
//           <Ionicons name='home' size={30} color='#ea580c'  ></Ionicons>
//         </TouchableOpacity>

//         <TouchableOpacity
//           onPress={() => {
//             navigation.navigate('Profile')
//           }}
//           style={{ margin: 10, flex: 1, width: 50, height: 30, alignItems: "center", justifyContent: "center" }}>
//           <Ionicons name='person' size={30} color='#ea580c' ></Ionicons>
//         </TouchableOpacity>

//         <TouchableOpacity

//           onPress={() => {
//             navigation.navigate('Setting')
//           }}
//           style={{ margin: 10, flex: 1, width: 50, height: 30, alignItems: "center", justifyContent: "center" }}>
//           <Ionicons name='settings' size={30} color='#ea580c' ></Ionicons>
//         </TouchableOpacity>

//         <TouchableOpacity style={{ margin: 10, flex: 1, width: 50, height: 30, alignItems: "center", justifyContent: "center" }}>
//           <Ionicons name='briefcase' size={30} color='#ea580c'></Ionicons>
//         </TouchableOpacity>
//       </View>
//     </View>
//   )
// }

// export default Footer

// const styles = StyleSheet.create({})