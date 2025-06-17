import React, { createContext, useState } from "react"

//se crea el contexto
export const CartContext = createContext()
// regresar el PROVIDER
const CartProvider = props => {
  const [cart, setcart] = useState([])
  return (
    <CartContext.Provider value={[cart, setcart]}>
      {props.children}
    </CartContext.Provider>
  )
}

export default CartContext
export { CartProvider }
