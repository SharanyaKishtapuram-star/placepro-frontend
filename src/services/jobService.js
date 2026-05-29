import axios from "axios";

const API_URL = "http://localhost:8182/api/jobs";

export const getAllJobs = async () => {

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

export const addJob = async (jobData) => {

    const token = localStorage.getItem("token");

    return axios.post(
        API_URL,
        jobData,
        {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }
    );
};

export const updateJob = async (
    id,
    updatedJob
) => {

    const token = localStorage.getItem("token");

    return axios.put(
        `${API_URL}/${id}`,
        updatedJob,
        {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }
    );
};

export const deleteJob = async (id) => {

    const token = localStorage.getItem("token");

    return axios.delete(
        `${API_URL}/${id}`,
        {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }
    );
};