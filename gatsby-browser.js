import React from "react"

//traigo el proveedor
import { CartProvider } from "./src/context/CartContext"

// regreso esto armado  con el PROVEEDOR
export const wrapRootElement = ({ element }) => (
  <CartProvider>{element}</CartProvider>
)

// CustomerChat
