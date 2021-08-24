import http from "../../../../config/httpCommon";


const fetchCarData = (data) => {
    return http.post("/car/fetching", data);
};


const api = {
    fetchCarData
};
  
export default api;