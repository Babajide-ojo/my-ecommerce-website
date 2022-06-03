import React, {createContext, useState} from 'react'
import SHOP_DATA from '../shop'

//this create and export a product context
export const ProductsContext = createContext()

//create the product context provider
const ProductsContextProvider = ({children}) => {
 const [products] = useState(SHOP_DATA);

 return(
     <ProductsContext.Provider value={{products}}>
         {
             children
         }
     </ProductsContext.Provider>
 )
}

export default ProductsContextProvider;