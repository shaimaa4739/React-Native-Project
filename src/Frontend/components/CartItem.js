import React, { useState, useEffect, useContext } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { connect } from 'react-redux';
import {
  addItemToCartAction,
  minusItemfromCartAction,
  removeItemFromCart,
} from '../Redux/Actions/CartActions';
import Stylecontext from '../context/Stylecontext';

function CartItem({
  itemName,
  iPrice,
  image,
  itemID,
  description,
  qty,
  add,
  remove,
  minus,
  cart,
}) {

  let values = useContext(Stylecontext);
  let [counter, setCounter] = useState(qty);
  let [itemPrice, setItemPrice] = useState(iPrice);
  let [itemTotalPrice, setItemTotalPrice] = useState(0);
  let increaseCounter = () => {
    setCounter(counter + 1);
  };
  let decreaseCounter = () => {
    setCounter(counter - 1);
  };

  useEffect(() => {
    setItemTotalPrice(counter * itemPrice);
    counter === 0 ? remove(itemID) : counter;
    // setCounter(qty);
  }, [remove, cart.cart]);

  return (
    <View
      style={{
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        margin: 10,
        backgroundColor: values.backgroundMarket,
        borderRadius: 10,
        padding: 5,
      }}>
      <View style={{ borderRadius: 5, margin: 10 }}>
        <Image
          source={require("../../../assets/images/pizza.jpg")}
          style={{
            width: 100,
            height: 150,
            borderRadius: 5,
            resizeMode: 'stretch',
          }}
        />
      </View>
      <View
        style={{
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          width: '70%',
        }}>
        <Text style={{ fontSize: 18, fontWeight: 'bold', marginTop: 10, color: "#ea580c", marginRight: 50 }}>
          {itemName}
        </Text>
        <Text style={{ fontSize: 14, marginTop: 10, color: values.headerMarket }}>{description}</Text>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            width: '100%',
          }}>
          <Text
            style={{ fontSize: 16, fontWeight: 'bold', marginTop: 15, marginRight: 23, color: "#a3a3a3" }}>
            ${itemPrice}
          </Text>
          <Text
            style={{ fontSize: 16, fontWeight: 'bold', marginTop: 15, color: "#a3a3a3" }}>
            Total.Price: ${itemTotalPrice}
          </Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            width: '100%',
          }}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-evenly',
              alignItems: 'center',
              marginVertical: 10,
            }}>
            {/* Plus Icon */}
            <TouchableOpacity
              onPress={() => {
                increaseCounter();
                add(itemID);
              }}>
              <View
                style={{
                  width: 45,
                  height: 35,
                  justifyContent: 'center',
                  alignItems: 'center',
                  borderRadius: 50,
                  backgroundColor: "#064663"
                }}>
                <Icon name="plus" size={12} color={'white'} />
              </View>
            </TouchableOpacity>
            {/* The Counter Number */}
            <Text style={{ marginHorizontal: 20, fontSize: 18, color: values.headerMarket }}>{counter}</Text>
            {/* Minus Icon*/}
            <TouchableOpacity
              onPress={() => {
                decreaseCounter();
                minus(itemID);
              }}>
              <View
                style={{
                  width: 45,
                  height: 35,
                  justifyContent: 'center',
                  alignItems: 'center',
                  borderRadius: 50,
                  backgroundColor: "#064663"
                }}>
                <Icon name="minus" size={12} color={'white'} />
              </View>
            </TouchableOpacity>
          </View>
          {/* Delete Icon */}
          <View>
            <TouchableOpacity
              onPress={() => {
                remove(itemID);
              }}>
              <View
                style={{
                  width: 50,
                  height: 30,
                }}>
                <Icon name="trash" size={22} color={'#78716c'} />
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
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
    minus: id => dispatch(minusItemfromCartAction(id)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(CartItem);
