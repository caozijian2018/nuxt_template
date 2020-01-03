import axios from "axios";
console.log(process.env.baseUrl)
const service = axios.create({
    timeout: 10000,
    baseURL: process.env.baseUrl
});
service.interceptors.request.use(
    config => {
        return config;
    },
    error => {
        Promise.reject(error);
    }
);
service.interceptors.response.use(
    response => response.data,
    error => {
        console.log(JSON.stringify(error));
        console.log("iiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii");

        // var err_msg = "error";
        // var code = (error.response && error.response.status) || "00";
        // Vue.prototype.$msg(err_msg,'error');
        return Promise.reject({
            // err_msg,
            // error: "error",
            // code,
            orgin_error: JSON.stringify(error)
        });
    }
);
export default service;
