import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { MoveLeft, ArrowRight, Clock, Coffee, Zap, BookOpen, Lightbulb } from 'lucide-react';
import { UpRankLogo } from './Navbar';
import './OnboardingDailyRhythm.css';

const OnboardingDailyRhythm = () => {
    const navigate = useNavigate();
    const [studyHours, setStudyHours] = useState(6.0);
    const [displayHours, setDisplayHours] = useState(0);

    // Animation for the center number
    useEffect(() => {
        const duration = 400;
        const start = displayHours;
        const end = studyHours;
        const startTime = performance.now();

        const animate = (currentTime) => {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const ease = 1 - Math.pow(1 - progress, 3); // Cubic ease out

            const current = start + (end - start) * ease;
            setDisplayHours(current);

            if (progress < 1) {
                requestAnimationFrame(animate);
            }
        };
        requestAnimationFrame(animate);
    }, [studyHours]);

    const handleSliderChange = (e) => {
        setStudyHours(parseFloat(e.target.value));
    };

    // Gauge Logic
    const minHours = 1;
    const maxHours = 12;
    // Normalize percentage 0 to 1
    const percentage = (studyHours - minHours) / (maxHours - minHours);

    // SVG Arc geometry
    // We want a semi-circle (180 degrees).
    // Radius = 120. Circumference (half) = PI * R = 377 approx.
    const radius = 120;
    const arcLength = Math.PI * radius;
    const dashOffset = arcLength * (1 - percentage);

    return (
        <div className="rhythm-container">
            {/* Header */}
            <header className="rhythm-header">
                <div className="header-brand">
                    <UpRankLogo />
                    <span className="brand-name">UpRank AI</span>
                </div>
                <div className="header-progress">
                    <div className="step-info">
                        <span className="step-label">ONBOARDING</span>
                        <span className="step-count">Step 3 of 5</span>
                    </div>
                    <div className="step-bar">
                        <div className="step-fill" style={{ width: '60%' }}></div>
                    </div>
                    <div className="user-avatar"></div>
                </div>
            </header>

            {/* Main Content */}
            <main className="rhythm-main">
                <div className="text-section">
                    <h1>What's your daily rhythm?</h1>
                    <p>Set your study goal. We'll tailor your prep schedule to match your pace.</p>
                </div>

                <div className="interactive-section">
                    {/* Background Floating Icons */}
                    <div className="float-icon coffee-icon"><Coffee size={32} /></div>
                    <div className="float-icon bulb-icon"><Lightbulb size={32} /></div>
                    <div className="float-icon book-icon"><BookOpen size={32} /></div>

                    {/* Gauge */}
                    <div className="gauge-wrapper">
                        <svg className="gauge-svg" viewBox="0 0 300 160">
                            <defs>
                                <linearGradient id="arc-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                                    <stop offset="0%" stopColor="#6366f1" />
                                    <stop offset="100%" stopColor="#a855f7" />
                                </linearGradient>
                            </defs>

                            {/* Track Background */}
                            <path
                                d="M 30 150 A 120 120 0 0 1 270 150"
                                className="gauge-track-bg"
                            />

                            {/* Active Arc */}
                            <path
                                d="M 30 150 A 120 120 0 0 1 270 150"
                                className="gauge-track-active"
                                strokeDasharray={arcLength}
                                strokeDashoffset={dashOffset}
                                stroke="url(#arc-gradient)"
                            />
                        </svg>

                        {/* Knob Wrapper - Rotates from center bottom */}
                        <div
                            className="knob-container"
                            style={{ transform: `rotate(${-90 + (percentage * 180)}deg)` }}
                        >
                            <div className="knob"></div>
                        </div>

                        {/* Center Info */}
                        <div className="gauge-center-info">
                            <span className="info-number">{displayHours.toFixed(0)}</span>
                            <span className="info-label">HOURS / DAY</span>
                        </div>
                    </div>

                    {/* Status Labels */}
                    <div className="status-labels">
                        <span className="label-side">STEADY</span>
                        <div className="label-center">
                            <span className="status-title">
                                {studyHours < 4 ? 'LIGHT PACE' : studyHours < 9 ? 'FOCUSED INTENSITY' : 'MAXIMUM EFFORT'}
                            </span>
                            <span className="status-desc">
                                {studyHours < 4 ? 'A simplified schedule for busy days.' : studyHours < 9 ? 'A balanced, focused approach.' : 'High intensity for rapid results.'}
                            </span>
                        </div>
                        <span className="label-side">MAXIMUM</span>
                    </div>

                    {/* Slider Control */}
                    <div className="slider-container">
                        <div className="slider-shell">
                            <div className="slider-icon"><Clock size={18} /></div>
                            <input
                                type="range"
                                min={minHours}
                                max={maxHours}
                                step="0.5"
                                value={studyHours}
                                onChange={handleSliderChange}
                                className="rhythm-slider"
                                style={{
                                    backgroundSize: `${percentage * 100}% 100%`
                                }}
                            />
                            <div className="slider-value">{studyHours} hrs</div>
                        </div>
                    </div>
                </div>
            </main>

            {/* Footer */}
            <footer className="rhythm-footer">
                <button className="back-btn" onClick={() => navigate('/onboarding/timeline')}>
                    <MoveLeft size={18} /> Back
                </button>
                <div className="footer-next-group">
                    <div className="next-info">
                        <span className="next-label">NEXT UP</span>
                        <span className="next-name">Strength Assessment</span>
                    </div>
                    <button className="continue-btn" onClick={() => navigate('/onboarding/pulse')}>
                        Continue <ArrowRight size={20} />
                    </button>
                </div>
            </footer>
        </div>
    );
};

export default OnboardingDailyRhythm;
