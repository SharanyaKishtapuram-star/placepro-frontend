import axios from "axios";

const API_URL = "http://localhost:8182/api/applications";

export const applyJob = async (jobId) => {

    const token = localStorage.getItem("token");

    const userId = localStorage.getItem("userId");

    return axios.post(
        `${API_URL}/${userId}`,
        {
            jobId: jobId
        },
        {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }
    );
};

export const getApplications = async () => {

    const token = localStorage.getItem("token");

    return axios.get(

        API_URL,

        {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }
    );
};

export const getMyApplications = async () => {

    const token = localStorage.getItem("token");

    return axios.get(

        "http://localhost:8182/api/applications/my",

        {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }
    );
};