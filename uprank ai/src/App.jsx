import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './LandingPage';
import Login from './Login';
import Signup from './Signup';
import ForgotPassword from './ForgotPassword';
import OtpVerification from './OtpVerification';
import ExamSelection from './ExamSelection';
import ExploreExams from './ExploreExams';
import OnboardingPath from './OnboardingPath';
import OnboardingTimeline from './OnboardingTimeline';
import OnboardingDailyRhythm from './OnboardingDailyRhythm';
import ScrollToTop from './ScrollToTop';
import './App.css';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="app">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/verify-otp" element={<OtpVerification />} />
          <Route path="/exam-selection" element={<ExamSelection />} />
          <Route path="/explore-exams" element={<ExploreExams />} />
          <Route path="/onboarding/path" element={<OnboardingPath />} />
          <Route path="/onboarding/timeline" element={<OnboardingTimeline />} />
          <Route path="/onboarding/rhythm" element={<OnboardingDailyRhythm />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
