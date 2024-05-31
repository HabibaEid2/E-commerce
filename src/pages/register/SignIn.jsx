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
    name = {false}
    confirm_pass = {false}
    havingAcc = {true}
    link = "/sign-up"
    />
)
}