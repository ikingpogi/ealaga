import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import App from './App';
import About from "./pages/about";
import Services from "./pages/services";
import Login from "./pages/login";
import Register from "./pages/register";
import Joinus from "./pages/joinus";
import Verified from "./components/register/verified.js";
import ForgotPassword from "./components/login/forgotPassword.js";
import ResetPassword from "./components/login/resetPassword.js";
import ClientHome from "./pages/clientHome";
import ClientAppointment from "./pages/clientAppointment";
import ClientActivitySchedule from "./pages/clientActivitySchedule";
import ProfileInformation from "./components/clientHome/Profile/information/profile.js";
import ProfileCredential from "./components/clientHome/Profile/credential/credential.js";
import Activity from "./components/clientHome/Activity/activity";
import History from "./components/clientHome/History/history";
import QRscanner from "./components/personnel/QRscanner/qrScanner.js";
import Dashboard from "./components/admin/dashboard/Dashboard";
import Applicant from "./components/admin/applicant/Applicant";
import Health from "./components/admin/health/Health";
import Attendees from "./components/admin/attendees/Attendees";
import User from "./components/admin/user/User";
import Announcement from "./components/admin/announcement/Announcement";

const RoutedApp = () => {
    return (
        <div>
        <Router>
            
            <Routes>
                <Route path="/" exact="true" element={<App />} />
                <Route path="/about" exact="true" element={<About />} />
                <Route path="/services" exact="true" element={<Services />} />
                <Route path="/joinus" exact="true" element={<Joinus />} />
                <Route path="/login" exact="true" element={<Login />} />
                <Route path="/register" exact="true" element={<Register />} />
                <Route path="/verified/:token" exact="true" element={<Verified />} />
                <Route path="/password/forgot" exact="true" element={<ForgotPassword />} />
                <Route path="/password/reset/:token" exact="true" element={<ResetPassword />} />
                <Route path="/client/dashboard" exact="true" element={<ClientHome />} />
                <Route path="/client/appointment" exact="true" element={<ClientActivitySchedule />} />
                {/* <Route path="/client/activity/schedule" exact="true" element={<ClientActivitySchedule />} /> */}
                <Route path="/client/profile/information" exact="true" element={<ProfileInformation />} />
                <Route path="/client/profile/credential" exact="true" element={<ProfileCredential />} />
                <Route path="/client/activities" exact="true" element={<Activity />} />
                <Route path="/client/history" exact="true" element={<History />} />

                <Route path="/personnel/scanner" exact="true" element={<QRscanner />} />

                <Route path="/admin/dashboard" exact="true" element={<Dashboard />} />
                <Route path="/admin/attendees" exact="true" element={<Attendees />} />
                <Route path="/admin/applicant" exact="true" element={<Applicant />} />
                <Route path="/admin/user" exact="true" element={<User />} />
                <Route path="/admin/announcement" exact="true" element={<Announcement />} />
                <Route path="/admin/health" exact="true" element={<Health />} />
            </Routes>
        </Router>
     
        </div>
    );
};

export default RoutedApp;