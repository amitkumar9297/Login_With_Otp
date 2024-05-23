const mongoose = require("mongoose");
const nodemailer = require("nodemailer");
const users = require("../models/UserSchema");
const userotp = require('../models/userOTP');

const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
        user: process.env.USER,
        pass: process.env.PASS,
    },
});


exports.userRegister = async (req, res) => {
    const { fname, email, password } = req.body;
    if (!fname || !email || !password) {
        res.status(400).json({ error: "Please Enter All Input Data" });
    }
    try {
        const existingUser = await users.findOne({ email: email });

        if (existingUser) {
            res.status(400).json({ error: "This User Already Exist in Our DB" })
        } else {
            const newUser = new users({
                fname, email, password
            })
            //  here password hash

            const result = await newUser.save();
            res.status(200).json(result);
        }
    } catch (error) {
        res.status(400).json({ error: "Invalid Details", error })
    }
}

// user send otp
exports.userOtpSend = async (req, res) => {
    const { email } = req.body;

    if (!email) {
        res.status(400).json({ error: "Please Enter Your Email" });
    }

    try {
        const existingUser = await users.findOne({ email: email });

        if (existingUser) {
            const OTP = Math.floor(100000 + Math.random() * 900000);

            const existEmail = await userotp.findOne({ email: email });
            if (existEmail) {
                const updateData = await userotp.findByIdAndUpdate({ _id: existEmail._id }, {
                    otp: OTP
                },
                    { new: true }
                );

                await updateData.save();


                const mailOptions = {
                    from: process.env.USER,
                    to: email,
                    subject: "Sending Email for OTP Validation",
                    text: `OTP:- ${OTP}`
                }

                transporter.sendMail(mailOptions, (error, info) => {
                    if (error) {
                        console.log("error", error);
                        res.status(400).json({ error: "email not send" });
                    } else {
                        console.log("Email Sent", info.response);
                        res.status(200).json({ message: "Email Sent SuccessFully" });
                    }
                })

            } else {
                const saveOtpData = new userotp({
                    email, otp: OTP
                });
                await saveOtpData.save();
            }



        } else {
            res.status(400).json({ error: "This User Are Not Exist in Our DB" })
        }
    } catch (error) {
        res.status(400).json({ error: "Invalid Details", error })

    }
}