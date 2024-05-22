import { commonRequests } from "./ApiCall";
import { BACKEND_URL } from "./helper";

export const registerFuntion = async (data) => {
    return await commonRequests("POST", `${BACKEND_URL}/user/register`, data)
}
