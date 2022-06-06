import React, {useState,useEffect,useContext} from 'react';
import {ScrollView, Pressable} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import ProductListItem from '../components/ProductListItem';
import {getProducts} from '../Services/ProductsService';
import CartIcon from '../components/CartIcon';
import {productsHandler } from '../../firebase/ProductsApi'
import {addProducts} from '../Redux/Actions/CartActions';
import  Stylecontext  from '../context/Stylecontext';
import {connect, useDispatch} from 'react-redux';
import Footer from './Footer';



function ProductsList(props) {
  
  let values = useContext(Stylecontext);
  const navigation = useNavigation();
  const [products,setProducts] = useState([]);
  const {category_name, marketID}=props.route.params
  // let [products, setProducts] = useState(getProducts());
  // console.log(props.cart.products);
  console.log("category_name",category_name);
  console.log("marketID",marketID);
  const dispatch = useDispatch();

  // let [filteredProduct,setFilteredProduct] = useState([])
  let fil = [];
  useEffect(()=>{
    productsHandler.getProducts(
      productsHandler.MarketID=marketID
    ).then((data)=>{
      // console.log("data in",data);
            setProducts(data)
            dispatch(addProducts(data));
        })
        // console.log("data in",products);
  },[]);
  // useEffect(() => {
  //   dispatch(addProducts(products));
  // }, []);
  console.log("props.cart",props.cart);


  fil = props.cart.products.filter((product)=>{
    return product.category_name == category_name;
    // return product
  })
  // console.log("fil",fil);
  console.log("aya 7aga",props);

  // console.log("aya 7aga",props);
  // console.log("aya 7aga",props.state.cart.products);

  
  return (
   <>
     <ScrollView style={{backgroundColor: values.footerbackground}}>
      {fil&&
        fil.map(product => {
          // console.log("products list",product);
          return <ProductListItem product={product} key={product.itemID} />;
        })}
    </ScrollView>
    <Footer navigation={navigation}></Footer>
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
    addProducts: val=> dispatch(addProducts(val)),
  };
};

export default connect(mapStateToProps,mapDispatchToProps)(ProductsList);
