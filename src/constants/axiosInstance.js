import axios from "axios";

export const baseUrl = process.env.REACT_APP_URL || process.env.REACT_APP_URL_HOSTED;

export const axiosInstance = axios.create({
    baseURL: baseUrl,
});
