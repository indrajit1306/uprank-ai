import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
    LayoutDashboard,
    BookOpen,
    ClipboardList,
    BarChart2,
    Users,
    Settings,
    LogOut,
    Flame,
    Sparkles,
    ArrowRight,
    Play,
    CheckCircle2,
    Clock,
    Target,
    Zap,
    ChevronDown,
    AlertTriangle
} from 'lucide-react';
import { UpRankLogo } from './Navbar';
import './StudentDashboard.css';

const StudentDashboard = () => {
    const [theme, setTheme] = useState(() => localStorage.getItem('theme') || 'dark');

    // Ensure theme is applied
    useEffect(() => {
        document.documentElement.setAttribute('data-theme', theme);
    }, [theme]);

    return (
        <div className="dashboard-container">
            {/* Sidebar */}
            <aside className="dashboard-sidebar">
                <div className="sidebar-brand">
                    <div className="brand-logo-small">
                        <UpRankLogo />
                    </div>
                    <span className="brand-name">UpRank AI</span>
                </div>

                <nav className="sidebar-nav">
                    <a href="#" className="nav-item active">
                        <LayoutDashboard size={20} />
                        <span>Dashboard</span>
                    </a>
                    <Link to="/smart-study-plan" className="nav-item">
                        <BookOpen size={20} />
                        <span>Study Plan</span>
                    </Link>
                    <Link to="/mock-test" className="nav-item">
                        <ClipboardList size={20} />
                        <span>Mock Tests</span>
                    </Link>
                    <a href="#" className="nav-item">
                        <BarChart2 size={20} />
                        <span>Analytics</span>
                    </a>
                    <a href="#" className="nav-item">
                        <Users size={20} />
                        <span>Community</span>
                    </a>
                </nav>

                <div className="sidebar-footer">
                    <a href="#" className="nav-item">
                        <Settings size={20} />
                        <span>Settings</span>
                    </a>
                    <div className="user-profile-mini">
                        <div className="user-avatar-circle">
                            <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah" alt="Sarah" />
                        </div>
                        <div className="user-info-mini">
                            <span className="user-name">Sarah Jenkins</span>
                            <span className="user-role">Pro Student</span>
                        </div>
                    </div>
                </div>
            </aside>

            {/* Main Content Area */}
            <main className="dashboard-main">
                {/* Top Header Row */}
                <header className="main-header">
                    <div className="header-greeting">
                        <h1>Good morning, Sarah!</h1>
                        <p>Here is your AI-powered briefing for today.</p>
                    </div>
                    <div className="streak-badge">
                        <Flame size={18} fill="#f97316" color="#f97316" />
                        <span>5 Day Streak</span>
                    </div>
                </header>

                <div className="dashboard-grid">
                    {/* Left Column (Wide) */}
                    <div className="content-column-left">
                        {/* Hero Card */}
                        <div className="hero-insight-card">
                            <div className="hero-content">
                                <div className="ai-badge">
                                    <Sparkles size={14} /> AI INSIGHT
                                </div>
                                <h2>Focus on Calculus today to boost your math score by 5%.</h2>
                                <p>Based on your last mock test performance in Derivatives, spending 45 minutes on this topic yields the highest ROI for your total score.</p>
                                <button className="start-practice-btn">
                                    Start Practice <ArrowRight size={18} />
                                </button>
                            </div>
                            <div className="hero-visual">
                                {/* Abstract waves handled by CSS */}
                            </div>
                        </div>

                        {/* Quick Actions */}
                        <div className="quick-actions-row">
                            <div className="action-card fire">
                                <div className="action-icon-box orange">
                                    <Zap size={24} color="#f97316" />
                                </div>
                                <div className="action-details">
                                    <h3>Rapid Fire</h3>
                                    <span>15 questions • 10 mins</span>
                                </div>
                                <button className="play-btn"><Play size={20} fill="currentColor" /></button>
                            </div>
                            <Link to="/mock-test" className="action-card mock" style={{ textDecoration: 'none', color: 'inherit' }}>
                                <div className="action-icon-box blue">
                                    <ClipboardList size={24} color="#3b82f6" />
                                </div>
                                <div className="action-details">
                                    <h3>Full Mock Test</h3>
                                    <span>Subject Wise • 60 mins</span>
                                </div>
                                <div className="play-btn">
                                    <Play size={20} fill="currentColor" />
                                </div>
                            </Link>
                        </div>

                        {/* Daily Plan */}
                        <div className="daily-plan-section">
                            <div className="section-header">
                                <h3><Target size={20} className="text-purple" /> Your Daily Plan</h3>
                                <span className="task-count">3 of 5 tasks completed</span>
                            </div>

                            <div className="task-list">
                                <div className="task-item completed">
                                    <div className="task-checkbox checked">
                                        <CheckCircle2 size={18} />
                                    </div>
                                    <div className="task-content">
                                        <div className="task-title strike">Review Physics Chapter 4 - Thermodynamics</div>
                                        <div className="task-time">Completed at 10:30 AM</div>
                                    </div>
                                </div>

                                <div className="task-item active">
                                    <div className="task-checkbox"></div>
                                    <div className="task-content">
                                        <div className="task-row-top">
                                            <span className="task-title">Practice Quiz (20 questions) - Mechanics</span>
                                            <span className="badge-progress">IN PROGRESS</span>
                                        </div>
                                        <div className="task-time active-text">Est. 25 mins remaining</div>
                                    </div>
                                </div>

                                <div className="task-item">
                                    <div className="task-checkbox"></div>
                                    <div className="task-content">
                                        <div className="task-title">Watch Solution Video for Mock Test #3</div>
                                        <div className="task-time">Scheduled for 02:00 PM</div>
                                    </div>
                                </div>

                                <div className="task-item">
                                    <div className="task-checkbox"></div>
                                    <div className="task-content">
                                        <div className="task-title">Review flashcards: Organic Chemistry</div>
                                        <div className="task-time">Optional • 15 mins</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Column (Narrow) */}
                    <div className="content-column-right">
                        {/* Stats Row */}
                        <div className="stats-mini-row">
                            <div className="stat-card">
                                <div className="stat-label">
                                    <CheckCircle2 size={14} /> ACCURACY
                                </div>
                                <div className="stat-value-group">
                                    <span className="stat-val">78%</span>
                                    <span className="stat-delta pos">▲ 2%</span>
                                </div>
                            </div>
                            <div className="stat-card">
                                <div className="stat-label">
                                    <Clock size={14} /> HOURS
                                </div>
                                <div className="stat-value-group">
                                    <span className="stat-val">4.5h</span>
                                    <span className="stat-sub">Today</span>
                                </div>
                            </div>
                        </div>

                        {/* Score Trend */}
                        <div className="widget-card">
                            <div className="widget-header">
                                <h3>Score Trend</h3>
                                <div className="dropdown-trigger">
                                    Last 30 Days <ChevronDown size={14} />
                                </div>
                            </div>
                            <div className="chart-area">
                                {/* Simple CSS Bar Chart Simulation */}
                                <div className="bar-group">
                                    <div className="bar" style={{ height: '40%' }}></div>
                                    <span className="bar-label">WK 1</span>
                                </div>
                                <div className="bar-group">
                                    <div className="bar" style={{ height: '55%' }}></div>
                                    <span className="bar-label">WK 2</span>
                                </div>
                                <div className="bar-group">
                                    <div className="bar" style={{ height: '45%' }}></div>
                                    <span className="bar-label">WK 3</span>
                                </div>
                                <div className="bar-group active">
                                    <div className="bar-tooltip">85%</div>
                                    <div className="bar" style={{ height: '85%', background: '#8b5cf6' }}></div>
                                    <span className="bar-label">WK 4</span>
                                </div>
                            </div>
                        </div>

                        {/* Topics to Improve */}
                        <div className="widget-card">
                            <div className="widget-header">
                                <h3><AlertTriangle size={18} color="#ef4444" /> Topics to Improve</h3>
                            </div>
                            <div className="topics-list">
                                <div className="topic-item">
                                    <div className="topic-header">
                                        <span>Organic Chemistry</span>
                                        <span className="topic-severity low">Low</span>
                                    </div>
                                    <div className="topic-bar-bg">
                                        <div className="topic-bar-fill red" style={{ width: '30%' }}></div>
                                    </div>
                                </div>
                                <div className="topic-item">
                                    <div className="topic-header">
                                        <span>Trigonometry</span>
                                        <span className="topic-severity med">Med</span>
                                    </div>
                                    <div className="topic-bar-bg">
                                        <div className="topic-bar-fill yellow" style={{ width: '60%' }}></div>
                                    </div>
                                </div>
                                <div className="topic-item">
                                    <div className="topic-header">
                                        <span>Fluid Mechanics</span>
                                        <span className="topic-severity med">Med</span>
                                    </div>
                                    <div className="topic-bar-bg">
                                        <div className="topic-bar-fill yellow" style={{ width: '55%' }}></div>
                                    </div>
                                </div>
                            </div>
                            <button className="view-deep-analysis-btn">
                                View Deep Analysis
                            </button>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default StudentDashboard;
