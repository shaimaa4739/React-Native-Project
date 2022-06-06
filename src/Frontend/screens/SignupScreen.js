import {
  StyleSheet,
  TouchableOpacity,
  Text,
  View,
  KeyboardAvoidingView,
} from "react-native";
import React, { useState, useEffect, useContext } from "react";
import { auth } from "../../firebase/firebase-config";

import * as UsersApi from '../../firebase/UsersApi'
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";
import { TextInput } from "react-native-paper";

const SignupScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fullName, setFullName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  let [errors, setErrors] = useState({
    fullName: null,
    Phone: null,
    email: null,
    password: null,
  });

  let getFullNameValue = (e) => {
    setFullName(e.target.value);
  };
  let getPhoneValue = (e) => {
    setPhoneNumber(e.target.value);
  };
  let getEmailValue = (e) => {
    setEmail(e.target.value);
  };
  let getPasswordValue = (e) => {
    setPassword(e.target.value);
  };

  let validateForm = () => {
    let errors = {};
    if (fullName.length < 3) {
      errors.fullName = "Name must includes at least 3 letters.";
    }

    if (phoneNumber.length != 11 && !/^[A-Za-z]+$/.test(phoneNumber)) {
      errors.Phone = "Enter valid Phone Number.";
    }

    if (email.length < 7) {
      errors.email = "Enter Valid Email.";
    }

    if (password.length < 7) {
      errors.password = "Password  must includes at least 3 character .";
    }
    setErrors(errors);
    console.log("errors: ", errors);
    return Object.keys(errors).length != 0 ? false : true;
  };
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        console.log("user: ", user);

        // const uid = user.uid;
        navigation.replace("Home");
      }
    });
    return unsubscribe;
  }, []);
  const handleSignUp = () => {
    // e.preventDefault();
    let result = validateForm();
    console.log(result);

    createUserWithEmailAndPassword(auth, email, fullName, password)
      .then((userCredentials) => {
        const user = userCredentials.user;
        console.log("User Cred. : ", user);
      })
      .catch((error) => console.log(error.message));
      UsersApi.creatUser(password,email,phoneNumber,fullName)
  };

  // if (result) {
  //   setFullName("");
  //   setPhone("");
  //   setEmail("");
  //   setPassword("");
  // } else {
  //   console.log("Validate Form before submit", result);
  // }
  return (
    <View style={{ backgroundColor: "white", flex: 1 }}>
      <View>
        <Text style={[styles.titleStyle2, { paddingTop: 50 }]}>Sign up</Text>
      </View>
      <KeyboardAvoidingView style={styles.container} behavior="padding">
        <View style={styles.inputContainer}>
          <TextInput
            placeholder="Full Name"
            value={fullName}
            onChange={(event) => getFullNameValue(event)}
            style={styles.input}
            theme={{
              colors: { primary: "#ea580c", underlineColor: "transparent" },
            }}
            right={
              <TextInput.Icon
                name={"face"}
                color="#ea580c"
                onPress={() => setAnimation(true)}
              />
            }
          />
          <Text style={{ color: "red" }}>{errors.fullName}</Text>
          <TextInput
            placeholder="Phone Number"
            value={phoneNumber}
            onChange={(event) => getPhoneValue(event)}
            style={styles.input}
            theme={{
              colors: { primary: "#ea580c", underlineColor: "transparent" },
            }}
            right={
              <TextInput.Icon
                name={"phone"}
                color="#ea580c"
                onPress={() => setAnimation(true)}
              />
            }
          />
          <Text style={{ color: "red" }}>{errors.Phone}</Text>
          <TextInput
            placeholder="Email Address"
            value={email}
            onChange={(event) => getEmailValue(event)}
            style={styles.input}
            theme={{
              colors: { primary: "#ea580c", underlineColor: "transparent" },
            }}
            right={
              <TextInput.Icon
                name={"email"}
                color="#ea580c"
                onPress={() => setAnimation(true)}
              />
            }
          />
          <Text style={{ color: "red" }}>{errors.email}</Text>
          <TextInput
            placeholder="Password"
            value={password}
            onChange={(event) => getPasswordValue(event)}
            style={styles.input}
            secureTextEntry
            theme={{
              colors: { primary: "#ea580c", underlineColor: "transparent" },
            }}
            right={
              <TextInput.Icon
                name={"lock"}
                color="#ea580c"
                onPress={() => setAnimation(true)}
              />
            }
          />
          <Text style={{ color: "red" }}>{errors.password}</Text>
        </View>
        <TouchableOpacity
          onPress={() => {
            handleSignUp();
            console.log("pressed");
          }}
          style={[styles.button, styles.buttonContainer]}
        >
          <Text style={styles.buttonText}>Sign up</Text>
        </TouchableOpacity>
        <View>
          <Text style={styles.textDownForm}>
            Already have an account?{" "}
            <TouchableOpacity onPress={() => navigation.navigate("Login")}>
              <Text style={styles.ulterTextDownForm}>Login</Text>
            </TouchableOpacity>
          </Text>
        </View>
        <View>
          <Text style={styles.policy}>
            by clicking sign up you are agreeing to the terms of use and
            acknowledging the{" "}
            <Text style={{ color: "#ea580c" }}> privacy policy</Text>
          </Text>
        </View>
      </KeyboardAvoidingView>
    </View>
  );
};

export default SignupScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
  },
  inputContainer: {
    width: "80%",
  },
  input: {
    backgroundColor: "#f5f5f4",
    marginTop: 10,
  },
  buttonContainer: {
    width: "60%",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 40,
  },
  button: {
    backgroundColor: "#ea580c",
    width: "100%",
    padding: 15,
    borderRadius: 25,
    alignItems: "center",
  },
  buttonOutline: {
    backgroundColor: "white",
    marginTop: 5,
    borderColor: "#ea580c",
    borderWidth: 2,
  },
  buttonText: {
    color: "white",
    fontWeight: "700",
    fontSize: 16,
  },
  buttonOutlineText: {
    color: "#0782F9",
    fontWeight: "700",
    fontSize: 16,
  },

  textDownForm: {
    paddingTop: 20,
    fontSize: 16,
  },
  ulterTextDownForm: {
    color: "#ea580c",
  },

  inputTest: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignContent: "center",
    alignItems: "center",
  },
  titleStyle1: {
    fontSize: 20,
    paddingTop: 50,
    paddingBottom: 10,
    fontWeight: "bold",
    paddingHorizontal: 15,
  },
  titleStyle2: {
    fontSize: 30,
    textAlign: "center",
    fontWeight: "",
    color: "#ea580c",
  },
  policy: {
    padding: 20,
    paddingTop: 30,
    color: "#78716c",
  },
});