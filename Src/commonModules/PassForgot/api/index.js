import http from "../../../config/httpCommon";


const passforgot = (data) => {
    return http.post("/profile/updatePass", data);
};


const api = {
    passforgot
};
  
export default api;