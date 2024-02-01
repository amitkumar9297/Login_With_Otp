import React from 'react'
import { NavLink } from 'react-router-dom';
import '../styles/mix.css'

const Login = () => {
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
                        <input type='email' name='email' id='' placeholder='Enter Your E-mail Address' />
                    </div>
                    <button className='btn'>Login</button>
                    <p>Don't have an account?<NavLink to={'/register'}>Sign up</NavLink></p>
                </form>
            </div>
        </section>
    )
}

export default Login