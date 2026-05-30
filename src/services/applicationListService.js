import axios from "axios";

const API_URL =
    "https://placepro-backend-production.up.railway.app/api/applications/my";

export const getApplications = async () => {

    const token = localStorage.getItem("token");

    return axios.get(API_URL, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    });
};