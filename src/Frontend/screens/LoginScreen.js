import { StyleSheet, TouchableOpacity, Text, View, KeyboardAvoidingView, Image } from 'react-native'
import React, { useState, useEffect, useContext } from 'react'
import  Stylecontext  from '../context/Stylecontext';
import { auth } from '../../firebase/firebase-config'
import { signInWithEmailAndPassword, onAuthStateChanged, sendPasswordResetEmail } from "firebase/auth";
import { useNavigation } from '@react-navigation/native';
import { TextInput } from 'react-native-paper';
import AsyncStorage from '@react-native-async-storage/async-storage';


export default function LoginScreen() {
  
  let values = useContext(Stylecontext);
  const [isValid, setIsValid] = useState(false);
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const navigation = useNavigation()
  const [animation, setAnimation] = React.useState(false);


  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const uid = user.uid;
        navigation.replace("Home")
      }
    })
    return unsubscribe
  }, [])

  useEffect(() => {
    const storeData = async () => {
      try {
        await AsyncStorage.setItem(false);
      } catch (error) {
      }
    };
  }, [])

  const handleLogin = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then(userCredentials => {
        const user = userCredentials.user;
        console.log(userCredentials)
        console.log('Logged in with:', user.email);
        AsyncStorage.setItem('logged', false)
      })
      .catch(error => {
        setIsValid(true)
      })
  }
  return (
    <View style={{ backgroundColor: values.footerbackground, flex: 1 }}>
      <View>
      
        <Text style={[styles.titleStyle1,{color:values.header1}]}>
          Welcome To Haat M3ak ,
        </Text>
        <Text style={styles.titleStyle2}>
          Login
        </Text>
      </View>
      <KeyboardAvoidingView
        style={styles.container}
        behavior='padding'
      >
        <Image source={require('../../../assets/images/Food-Delivery3.jpg')} style={{ width: 150, height: 150 }} />
        <View style={styles.inputContainer}>
          <TextInput
            label="Email"
            value={email}
            onChangeText={text => setEmail(text)}
            style={styles.input}
            theme={{ colors: { primary: '#ea580c', underlineColor: 'transparent', } }}
            right={
              <TextInput.Icon
                name={'email'}
                color="#ea580c"
                onPress={() => setAnimation(true)}
              />
            }
          />
          <TextInput
            placeholder="Password"
            value={password}
            onChangeText={text => setPassword(text)}
            style={[styles.input, styles.inputTest]}
            secureTextEntry
            theme={{ colors: { primary: '#ea580c', underlineColor: 'transparent', } }}
            right={
              <TextInput.Icon
                name={'lock'}
                color="#ea580c"
                onPress={() => setAnimation(true)}
              />
            }
          />
          {isValid && (<Text style={{ color: 'red', paddingTop: 3 }}>Wrong Email or Password! </Text>)}
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            onPress={handleLogin}
            style={styles.button}
          >
            <Text style={styles.buttonText}>Login</Text>
          </TouchableOpacity>
          <View >
            <Text style={[styles.textDownForm,{color:values.header1}]}>
              Don't have an account? <TouchableOpacity onPress={() => navigation.navigate('Signup')}><Text style={styles.ulterTextDownForm} >Sign up</Text></TouchableOpacity>
            </Text>
          </View>
        </View>
      </KeyboardAvoidingView>
    </View>
  )
}





const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputContainer: {
    width: '80%'
  },
  input: {
    backgroundColor: '#f5f5f4',
    marginTop: 10,

  },
  buttonContainer: {
    width: '60%',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 40,
  },
  button: {
    backgroundColor: '#ea580c',
    width: '100%',
    padding: 15,
    borderRadius: 25,
    alignItems: 'center',
  },
  buttonOutline: {
    backgroundColor: 'white',
    marginTop: 5,
    borderColor: '#ea580c',
    borderWidth: 2,
  },
  buttonText: {
    color: 'white',
    fontWeight: '700',
    fontSize: 16,
  },
  buttonOutlineText: {
    color: '#0782F9',
    fontWeight: '700',
    fontSize: 16,
  },

  textDownForm: {
    paddingTop: 20,
    fontSize: 16,
  },
  ulterTextDownForm: {
    color: '#ea580c'
  },

  inputTest: {
    flexDirection: 'row',
    justifyContent: "space-between",
    alignContent: "center",
    alignItems: "center",
  },
  titleStyle1: {
    fontSize: 24,
    paddingTop: 40,
    paddingBottom: 2,
    paddingHorizontal: 15,

  },
  titleStyle2: {
    fontSize: 30,
    paddingHorizontal: 15,
    fontWeight: '',
    fontWeight: "bold",
    color: '#ea580c',
    paddingTop:5
  }


})