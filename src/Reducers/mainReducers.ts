import * as actionTypes from "../Actions/types";

interface Action {
    type: string;
    payload?: any;
}

const initalState = {
    open: false,
    currency: 'USD',
    cart: [],
    products: []
};
  
const mainReducers = (state = initalState, action: Action) => {
    const { type, payload } = action;
    switch (type) {
        case actionTypes.OPEN_MENU:{
            return {
                ...state,
                open: payload
            }
        }
        case actionTypes.SET_CURRENCY:{
            return {
                ...state,
                currency: payload
            }
        }
        case actionTypes.SAVE_PRODUCTS:{
            return {
                ...state,
                products: payload
            }
        }
        case actionTypes.UPDATE_CART:{
            return {
                ...state,
                cart: payload
            }
        }
        default:
            return state;
    }
  };
  
  export default mainReducers;