import React, { useEffect, useState } from 'react';
import { Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { connect } from 'react-redux';

function CartIcon(props) {
  let [cartCount, setCartCount] = useState(0);
  useEffect(() => {
    let count = 0;
    props.cart.cart.forEach(item => {
      count += item.qty;
    });
    setCartCount(count);
  }, [props.cart.cart, cartCount]);

  return (
    <View
      style={{
        backgroundColor: '#ea580c',
        width: 60,
        height: 40,
        justifyContent: 'space-evenly',
        alignItems: 'center',
        borderRadius: 10,
        flexDirection: 'row',
      }}>
      <Icon name="shopping-basket" size={18} color={'white'} />
      <Text style={{ fontSize: 18, color: "white" }}>{cartCount}</Text>
    </View>
  );
}

let mapStateToProps = state => {
  return {
    cart: state.cart,
  };
};

export default connect(mapStateToProps)(CartIcon);
