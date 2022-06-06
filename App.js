import React,{ useEffect, useState } from 'react';
import { Text, View, Button } from 'react-native';
import * as UsersApi from './src/firebase/UsersApi'
import * as MarketsApi from './src/firebase/MarketsApi'
import * as OrdersApi from './src/firebase/OrdersApi'
import {categoriesHandler} from './src/firebase/CategoriesApi'
import {productsHandler } from './src/firebase/ProductsApi'
import StyleContextProvider from './src/Frontend/context/StylecontextProvider';
import LoginScreen from './src/Frontend/screens/LoginScreen';
import SignupScreen from './src/Frontend/screens/SignupScreen';
import Splash from './src/Frontend/screens/SplashScreen';
import StartScreen from './src/Frontend/screens/StartScreen';
import Setting from './src/Frontend/screens/Setting';
import About from './src/Frontend/screens/About';
import Profile from './src/Frontend/screens/Profile';
import Contact from './src/Frontend/screens/Contact';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MarketPage from './src/Frontend/screens/MarketPage';
import ProductsList2 from './src/Frontend/screens/ProductsList2';
import Home from './src/Frontend/screens/Home';
import ProductsList from './src/Frontend/screens/ProductsList';
import Cart from './src/Frontend/screens/Cart';
import {Provider} from 'react-redux';
import promiseMW from 'redux-promise';
import {createStore, applyMiddleware} from 'redux';
import rootReducer from './src/Frontend//Redux/Reducers/index';
import SignOut from './src/Frontend/components/SignOut';
import Footer from './src/Frontend/screens/Footer';

const myStore = applyMiddleware(promiseMW)(createStore);
const Stack = createNativeStackNavigator();

export default function App() {
  const [users,setUsers] = useState([]);
  const [products,setProducts] = useState([]);
  const [orders,setOrders] = useState([]);

  useEffect(()=>{
    // getUsers
    UsersApi.getUsers().then((data)=>{
      setUsers(data)
    })

    // getAllMarketsProducts
    productsHandler.getProducts(
      productsHandler.MarketID="kb6zkH0aisOmZsu7C3UD"
    ).then((data)=>{
            setProducts(data)
          })

    // getAllOrders
    OrdersApi.getOrders().then((data)=>{
      setOrders(data)
    // console.log('Orders',data[0]["order_items"][0]["product_name"]);
    })
  },[])
  
  console.log('Products',products);
  return (
    <Provider store={myStore(rootReducer)}>
      <StyleContextProvider>
        <NavigationContainer>
          <Stack.Navigator >
            {/* <Stack.Screen options={{ headerShown: false }} name="Mytabs" component={MyTabs} /> */}
            <Stack.Screen options={{ headerShown: false }} name="Splash" component={Splash} />
            <Stack.Screen options={{ headerShown: false }} name="Start" component={StartScreen} />
            <Stack.Screen options={{ headerShown: false }} name="Signup" component={SignupScreen} />
            <Stack.Screen options={{ headerShown: false }} name="Login" component={LoginScreen} />
            <Stack.Screen options={{ headerShown: false }} name="Home" component={Home} />
            <Stack.Screen options={{ headerShown: false }} name="MarketPage" component={MarketPage} />
            {/* <Stack.Screen options={{ headerShown: false }} name="ProductsList2" component={ProductsList2} /> */}
            <Stack.Screen options={{ headerShown: false }} name="About" component={About} />
            <Stack.Screen options={{ headerShown: false }} name="Profile" component={Profile} />
            <Stack.Screen options={{ headerShown: false }} name="ProductsList" component={ProductsList} />
            <Stack.Screen options={{ headerShown: false }} name="Footer" component={Footer} />
            <Stack.Screen name="Cart" component={Cart} />
            <Stack.Screen name="Contact" component={Contact} />
            <Stack.Screen options={{ headerShown: false }} name="SignOut" component={SignOut} />
            <Stack.Screen options={{ headerShown: false }} name="Setting" component={Setting} />
          </Stack.Navigator>
        </NavigationContainer>
      </StyleContextProvider>
    </Provider>
  );
}