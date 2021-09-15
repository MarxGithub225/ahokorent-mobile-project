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

const getComments = () => {
    return http.get("/comment/get");
};

const getRatings = () => {
    return http.get("/rating/get");
};

const getSharings = () => {
    return http.get("/sharing/get");
};

const setComment = (data) => {
    return http.post("/comment/register", data);
};

const setSharing= (data) => {
    return http.post("/sharing/register", data);
};

const setRating = (data) => {
    return http.post("/rating/register", data);
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
    getImages,
    setComment,
    setSharing,
    setRating,
    getComments,
    getRatings,
    getSharings,
};
  
export default api;