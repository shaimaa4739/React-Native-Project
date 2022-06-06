import React, {useState, useEffect,useContext} from 'react';
import {ScrollView, TouchableOpacity, View, Text,StyleSheet} from 'react-native';
import  Stylecontext  from '../context/Stylecontext';
import * as OrdersApi from '../../firebase/OrdersApi'

import {connect} from 'react-redux';
import {
  addItemToCartAction,
  removeAllItemsFromCart,
  removeItemFromCart,
} from '../Redux/Actions/CartActions';
import CartItem from '../components/CartItem';
import Footer from './Footer';



function Cart(props,{navigation}) {
  let values = useContext(Stylecontext);
  let [cartTotalPrice, setCartTotalPrice] = useState(0);
  let [cartItemsCount, setCartItemsCount] = useState(0);
  let [products, setProducts] = useState(props.cart.cart);

  
  useEffect(() => {


    console.log("cart",props.cart.products);
    let items = 0;
    let price = 0;

    props.cart.cart.forEach(item => {
      items += item.qty;
      price += Number(item.qty) * Number(item.itemPrice);
    });
    setCartItemsCount(items);
    setCartTotalPrice(price);
    setProducts(products);
  }, [
    cartTotalPrice,
    cartItemsCount,
    setCartItemsCount,
    setCartTotalPrice,
    props.cart.cart,
    products,
    setProducts,
  ]);
  return (
    <>
      <ScrollView style={{backgroundColor: values.footerbackground}}>
      {props.cart.cart.length === 0 ? (
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            width: '100%',
            height: 200,
            backgroundColor: 'gray',
            marginVertical: 100,
          }}>
          {/* <Image /> */}
          <Text style={{fontSize: 18, fontWeight: 'bold'}}>No Data</Text>
        </View>
      ) : (
        props.cart.cart.map(item => {
          return (
            <CartItem
              itemName={item.itemName}
              iPrice={item.itemPrice}
              image={item.image}
              description={item.description}
              itemID={item.itemID}
              qty={item.qty}
              key={item.itemID}
            />
          );
        })
      )}
      {/* <View
        style={{
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            flex: 2,
          }}>
          <Text
            style={{
              fontSize: 16,
              fontWeight: 'bold',
              color: 'gray',
              flex: 1,
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
              marginLeft: 55,
              marginVertical: 35,
            }}>
            No. of Items = {cartItemsCount}
          </Text>
          <Text
            style={{
              fontSize: 16,
              fontWeight: 'bold',
              color: 'gray',
              flex: 1,
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            Total Order = {cartTotalPrice}
          </Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <TouchableOpacity
            onPress={() => {
              props.removeAll();
            }}
            style={{
              width: '25%',
              height: 45,
              backgroundColor: 'red',
              marginHorizontal: 5,
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: 10,
            }}>
            <View>
              <Text style={{fontSize: 16, fontWeight: 'bold'}}>Clear Cart</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            style={{
              width: '65%',
              height: 45,
              backgroundColor: 'green',
              marginHorizontal: 5,
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: 10,
            }}>
            <View>
              <Text style={{fontSize: 16, fontWeight: 'bold'}}>Check Out</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View> */}
    </ScrollView>
      {/* <Footer navigation={navigation}></Footer> */}
      <View style={{width:"100%", position:"sticky",bottom:0,height:180,backgroundColor: "#064663"}}>
        <View
          style={{
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <View
            style={{
              flexDirection: 'row',
              flex: 2,
            }}>
            <Text
              style={{
                fontSize: 16,
                fontWeight: 'bold',
                color: '#d4d4d4',
                marginVertical: 35,
              }}>
              Number of Items 
            </Text>
            <Text style={{
              marginLeft:187,
                fontSize: 20,
                fontWeight: 'bold',
                color: '#d4d4d4',
                marginVertical: 35,
              }}>{cartItemsCount}</Text>
            </View>
            <View
            style={{
              flexDirection: 'row',
              flex: 2,
            }}>
            <Text
              style={{
                fontSize: 16,
                fontWeight: 'bold',
                color: '#d4d4d4',
              }}>
              Total Order
            </Text>
            <Text style={{
              marginLeft:200,
                fontSize: 20,
                fontWeight: 'bold',
                color: '#d4d4d4',
              }}> ${cartTotalPrice}</Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              marginRight:60
            }}>
            <TouchableOpacity
              onPress={() => {
                props.removeAll();
              }}
              style={{
                width: '55%',
                marginTop:6,
                height: 35,
                backgroundColor: '#78716c',
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: 50,
              }}>
              <View>
                <Text style={{fontSize: 16, fontWeight: 'bold' , color:"white"}}>Clear Cart</Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity
            onPress={()=>{
              OrdersApi.creatOrder(props.cart,cartTotalPrice,cartItemsCount)
              props.removeAll();
            }}
              style={{
                width: '85%',
                height: 45,
                backgroundColor: '#ea580c',
                marginHorizontal: 5,
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: 50,
              }}>
              <View>
                <Text style={{fontSize: 16, fontWeight: 'bold',
                color:"white"}}>Check Out</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </>

  );
}
let mapStateToProps = state => {
  return {
    cart: state.cart,
  };
};

let mapDispatchToProps = dispatch => {
  return {
    // dispatching plain actions
    add: id => dispatch(addItemToCartAction(id)),
    remove: id => dispatch(removeItemFromCart(id)),
    removeAll: () => dispatch(removeAllItemsFromCart()),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Cart);

const styles = StyleSheet.create({
  footer:{
    flex:1,
    width:'100%',
     height:70,
     margin:'auto',
     justifyContent:'center',
     alignItem:'center',
     position:'fixed',
     flex:1,
     left:30,
     borderRadius:20,
     shadowColor: '#171717',
     shadowOffset: {width: -2, height: 4},
     shadowOpacity: 0.2,
     shadowRadius: 3,       
     bottom: 15 ,
     zIndex:1000,
     width:'85%'

  }
})

