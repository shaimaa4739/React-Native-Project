import React, { useState,useContext } from "react";
import { View, Text, Switch } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import Footer from "./Footer";
import { SafeAreaView } from "react-native-safe-area-context";
import  Stylecontext  from '../context/Stylecontext';
import { useNavigation } from '@react-navigation/native';
import { signOut } from "firebase/auth";
import { auth } from '../../firebase/firebase-config'




export default function Setting({ navigation }) {
    let values = useContext(Stylecontext);
    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState)

    const signOutFun = () => {
        signOut(auth).then(() => {
        navigation.replace("Login")

        // Sign-out successful.
        }).catch((error) => {
        // An error happened.
        });
    }

    return (
        <SafeAreaView >
            <View >
                <View style={{ backgroundColor: values.backgroungcolor }} >
                    {/* darkMood Theme */}
                    <View style={{ flexDirection: 'row', backgroundColor: values.backgroungcolor, marginTop: 10 }}>
                        <Ionicons style={{ margin: 10, color: values.textcolor }} name="moon" size={32} ></Ionicons>
                        <Text style={{ margin: 10, fontSize: 32, fontWeight: '700', color: values.textcolor }}>Dark Mode</Text>
                        <TouchableOpacity
                            onPress={values.changetheme}
                            style={{ marginTop: 25, marginLeft: 40 }}>
                            <Switch
                            // شريط
                                trackColor={{ false: "#767577", true: "#f97316" }}
                                // الكوره
                                thumbColor={isEnabled ? "#ea580c" : "#f4f3f4"}
                                ios_backgroundColor="#ea580c"
                                onValueChange={toggleSwitch}
                                value={isEnabled}
                            />
                        </TouchableOpacity>
                    </View>

                    {/* contactUs */}
                    <TouchableOpacity
                        onPress={() => {
                            navigation.navigate('Contact')
                        }}
                        style={{ flexDirection: 'row', backgroundColor: values.backgroungcolor, marginTop: 10 }}>
                        <Ionicons style={{ margin: 10, color: values.textcolor }} name="person" size={32}></Ionicons>
                        <Text style={{ margin: 10, fontSize: 32, fontWeight: '700', color: values.textcolor }}>Suggestion</Text>
                    </TouchableOpacity>
                    <View style={{ flexDirection: 'column', backgroundColor: values.backgroungcolor }}>
                        <Text style={{ textAlign: 'center', color: values.textcolor }}>
                            If you have a suggestion, let us know, we will contact you
                        </Text>
                    </View>

                    {/* aboutUS */}
                    <TouchableOpacity
                        onPress={() => {
                            navigation.navigate('About')
                        }}
                        style={{ flexDirection: 'row', backgroundColor: values.backgroungcolor, marginTop: 10 }}>
                        <Ionicons style={{ margin: 10, color: values.textcolor }} name="information-circle" size={32}></Ionicons>
                        <Text style={{ margin: 10, fontSize: 32, fontWeight: '700', color: values.textcolor }}>About App</Text>
                    </TouchableOpacity>

                    {/* signOut */}
                    <TouchableOpacity 
                        onPress={signOutFun}
                    style={{ flexDirection: 'row', backgroundColor: values.backgroungcolor, marginTop: 10 }}>
                        <Ionicons style={{ margin: 10, color: values.textcolor }} name="log-out" size={32} ></Ionicons>
                        <Text style={{ margin: 10, fontSize: 32, fontWeight: '700', color: values.textcolor }}>Sign Out</Text>
                    </TouchableOpacity>
                </View>
                <View style={{ height: 500, backgroundColor: values.backgroungcolor }}>
                </View>
            </View>
            <Footer navigation={navigation}></Footer>
        </SafeAreaView>
    )
} 