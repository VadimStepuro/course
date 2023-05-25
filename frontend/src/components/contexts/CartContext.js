import { createContext, useReducer } from "react";

export const CartContext = createContext();

export const CartDispatch = createContext();

export default function CartProvider({children, initialCart}){
    const [state, dispatch] = useReducer(cartReducer,{
        cart: initialCart
    })

    return(
    <div>
        <CartContext.Provider value={state.cart}>
            <CartDispatch.Provider value={dispatch}>
                {children}
            </CartDispatch.Provider>
        </CartContext.Provider>
    </div>)
}

function cartReducer(state, action){
    switch(action.type){
        case 'ADD_CART_ITEM':{
            return {...state, cart:[...state.cart, action.item]};
        }
        case 'UPDATE_CART_ITEM':{
            console.log(action.item)
            return{
                ...state, cart: state.cart.map((cartItem) => {
                    if(cartItem.itemId === action.item.itemId){
                        cartItem = action.item;
                        return{...cartItem, cart:action.item};
                    }
                    return cartItem;
                })
            }
        }
        case 'DELETE_CART_ITEM': {
            return {
                ...state,
                cart: state.cart.filter((cartItem) => cartItem.itemId !== action.itemId)
            }
        }
        default:{
            throw new Error("Unknown action");
        }
    }
}