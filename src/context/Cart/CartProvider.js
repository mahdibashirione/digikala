import { createContext, useContext, useReducer } from "react";
const CartContext = createContext()
const CartContextDispatcher = createContext()

const initialState = {
  cart: [],
  total: 0,
}

const reduser = (state, action) => {
  switch (action.type) {
    case "Add_To_Cart":
      const updatedCart = [...state.cart]
      const updatedindex = updatedCart.findIndex(p => p.id === action.payload.id)
      if (updatedindex < 0) {
        updatedCart.push({ ...action.payload, quantity: 1 })
      }
      console.log(state)
      return { ...state, cart: updatedCart };
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