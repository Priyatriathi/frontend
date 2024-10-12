import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import NavBar from './components/NavBar';
import Announcements from './components/Announcements';
import Resources from './components/Resources';
import Footer from './components/Footer';
import FeaturedCompanies from './components/FeaturedCompanies';
import StudentSuccess from './components/StudentSuccess';
import LoginPage from './components/LoginPage.jsx';
import JobBoard from './components/JobBoard';
import HomePageImage from './components/HomePageImage';
import AboutUs from './components/AboutUs.jsx';
import Calendar from './components/Calendar.jsx';
import Events from './components/Events.jsx'; // Assuming this component exists
import Home from './components/Home.jsx';
import CreateAccountPage from './components/CreateAccountPage.jsx';
import ForgotPassword from './components/ForgotPassword.jsx';
import Board from './components/Board.jsx';
function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-gray-100">
        {/* Header and NavBar */}
        <Header />
        <NavBar />

        {/* Define Routes */}
        <Routes>
          <Route path="/" element={<Home/>} /> {/* Home Component */}
          <Route path="/resources" element={<JobBoard />} />
          <Route path="/calendar" element={<Calendar />} />
          <Route path="/events" element={<Events />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/login" element={<LoginPage/>} />
          <Route path="/createaccount" element={<CreateAccountPage/>} />
          <Route path="/forgotpassword" element={<ForgotPassword/>} />
          <Route path="/dashboard" element={<Board/>} />
        </Routes>
         
        {/* Footer */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;



;