import http from "../../../config/httpCommon";


const sendCode = (data) => {
    return http.post("/confirmation/register", data);
};

const confirmCode = (data) => {
    return http.post("/confirmation/verification", data);
};

const updateCode = (data) => { 
    return http.put("/confirmation/update", data);
};

const api = {
    sendCode,
    confirmCode,
    updateCode
};
  
export default api;