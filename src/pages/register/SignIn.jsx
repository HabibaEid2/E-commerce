import { useEffect } from "react";
import Register from "../../components/register/Register";

export default function SignIn() {
    useEffect(() => {
        window.scrollTo({
            top : 0 , 
            left : 0 , 
            behavior : "instant"
        }) ; 
    } , [])
    
    return( 
    <Register 
    operation = "sign in"
    isNameExist = {false}
    isConfirmPassExist = {false}
    havingAcc = {true}
    link = "/sign-up"
    />
)
}