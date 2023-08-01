import axios from "axios";

export const BaseUrl = "http://api.citybik.es/v2/networks";

export const navi = axios.create({
  baseURL: `${BaseUrl}` 
})