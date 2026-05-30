import Navbar from "../components/Navbar";

import { useNavigate } from "react-router-dom";

import { useEffect, useState } from "react";

import axios from "axios";

function StudentDashboard() {

    const navigate = useNavigate();

    const [jobs, setJobs] = useState(0);

    const [applications, setApplications] = useState(0);

    const [selected, setSelected] = useState(0);

    const [shortlisted, setShortlisted] = useState(0);

    useEffect(() => {

        fetchDashboardStats();

    }, []);

    const fetchDashboardStats = async () => {

        try {

            const token = localStorage.getItem("token");

const response = await axios.get(

    "https://placepro-backend-production.up.railway.app/api/dashboard/stats",

    {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }
);

            console.log(response.data);

            setJobs(response.data.jobs);

            setApplications(response.data.applications);

            setSelected(response.data.selected);

            setShortlisted(response.data.shortlisted);

        }

        catch (error) {

            console.log(error);

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
                    padding: "40px",
                    fontFamily: "Arial"
                }}
            >

                <h1
                    style={{
                        color: "#1e3a8a",
                        marginBottom: "10px"
                    }}
                >
                    Student Dashboard
                </h1>

                <p
                    style={{
                        fontSize: "18px",
                        marginBottom: "40px"
                    }}
                >
                    Welcome to PlacePro 🚀
                </p>

                <div
                    style={{
                        display: "grid",
                        gridTemplateColumns: "repeat(4, 1fr)",
                        alignItems: "stretch",
                        gap: "25px",
                        marginBottom: "40px"
                    }}
                >

                    <div
                        style={{
                            backgroundColor: "white",
                            padding: "25px",
                            borderRadius: "12px",
                            boxShadow: "0 2px 5px rgba(0,0,0,0.1)"
                        }}
                    >

                        <h2
                            style={{
                                color: "#2563eb",
                                marginBottom: "10px"
                            }}
                        >
                            Total Jobs
                        </h2>

                        <h1>{jobs}</h1>

                    </div>

                    <div
                        style={{
                            backgroundColor: "white",
                            padding: "25px",
                            borderRadius: "12px",
                            boxShadow: "0 2px 5px rgba(0,0,0,0.1)"
                        }}
                    >

                        <h2
                            style={{
                                color: "#9333ea",
                                marginBottom: "10px"
                            }}
                        >
                            Applications
                        </h2>

                        <h1>{applications}</h1>

                    </div>

                    <div
                        style={{
                            backgroundColor: "white",
                            padding: "25px",
                            borderRadius: "12px",
                            boxShadow: "0 2px 5px rgba(0,0,0,0.1)"
                        }}
                    >

                        <h2
                            style={{
                                color: "green",
                                marginBottom: "10px"
                            }}
                        >
                            Selected
                        </h2>

                        <h1>{selected}</h1>

                    </div>

                    <div
    style={{
        backgroundColor: "white",
        padding: "25px",
        borderRadius: "12px",
        boxShadow:
            "0 2px 5px rgba(0,0,0,0.1)"
    }}
>

    <h2
        style={{
            color: "orange",
            marginBottom: "10px"
        }}
    >
        Shortlisted
    </h2>

    <h1>{shortlisted}</h1>

</div>

                </div>

                <div
                    style={{
                        display: "grid",
                        gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
                        gap: "20px"
                    }}
                >

                    <div

                        onClick={() => navigate("/jobs")}

                        style={{
                            padding: "20px",
                            border: "1px solid #ccc",
                            borderRadius: "10px",
                            backgroundColor: "white",
                            cursor: "pointer"
                        }}
                    >
                        <h3>Available Jobs</h3>
                        <p>View all placement opportunities</p>
                    </div>

                    <div

                        onClick={() => navigate("/applications")}

                        style={{
                            padding: "20px",
                            border: "1px solid #ccc",
                            borderRadius: "10px",
                            backgroundColor: "white",
                            cursor: "pointer"
                        }}
                    >
                        <h3>Applied Jobs</h3>
                        <p>Track your applications</p>
                    </div>

                    <div

                        onClick={() => navigate("/student-profile")}

                        style={{
                            padding: "20px",
                            border: "1px solid #ccc",
                            borderRadius: "10px",
                            backgroundColor: "white",
                            cursor: "pointer"
                        }}
                    >
                        <h3>Profile</h3>
                        <p>Update your details</p>
                    </div>

                </div>

            </div>

        </div>
    );
}

export default StudentDashboard;