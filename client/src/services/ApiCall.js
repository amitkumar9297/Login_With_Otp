import axios from "axios";

export const commonRequests = async (methods, url, body, header) => {
    let config = {
        method: methods,
        url,
        headers: header ? header : { "Content-Type": "application/json" },
        data: body
    }

    //  axios instance

    return axios(config).then((data) => {
        return data;
    }).catch((err) => {
        return err;
    })
}