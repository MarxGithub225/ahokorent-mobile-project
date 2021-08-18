import axios from "axios";

export default axios.create({
  baseURL: "https://api.ahoko.net/v1/routes/",
  headers: {
    "Content-type": "application/json"
  }
});