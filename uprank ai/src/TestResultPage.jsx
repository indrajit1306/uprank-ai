import React from 'react';
import {
    LayoutDashboard,
    BookOpen,
    BarChart2,
    FileText,
    User,
    Clock,
    Eye,
    RotateCcw,
    Sparkles,
    Settings,
    Trophy,
    Target,
    Crosshair,
    Users,
    CheckCircle2,
    XCircle,
    MinusCircle,
    ChevronRight,
    Search
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { UpRankLogo } from './Navbar';
import './TestResultPage.css';

const TestResultPage = () => {
    return (
        <div className="result-page-container">
            {/* Navbar */}
            <nav className="result-navbar">
                <div className="nav-brand">
                    <div className="brand-logo-small">
                        <UpRankLogo />
                    </div>
                    <span>UpRank AI</span>
                </div>
                <div className="nav-links">
                    <Link to="/dashboard">Dashboard</Link>
                    <a href="#">Exams</a>
                    <a href="#">Analytics</a>
                    <a href="#">Study Material</a>
                </div>
                <div className="nav-profile-actions">
                    <button className="my-profile-btn">My Profile</button>
                    <div className="user-avatar-small">
                        <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah" alt="User" />
                    </div>
                </div>
            </nav>

            <div className="result-content-width">
                {/* Header Section */}
                <div className="result-header-card">
                    <div className="header-info">
                        <div className="status-row">
                            <span className="status-badge completed">COMPLETED</span>
                            <span className="date-text">Oct 24, 2026</span>
                        </div>
                        <h1>Mock Test 5: Advanced Mathematics</h1>
                        <div className="meta-info">
                            <Clock size={16} /> 2 hours 15 mins
                        </div>
                    </div>
                    <div className="header-actions">
                        <button className="btn-outline-dark">
                            <Eye size={18} /> View Solutions
                        </button>
                        <button className="btn-primary-purple">
                            <RotateCcw size={18} /> Retake Test
                        </button>
                    </div>
                </div>

                {/* AI Insight */}
                <div className="ai-insight-banner">
                    <div className="ai-icon-box">
                        <Sparkles size={24} color="#dbb4fe" />
                    </div>
                    <div className="ai-text">
                        <h3>AI Performance Insight</h3>
                        <p>Great job on Algebra! However, your accuracy in <span className="highlight-purple">Geometry</span> dropped to 40%. Consider reviewing "Circle Theorems" before your next attempt.</p>
                    </div>
                    <div className="ai-action">
                        <span>View Full Analysis</span>
                        <Settings size={60} className="bg-icon" />
                    </div>
                </div>

                {/* Stats Grid */}
                <div className="stats-grid-row">
                    <div className="stat-box">
                        <div className="stat-label">TOTAL SCORE</div>
                        <div className="stat-value">
                            <span className="big">145</span>
                            <span className="total">/ 200</span>
                        </div>
                        <div className="stat-trend pos">
                            <TrendingUpArrow /> +12% <span>from last test</span>
                        </div>
                        <Trophy className="stat-bg-icon" />
                    </div>

                    <div className="stat-box">
                        <div className="stat-label">PREDICTED RANK</div>
                        <div className="stat-value">
                            <span className="big">Top 5%</span>
                        </div>
                        <div className="stat-trend neutral">
                            Based on current percentile
                        </div>
                        <BarChart2 className="stat-bg-icon" />
                    </div>

                    <div className="stat-box">
                        <div className="stat-label">ACCURACY</div>
                        <div className="stat-value">
                            <span className="big">85%</span>
                        </div>
                        <div className="progress-bar-sm">
                            <div className="fill-purple" style={{ width: '85%' }}></div>
                        </div>
                        <div className="stat-trend neutral">
                            45 Correct • 8 Incorrect
                        </div>
                        <Crosshair className="stat-bg-icon" />
                    </div>

                    <div className="stat-box">
                        <div className="stat-label">PERCENTILE</div>
                        <div className="stat-value">
                            <span className="big">94.2%</span>
                        </div>
                        <div className="stat-trend pos">
                            <TrendingUpArrow /> +2.1% <span>improvement</span>
                        </div>
                        <Users className="stat-bg-icon" />
                    </div>
                </div>

                {/* Charts Area */}
                <div className="charts-grid-row">
                    {/* Time Management */}
                    <div className="chart-card time-mgmt">
                        <div className="card-header">
                            <div>
                                <h3>Time Management</h3>
                                <p>Your pace vs. Topper's average</p>
                            </div>
                            <span className="badge-green"><CheckCircle2 size={14} /> Good Pace</span>
                        </div>
                        <div className="bar-chart-visual">
                            {/* Visual representation of the dual bar chart */}
                            <div className="chart-bars-container">
                                <DualBar qRange="Q1-10" h1="60%" h2="50%" />
                                <DualBar qRange="Q11-20" h1="80%" h2="40%" />
                                <DualBar qRange="Q21-30" h1="45%" h2="55%" />
                                <DualBar qRange="Q31-40" h1="65%" h2="60%" />
                            </div>
                            <div className="chart-legend">
                                <span className="legend-item"><span className="dot purple"></span> Your Time</span>
                                <span className="legend-item"><span className="dot grey"></span> Topper's Time</span>
                            </div>
                        </div>
                    </div>

                    {/* Breakdown & Recommendations */}
                    <div className="chart-card breakdown-col">
                        <div className="breakdown-section">
                            <h3>Subject Breakdown</h3>
                            <div className="subject-list">
                                <SubjectBar name="Algebra" percent={92} color="#6366f1" />
                                <SubjectBar name="Geometry" percent={40} color="#ef4444" />
                                <SubjectBar name="Calculus" percent={65} color="#f59e0b" />
                            </div>
                        </div>
                        <div className="recommendations-section">
                            <h3>RECOMMENDATIONS</h3>
                            <div className="rec-item">
                                <div className="bulb-icon">💡</div>
                                <p>Review <b>Circle Theorems</b> cheat sheet.</p>
                            </div>
                            <div className="rec-item">
                                <div className="bulb-icon">💡</div>
                                <p>Practice 5 sets of <b>Integration by Parts</b>.</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Detailed Analysis Table */}
                <div className="detailed-table-card">
                    <div className="table-header">
                        <h3>Detailed Question Analysis</h3>
                        <div className="table-filters">
                            <button className="filter-btn active">All</button>
                            <button className="filter-btn">Incorrect</button>
                            <button className="filter-btn">Unattempted</button>
                        </div>
                    </div>
                    <div className="table-responsive">
                        <table>
                            <thead>
                                <tr>
                                    <th>Q.NO</th>
                                    <th>SUBJECT</th>
                                    <th>TOPIC</th>
                                    <th>RESULT</th>
                                    <th>TIME SPENT</th>
                                    <th>ACTION</th>
                                </tr>
                            </thead>
                            <tbody>
                                <TableRow q="01" sub="Math" topic="Linear Equations" res="Correct" time="1m 12s" />
                                <TableRow q="02" sub="Math" topic="Geometry" res="Incorrect" time="3m 45s" slow={true} />
                                <TableRow q="03" sub="Logic" topic="Syllogism" res="Unattempted" time="0m 00s" />
                                <TableRow q="04" sub="Math" topic="Calculus" res="Correct" time="2m 10s" />
                            </tbody>
                        </table>
                    </div>
                    <div className="view-all-link">
                        View All 40 Questions
                    </div>
                </div>
            </div>
        </div>
    );
};

// Helper Components
const TrendingUpArrow = () => (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline>
        <polyline points="17 6 23 6 23 12"></polyline>
    </svg>
);

const DualBar = ({ qRange, h1, h2 }) => (
    <div className="dual-bar-group">
        <div className="bars-pair">
            <div className="bar-v b-purple" style={{ height: h1 }}></div>
            <div className="bar-v b-grey" style={{ height: h2 }}></div>
        </div>
        <span className="bar-label">{qRange}</span>
    </div>
);

const SubjectBar = ({ name, percent, color }) => (
    <div className="subject-bar-item">
        <div className="sb-header">
            <span className="sb-name">
                <span className="dot" style={{ background: color }}></span> {name}
            </span>
            <span className="sb-val" style={{ color: color }}>{percent}%</span>
        </div>
        <div className="sb-track">
            <div className="sb-fill" style={{ width: `${percent}%`, background: color }}></div>
        </div>
    </div>
);

const TableRow = ({ q, sub, topic, res, time, slow }) => {
    const getBadgeClass = (status) => {
        if (status === 'Correct') return 'badge-correct';
        if (status === 'Incorrect') return 'badge-incorrect';
        return 'badge-unattempted';
    };

    // Status Icon
    const getIcon = (status) => {
        if (status === 'Correct') return <span className="status-dot green">●</span>;
        if (status === 'Incorrect') return <span className="status-dot red">●</span>;
        return <span className="status-dot grey">●</span>;
    };

    return (
        <tr>
            <td className="fw-bold">{q}</td>
            <td className="text-muted">{sub}</td>
            <td className="fw-semi">{topic}</td>
            <td>
                <span className={`res-badge ${getBadgeClass(res)}`}>
                    {getIcon(res)} {res}
                </span>
            </td>
            <td className="text-time">
                {time} {slow && <span className="tag-slow">(Slow)</span>}
            </td>
            <td>
                <button className="btn-text-blue">View</button>
            </td>
        </tr>
    );
};

export default TestResultPage;
