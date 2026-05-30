import axios from "axios";

const API = "https://placepro-backend-production.up.railway.app/api/jobs";

const getToken = () => {

    return localStorage.getItem("token");
};

export const getAllJobs = async () => {

    return axios.get(API, {
        headers: {
            Authorization: `Bearer ${getToken()}`
        }
    });
};

export const deleteJob = async (jobId) => {

    return axios.delete(
        `${API}/${jobId}`,
        {
            headers: {
                Authorization: `Bearer ${getToken()}`
            }
        }
    );
};

export const updateJob = async (
    jobId,
    jobData
) => {

    return axios.put(
        `${API}/${jobId}`,
        jobData,
        {
            headers: {
                Authorization: `Bearer ${getToken()}`
            }
        }
    );
};

export const getMyJobs = async () => {

    return axios.get(
        `${API}/my-jobs`,
        {
            headers: {
                Authorization:
                    `Bearer ${getToken()}`
            }
        }
    );
};