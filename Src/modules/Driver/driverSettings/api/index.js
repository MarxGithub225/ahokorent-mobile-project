import http from "../../../../config/httpCommon";


const update = (data) => {
    return http.put("/profile/update", data);
};


const getProfiles = () => {
    return http.get("/profile/get");
};

const passforgot = (data) => {
    return http.put("/profile/updatePass", data);
};

const api = {
    update,
    getProfiles,
    passforgot
};
  
export default api;