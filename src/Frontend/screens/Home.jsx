import { ScrollView, StyleSheet, Text, TextInput, View, Image, TouchableOpacity } from 'react-native';
import SwiperWithRenderitems from '../components/Swiper/SwiperWithRenderitems';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useContext,useEffect,useState } from "react";
import  Stylecontext  from '../context/Stylecontext';
import * as MarketsApi from '../../firebase/MarketsApi'
import MarketPage from './MarketPage';
import Footer from './Footer';
import { Cols, Col } from 'react-native-cols'


export default function Home({ navigation }) {
  let values = useContext(Stylecontext);
  const [markets,setMarkets] = useState([]);

  useEffect(()=>{
    // getMarkets
    MarketsApi.getMarkets().then((data)=>{
      setMarkets(data)
    })
  },[])
  console.log('Markets from home',markets);

  return (
    <>
      
    <SafeAreaView style={{backgroundColor: values.footerbackground}}>
      {/* header */}
      <View style={{ backgroundColor:"#ea580c",position: 'fixed',top: 0,justifyContent: 'center', alignItems: 'center', height: 70,width:390, marginTop: 0, zIndex: 10, top: 0 }}>
        <Image style={{  height: "9%",width:"60%", position: 'fixed', top: 0,zIndex: 10, marginRight:177,marginTop:7  }} source={require('../../../assets/images/appLogo.png')} />
      </View>

      {/* Home */}
      <ScrollView style={{ flex:1,flexDirection:'row',marginBottom: 50,backgroundColor: values.footerbackground, marginTop: 80 }}>
            {/* marketCard */}
            {
              markets&&markets.map((market)=>{
                return(
                  <View 
                  style={{ margin: 10,
                    backgroundColor:values.backgroundMarket, flex:1 , alignItems:"center" , justifyContent:"center",
                    padding:10,borderRadius:25 }} key={market.id}>
                      <TouchableOpacity
                        onPress={() => {
                          navigation.navigate('MarketPage',{marketID:market.id,market: market})
                        }} >
                        <Image style={{borderRadius: 25,height: 150,width:350,}} source={{uri:market.img[1]}} />
                        <Text style={{ margin: 20,marginBottom:10, color: values.headerMarket, textAlign: 'center', fontSize: 20, fontWeight: '700' }}>
                          {market.market_name}
                        </Text>
                      </TouchableOpacity>
                </View>
                )
              })

            }
      </ScrollView>
      <Footer navigation={navigation}></Footer>
    </SafeAreaView>
    </>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
});