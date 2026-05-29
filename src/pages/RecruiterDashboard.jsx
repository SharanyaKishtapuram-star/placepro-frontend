import Navbar from "../components/Navbar";
import { useNavigate } from "react-router-dom";

import { useEffect, useState } from "react";

import axios from "axios";

function RecruiterDashboard() {

    const navigate = useNavigate();
    const [jobs, setJobs] = useState(0);

const [applications, setApplications] =
    useState(0);

const [shortlisted, setShortlisted] =
    useState(0);

const [selected, setSelected] =
    useState(0);
    const fetchDashboardStats = async () => {

    try {

        const token =
            localStorage.getItem("token");

        const response = await axios.get(

            "http://localhost:8182/api/recruiter/dashboard",

            {
                headers: {
                    Authorization:
                        `Bearer ${token}`
                }
            }
        );

        setJobs(response.data.jobs);

        setApplications(
            response.data.applications
        );

        setShortlisted(
            response.data.shortlisted
        );

        setSelected(
            response.data.selected
        );

    }

    catch (error) {

        console.log(error);
    }
};
useEffect(() => {

    fetchDashboardStats();

}, []);
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
                        marginBottom: "15px"
                    }}
                >
                    Recruiter Dashboard 🏢
                </h1>

                <p
                    style={{
                        fontSize: "18px",
                        marginBottom: "40px"
                    }}
                >
                    Manage jobs and student applications
                </p>
                <div
    style={{
        display: "grid",
        gridTemplateColumns: "repeat(4, 1fr)",
        gap: "20px",
        marginBottom: "40px"
    }}
>

    <div
        style={{
            backgroundColor: "white",
            padding: "20px",
            borderRadius: "12px",
            boxShadow: "0 2px 5px rgba(0,0,0,0.1)"
        }}
    >

        <h2>Total Jobs</h2>

        <h1>{jobs}</h1>

    </div>

    <div
        style={{
            backgroundColor: "white",
            padding: "20px",
            borderRadius: "12px",
            boxShadow: "0 2px 5px rgba(0,0,0,0.1)"
        }}
    >

        <h2>Applications</h2>

        <h1>{applications}</h1>

    </div>

    <div
        style={{
            backgroundColor: "white",
            padding: "20px",
            borderRadius: "12px",
            boxShadow: "0 2px 5px rgba(0,0,0,0.1)"
        }}
    >

        <h2>Shortlisted</h2>

        <h1>{shortlisted}</h1>

    </div>

    <div
        style={{
            backgroundColor: "white",
            padding: "20px",
            borderRadius: "12px",
            boxShadow: "0 2px 5px rgba(0,0,0,0.1)"
        }}
    >

        <h2>Selected</h2>

        <h1>{selected}</h1>

    </div>

</div>
                <div
                    style={{
    display: "grid",
    gridTemplateColumns:
        "repeat(auto-fit, minmax(250px, 1fr))",
    gap: "20px"
}}
                >

                    <div
                        onClick={() => navigate("/add-job")}
                        style={{
                            backgroundColor: "white",
                            padding: "25px",
                            borderRadius: "12px",
                            boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
                            cursor: "pointer"
                        }}
                    >

                        <h2>Add Jobs</h2>

                        <p>
                            Create placement opportunities
                        </p>

                    </div>

                    <div
    onClick={() =>
        navigate("/recruiter-applications")
    }
    style={{
        backgroundColor: "white",
        padding: "25px",
        borderRadius: "12px",
        boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
        cursor: "pointer"
    }}
>

    <h2>Applications</h2>

    <p>
        View student applications
    </p>

</div>

                    <div
    onClick={() =>
        navigate("/recruiter-applications")
    }
    style={{
        backgroundColor: "white",
        padding: "25px",
        borderRadius: "12px",
        boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
        cursor: "pointer"
    }}
>

    <h2>Status Updates</h2>

    <p>
        Select or reject candidates
    </p>

</div>

<div
    onClick={() =>
        navigate("/analytics")
    }
    style={{
        backgroundColor: "white",
        padding: "25px",
        borderRadius: "12px",
        boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
        cursor: "pointer"
    }}
>

    <h2>📊 Analytics</h2>

    <p>
        View placement statistics
    </p>

</div>

                </div>

            </div>

        </div>
    );
}

export default RecruiterDashboard;