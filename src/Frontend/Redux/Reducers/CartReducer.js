import {getProducts} from '../../Services/ProductsService';

let Items = getProducts();
const INITIAL_STATE = {
  products: [],
  cart: [],
};

export default function CartReducer(state = INITIAL_STATE, action) {
  if (action.type === 'ADD') {
    const item = state.products.find(prod => prod.itemID === action.payload.id);
    const inCart = state.cart.find(item =>
      item.itemID === action.payload.id ? true : false,
    );
    const inProducts = state.products.find(item =>
      item.itemID === action.payload.id ? true : false,
    );
    return {
      ...state,
      cart: inCart
        ? state.cart.map(item =>
            item.itemID === action.payload.id
              ? {...item, qty: item.qty + 1}
              : item,
          )
        : [...state.cart, {...item, qty: 1}],
        products: inProducts
        ? state.products.map(item =>
            item.itemID === action.payload.id
              ? {...item, qty: item.qty + 1}
              : item,
          )
        : [...state.products, {...item, qty: 1}],
    };
  }
  if (action.type === 'MINUS') {
    const item = state.products.find(prod => prod.itemID === action.payload.id);
    const inCart = state.cart.find(item =>
      item.itemID === action.payload.id ? true : false,
    );
    const inProducts = state.products.find(item =>
      item.itemID === action.payload.id ? true : false,
    );
    return {
      ...state,
      cart: inCart
        ? state.cart.map(item =>
            item.itemID === action.payload.id
              ? {...item, qty: item.qty - 1}
              : item,
          )
        : [...state.cart],
        products: inProducts
        ? state.products.map(item =>
            item.itemID === action.payload.id
              ? {...item, qty: item.qty - 1}
              : item,
          )
        : [...state.products],
    };
  }

  if (action.type === 'REMOVE')
    return {
      ...state,
      cart: state.cart.filter(item => item.itemID !== action.payload.id),
      products: state.products.map(item =>
        item.itemID === action.payload.id
          ? {...item, qty: (item.qty = 0)}
          : item,
      ),
    };

  if (action.type === 'REMOVEALL')
    return {
      ...state,
      cart: [],
      products: state.products.map(item => ({...item, qty: (item.qty = 0)})),
    };

    if (action.type === 'ADDPRODUCTS')
    return {
      ...state,
      products: action.payload.value,
    };
  return state;
}
