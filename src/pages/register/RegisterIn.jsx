import { useState } from 'react'
import './register.css'
import axios from 'axios';
export default function RegisterIn() {
    let [email , setEmail] = useState("") ; 
    let [password , setPassword] = useState("") ; 
    let [load , setLoad] = useState(false)

    async function handleClick(e) {
        e.preventDefault() ; 
        try {
            await axios.post("http://127.0.0.1:8000/api/login" , {
            email : email , 
            password : password , 
        })
        }catch(err) {
            console.log(err)
        }
    }
    return (
        <div className="register">
            <div className="sign-in">
                <form onSubmit={handleClick}>
                    <h2 className='from-title'>Sign In</h2>
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
                        type="password" 
                        id="password" 
                        placeholder='password'
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        />
                        <i className="fa-regular fa-eye-slash"></i>
                    </div>

                    <button type='submit'>sign in</button>
                </form>
            </div>
        </div>
        
    )
}