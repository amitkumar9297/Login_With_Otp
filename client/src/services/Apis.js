import { commonRequests } from "./ApiCall";
import { BACKEND_URL } from "./helper";

export const registerFuntion = async (data) => {
    return await commonRequests("POST", `${BACKEND_URL}/user/register`, data)
}

export const sentOtpFunction = async (data) => {
    return await commonRequests("POST", `${BACKEND_URL}/user/sendotp`, data);
}

export const userVerify = async (data) => {
    return await commonRequests("POST", `${BACKEND_URL}/user/sendotp`, data);
}