import React, {useState, useEffect} from 'react';
import {
  ScrollView,
  View,
  Image,
  Text,
  Pressable,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

function ProductDetails() {
  let [counter, setCounter] = useState(0);
  let [addToCart, setAddToCart] = useState(false);

  useEffect(() => {
    if (counter === 0) {
      setAddToCart(false);
    }
  }, [counter]);
  return (
    <ScrollView style={{flexBasis: 1}}>
      <View style={{width: '100%'}}>
        <Image
          source={require('../../../assets/images/pizza.jpg')}
          style={{width: '100%', resizeMode: 'stretch'}}
        />
      </View>
      <View style={{justifyContent: 'center', alignItems: 'center'}}>
        <View
          style={{
            marginVertical: 25,
            flexDirection: 'row',
            alignItems: 'stretch',
            justifyContent: 'space-between',
            width: '100%',
            paddingHorizontal: 18,
          }}>
          <Text style={{fontSize: 22, fontWeight: 'bold'}}>Pizza Dough</Text>
          <Text
            style={{
              fontWeight: 'bold',
              fontSize: 22,
            }}>
            200 LE
          </Text>
        </View>
        <Text
          style={{
            marginVertical: 10,
            fontSize: 18,
            fontWeight: 'bold',
            paddingHorizontal: 25,
          }}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy. Lorem
          Ipsum is simply dummy text of the printing and typesetting industry.
          Lorem Ipsum has been the industry's standard dummy. Lorem Ipsum is
          simply dummy text of the printing and typesetting industry. Lorem
          Ipsum has been the industry's standard dummy. Lorem Ipsum is simply
          dummy text of the printing and typesetting industry. Lorem Ipsum has
          been the industry's standard dummy.
        </Text>
        {addToCart ? (
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-evenly',
              alignItems: 'center',
              marginTop: 40,
            }}>
            <TouchableOpacity
              onPress={() => {
                setCounter(counter++);
              }}>
              <View
                style={{
                  backgroundColor: '#3b5998',
                  width: 60,
                  height: 30,
                  justifyContent: 'center',
                  alignItems: 'center',
                  borderRadius: 10,
                }}>
                <Icon name="plus" size={12} color={'white'} />
              </View>
            </TouchableOpacity>

            <Text style={{marginHorizontal: 20, fontSize: 18}}>{counter}</Text>
            <TouchableOpacity
              onPress={() => {
                setCounter(counter--);
              }}>
              <View
                style={{
                  backgroundColor: '#3b5998',
                  width: 60,
                  height: 30,
                  justifyContent: 'center',
                  alignItems: 'center',
                  borderRadius: 10,
                }}>
                <Icon name="minus" size={12} color={'white'} />
              </View>
            </TouchableOpacity>
          </View>
        ) : (
          <Pressable
            style={{
              marginTop: 40,
              width: 350,
              height: 50,
              backgroundColor: '#3b5998',
              borderRadius: 10,
              justifyContent: 'center',
              alignItems: 'center',
            }}
            onPress={() => {
              setAddToCart(true);
            }}>
            <Text style={{color: '#fff', fontSize: 18}}>Add To Cart</Text>
          </Pressable>
        )}
      </View>
    </ScrollView>
  );
}

export default ProductDetails;
