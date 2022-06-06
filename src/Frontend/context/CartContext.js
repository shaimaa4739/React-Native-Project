import React, {createContext, useState} from 'react';
import {getProduct} from '../Services/ProductsService';

export let CartContext = createContext();

export function CartContextProvider(props) {
  const [items, setItems] = useState([]);

  function addItemToCart(id) {
    const product = getProduct(id);
    setItems(prevItems => {
      const item = prevItems.find(item => item.id == id);
      if (!item) {
        return [
          ...prevItems,
          {
            id,
            qty: 1,
            product,
            totalPrice: product.price,
          },
        ];
      } else {
        return prevItems.map(item => {
          if (item.id == id) {
            item.qty++;
            item.totalPrice += product.price;
          }
          return item;
        });
      }
    });
  }
  function getItemsCount() {
    return items.reduce((sum, item) => sum + item.qty, 0);
  }
  function removeItemFromCart() {
    // console.log('Removing Invoked');
  }
  return (
    <CartContext.Provider
      value={{
        items,
        addItemToCart,
        getItemsCount,
        removeItemFromCart,
      }}></CartContext.Provider>
  );
}
