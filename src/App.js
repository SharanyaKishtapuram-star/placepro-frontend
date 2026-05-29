import { BrowserRouter, Routes, Route } from "react-router-dom";

import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";

import StudentDashboard from "./pages/StudentDashboard";
import JobsPage from "./pages/JobsPage";
import ApplicationsPage from "./pages/ApplicationsPage";
import RecruiterDashboard from "./pages/RecruiterDashboard";
import AddJobPage from "./pages/AddJobPage";
import RecruiterApplicationsPage from "./pages/RecruiterApplicationsPage";
import StudentProfilePage from "./pages/StudentProfilePage";
import ManageJobsPage from "./pages/ManageJobsPage";
import NotificationPage from "./pages/NotificationPage";
import AnalyticsPage from "./pages/AnalyticsPage";

function App() {

    return (

        <BrowserRouter>

            <Routes>

                <Route
                    path="/"
                    element={<LoginPage />}
                />

                <Route
                    path="/register"
                    element={<RegisterPage />}
                />

                <Route
                    path="/student-dashboard"
                    element={<StudentDashboard />}
                />

                <Route
                    path="/jobs"
                    element={<JobsPage />}
                />

                <Route
                    path="/applications"
                    element={<ApplicationsPage />}
                />
                <Route
    path="/recruiter-dashboard"
    element={<RecruiterDashboard />}
/>
<Route
    path="/add-job"
    element={<AddJobPage />}
/>
<Route
    path="/recruiter-applications"
    element={<RecruiterApplicationsPage />}
/>
<Route
    path="/student-profile"
    element={<StudentProfilePage />}
/>
<Route
    path="/manage-jobs"
    element={<ManageJobsPage />}
/>
<Route
    path="/notifications"
    element={<NotificationPage />}
/>
<Route
    path="/analytics"
    element={<AnalyticsPage />}
/>
            </Routes>

        </BrowserRouter>
    );
}

export default App;