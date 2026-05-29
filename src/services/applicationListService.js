import axios from "axios";

const API_URL =
    "http://localhost:8182/api/applications/my";

export const getApplications = async () => {

    const token = localStorage.getItem("token");

    return axios.get(API_URL, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    });
};