import { useEffect } from "react";
import Register from "../../components/register/Register";

export default function SignUp() {
    useEffect(() => {
        window.scrollTo({
            top : 0 , 
            left : 0 , 
            behavior : "instant"
        }) ; 
    } ,[])
    
    return( 
    <Register 
    operation = "sign up"
    isNameExist = {true}
    isConfirmPassExist = {true}
    havingAcc = {false}
    link = "/sign-in"
    />
)
}