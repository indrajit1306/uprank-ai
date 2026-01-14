import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { CheckCircle2, Rocket, BarChart2, Calendar, Clock, BookOpen, PenTool, LayoutDashboard } from 'lucide-react';
import { UpRankLogo } from './Navbar';
import './OnboardingLaunchpad.css';
import rocketImage from './assets/rocket_launch.png';

const OnboardingLaunchpad = () => {
    const navigate = useNavigate();
    const [checklistActive, setChecklistActive] = useState([false, false, false]);

    useEffect(() => {
        // Staggered animation for checklist
        const timers = [
            setTimeout(() => setChecklistActive(prev => [true, false, false]), 500),
            setTimeout(() => setChecklistActive(prev => [true, true, false]), 1200),
            setTimeout(() => setChecklistActive(prev => [true, true, true]), 1900)
        ];
        return () => timers.forEach(clearTimeout);
    }, []);

    return (
        <div className="launchpad-container">
            {/* Header */}
            <header className="launchpad-header">
                <div className="launchpad-brand">
                    <div className="brand-logo-sq">
                        <UpRankLogo />
                    </div>
                    <span className="brand-text">UpRank AI</span>
                </div>
                <div className="header-nav">
                    <a href="#">How it Works</a>
                    <a href="#">Support</a>
                    <button className="sign-out-btn">Sign Out</button>
                </div>
            </header>

            <main className="launchpad-main">

                {/* Left Column: Visuals & Checklist */}
                <div className="launchpad-visuals">
                    <div className="rocket-image-container">
                        <img src={rocketImage} alt="Rocket Launch" className="rocket-3d-image" />
                    </div>

                    <div className="checklist-stack">
                        <div className={`checklist-item ${checklistActive[0] ? 'active' : ''}`}>
                            <div className="check-icon">
                                <CheckCircle2 size={20} />
                            </div>
                            <span>AI-Powered Plan Generated</span>
                        </div>
                        <div className={`checklist-item ${checklistActive[1] ? 'active' : ''}`}>
                            <div className="check-icon">
                                <CheckCircle2 size={20} />
                            </div>
                            <span>Daily Schedule Optimized</span>
                        </div>
                        <div className={`checklist-item ${checklistActive[2] ? 'active' : ''}`}>
                            <div className="check-icon">
                                <CheckCircle2 size={20} />
                            </div>
                            <span>Exam Strategy Locked</span>
                        </div>
                    </div>
                </div>

                {/* Right Column: Blueprint & Actions */}
                <div className="launchpad-content">
                    <div className="hero-text">
                        <h1>Ignition Sequence <br />Complete!</h1>
                        <p>We've tailored every detail to your goals. Review your blueprint before we launch your personalized study journey.</p>
                    </div>

                    <div className="blueprint-card">
                        <div className="blueprint-header">
                            <LayoutDashboard size={20} className="text-purple" />
                            <h3>Preparation Blueprint</h3>
                        </div>

                        <div className="blueprint-grid">
                            <div className="blueprint-stat">
                                <span className="stat-label">TARGET EXAM</span>
                                <span className="stat-value">MCAT Medical Entrance</span>
                            </div>
                            <div className="blueprint-stat">
                                <span className="stat-label">EXAM DATE</span>
                                <span className="stat-value">August 24, 2024</span>
                            </div>
                            <div className="blueprint-stat">
                                <span className="stat-label">STUDY INTENSITY</span>
                                <span className="stat-value">4 Hours / Day</span>
                            </div>
                            <div className="blueprint-stat">
                                <span className="stat-label">DIFFICULTY LEVEL</span>
                                <div className="difficulty-badge">
                                    <div className="difficulty-bar"></div>
                                    <span>Advanced</span>
                                </div>
                            </div>
                        </div>

                        <div className="ai-prediction-box">
                            <div className="info-icon">i</div>
                            <p>
                                "Our AI predicts a <strong>15% increase in retention</strong> based on your selected daily schedule. Focus on Biochemistry in week 1."
                            </p>
                        </div>
                    </div>

                    <div className="launch-actions">
                        <button className="build-plan-btn" onClick={() => console.log('Launch!')}>
                            <div className="btn-content">
                                <span>Build My Plan & Start Learning</span>
                                <Rocket size={20} />
                            </div>
                        </button>
                        <button className="edit-details-btn">
                            Edit Details
                        </button>
                    </div>
                </div>
            </main>

            <footer className="launchpad-footer">
                <p>Step 5 of 5 • You're almost there. Joining 12,000+ students this month.</p>
            </footer>
        </div>
    );
};

export default OnboardingLaunchpad;
