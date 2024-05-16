import { createContext, useState } from "react";
export const cartList = createContext({}) ; 
export default function CartContext({children}) {
    let [arr , setArr] = useState([]) ; 
    return <cartList.Provider value = {{arr , setArr}}>{children}</cartList.Provider>
}
