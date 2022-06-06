import React,{ useContext } from "react";
import { View, Text, Image, button, ScrollView } from "react-native";
import { Button } from "react-native-elements";
import { SafeAreaView } from "react-native-safe-area-context";
import Footer from "./Footer";
import  Stylecontext  from '../context/Stylecontext';


export default function ProductsList2({ navigation }) {
    let values = useContext(Stylecontext);

    return (
        <SafeAreaView>
            {/* header */}
            <View style={{ justifyContent: 'center', alignItems: 'center', height: 100, marginTop: 0, zIndex: 10, top: 0 }}>
                <Image style={{ width: '100%', height: 70, position: 'fixed', top: 0 }} source={require('../../../assets/images/Hat.jpeg')} />
            </View>

            <ScrollView style={{ backgroundColor: '#ccc', flex: 1 }}>
                {/* productCart */}
                <View style={{ backgroundColor: values.footerbackground, margin: 10, borderRadius: 20, flexDirection: 'row', shadowColor: '#171717', shadowOffset: { width: -2, height: 4 }, shadowOpacity: 0.5, shadowRadius: 3 }}>
                    <Image style={{ width: 150, height: 200, borderRadius: 20 }} source={{ uri: 'https://order.kfc.co.za/Content/OnlineOrderingImages/Shared/blog/CrunchMonth_Copy_Section_860x485.jpg' }}></Image>
                    <View style={{ flexDirection: 'column', justifyContent: 'space-between' }}>
                        <Text style={{ margin: 20, fontSize: 20, color: values.title, fontWeight: '700' }}>KFC Lesotho</Text>
                        <Text style={{ marginLeft: 20, fontSize: 15, fontWeight: '700', color: '#FFD124' }}>64 EGP</Text>
                        <View style={{ flexDirection: 'column', marginBottom: 20 }}>
                            <Button style={{ marginLeft: 20, color: '#FFD124', }} title={'Order Now'}></Button>
                        </View>
                    </View>
                </View>
                <View style={{ backgroundColor: values.footerbackground, margin: 10, borderRadius: 20, flexDirection: 'row', shadowColor: '#171717', shadowOffset: { width: -2, height: 4 }, shadowOpacity: 0.5, shadowRadius: 3 }}>
                    <Image style={{ width: 150, height: 200, borderRadius: 20 }} source={{ uri: 'https://order.kfc.co.za/Content/OnlineOrderingImages/Shared/blog/CrunchMonth_Copy_Section_860x485.jpg' }}></Image>
                    <View style={{ flexDirection: 'column', justifyContent: 'space-between' }}>
                        <Text style={{ margin: 20, fontSize: 20, color: values.title, fontWeight: '700' }}>KFC Lesotho</Text>
                        <Text style={{ marginLeft: 20, fontSize: 15, fontWeight: '700', color: '#FFD124' }}>64 EGP</Text>
                        <View style={{ flexDirection: 'column', marginBottom: 20 }}>
                            <Button style={{ marginLeft: 20, color: '#FFD124' }} title={'Order Now'}></Button>
                        </View>
                    </View>
                </View>
                <View style={{ backgroundColor: values.footerbackground, margin: 10, borderRadius: 20, flexDirection: 'row', shadowColor: '#171717', shadowOffset: { width: -2, height: 4 }, shadowOpacity: 0.5, shadowRadius: 3 }}>
                    <Image style={{ width: 150, height: 200, borderRadius: 20 }} source={{ uri: 'https://order.kfc.co.za/Content/OnlineOrderingImages/Shared/blog/CrunchMonth_Copy_Section_860x485.jpg' }}></Image>
                    <View style={{ flexDirection: 'column', justifyContent: 'space-between' }}>
                        <Text style={{ margin: 20, fontSize: 20, color: values.title, fontWeight: '700' }}>KFC Lesotho</Text>
                        <Text style={{ marginLeft: 20, fontSize: 15, fontWeight: '700', color: '#FFD124' }}>64 EGP</Text>
                        <View style={{ flexDirection: 'column', marginBottom: 20 }}>
                            <Button style={{ marginLeft: 20, color: '#FFD124' }} title={'Order Now'}></Button>
                        </View>
                    </View>
                </View>
                <View style={{ backgroundColor: values.footerbackground, margin: 10, borderRadius: 20, flexDirection: 'row', shadowColor: '#171717', shadowOffset: { width: -2, height: 4 }, shadowOpacity: 0.5, shadowRadius: 3 }}>
                    <Image style={{ width: 150, height: 200, borderRadius: 20 }} source={{ uri: 'https://order.kfc.co.za/Content/OnlineOrderingImages/Shared/blog/CrunchMonth_Copy_Section_860x485.jpg' }}></Image>
                    <View style={{ flexDirection: 'column', justifyContent: 'space-between' }}>
                        <Text style={{ margin: 20, fontSize: 20, color: values.title, fontWeight: '700' }}>KFC Lesotho</Text>
                        <Text style={{ marginLeft: 20, fontSize: 15, fontWeight: '700', color: '#FFD124' }}>64 EGP</Text>
                        <View style={{ flexDirection: 'column', marginBottom: 20 }}>
                            <Button style={{ marginLeft: 20 }} title={'Order Now'} color="#f194ff" ></Button>
                        </View>
                    </View>
                </View>
            </ScrollView>
            <Footer navigation={navigation}></Footer>
        </SafeAreaView>
    )
}