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
import OnboardingPulse from './OnboardingPulse';
import OnboardingLaunchpad from './OnboardingLaunchpad';
import PlanGenerationLoading from './PlanGenerationLoading';
import PlanSuccess from './PlanSuccess';
import StudentDashboard from './StudentDashboardPage';
import ScrollToTop from './ScrollToTop';
import './App.css';

function App() {
  // Global Ripple Effect
  React.useEffect(() => {
    const handleRipple = (event) => {
      // Find the closest button-like element
      const button = event.target.closest('button, .btn, .icon-btn, .action-card, .nav-item');

      if (button) {
        // Create ripple element
        const ripple = document.createElement('span');
        const rect = button.getBoundingClientRect();

        // Calculate size based on button dimensions (cover the diagonal)
        const size = Math.max(rect.width, rect.height);

        // Calculate click position relative to the button
        const x = event.clientX - rect.left - size / 2;
        const y = event.clientY - rect.top - size / 2;

        ripple.style.width = ripple.style.height = `${size}px`;
        ripple.style.left = `${x}px`;
        ripple.style.top = `${y}px`;
        ripple.style.position = 'absolute';
        ripple.style.borderRadius = '50%';
        ripple.style.transform = 'scale(0)';
        ripple.style.animation = 'ripple-animation 0.6s linear';
        ripple.style.pointerEvents = 'none';
        ripple.style.zIndex = '100'; // Ensure visibility

        // Check theme or background brightness to decide ripple color
        // Simple heuristic: if button has 'start-practice-btn' (which is dark in light mode now) or is in dark mode
        const isDarkButton = button.classList.contains('start-practice-btn') ||
          getComputedStyle(button).backgroundColor !== 'rgba(0, 0, 0, 0)' &&
          getComputedStyle(button).color === 'rgb(255, 255, 255)';

        if (isDarkButton || document.documentElement.getAttribute('data-theme') === 'dark') {
          ripple.style.background = 'rgba(255, 255, 255, 0.3)';
        } else {
          ripple.style.background = 'rgba(0, 0, 0, 0.1)';
        }

        // Add class for styling if preferred, but inline is robust for dynamic size
        ripple.classList.add('ripple-circle');

        // Append to button
        button.appendChild(ripple);

        // Remove after animation
        setTimeout(() => {
          ripple.remove();
        }, 600);
      }
    };

    document.addEventListener('click', handleRipple);
    return () => document.removeEventListener('click', handleRipple);
  }, []);

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
          <Route path="/onboarding/pulse" element={<OnboardingPulse />} />
          <Route path="/onboarding/launchpad" element={<OnboardingLaunchpad />} />
          <Route path="/plan-generation" element={<PlanGenerationLoading />} />
          <Route path="/plan-success" element={<PlanSuccess />} />
          <Route path="/dashboard" element={<StudentDashboard />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
