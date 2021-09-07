import http from "../httpCommon";


const getProfiles = () => {
    return http.get("/profile/get");
};


const getOwners = () => {
    return http.get("/owner/get");
};   


const getBrands = () => {
    return http.get("/carBrand/get");
};


const getModels = () => {
    return http.get("/carModel/get");
};


const getTypes = () => {
    return http.get("/carType/get");
};


const getCaracteristics = () => {
    return http.get("/characteristic/get");
};

const getGearbox = () => {
    return http.get("/gearBox/get");
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
    getProfiles,
    getOwners,
    getBrands,
    getModels,
    getTypes,
    getCaracteristics,
    getGearbox,
    getCar,
    getFacture,
    getImages
};
  
export default api;