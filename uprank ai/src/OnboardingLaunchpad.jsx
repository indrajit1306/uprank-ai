import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { CheckCircle2, Rocket, BarChart2, Calendar, Clock, BookOpen, PenTool, LayoutDashboard, Sun, Moon } from 'lucide-react';
import { UpRankLogo } from './Navbar';
import './OnboardingLaunchpad.css';
import rocketImage from './assets/rocket_launch.png';

const OnboardingLaunchpad = () => {
    const navigate = useNavigate();
    const [theme, setTheme] = useState(() => localStorage.getItem('theme') || 'dark');
    const [checklistActive, setChecklistActive] = useState([false, false, false]);
    const [planData, setPlanData] = useState({
        examDate: 'August 24, 2026',
        studyHours: 4,
        difficulty: 'Advanced'
        // Add more mapped data if needed
    });

    useEffect(() => {
        // Hydrate from localStorage
        const storedDate = localStorage.getItem('targetExamDate');
        const storedHours = localStorage.getItem('studyHours');

        let formattedDate = 'August 24, 2026';
        if (storedDate) {
            const dateObj = new Date(storedDate);
            formattedDate = dateObj.toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' });
        }

        const hours = storedHours ? parseFloat(storedHours) : 4;

        // Calculate Difficulty/Level based on Pulse Ratings
        const storedPulse = localStorage.getItem('knowledgePulse');
        let difficulty = 'Intermediate'; // Default

        if (storedPulse) {
            const ratings = JSON.parse(storedPulse);
            const values = Object.values(ratings);
            let score = 0;
            // Map: low=1, mid=2, high=3
            values.forEach(r => {
                if (r === 'low') score += 1;
                else if (r === 'mid') score += 2;
                else if (r === 'high') score += 3;
            });
            const avg = score / values.length;

            if (avg <= 1.6) difficulty = 'Foundational';
            else if (avg <= 2.4) difficulty = 'Intermediate';
            else difficulty = 'Advanced';
        }

        setPlanData({
            examDate: formattedDate,
            studyHours: hours,
            difficulty: difficulty
        });
    }, []);

    useEffect(() => {
        document.documentElement.setAttribute('data-theme', theme);
        localStorage.setItem('theme', theme);
    }, [theme]);

    const toggleTheme = () => {
        setTheme(prevTheme => prevTheme === 'dark' ? 'light' : 'dark');
    };

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
                    <button onClick={toggleTheme} className="icon-btn theme-btn" style={{ marginRight: '1rem' }}>
                        {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
                    </button>
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
                                <span className="stat-value">{planData.examDate}</span>
                            </div>
                            <div className="blueprint-stat">
                                <span className="stat-label">STUDY INTENSITY</span>
                                <span className="stat-value">{planData.studyHours} Hours / Day</span>
                            </div>
                            <div className="blueprint-stat">
                                <span className="stat-label">DIFFICULTY LEVEL</span>
                                <div className="difficulty-badge">
                                    <div className="difficulty-bar"></div>
                                    <span>{planData.difficulty}</span>
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
                        <button className="build-plan-btn" onClick={() => navigate('/plan-generation')}>
                            <div className="btn-content">
                                <span>Build My Plan & Start Learning</span>
                                <Rocket size={20} />
                            </div>
                        </button>
                        <button className="edit-details-btn" onClick={() => navigate('/onboarding/pulse')}>
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
