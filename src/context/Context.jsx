
import { createContext, useState } from "react";

export const logged = createContext({}) ;

export default function CheckLogged({children}) {
    let [value , setValue] = useState(false) ; 
    return <logged.Provider value={{value , setValue}}>{children}</logged.Provider>
}