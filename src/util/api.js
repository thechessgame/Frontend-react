import { axiosInstance } from "../constants/axiosInstance";
import { getAuthToken } from "./auth";

const getAuthHeader = async () => {
    return {
        headers: {
            Authorization: 'Bearer ' + getAuthToken()
        }
    }
}
const api = {
    // signup 
    createUser: async (data) => await axiosInstance.post("/user/createuser", data, getAuthHeader()),
    checkUserName: async (username) => await axiosInstance.get(`/user/checkusername?username=${username}`),

    // login

    // contact us
    submitRequest: async (data) => await axiosInstance.post("/contactus", data)
};

export default api;
