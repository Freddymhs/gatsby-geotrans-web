import React from "react";

import { CartProvider } from "./src/removeme/context/CartContext";
export const wrapRootElement = ({ element }) => (
  <>
    <CartProvider>{element}</CartProvider>
  </>
);
