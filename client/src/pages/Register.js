import React, { useState } from 'react'
import '../styles/mix.css'
import { NavLink, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';

import { registerFuntion } from '../services/Apis';
import axios from 'axios';


const Register = () => {
    const navigate = useNavigate();

    const [passshow, setPassshow] = useState(false);
    const [inputData, setInputData] = useState({
        fname: "",
        email: "",
        password: ""
    })
    // setinput value
    const inputHandler = (e) => {
        const { name, value } = e.target;
        setInputData({ ...inputData, [name]: value })
    }
    // console.log(inputData)

    // register data
    const handleSubmit = async (e) => {
        e.preventDefault();
        const { fname, email, password } = inputData;

        if (fname.trim() === "") {
            toast.error("Enter Your Name");
        } else if (email.trim() === "") {
            toast.error("Enter Your E-mail");
        } else if (!email.includes('@')) {
            toast.error("Enater Valid Mail ID");
        } else if (password.trim() === "") {
            toast.error("Enter Your PassWord");
        } else if (password.trim().length < 6) {
            toast.error("password Length Minimum  6 character");
        } else {
            const response = await registerFuntion(inputData);
            // const response = await axios.post("http://localhost:8000/user/register", inputData)
            // console.log(response);
            if (response.status === 200) {
                setInputData({ ...inputData, fname: "", email: "", password: "" });
                navigate('/')
            } else {
                toast.error(response.data.error);
            }
        }
    }

    return (
        <section>
            <div className='form_data'>
                <div className='form_heading'>
                    <h1>Sign Up</h1>
                    <p style={{ textAlign: 'center', paddingLeft: '3rem', paddingRight: "3rem" }}>we will glad that you will be using cloud to manage your task! we hope that you will get like it.</p>
                </div>
                <form>
                    <div className='form_input'>
                        <label htmlFor='fname'>Your Name</label>
                        <input type='text' name='fname' onChange={inputHandler} id='' placeholder='Enter Your Name' />
                    </div>
                    <div className='form_input'>
                        <label htmlFor='email'>E-mail</label>
                        <input type='email' name='email' onChange={inputHandler} id='' placeholder='Enter Your E-mail Address' />
                    </div>
                    <div className='form_input'>
                        <label htmlFor='password'>Password</label>
                        <div className='two'>
                            <input type={passshow ? 'text' : 'password'} onChange={inputHandler} name='password' id='' placeholder='Enter Your Password' />
                            <div className='showpass' onClick={() => setPassshow(!passshow)}> {passshow ? 'Hide' : 'Show'}</div>
                        </div>
                    </div>
                    <button className='btn' onClick={handleSubmit}>Sign Up</button>
                    <p>You have an account?<NavLink to={'/'}>Login</NavLink></p>
                </form>
            </div>
            <ToastContainer />
        </section>
    )
}

export default Register