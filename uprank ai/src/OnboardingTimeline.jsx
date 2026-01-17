import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronLeft, ChevronRight, ArrowRight, Sparkles, MoveLeft, Sun, Moon, Edit2 } from 'lucide-react';
import { UpRankLogo } from './Navbar';
import './OnboardingTimeline.css';

const OnboardingTimeline = () => {
    const navigate = useNavigate();
    const [selectedDate, setSelectedDate] = useState(15);
    const [currentMonth, setCurrentMonth] = useState(new Date(2026, 8)); // Start at Sept 2026
    const [isEditing, setIsEditing] = useState(false);
    const [theme, setTheme] = useState(() => localStorage.getItem('theme') || 'dark');
    const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

    useEffect(() => {
        const calculateTimeLeft = () => {
            // Target based on current calendar month and selected day
            const targetDate = new Date(currentMonth.getFullYear(), currentMonth.getMonth(), selectedDate);
            const now = new Date();
            const difference = targetDate - now;

            if (difference > 0) {
                const days = Math.floor(difference / (1000 * 60 * 60 * 24));
                const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
                const minutes = Math.floor((difference / 1000 / 60) % 60);
                const seconds = Math.floor((difference / 1000) % 60);
                setTimeLeft({ days, hours, minutes, seconds });
            } else {
                setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
            }
        };

        calculateTimeLeft();
        const timer = setInterval(calculateTimeLeft, 1000); // Update every second

        return () => clearInterval(timer);
    }, [selectedDate, currentMonth]);

    useEffect(() => {
        document.documentElement.setAttribute('data-theme', theme);
        localStorage.setItem('theme', theme);
    }, [theme]);

    const toggleTheme = () => {
        setTheme(prevTheme => prevTheme === 'dark' ? 'light' : 'dark');
    };

    // Calendar Logic
    const weekDays = ['SU', 'MO', 'TU', 'WE', 'TH', 'FR', 'SA'];

    const getDaysInMonth = (date) => {
        return new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
    };

    const getFirstDayOfMonth = (date) => {
        return new Date(date.getFullYear(), date.getMonth(), 1).getDay();
    };

    const handlePrevMonth = () => {
        setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1));
        setSelectedDate(1); // Reset select to 1st or keep logic specific
    };

    const handleNextMonth = () => {
        setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1));
        setSelectedDate(1);
    };

    const daysInMonth = getDaysInMonth(currentMonth);
    const firstDay = getFirstDayOfMonth(currentMonth);
    const days = Array.from({ length: daysInMonth }, (_, i) => i + 1);
    const blanks = Array.from({ length: firstDay }, (_, i) => i);

    const handleDateSelect = (day) => {
        setSelectedDate(day);
    };

    const handleManualDateChange = (e) => {
        const dateVal = new Date(e.target.value);
        if (!isNaN(dateVal.getTime())) {
            setCurrentMonth(new Date(dateVal.getFullYear(), dateVal.getMonth(), 1));
            setSelectedDate(dateVal.getDate());
            setIsEditing(false);
        }
    };

    const monthNames = ["January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];

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
                                <span className="time-val">{timeLeft.days}</span>
                            </div>
                            <span className="time-label">Days</span>
                        </div>
                        <div className="timer-group">
                            <div className="time-box">
                                <span className="time-val">{timeLeft.hours}</span>
                            </div>
                            <span className="time-label">Hours</span>
                        </div>
                        <div className="timer-group">
                            <div className="time-box">
                                <span className="time-val">{timeLeft.minutes}</span>
                            </div>
                            <span className="time-label">Mins</span>
                        </div>
                        <div className="timer-group">
                            <div className="time-box">
                                <span className="time-val">{timeLeft.seconds}</span>
                            </div>
                            <span className="time-label">Secs</span>
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
                <div style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: '1rem' }}>
                    <button onClick={toggleTheme} className="theme-toggle-btn" style={{
                        background: 'none', border: 'none', cursor: 'pointer', color: 'var(--text-muted)', display: 'flex', alignItems: 'center'
                    }}>
                        {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
                    </button>
                </div>
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
                            {isEditing ? (
                                <input
                                    type="date"
                                    className="manual-date-input"
                                    autoFocus
                                    onChange={handleManualDateChange}
                                    onBlur={() => setIsEditing(false)}
                                    // Default to current selection for better UX
                                    value={`${currentMonth.getFullYear()}-${String(currentMonth.getMonth() + 1).padStart(2, '0')}-${String(selectedDate).padStart(2, '0')}`}
                                />
                            ) : (
                                <>
                                    <button className="cal-nav-btn" onClick={handlePrevMonth}><ChevronLeft size={20} /></button>
                                    <div className="current-month-wrapper" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                                        <span className="current-month">{monthNames[currentMonth.getMonth()]} {currentMonth.getFullYear()}</span>
                                        <button
                                            className="edit-date-btn"
                                            onClick={() => setIsEditing(true)}
                                            style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'var(--text-muted)', padding: '4px' }}
                                        >
                                            <Edit2 size={14} />
                                        </button>
                                    </div>
                                    <button className="cal-nav-btn" onClick={handleNextMonth}><ChevronRight size={20} /></button>
                                </>
                            )}
                        </div>

                        <div className="calendar-grid">
                            {weekDays.map(day => (
                                <div key={day} className="calendar-day-label">{day}</div>
                            ))}
                            {/* Empty cells for padding start of month */}
                            {blanks.map((_, i) => (
                                <div key={`blank-${i}`} className="calendar-date empty"></div>
                            ))}

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
                            <p>Based on your goal, you have <strong>{timeLeft.days} days</strong> to prepare. This is enough time for 3 full review cycles and 15 mock exams.</p>
                        </div>
                    </div>

                    <div className="navigation-footer">
                        <button className="back-link" onClick={() => navigate('/onboarding/path')}>
                            <MoveLeft size={16} /> Back
                        </button>
                        <button className="next-btn" onClick={() => {
                            const target = new Date(currentMonth.getFullYear(), currentMonth.getMonth(), selectedDate);
                            localStorage.setItem('targetExamDate', target.toISOString());
                            navigate('/onboarding/rhythm');
                        }}>
                            Next: Create Study Plan <ArrowRight size={20} />
                        </button>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default OnboardingTimeline;
