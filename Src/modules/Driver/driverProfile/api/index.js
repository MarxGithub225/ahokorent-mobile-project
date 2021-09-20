import http from "../../../../config/httpCommon";


const register = (data) => {
    return http.post("/profile/register", data);
};


const setDriver = (data) => {
    return http.post("/driver/register", data);
};


const api = {
    register,
    setDriver
};
  
export default api;