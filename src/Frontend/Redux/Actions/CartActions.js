export let addItemToCartAction = itemID => {
  return {
    type: 'ADD',
    payload: {
      id: itemID,
    },
  };
};

export let addProducts = value => {
  return {
    type: 'ADDPRODUCTS',
    payload: { value : value}
  };
};


export let minusItemfromCartAction = itemID => {
  return {
    type: 'MINUS',
    payload: {
      id: itemID,
    },
  };
};

export let removeItemFromCart = itemID => {
  return {
    type: 'REMOVE',
    payload: {
      id: itemID,
    },
  };
};

export let removeAllItemsFromCart = () => {
  return {
    type: 'REMOVEALL',
  };
};

export let adjustQty = (itemID, value) => {
  return {
    type: 'ADJUST',
    payload: {
      id: itemID,
      qty: value,
    },
  };
};
// export let getItemsCountAction = {type: 'GET'};
