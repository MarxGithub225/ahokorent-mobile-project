import http from "../../../../config/httpCommon";


const update = (data) => {
    return http.put("/profile/register", data);
};


const api = {
    update
};
  
export default api;