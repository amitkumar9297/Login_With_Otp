import React, { useState } from 'react'
import { NavLink } from 'react-router-dom';
import '../styles/mix.css'
// react-toastify
import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
    const [email, setEmail] = useState("");
    // sendOtp
    const sendOtp = (e) => {
        e.preventDefault(); //form ka jo default behaviour hota hai button ke click pe page ko reload karne ka wo nhi hoga agr preventDefault() ka use krte hai toh
        if (email === "") {
            toast.error("enter Your Email")
        } else if (!email.includes('@')) {
            toast.error("enter Valid Email")
        } else {
            toast.success("Login SuccessFully")
        }
    }
    console.log(email);
    return (
        <section>
            <div className='form_data'>
                <div className='form_heading'>
                    <h1>Welcome Back, Log In</h1>
                    <p>hi,we are you glad you are back please login</p>
                </div>
                <form>
                    <div className='form_input'>
                        <label htmlFor='email'>E-mail</label>
                        <input type='email' name='email' id='' onChange={(e) => setEmail(e.target.value)} placeholder='Enter Your E-mail Address' />
                    </div>
                    <button className='btn' onClick={sendOtp}>Login</button>
                    <p>Don't have an account?<NavLink to={'/register'}>Sign up</NavLink></p>
                </form>
            </div>
            <ToastContainer />
        </section>
    )
}

export default Login