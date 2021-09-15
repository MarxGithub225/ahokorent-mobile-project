import http from "../../../../config/httpCommon";


const register = (data) => {
    return http.post("/profile/register", data);
};


const setOwner = (data) => {
    return http.post("/owner/register", data);
};

const api = {
    register,
    setOwner
};
  
export default api;