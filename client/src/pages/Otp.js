import React, { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import { useLocation, useNavigate } from 'react-router-dom';
import { userVerify } from '../services/Apis';

const Otp = () => {

    const [otp, setOtp] = useState("");

    const location = useLocation();
    // console.log(location);

    const navigate = useNavigate();

    const LoginUser = async (e) => {
        e.preventDefault();
        if (otp === "") {
            toast.error("Enter Your OTP")
        } else if (!/[^a-zA-Z]/.test(otp)) {
            toast.error("Enter Valid OTP")
        } else if (otp.length !== 6) {
            toast.error("OTP Length Minimun ^6 digit");
        } else {
            const data = {
                otp, email: location.state,
            }
            const response = await userVerify(data);
            console.log(response);
        }
    }

    return (
        <>
            <section>
                <div className="form_data">
                    <div className="form_heading">
                        <h1>Please Enter Your OTP Here</h1>
                    </div>
                    <form>
                        <div className="form_input">
                            <label htmlFor="otp">OTP</label>
                            <input type="text" name="otp" id="" onChange={(e) => setOtp(e.target.value)} placeholder='Enter Your OTP' />
                        </div>
                        <button className='btn' onClick={LoginUser}>Submit</button>
                    </form>
                </div>
                <ToastContainer />
            </section>
        </>
    )
}

export default Otp