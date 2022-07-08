import { createContext, useContext, useReducer } from "react";
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
      const updatedindex = updatedCart.findIndex(p => p.id === action.payload.id)
      if (updatedindex < 0) {
        updatedCart.push({ ...action.payload, quantity: 1 })
      } else {
        const updatedItem = { ...updatedCart[updatedindex] }
        updatedItem.quantity++;
        updatedCart[updatedindex] = updatedItem
      }
      return { ...state, cart: updatedCart };
    }
    case "Delete_From_Cart": {
      const updatedCart = state.cart.filter(item => item.id !== action.id)
      return { ...state, cart: updatedCart }
    }
    case "Increment": {
      const updatedCart = [...state.cart]
      const indexItem = updatedCart.findIndex(item => item.id === action.id)
      const updatedItem = { ...updatedCart[indexItem] }
      updatedItem.quantity++;
      updatedCart[indexItem] = updatedItem;
      return { ...state, cart: updatedCart }
    }
    case "Decrement": {
      const updatedCart = [...state.cart]
      const indexItem = updatedCart.findIndex(item => item.id === action.id)
      const updatedItem = { ...updatedCart[indexItem] }
      if (updatedItem.quantity > 1) {
        updatedItem.quantity--;
      }
      updatedCart[indexItem] = updatedItem;
      return { ...state, cart: updatedCart }
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