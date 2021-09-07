import http from "../../../../config/httpCommon";


const fetchCarData = (data) => {
    return http.post("/car/fetching", data);
};

const insertCarData = (data) => {
    return http.post("/car/register", data);
};

const getCar = () => {
    return http.get("/car/get");
};

const getFacture = () => {
    return http.get("/facture/get");
};

const getImages = () => {
    return http.get("/image/get");
};
const api = {
    fetchCarData,
    insertCarData,
    getCar,
    getFacture,
    getImages
};
  
export default api;