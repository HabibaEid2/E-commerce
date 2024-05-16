import Register from "../../components/register/Register";

export default function SignUp() {
    return( 
    <Register 
    operation = "sign up"
    name = {true}
    confirm_pass = {true}
    havingAcc = {false}
    link = "/sign-in"
    />
)
}