import { createContext, useContext, useEffect, useReducer } from "react";
const CartContext = createContext()
const CartContextDispatcher = createContext()

const initialState = {
  cart: [],
  total: 0,
}

const reduser = (state, action) => {
  switch (action.type) {
    case "Add_To_Cart": {
      const updatedCart = [...state.cart]
      const updatedindex = updatedCart.findIndex(p => p._id === action.payload.state._id)
      if (updatedindex < 0) {
        updatedCart.push({ ...action.payload.state, quantity: 1 })
      } else {
        const updatedItem = { ...updatedCart[updatedindex] }
        updatedItem.quantity++;
        updatedCart[updatedindex] = updatedItem
      }
      return { ...state, cart: updatedCart, total: state.total + parseFloat(action.payload.state.offPrice || action.payload.state.price) };

    }
    case "Increment": {
      const updatedCart = [...state.cart]
      const indexItem = updatedCart.findIndex(item => item._id === action.payload._id)
      const updatedItem = { ...updatedCart[indexItem] }
      updatedItem.quantity++;
      updatedCart[indexItem] = updatedItem;
      return { ...state, cart: updatedCart, total: state.total + parseFloat(action.payload.offPrice || action.payload.price) }
    }
    case "Decrement": {
      let updatedCart = [...state.cart]
      const indexItem = updatedCart.findIndex(item => item._id === action.payload._id)
      const updatedItem = { ...updatedCart[indexItem] }
      if (updatedItem.quantity > 1) {
        updatedItem.quantity--;
        updatedCart[indexItem] = updatedItem;
      } else {
        updatedCart = state.cart.filter(p => p._id !== action.payload._id)

      }
      return {
        ...state, cart: updatedCart, total: state.total - parseFloat(action.payload.offPrice || action.payload.price)
      }
    }
    default:
      return state;
  }
}

const ContextCart = ({ children }) => {

  const [cart, dispatch] = useReducer(reduser, initialState)

  return (
    <CartContext.Provider value={cart}>
      <CartContextDispatcher.Provider value={dispatch}>
        {children}
      </CartContextDispatcher.Provider>
    </CartContext.Provider>
  );
}

export default ContextCart;

export const useCart = () => useContext(CartContext)
export const useCartActions = () => useContext(CartContextDispatcher)