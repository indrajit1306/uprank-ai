import React, { useState, useEffect } from 'react';
import {
    LayoutDashboard,
    BookOpen,
    ClipboardList,
    BarChart2,
    Users,
    Settings,
    Bell,
    HelpCircle,
    CheckCircle2,
    FileText,
    TrendingUp,
    Search,
    ChevronLeft,
    ChevronRight,
    Flame,
    MoreHorizontal
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { UpRankLogo } from './Navbar';
import './StudentDashboard.css'; // Import dashboard styles correctly
import './SmartStudyPlan.css';

const SmartStudyPlan = () => {
    return (
        <div className="dashboard-container">
            {/* Sidebar - Reused from StudentDashboard */}
            <aside className="dashboard-sidebar">
                <div className="sidebar-brand">
                    <div className="brand-logo-small">
                        <UpRankLogo />
                    </div>
                    <span className="brand-name">UpRank AI</span>
                </div>

                <nav className="sidebar-nav">
                    <Link to="/dashboard" className="nav-item">
                        <LayoutDashboard size={20} />
                        <span>Dashboard</span>
                    </Link>
                    <Link to="/smart-study-plan" className="nav-item active">
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

            {/* Smart Plan Main Content */}
            <div className="ssp-main-wrapper" style={{ marginLeft: '260px' }}> {/* Adjust margin to match dashboard sidebar width */}
                {/* Top Header */}
                <header className="ssp-topbar">
                    <div className="ssp-search">
                        <Search size={18} />
                        <input type="text" placeholder="Search lessons, topics..." />
                    </div>

                    <div className="ssp-top-actions">
                        <button className="ssp-icon-btn"><Bell size={20} /></button>
                        <button className="ssp-icon-btn"><HelpCircle size={20} /></button>
                        <div className="ssp-profile">
                            <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Felix" alt="User" />
                        </div>
                    </div>
                </header>

                {/* Content Grid */}
                <div className="ssp-content">
                    {/* Center Column */}
                    <div className="ssp-center-col">
                        {/* Plan Health Card */}
                        <div className="ssp-health-card">
                            <div className="ssp-health-info">
                                <div className="ssp-health-status">
                                    <CheckCircle2 fill="#10b981" color="white" size={20} />
                                    <span>Plan Health: On Track</span>
                                </div>
                                <p>You've completed 85% of your weekly goals. Your consistency is paying off—keep this momentum for your upcoming Mock Exam!</p>
                                <button className="ssp-btn-primary">Review Analytics</button>
                            </div>
                            <div className="ssp-health-visual">
                                {/* Abstract 3D Bars CSS representation */}
                                <div className="bar-3d b1"></div>
                                <div className="bar-3d b2"></div>
                                <div className="bar-3d b3"></div>
                                <div className="bar-3d b4"></div>
                                <div className="bar-3d b5"></div>
                            </div>
                        </div>

                        {/* Weekly Overview */}
                        <div className="ssp-week-strip">
                            <div className="ssp-week-header">
                                <h3>Weekly Overview</h3>
                                <div className="ssp-week-nav">
                                    <button><ChevronLeft size={20} /></button>
                                    <button><ChevronRight size={20} /></button>
                                </div>
                            </div>
                            <div className="ssp-days-row">
                                <div className="ssp-day">
                                    <span className="day-name">MON</span>
                                    <span className="day-num">12</span>
                                </div>
                                <div className="ssp-day">
                                    <span className="day-name">TUE</span>
                                    <span className="day-num">13</span>
                                </div>
                                <div className="ssp-day active">
                                    <span className="day-name">WED</span>
                                    <span className="day-num">14</span>
                                    <span className="day-badge">TODAY</span>
                                </div>
                                <div className="ssp-day">
                                    <span className="day-name">THU</span>
                                    <span className="day-num">15</span>
                                </div>
                                <div className="ssp-day">
                                    <span className="day-name">FRI</span>
                                    <span className="day-num">16</span>
                                </div>
                                <div className="ssp-day">
                                    <span className="day-name">SAT</span>
                                    <span className="day-num">17</span>
                                </div>
                                <div className="ssp-day">
                                    <span className="day-name">SUN</span>
                                    <span className="day-num">18</span>
                                </div>
                            </div>
                        </div>

                        {/* Daily Quests */}
                        <div className="ssp-quests-section">
                            <div className="ssp-section-header">
                                <h3>Daily Study Quests</h3>
                                <span className="ssp-pill">3 Tasks Remaining</span>
                            </div>

                            <div className="ssp-quest-card done">
                                <div className="quest-icon-check">
                                    <CheckCircle2 size={24} color="#10b981" />
                                </div>
                                <div className="quest-info">
                                    <h4>Advanced Calculus: Integration Techniques</h4>
                                    <span>Duration: 45 mins • Completed at 10:15 AM</span>
                                </div>
                                <span className="status-badge done">DONE</span>
                            </div>

                            <div className="ssp-quest-card active">
                                <div className="quest-icon">
                                    <BookOpen size={24} color="#7c3aed" />
                                </div>
                                <div className="quest-info">
                                    <h4>Organic Chemistry: Carbonyl Groups & Reactions</h4>
                                    <span className="highlight">Next Up • 60 mins session</span>
                                </div>
                                <button className="ssp-btn-action">Start Lesson</button>
                            </div>

                            <div className="ssp-quest-card later">
                                <div className="quest-icon-grey">
                                    <FileText size={24} color="#94a3b8" />
                                </div>
                                <div className="quest-info">
                                    <h4>Physics: Electromagnetism Revision Quiz</h4>
                                    <span>Schedule: 04:30 PM • 30 mins</span>
                                </div>
                                <span className="status-badge later">LATER</span>
                            </div>
                        </div>
                    </div>

                    {/* Right Column */}
                    <div className="ssp-right-col">
                        {/* Syllabus Completion */}
                        <div className="ssp-widget-card circle-widget">
                            <h3>Syllabus Completion</h3>
                            <div className="circular-chart">
                                <svg viewBox="0 0 36 36" className="circular-chart-svg">
                                    <path className="circle-bg"
                                        d="M18 2.0845
                                        a 15.9155 15.9155 0 0 1 0 31.831
                                        a 15.9155 15.9155 0 0 1 0 -31.831"
                                    />
                                    <path className="circle"
                                        strokeDasharray="72, 100"
                                        d="M18 2.0845
                                        a 15.9155 15.9155 0 0 1 0 31.831
                                        a 15.9155 15.9155 0 0 1 0 -31.831"
                                    />
                                </svg>
                                <div className="circle-text">
                                    <span className="percent">72%</span>
                                    <span className="label">FINISHED</span>
                                </div>
                            </div>
                            <p className="circle-footer">You have covered 144 out of 200 topics. Keep it up!</p>
                        </div>

                        {/* Topic Mastery */}
                        <div className="ssp-widget-card">
                            <div className="widget-header">
                                <h3>Topic Mastery</h3>
                                <MoreHorizontal size={18} color="#aaa" />
                            </div>

                            <div className="mastery-list">
                                <div className="mastery-item">
                                    <div className="m-label"><span>Physics</span> <span>90%</span></div>
                                    <div className="m-track"><div className="m-fill" style={{ width: '90%' }}></div></div>
                                </div>
                                <div className="mastery-item">
                                    <div className="m-label"><span>Chemistry</span> <span>65%</span></div>
                                    <div className="m-track"><div className="m-fill" style={{ width: '65%' }}></div></div>
                                </div>
                                <div className="mastery-item">
                                    <div className="m-label"><span>Mathematics</span> <span>48%</span></div>
                                    <div className="m-track"><div className="m-fill" style={{ width: '48%' }}></div></div>
                                </div>
                                <div className="mastery-item">
                                    <div className="m-label"><span>Biology</span> <span>82%</span></div>
                                    <div className="m-track"><div className="m-fill" style={{ width: '82%' }}></div></div>
                                </div>
                            </div>

                            <button className="view-report-btn">View Full Report</button>
                        </div>

                        {/* Streak */}
                        <div className="ssp-streak-card">
                            <div className="streak-icon-bg">
                                <Flame size={24} fill="white" color="white" />
                            </div>
                            <div className="streak-info">
                                <span className="streak-days">12 DAY STREAK</span>
                                <span className="streak-msg">Unstoppable!</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SmartStudyPlan;
