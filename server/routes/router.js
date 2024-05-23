const express = require("express");
const { userRegister, userOtpSend } = require("../controllers/user.controller");
const router = new express.Router();

// routes
router.post("/user/register", userRegister);
router.post('/user/sendotp', userOtpSend)

module.exports = router;