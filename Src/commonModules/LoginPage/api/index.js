import http from "../../../config/httpCommon";


const login = (data) => {
    return http.post("/profile/login", data);
};


const api = {
    login
};
  
export default api;