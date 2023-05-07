import axios from "axios";

// Cấu hình chung cho axios
const axiosSP = axios.create({
    baseURL: "http://localhost:8000/",
    headers: {
        "content-type": "application/json",
    },
});

//Xử lý response trả về
axiosSP.interceptors.response.use(
    function (response) {
        return response;
    },
    function (error) {
        return error.response;
    }
);

export default axiosSP;
