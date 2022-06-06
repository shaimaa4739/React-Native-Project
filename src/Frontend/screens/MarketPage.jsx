import { Ionicons } from "@expo/vector-icons";
import React,{useContext,useState,useEffect} from "react";
import { View, Image, Text, ScrollView, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Footer from "./Footer";
import  Stylecontext  from '../context/Stylecontext';
import {categoriesHandler} from '../../firebase/CategoriesApi'


export default function MarketPage({ route,navigation }) {
  let values = useContext(Stylecontext);
  const marketID = route.params.marketID
  const market = route.params.market

  const [categories,setCategories] = useState([]);
  const [location,setLocation] = useState([]);
  console.log(marketID)

  useEffect(()=>{
    categoriesHandler.getCategories(
      categoriesHandler.MarketID=marketID
    ).then((data)=>{
            setCategories(data)
    })

    categoriesHandler.getMarketLocation(
      categoriesHandler.MarketID=marketID
    ).then((data)=>{
      setLocation(data)
      // console.log(data[0].street , "data from location");
    })
  },[])


  return (
    <SafeAreaView>
      <View>
        {/* header */}
      <View style={{ backgroundColor:"#ea580c",position: 'fixed',top: 0,justifyContent: 'center', alignItems: 'center', height: 70,width:390, marginTop: 0, zIndex: 10, top: 0 }}>
        <Image style={{  height: "9%",width:"60%", position: 'fixed', top: 0,zIndex: 10, marginRight:177,marginTop:7  }} source={require('../../../assets/images/appLogo.png')} />
      </View>

        <ScrollView style={{ backgroundColor: values.footerbackground,marginTop:77 }}>

          {/* marketDetails */}
          <Image style={{ width: '100%', height: 250, backgroundColor: values.footerbackground }} source={{ uri: market.img[0] }}></Image>
          <View style={{ flexDirection: 'row', justifyContent: 'flex-start', marginTop: 20 }}>
          <Ionicons style={{ color: "#ea580c" }} name="location" size={32} color='grey' ></Ionicons>
          <Text style={{ fontSize: 16, color: values.headerMarket,marginTop:5}}>Cairo , New Cairo , Maadi , street .9</Text>
            {/* {location.map((loc)=>{
              return <Text key={loc.id} style={{ fontSize: 16, color: values.headerMarket,marginTop:5}}>{loc.state} ,{loc.city} ,{loc.region} ,{loc.street}</Text>
            })} */}
            {/* <Text style={{ fontSize: 20, color: values.title }}> {location[0]['state']}{location[0].city}{location[0].region}{location[0].street}</Text> */}
          </View>

          <View style={{ borderWidth: 1, height: 50, borderColor: '#ea580c', marginTop: 20, borderRadius: 50,width:200, marginLeft:100,marginBottom:15}}>
            <Text style={{ textAlign: 'center', fontSize: 30, fontWeight: 'bold', color: "#ea580c" }}>Categories</Text>
          </View>

          {/* marketCategories */}
          {
            categories&&categories.map((category)=>{
              return(
                <View style={{ flexDirection: 'row', marginTop: 20, flex: 2 }} key={category.id}>
                  <TouchableOpacity
                    onPress={() => {
                      navigation.navigate('ProductsList',{category_name:category.category_name,marketID:marketID})
                    }}
                    style={{ flexDirection: 'column', margin: 5, flex: 1 }}>
                      <View style={{
                        borderRadius:35,
                        borderColor:"grey",
                        borderWidth:1,
                        margin:15,
                      
                      }}>
                      <Image style={{  width: '100%', height: 200, borderRadius: 35 }} source={{ uri: category.img }}></Image>
                      </View>
                    
                    <Text style={{ textAlign: 'center', fontSize: 20, fontWeight: 'bold', color: values.textcolor }}>{category.category_name}</Text>
                  </TouchableOpacity>
                </View>
              )
            })
            }
        </ScrollView>
        <Footer navigation={navigation}></Footer>
      </View>
    </SafeAreaView>
  )
}