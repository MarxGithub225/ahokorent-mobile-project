import http from "../../../../config/httpCommon";


const update = (data) => {
    return http.put("/facture/update", data);
};


const updateImage = (data) => {
    return http.put("/image/update", data);
};


const api = {
    update,
    updateImage
};
  
export default api;