import React from 'react';
import { Dimensions, Image, StyleSheet } from 'react-native';
import SwiperFlatList from 'react-native-swiper-flatlist';
import { CustomPagination } from './CustomPagination';

const { width, height } = Dimensions.get('window');
const newImage = [require('../../../../assets/images/image1.jpg'), require('../../../../assets/images/image2.jpg'), require('../../../../assets/images/image3.png')
  , require('../../../../assets/images/image4.png'), require('../../../../assets/images/image5.jpeg')];
const image = index => ({ image: newImage[index % newImage.length] });
const items = Array.from(Array(5)).map((_, index) => image(index));

export default () => {
  return (
    <SwiperFlatList
      autoplay
      autoplayDelay={5}
      index={3}
      autoplayLoop
      autoplayInvertDirection
      data={items}
      renderItem={({ item }) => <Image style={styles.image} source={item.image} />}
      // showPagination
      // PaginationComponent={CustomPagination}
    />
  );
};

const styles = StyleSheet.create({
  image: {
    borderRadius: 25,
    height: height * 0.3,
    width:350,
  },
});
