import { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "../components/Navbar";
import "./AnalyticsPage.css";

function AnalyticsPage() {

    const [analytics, setAnalytics] = useState({});

    useEffect(() => {
        fetchAnalytics();
    }, []);

    const fetchAnalytics = async () => {

        try {

            const token = localStorage.getItem("token");

            const response = await axios.get(
                "https://placepro-backend-production.up.railway.app/api/analytics",
                {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                }
            );

            setAnalytics(response.data);

        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div>
            <Navbar />

            <div style={{ padding: "30px" }}>

<div className="analytics-container">

    <h1 className="analytics-title">
        📊 Placement Analytics
    </h1>

    <div className="analytics-grid">

        <div className="analytics-card">
            <h3>Total Students</h3>
            <h2>{analytics.totalStudents}</h2>
        </div>

        <div className="analytics-card">
            <h3>Total Recruiters</h3>
            <h2>{analytics.totalRecruiters}</h2>
        </div>

        <div className="analytics-card">
            <h3>Total Jobs</h3>
            <h2>{analytics.totalJobs}</h2>
        </div>

        <div className="analytics-card">
            <h3>Total Applications</h3>
            <h2>{analytics.totalApplications}</h2>
        </div>

        <div className="analytics-card">
            <h3>Selected Students</h3>
            <h2>{analytics.selectedStudents}</h2>
        </div>

        <div className="analytics-card">
            <h3>Placement Rate</h3>
            <h2>
                <h2>
    {(analytics.placementPercentage || 0).toFixed(2)}%
</h2>
            </h2>
        </div>

    </div>

</div>

            </div>
        </div>
    );
}

export default AnalyticsPage;