import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';
import { signOut } from "firebase/auth";
import { auth } from '../../firebase/firebase-config'


const SignOut = () => {
  // code log out
  const navigation = useNavigation()
  const signOutFun = () => {
    signOut(auth).then(() => {
      navigation.replace("Login")

    }).catch((error) => {
    });
  }
  return (
    <View>
      <TouchableOpacity
        onPress={signOutFun}>
        <Text>log out</Text>
      </TouchableOpacity>
      <Text>{auth.currentUser?.email}</Text>
      <Text>{auth.currentUser?.fullName}</Text>
    </View>
  )
}

export default SignOut

const styles = StyleSheet.create({})





