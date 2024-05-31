import './register.css'
import { useContext, useState } from "react"
import { Alert, Spinner } from "react-bootstrap";
import google from './../../images/google-img.png'
import { Link, useNavigate } from "react-router-dom";
import { useGoogleLogin } from "@react-oauth/google";
import axios from 'axios';
import Cookies from 'universal-cookie';
import { logged } from '../../context/Context';

export default function Register(props) {
    let [name , setName] = useState("") ; 
    let [password , setPassword] = useState("") ;
    let [confirm_pass , setConfirm_pass] = useState("") ; 
    let [email , setEmail] = useState("") ; 
    let [load, setLoad] = useState(false) ; 
    let [visionP , setVisionP] = useState(false) ; 
    let [visionCP , setVisionCP] = useState(false) ; 
    let [err , setError] = useState(false) ; 
    let cookie = new Cookies() ; 
    let context = useContext(logged) ; 
    let login = useGoogleLogin({
        onSuccess : (data) =>{
            cookie.set("token" , data.access_token) ; 
            context.setValue(true) ; 
            go("/")
            } ,
        onError : (err) => console.log(err) ,
    })
    let go = useNavigate() ; 
    async function submit(e) {
        e.preventDefault() ; 
        setLoad(true) ; 
        if (props.name) {
            try {
                await axios.post(`http://127.0.0.1:8000/api/register` , {
                    name : name ,
                    email : email , 
                    password : password , 
                    password_confirmation : confirm_pass ,
                }).then((res) => {
                    console.log(res) ; 
                    setLoad(false) ; 
                    setError(false) ; 
                    cookie.set("token" , res.data.data.token)
                    context.setValue(true) ; 
                    go("/")
                })
            } catch(err) {
                console.log(err) ; 
                setLoad(false) ; 
                setError(true) ; 
            }
        }
        else {
            try {
                await axios.post(`http://127.0.0.1:8000/api/login` , {
                    email : email , 
                    password : password , 
                }).then((res) => {
                    console.log(res) ; 
                    setLoad(false) ; 
                    setError(false) ; 
                    cookie.set("token" , res.data.data.token)
                    context.setValue(true) ; 
                    go("/")
                })
            } catch(err) {
                setLoad(false) ; 
                setError(true) ; 
            }
        }
    }
    function handleEyeVisionP() {
        setVisionP(!visionP) ; 
    }
    function handleEyeVisionCP() {
        setVisionCP(!visionCP) ; 
    }
    return (
        <div className="register">
            <div className="content">
            <Alert style={err ? {top : "20px"} : {top : "-200px"}} variant={'danger'}>you are not logged in or the data not correct!</Alert>
                <form>
                    <h2 className='from-title'>{props.operation}</h2>
                    {
                    props.name && <div className="input-name">
                        <label htmlFor="name">Name</label>
                        <input 
                        type="text" 
                        id="name" 
                        placeholder='user name'
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        />
                    </div>}

                    <div className="input-email">
                        <label htmlFor="email">Email</label>
                        <input 
                        type="email" 
                        id="email" 
                        placeholder='email'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    
                    <div className="input-password">
                        <label htmlFor="password">Password</label>
                        <input 
                        type={visionP ? "text" : "password"} 
                        id="password" 
                        placeholder='password'
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        />
                        <i className={visionP ? "fa-regular fa-eye" : "fa-regular fa-eye-slash"} onClick={handleEyeVisionP}></i>
                    </div>

                    {
                    props.confirm_pass && <div className="input-con-pass">
                        <label htmlFor="confirm-pass">Confirm Password</label>
                        <input 
                        type={visionCP ? "text" : "password"} 
                        id="confirm-pass" 
                        placeholder='re-enter password'
                        value={confirm_pass}
                        onChange={(e) => setConfirm_pass(e.target.value)}
                        />
                        <i className={visionCP ? "fa-regular fa-eye" : "fa-regular fa-eye-slash"} onClick={handleEyeVisionCP}></i>
                    </div>
                    }

                    {props.operation == "sign in" && <p className="p-color">OR</p>}
                    {
                        props.operation == "sign in" && 
                        <button className="google" type='button' onClick={login}>
                            <img src={google} alt="google" /> SIGN IN WITH GOOGLE
                        </button>
                    }

                    <button onClick={submit} type='submit'>{load ? 
                    <Spinner animation="border" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </Spinner> : props.operation
                    }</button>

                    <div>
                        <p className="p-color">
                            {props.havingAcc ?"Not Have an Account" : "Already Have an Account"} <Link to={props.link}>{props.operation == "sign in" ? "sign up" : "sign in"}</Link>
                        </p>
                    </div>
                </form>
            </div>
        </div>
    )
}