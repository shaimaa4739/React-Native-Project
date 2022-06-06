import { PrivateValueStore } from '@react-navigation/native';
import React, {useState, useEffect,useContext} from 'react';
import {View, Text, Image, Pressable, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {connect} from 'react-redux';
import {
  addItemToCartAction,
  minusItemfromCartAction,
  removeItemFromCart,
} from '../Redux/Actions/CartActions';
import  Stylecontext  from '../context/Stylecontext';

function ProductListItem(props) {
  
  let values = useContext(Stylecontext);
  let [addToCart, setAddToCart] = useState(false);
  let [product, setProduct] = useState(props.product);
  let [counter, setCounter] = useState(product.qty);

  let increaseCounter = () => {
    props.add(product.itemID);
  };
  let decreaseCounter = () => {
    props.minus(product.itemID);
  };

  useEffect(() => {
    props.cart.cart.forEach(ele => {
      if (ele.itemID === product.itemID) {
        setCounter(ele.qty === 0 ? 0 : ele.qty);
        ele.qty === 0 ? setAddToCart(false) : setAddToCart(true);
      }
    });
    if (props.cart.cart.length === 0) {
      setAddToCart(false);
       setCounter(product.qty);
    }
  });


  return (
    <View
      key={product.itemID}
      style={{
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        margin: 10,
        backgroundColor: values.backgroundMarket,
        borderRadius: 10,
        padding: 5,
      }}>
      <View style={{borderRadius: 5, margin: 10}}>
        <Image
          source={{uri:product.image}}
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
        <Text style={{fontSize: 18, fontWeight: 'bold', marginTop: 10,color:"#ea580c",marginRight:50}}>
          {product.itemName}
        </Text>
        <Text style={{fontSize: 14, marginTop: 10,color: values.headerMarket}}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
        </Text>
        <Text style={{fontSize: 16,fontWeight: 'bold',marginTop:15,marginRight:200 , color:"#a3a3a3"}}>${product.itemPrice}</Text>
        {addToCart ? (
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-evenly',
              alignItems: 'center',
              marginTop: 40,
              margin: 10,
            }}>
            <TouchableOpacity
              onPress={() => {
                increaseCounter();

              }}>
              <View
                style={{
                  width: 60,
                  height: 40,
                  justifyContent: 'center',
                  alignItems: 'center',
                  borderRadius: 50,
                  backgroundColor:"#064663"
                }}>
                <Icon name="plus" size={12} color={'white'} />
              </View>
            </TouchableOpacity>
            <Text style={{marginHorizontal: 20, fontSize: 18,color: values.headerMarket}}>{counter}</Text>
            <TouchableOpacity
              onPress={() => {
                decreaseCounter();
                
              }}>
              <View
                style={{
                  width: 60,
                  height: 40,
                  justifyContent: 'center',
                  alignItems: 'center',
                  borderRadius: 50,
                  backgroundColor:"#064663"
                }}>
                <Icon name="minus" size={12} color={'white'} />
              </View>
            </TouchableOpacity>
          </View>
        ) : (
          <Pressable
            style={{
              marginTop: 40,
              width: '50%',
              height: 40,
              borderRadius: 50,
              justifyContent: 'center',
              alignItems: 'center',
              margin: 10,
              backgroundColor:"#064663"
            }}
            onPress={() => {
              increaseCounter();
              setAddToCart(true);
            }}>
            <Text style={{color: '#fff', fontSize: 18}}>Add To Cart</Text>
          </Pressable>
        )}
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
export default connect(mapStateToProps, mapDispatchToProps)(ProductListItem);
