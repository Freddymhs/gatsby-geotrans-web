import React from "react"

//traigo el proveedor
import { CartProvider } from "./src/context/CartContext"
// import { CustomerChat } from "./src/components/ComponentesGlobales/CustomerChat"
// regreso esto armado  con el PROVEEDOR
export const wrapRootElement = ({ element }) => (
  <>
    {/* <CustomerChat /> */}
    <CartProvider>{element}</CartProvider>
  </>
)
