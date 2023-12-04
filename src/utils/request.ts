import axios from "axios";
import { message } from "antd";

const request = axios.create({
    timeout: 3000
});


request.interceptors.request.use(
    config => {
        return config;
    },
    error => {
        return Promise.reject(error);
    });

request.interceptors.response.use(
    res => {
        return res.data;
    },
    error => {
        const { response } = error;

        if (!response || response.status === 504) {
            const result: IResponse<null> = {
                isSuccess: false,
                message: response?.data || "服务器断开啦",
                code: "",
                data: null
            };
            return result;
        }

        return response.data;
    });

export default request;

