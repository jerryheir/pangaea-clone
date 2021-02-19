import * as actionTypes from "./types";

export const toggleMenu = () => (dispatch: any, getState: any) => {
    const open = getState().main.open;
    dispatch({
      type: actionTypes.OPEN_MENU,
      payload: !open
    })
}

export const setCurrency = (value: string) => (dispatch: any) => {
  dispatch({
    type: actionTypes.SET_CURRENCY,
    payload: value
  })
}

export const saveProducts = (array: string) => (dispatch: any) => {
  dispatch({
    type: actionTypes.SAVE_PRODUCTS,
    payload: array
  })
}

export const updateCart = (object: any, add: boolean) => (dispatch: any, getState: any) => {
  const cart = getState().main.cart;
  let oldCart = [...cart];
  let newCart = [];
  const exist = cart.findIndex((value: any)=>value.id === object.id);
  if (exist > -1){
    oldCart[exist].quantity = add ? oldCart[exist].quantity + 1 : oldCart[exist].quantity - 1;
    if (oldCart[exist].quantity === 0) {
      newCart = oldCart.filter((val: any)=>val.id !== object.id);
    } else {
      newCart = oldCart;
    }
  } else {
    newCart = [...oldCart, {
      id: object.id,
      image_url: object.image_url,
      title: object.title,
      quantity: 1
    }]
  }
  console.log('NEW CART', newCart)
  dispatch({
    type: actionTypes.UPDATE_CART,
    payload: newCart
  })
}

export const clearCart = (object: any) => (dispatch: any, getState: any) => {
  const cart = getState().main.cart;
  let oldCart = [...cart];
  let newCart = [];
  newCart = oldCart.filter((val: any)=>val.id !== object.id);
  dispatch({
    type: actionTypes.UPDATE_CART,
    payload: newCart
  })
}