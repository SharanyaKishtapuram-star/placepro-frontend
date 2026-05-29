import { useEffect, useState } from "react";
import { getAllJobs } from "../services/jobService";
import Navbar from "../components/Navbar";
import {
    applyJob,
    getMyApplications
} from "../services/applicationService";

function JobsPage() {

    const [jobs, setJobs] = useState([]);
    const [search, setSearch] = useState("");
    const [appliedJobs, setAppliedJobs] = useState([]);

    useEffect(() => {

    fetchJobs();

    fetchAppliedJobs();

}, []);

    const fetchJobs = async () => {

        try {

            const response = await getAllJobs();

            setJobs(response.data);

        } catch (error) {

            console.error(error);

            alert("Failed to load jobs");
        }
    };
    const fetchAppliedJobs = async () => {

    try {

        const response = await getMyApplications();

        const appliedIds = response.data.map(
            (application) => application.job.id
        );

        setAppliedJobs(appliedIds);

    } catch (error) {

        console.error(error);
    }
};

    const handleApply = async (jobId) => {

    try {

        await applyJob(jobId);

       setAppliedJobs((prev) => [...prev, jobId]);

        alert("Applied Successfully 🚀");

    } catch (error) {

        console.error(error);

        alert("Application Failed");
    }
};

    const filteredJobs = jobs.filter((job) =>

        job.companyName.toLowerCase().includes(search.toLowerCase()) ||

        job.jobRole.toLowerCase().includes(search.toLowerCase()) ||

        job.location.toLowerCase().includes(search.toLowerCase())

    );

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
                        marginBottom: "20px"
                    }}
                >
                    Available Jobs 🚀
                </h1>

                <input
                    type="text"
                    placeholder="Search jobs..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    style={{
                        width: "300px",
                        padding: "12px",
                        marginBottom: "30px",
                        borderRadius: "8px",
                        border: "1px solid #ccc",
                        fontSize: "16px"
                    }}
                />

                <div
                    style={{
                        display: "grid",
                        gridTemplateColumns: "repeat(3, 1fr)",
                        gap: "20px"
                    }}
                >

                    {filteredJobs.map((job) => (

                        <div
                            key={job.id}
                            style={{
                                backgroundColor: "white",
                                padding: "20px",
                                borderRadius: "10px",
                                boxShadow: "0 2px 5px rgba(0,0,0,0.1)"
                            }}
                        >

                            <h2>{job.companyName}</h2>

                            <p>
                                <strong>Role:</strong> {job.jobRole}
                            </p>

                            <p>
                                <strong>Location:</strong> {job.location}
                            </p>

                           <p>
    <strong>Package:</strong>
    {" "}
    {job.salaryPackage} LPA
</p>

                            <button
    onClick={() => handleApply(job.id)}
    disabled={appliedJobs.includes(job.id)}
    style={{
        marginTop: "15px",
        padding: "10px 20px",
        backgroundColor:
            appliedJobs.includes(job.id)
                ? "gray"
                : "#2563eb",
        color: "white",
        border: "none",
        borderRadius: "5px",
        cursor:
            appliedJobs.includes(job.id)
                ? "not-allowed"
                : "pointer"
    }}
>
    {appliedJobs.includes(job.id)
        ? "Applied"
        : "Apply"}
</button>

                        </div>

                    ))}

                </div>

            </div>

        </div>
    );
}

export default JobsPage;