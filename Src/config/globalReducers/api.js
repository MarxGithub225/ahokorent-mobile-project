import http from "../httpCommon";


const getProfiles = () => {
    return http.get("/profile/get");
};


const getOwners = () => {
    return http.get("/owner/get");
};   


const api = {
    getProfiles,
    getOwners
};
  
export default api;