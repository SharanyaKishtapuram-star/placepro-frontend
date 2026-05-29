import { useEffect, useState } from "react";

import Navbar from "../components/Navbar";

import {
    getMyJobs,
    deleteJob,
    updateJob
} from "../services/manageJobService";

function ManageJobsPage() {

    const [jobs, setJobs] = useState([]);

    const [editingJob, setEditingJob] = useState(null);

    const [formData, setFormData] = useState({
        companyName: "",
        jobRole: "",
        location: "",
        salaryPackage: ""
    });

    useEffect(() => {

        fetchJobs();

    }, []);

    const fetchJobs = async () => {

        try {

            const response = await getMyJobs();

            setJobs(response.data);

        } catch (error) {

            console.error(error);

            alert("Failed to load jobs");
        }
    };

    const handleDelete = async (jobId) => {

        try {

            await deleteJob(jobId);

            alert("Job Deleted Successfully");

            fetchJobs();

        } catch (error) {

            console.error(error);

            alert("Delete Failed");
        }
    };

    const handleEditClick = (job) => {

        setEditingJob(job.id);

        setFormData({
            companyName: job.companyName,
            jobRole: job.jobRole,
            location: job.location,
            salaryPackage: job.salaryPackage
        });
    };

    const handleUpdate = async () => {

        try {

            await updateJob(editingJob, formData);

            alert("Job Updated Successfully");

            setEditingJob(null);

            fetchJobs();

        } catch (error) {

            console.error(error);

            alert("Update Failed");
        }
    };

    return (

        <div
            style={{
                backgroundColor: "#f3f4f6",
                minHeight: "100vh"
            }}
        >

            <Navbar />

            <div
                style={{
                    padding: "40px"
                }}
            >

                <h1
                    style={{
                        color: "#1e3a8a",
                        marginBottom: "30px"
                    }}
                >
                    Manage Jobs 🚀
                </h1>

                <table
                    style={{
                        width: "100%",
                        backgroundColor: "white",
                        borderCollapse: "collapse"
                    }}
                >

                    <thead
                        style={{
                            backgroundColor: "#1e3a8a",
                            color: "white"
                        }}
                    >

                        <tr>

                            <th style={{ padding: "15px" }}>Company</th>

                            <th>Role</th>

                            <th>Location</th>

                            <th>Package</th>

                            <th>Actions</th>

                        </tr>

                    </thead>

                    <tbody>

                        {jobs.map((job) => (

                            <tr
                                key={job.id}
                                style={{
                                    textAlign: "center",
                                    borderBottom:
                                        "1px solid #ddd"
                                }}
                            >

                                <td style={{ padding: "15px" }}>
                                    {job.companyName}
                                </td>

                                <td>{job.jobRole}</td>

                                <td>{job.location}</td>

                                <td>
                                    {job.salaryPackage} LPA
                                </td>

                                <td>

                                    <button
                                        onClick={() =>
                                            handleEditClick(job)
                                        }
                                        style={{
                                            marginRight: "10px",
                                            padding: "8px 15px",
                                            backgroundColor:
                                                "#2563eb",
                                            color: "white",
                                            border: "none",
                                            borderRadius: "5px",
                                            cursor: "pointer"
                                        }}
                                    >
                                        Edit
                                    </button>

                                    <button
                                        onClick={() =>
                                            handleDelete(job.id)
                                        }
                                        style={{
                                            padding: "8px 15px",
                                            backgroundColor:
                                                "red",
                                            color: "white",
                                            border: "none",
                                            borderRadius: "5px",
                                            cursor: "pointer"
                                        }}
                                    >
                                        Delete
                                    </button>

                                </td>

                            </tr>

                        ))}

                    </tbody>

                </table>

                {editingJob && (

                    <div
                        style={{
                            marginTop: "40px",
                            backgroundColor: "white",
                            padding: "30px",
                            borderRadius: "10px"
                        }}
                    >

                        <h2>Edit Job</h2>

                        <input
                            type="text"
                            placeholder="Company"
                            value={formData.companyName}
                            onChange={(e) =>
                                setFormData({
                                    ...formData,
                                    companyName:
                                        e.target.value
                                })
                            }
                        />

                        <br /><br />

                        <input
                            type="text"
                            placeholder="Role"
                            value={formData.jobRole}
                            onChange={(e) =>
                                setFormData({
                                    ...formData,
                                    jobRole:
                                        e.target.value
                                })
                            }
                        />

                        <br /><br />

                        <input
                            type="text"
                            placeholder="Location"
                            value={formData.location}
                            onChange={(e) =>
                                setFormData({
                                    ...formData,
                                    location:
                                        e.target.value
                                })
                            }
                        />

                        <br /><br />

                        <input
                            type="text"
                            placeholder="Package"
                            value={formData.salaryPackage}
                            onChange={(e) =>
                                setFormData({
                                    ...formData,
                                    salaryPackage:
                                        e.target.value
                                })
                            }
                        />

                        <br /><br />

                        <button
                            onClick={handleUpdate}
                            style={{
                                padding: "10px 20px",
                                backgroundColor: "green",
                                color: "white",
                                border: "none",
                                borderRadius: "5px"
                            }}
                        >
                            Update Job
                        </button>

                    </div>

                )}

            </div>

        </div>
    );
}

export default ManageJobsPage;