import React from "react";
import { View, Image, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Footer from "./Footer";
import { useContext } from "react";
import  Stylecontext  from '../context/Stylecontext';


export default function About({ navigation }) {
  let values = useContext(Stylecontext);

  return (
    <SafeAreaView>
      <View style={{ backgroundColor:"#ea580c",position: 'fixed',top: 0,justifyContent: 'center', alignItems: 'center', height: 70,width:390, marginTop: 0, zIndex: 10, top: 0 }}>
        <Image style={{  height: "9%",width:"60%", position: 'fixed', top: 0,zIndex: 10, marginRight:177,marginTop:7  }} source={require('../../../assets/images/appLogo.png')} />
      </View>
      
      {/* aboutSection */}
      <View style={{ color: values.footerbackground }}  >
        <Image style={{ width: '100%', height: 300 }} source={require("../../../assets/images/aboutus.png")} />
        <View style={{ justifyContent: 'center', alignItems: 'center', backgroundColor: values.footerbackground }}>
          <Text style={{ fontSize: 24, fontWeight: 'bold', textAlign: 'center', color: "#ea580c" , marginTop:15 }}>About Haat M3ak</Text>
          <Text style={{ fontSize: 20, width:"95%",textAlign: 'center', color: values.textcolor , marginTop:15 }}>
            This application was designed and delivered by ITI
            students for Learning purposes only and all rights reserved for and only for the designers
          </Text>
        </View>
        <View style={{ height: 500, backgroundColor: values.footerbackground }}></View>
        <Footer navigation={navigation}></Footer>
      </View>
    </SafeAreaView>
  )
}