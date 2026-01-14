import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronLeft, ChevronRight, ArrowRight, Sparkles, MoveLeft } from 'lucide-react';
import { UpRankLogo } from './Navbar';
import './OnboardingTimeline.css';

const OnboardingTimeline = () => {
    const navigate = useNavigate();
    const [selectedDate, setSelectedDate] = useState(15);

    // Mock calendar days for September 2024
    const days = Array.from({ length: 30 }, (_, i) => i + 1);
    const weekDays = ['SU', 'MO', 'TU', 'WE', 'TH', 'FR', 'SA'];
    // Starting blank spaces for Sept 2024 (starts on Sunday in this mock or purely visual)
    const blanks = Array.from({ length: 0 }, (_, i) => i);

    const handleDateSelect = (day) => {
        setSelectedDate(day);
    };

    return (
        <div className="timeline-container">
            {/* Left Sidebar */}
            <aside className="timeline-sidebar">
                <div className="sidebar-logo">
                    <UpRankLogo />
                    <span style={{ marginLeft: '10px' }}>UpRank AI</span>
                </div>

                <div className="sidebar-content">
                    <p className="sidebar-subtitle">Eyes on the prize</p>
                    <h1 className="sidebar-title">Countdown to Success</h1>

                    <div className="countdown-timer">
                        <div className="timer-group">
                            <div className="time-box">
                                <span className="time-val">184</span>
                            </div>
                            <span className="time-label">Days</span>
                        </div>
                        <div className="timer-group">
                            <div className="time-box">
                                <span className="time-val">00</span>
                            </div>
                            <span className="time-label">Hours</span>
                        </div>
                        <div className="timer-group">
                            <div className="time-box">
                                <span className="time-val">00</span>
                            </div>
                            <span className="time-label">Mins</span>
                        </div>
                    </div>

                    <div className="quote-box">
                        "The secret of getting ahead is getting started."
                    </div>
                </div>

                {/* Decorative circle */}
                <div className="sidebar-circle"></div>
            </aside>

            {/* Right Content */}
            <main className="timeline-main">
                <div className="top-progress-bar">
                    <div className="progress-info">
                        <span className="step-text">ONBOARDING STEP 2 OF 5</span>
                        <span className="percent-text">40% Complete</span>
                    </div>
                    <div className="progress-track">
                        <div className="progress-fill" style={{ width: '40%' }}></div>
                    </div>
                </div>

                <div className="main-content-wrapper">
                    <div className="header-section">
                        <h2>When is the big day?</h2>
                        <p>Select your target exam date to tailor your personalized study schedule and milestones.</p>
                    </div>

                    <div className="calendar-card">
                        <div className="calendar-header">
                            <button className="cal-nav-btn"><ChevronLeft size={20} /></button>
                            <span className="current-month">September 2024</span>
                            <button className="cal-nav-btn"><ChevronRight size={20} /></button>
                        </div>

                        <div className="calendar-grid">
                            {weekDays.map(day => (
                                <div key={day} className="calendar-day-label">{day}</div>
                            ))}
                            {/* Previous month grey days mock */}
                            <div className="calendar-date prev-month">25</div>
                            <div className="calendar-date prev-month">26</div>
                            <div className="calendar-date prev-month">27</div>
                            <div className="calendar-date prev-month">28</div>
                            <div className="calendar-date prev-month">29</div>
                            <div className="calendar-date prev-month">30</div>
                            <div className="calendar-date prev-month">31</div>

                            {days.map(day => (
                                <div
                                    key={day}
                                    className={`calendar-date ${selectedDate === day ? 'selected' : ''}`}
                                    onClick={() => handleDateSelect(day)}
                                >
                                    {day}
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="ai-insight-box">
                        <div className="insight-icon">
                            <Sparkles size={20} />
                        </div>
                        <div className="insight-text">
                            <h4>AI Insight</h4>
                            <p>Based on your goal, you have <strong>184 days</strong> to prepare. This is enough time for 3 full review cycles and 15 mock exams.</p>
                        </div>
                    </div>

                    <div className="navigation-footer">
                        <button className="back-link" onClick={() => navigate('/onboarding/path')}>
                            <MoveLeft size={16} /> Back
                        </button>
                        <button className="next-btn">
                            Next: Create Study Plan <ArrowRight size={20} />
                        </button>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default OnboardingTimeline;
