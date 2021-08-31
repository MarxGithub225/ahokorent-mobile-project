import http from "../../../../config/httpCommon";


const fetchCarData = (data) => {
    return http.post("/car/fetching", data);
};

const insertCarData = (data) => {
    return http.post("/car/register", data);
};
const api = {
    fetchCarData,
    insertCarData
};
  
export default api;