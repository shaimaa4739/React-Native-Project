import React from 'react';
import { View, Text, Image, ActivityIndicator } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';


function Splash({ navigation }) {
    let moveToHome=()=>{
        AsyncStorage.getItem('logged').then((value)=>{
            console.log('asyncStorage value: ', value)
            if (value){
                setTimeout(()=>{navigation.navigate('Login')},2000)   
            }else{
                setTimeout(()=>{navigation.navigate('Home')},2000)
            }
        })
    }    
    console.log("hi splash")
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#ea580c' }}>
            <Image source={require('../../../assets/images/appLogo2.png')} style={{ width: 190, height: 150 , marginBottom:30}} />
            <ActivityIndicator color="white" size="large" />
            {moveToHome()}
        </View>
    );
}

export default Splash;