const express = require("express");
const { userRegister, userOtpSend, userLogin } = require("../controllers/user.controller");
const router = new express.Router();

// routes
router.post("/user/register", userRegister);
router.post('/user/sendotp', userOtpSend);
router.post('user/login', userLogin);

module.exports = router;