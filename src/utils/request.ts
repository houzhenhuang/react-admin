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
        return error.response.data;
    });

export default request;

