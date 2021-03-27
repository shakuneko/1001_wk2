import { OmitProps } from "antd/lib/transfer/ListBody";
import {createContext, useReducer}from "react";
import products from "../json/products.json"
import { 
    SET_PAGE_TITLE,
    SET_PAGE_CONTENT,
    SET_NAVBAR_ACTIVEITEM,
    CART_ADD_ITEM 
 } from "../utils/constants"

export const StoreContext = createContext();
const initialState = {
    page: {
       title: "NORDIC NEST Shopping Cart",
       products,
    },
    navBar: {
       activeItem: "/",
    },
    cartItems :[],

 };
 let cartItems = {};

function reducer(state, action) {
    switch (action.type) {
       case SET_PAGE_TITLE:
          return {
             ...state,
             page: {
                ...state.page,
                title: action.payload,
             },
          };
       case SET_PAGE_CONTENT:
          return {
             ...state,
             page: {
                ...state.page,
                products: action.payload,
             },
          };
          case SET_NAVBAR_ACTIVEITEM:
            return {
               ...state,
               navBar: {
                  activeItem: action.payload
               }
            };
            case CART_ADD_ITEM:
                const item = action.playload;
                const product = state.cartItem.find((x)=>x.id === item.id);
                if (product) {
                    cartItems = state.cartItem.map((x) =>
                    x.id === product.id ? item :x
                    );
                    return{...state,cartItems};
                }
                cartItems = [...state.cartItems];
                return{...state,cartItems};
         default:
            return state;
      }
 }

export function StoreProvider(props){
    const [state,dispatch]=useReducer(reducer,initialState);
    const value = {state,dispatch};
    return(
        <StoreContext.Provider value={value}>
            {props.children}
        </StoreContext.Provider>
    )
}