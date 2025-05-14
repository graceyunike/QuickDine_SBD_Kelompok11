import React, { createContext, useState } from "react";
import { product } from "../assets/assets";

export const ShopContext = createContext()

const ShopContextProvider = ({ children }) => {
    const [products , setProducts] = useState(product)

    return(
        <ShopContext.Provider value={{products}}>
            {children}
        </ShopContext.Provider>
    )
}

export default ShopContextProvider