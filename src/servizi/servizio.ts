import axios from "axios";

export const BaseUrl = "https://terminal-svil.f4c.it";

export const navi = axios.create({
  baseURL: `${BaseUrl}/Nave/` 
})