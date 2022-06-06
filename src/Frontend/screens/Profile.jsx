import React,{ useContext } from "react";
import { View, Text, Image, ScrollView } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";
import Footer from "./Footer";
import  Stylecontext  from '../context/Stylecontext';
import { auth } from '../../firebase/firebase-config'

import * as UsersApi from '../../firebase/UsersApi'
import { signOut } from "firebase/auth";

export default function Profile({ navigation }) {
  let values = useContext(Stylecontext);

  const signOutFun = () => {
    signOut(auth).then(() => {
    navigation.replace("Login")

    // Sign-out successful.
    }).catch((error) => {
    // An error happened.
    });
}

  return (
    <SafeAreaView style={{ height: '100%', backgroundColor: 'white' }}>
      {/* header */}
      <View style={{ backgroundColor:"#ea580c",position: 'fixed',top: 0,justifyContent: 'center', alignItems: 'center', height: 70,width:390, marginTop: 0, zIndex: 10, top: 0 }}>
        <Image style={{  height: "9%",width:"60%", position: 'fixed', top: 0,zIndex: 10, marginRight:177,marginTop:7  }} source={require('../../../assets/images/appLogo.png')} />
      </View>

      {/* userProfile */}
      <View style={{ justifyContent: 'center', alignItems: 'center', flex: 1, backgroundColor: values.footerbackground }}>
        <Image style={{ width: 200, height: 200, borderRadius: '100%' }} source={{ uri: 'https://www.kindpng.com/picc/m/24-248729_stockvader-predicted-adig-user-profile-image-png-transparent.png' }} />
        <Text style={{ fontSize: 20, fontWeight: '700', color: '#ea580c', marginTop: 20 }}>E-mail:</Text>
        <Text>{auth.currentUser?.email}</Text>
        <TouchableOpacity onPress={signOutFun} style={{ backgroundColor: '#064663', height: 50, width: 120, marginTop: 20, borderRadius: 50 }}>
          <Text style={{ textAlign: 'center', justifyContent: 'center', fontSize: 20, color: 'white', fontWeight: 'bold', marginTop: 10 }}>Log out</Text>
        </TouchableOpacity>
      </View>
      <Footer navigation={navigation}></Footer>
    </SafeAreaView>
  )
}
