import Register from "../../components/register/Register";

export default function SignIn() {
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