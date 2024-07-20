import './register.css';
import { useContext, useState } from "react";
import { Alert, Spinner } from "react-bootstrap";
import google from './../../images/google-img.png';
import { Link, useNavigate } from "react-router-dom";
import Cookies from 'universal-cookie';
import { logged } from '../../context/Context';
import { createUserWithEmailAndPassword, GoogleAuthProvider, signInWithEmailAndPassword , signInWithPopup} from 'firebase/auth';
import { auth } from '../../firebase/Firebase';

export default function Register(props) {
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPass, setConfirmPass] = useState("");
    const [email, setEmail] = useState("");
    const [loading, setLoading] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [error, setError] = useState({ message: "", show: false });
    const cookie = new Cookies();
    const context = useContext(logged);
    const navigate = useNavigate();
    const provider = new GoogleAuthProvider() ; 

    const registerWithGoogle = async () => {
        try {
            await signInWithPopup(auth , provider) 
            .then((result) => {
                const credential = GoogleAuthProvider.credentialFromResult(result) ; 
                const user = result.user
                cookie.set("token", user.accessToken);
                context.setValue(true);
                navigate("/");
            })
        } catch(err) {
            console.log(err)
        }
    }

    const submit = async (e) => {
        e.preventDefault();

        // check empyt content
        if ((name.length === 0 && props.isNameExist) || email.length === 0) {
            setError({ message: "Enter all fields correctly.", show: true });

        } else if (password.length < 6) {
            setError({ message: "Password must be at least 6 characters.", show: true });

        } else if (confirmPass !== password && props.isConfirmPassExist) {
            setError({ message: "Re-enter the password correctly", show: true });

        } else {
            setLoading(true);

            // if user already exist
            if (props.operation === "sign in"){
                try {
                    await signInWithEmailAndPassword(auth , email , password)
                    .then((userCredential) => {
                        const user = userCredential.user;
                            cookie.set("token", user.accessToken);
                            context.setValue(true);
                            navigate("/");
                            setLoading(false);
                    })
                } catch (err) {
                    setError({message : "Faild to login !" , show : true})
                    setLoading(false);
                }
            }

            // if it's the first time to register
            else {
                try {
                    await createUserWithEmailAndPassword(auth, email, password)
                        .then((userCredential) => {
                            const user = userCredential.user;
                            cookie.set("token", user.accessToken);
                            context.setValue(true);
                            navigate("/");
                            setLoading(false);
                        });
                } catch (err) {
                    console.log(err.message)
                    setError({
                        message: props.operation === "sign up" 
                            ? "Enter email correctly OR check internet connection." 
                            : "Check internet connection.",
                        show: true,
                    });
                    setLoading(false);
                }
            }
        }
    };

    const toggleShowPassword = () => {
        setShowPassword(!showPassword);
    };

    const toggleShowConfirmPassword = () => {
        setShowConfirmPassword(!showConfirmPassword);
    };

    return (
        <div className="register">
            <div className="content">
                <Alert 
                    onClick={() => setError({ ...error, show: false })}
                    style={error.show ? { top: "20px" } : { top: "-200px" }}
                    variant='danger'>
                    {error.message}
                </Alert>
                <form>
                    <h2 className='form-title'>{props.operation}</h2>
                    {props.isNameExist && (
                        <div className="input-name">
                            <label htmlFor="name">Name</label>
                            <input
                                type="text"
                                id="name"
                                placeholder='user name'
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                required
                            />
                        </div>
                    )}
                    <div className="input-email">
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            id="email"
                            placeholder='email'
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>
                    <div className="input-password">
                        <label htmlFor="password">Password</label>
                        <input
                            type={showPassword ? "text" : "password"}
                            id="password"
                            placeholder='password'
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                        <i className={showPassword ? "fa-regular fa-eye" : "fa-regular fa-eye-slash"} onClick={toggleShowPassword}></i>
                    </div>
                    {props.isConfirmPassExist && (
                        <div className="input-confirm-pass">
                            <label htmlFor="confirm-pass">Confirm Password</label>
                            <input
                                type={showConfirmPassword ? "text" : "password"}
                                id="confirm-pass"
                                placeholder='re-enter password'
                                value={confirmPass}
                                onChange={(e) => setConfirmPass(e.target.value)}
                                required
                            />
                            <i className={showConfirmPassword ? "fa-regular fa-eye" : "fa-regular fa-eye-slash"} onClick={toggleShowConfirmPassword}></i>
                        </div>
                    )}
                    {props.operation === "sign in" && <p className="p-color">OR</p>}
                    {props.operation === "sign in" && (
                        <button className="google" type='button' onClick={registerWithGoogle}>
                            <img src={google} alt="google" /> SIGN IN WITH GOOGLE
                        </button>
                    )}
                    <button onClick={submit} type='submit'>
                        {loading ? (
                            <Spinner animation="border" role="status">
                                <span className="visually-hidden">Loading...</span>
                            </Spinner>
                        ) : (
                            props.operation
                        )}
                    </button>
                    <div>
                        <p className="p-color">
                            {props.havingAcc ? "Not Have an Account" : "Already Have an Account"} <Link to={`/E-commerce${props.link}`}>{props.operation === "sign in" ? "sign up" : "sign in"}</Link>
                        </p>
                    </div>
                </form>
            </div>
        </div>
    );
}
