import React, { useState } from 'react';
import {
    LayoutDashboard,
    BookOpen,
    ClipboardList,
    BarChart2,
    Settings,
    Users,
    TrendingUp,
    Clock,
    Target,
    AlertTriangle,
    Zap,
    Activity,
    ChevronDown,
    Sun,
    Moon
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { UpRankLogo } from './Navbar';
import './StudentDashboard.css'; // Reusing global dashboard styles
import './PerformanceAnalytics.css';

const PerformanceAnalytics = () => {
    const [timeRange, setTimeRange] = useState('Last 7 Days');
    const [theme, setTheme] = useState(() => localStorage.getItem('theme') || 'dark');

    // Theme Effect
    React.useEffect(() => {
        document.documentElement.setAttribute('data-theme', theme);
        localStorage.setItem('theme', theme);
    }, [theme]);

    const toggleTheme = () => {
        setTheme(prevTheme => prevTheme === 'dark' ? 'light' : 'dark');
    };

    return (
        <div className="dashboard-container">
            {/* Sidebar - Consistent with other pages */}
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
                    <Link to="/smart-study-plan" className="nav-item">
                        <BookOpen size={20} />
                        <span>Study Plan</span>
                    </Link>
                    <Link to="/mock-test" className="nav-item">
                        <ClipboardList size={20} />
                        <span>Mock Tests</span>
                    </Link>
                    <Link to="/analytics" className="nav-item active">
                        <BarChart2 size={20} />
                        <span>Analytics</span>
                    </Link>
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
            <main className="analytics-main">
                <header className="analytics-header">
                    <div className="header-text">
                        <h1>Performance Insights</h1>
                        <p>Welcome back, Sarah. Here's your progress overview for this week.</p>
                    </div>

                    <button onClick={toggleTheme} className="theme-toggle-btn" aria-label="Toggle Theme">
                        {theme === 'dark' ? <Sun size={24} color="#fbbf24" /> : <Moon size={24} color="#475569" />}
                    </button>

                </header>

                {/* KPI Cards */}
                <div className="kpi-grid">
                    <div className="kpi-card">
                        <div className="kpi-header">
                            <span className="kpi-label">Overall Accuracy</span>
                            <span className="badge-pos">+1.5%</span>
                        </div>
                        <div className="kpi-value">82%</div>
                        <div className="kpi-progress">
                            <div className="progress-fill" style={{ width: '82%' }}></div>
                        </div>
                    </div>

                    <div className="kpi-card">
                        <div className="kpi-header">
                            <span className="kpi-label">Questions Solved</span>
                            <span className="badge-pos">+125</span>
                        </div>
                        <div className="kpi-value">1,240</div>
                        <div className="kpi-sub">Top 5% of active students</div>
                    </div>

                    <div className="kpi-card">
                        <div className="kpi-header">
                            <span className="kpi-label">Hours Studied</span>
                            <span className="badge-pill">Streak: 12d</span>
                        </div>
                        <div className="kpi-value">48h</div>
                        <div className="kpi-sub">4.2h avg daily</div>
                    </div>

                    <div className="kpi-card">
                        <div className="kpi-header">
                            <span className="kpi-label">Predicted Rank</span>
                            <TrendingUp size={16} className="trend-icon-up" />
                        </div>
                        <div className="kpi-value">Top 15%</div>
                        <div className="kpi-sub">Based on recent mocks</div>
                    </div>
                </div>

                {/* Middle Row: Charts & Weakness */}
                <div className="mid-section-grid">
                    {/* Score Progression Chart */}
                    <div className="chart-container-card">
                        <div className="card-top">
                            <h3>Score Progression</h3>
                            <div className="chart-legend">
                                <span className="legend-dot user"></span> You
                                <span className="legend-dot top10"></span> Top 10%
                            </div>
                        </div>
                        <p className="sub-header-text">Last 30 Days vs Top 10% Students</p>

                        <div className="chart-visual-area">
                            {/* Simulated SVG Line Chart */}
                            <svg viewBox="0 0 600 200" className="line-chart-svg">
                                {/* Grid Lines */}
                                <line x1="0" y1="50" x2="600" y2="50" stroke="#2e2b52" strokeWidth="1" />
                                <line x1="0" y1="100" x2="600" y2="100" stroke="#2e2b52" strokeWidth="1" />
                                <line x1="0" y1="150" x2="600" y2="150" stroke="#2e2b52" strokeWidth="1" />

                                {/* Dashed Line (Top 10%) */}
                                <path d="M0,150 Q150,130 300,100 T600,80" fill="none" stroke="#4b5563" strokeWidth="2" strokeDasharray="5,5" />

                                {/* Solid Line (User) - Smooth Curve */}
                                <path d="M0,180 Q100,160 200,130 T400,160 T550,60" fill="none" stroke="#6366f1" strokeWidth="4" />

                                {/* Current Point */}
                                <circle cx="550" cy="60" r="6" fill="#6366f1" stroke="#fff" strokeWidth="2" />

                                {/* Tooltip Tag */}
                                <g transform="translate(520, 25)">
                                    <rect width="80" height="25" rx="4" fill="#1e1b3a" stroke="#6366f1" />
                                    <text x="40" y="17" textAnchor="middle" fill="#fff" fontSize="12" fontWeight="bold">Score: 760</text>
                                </g>
                            </svg>
                            <div className="x-axis-labels">
                                <span>Week 1</span>
                                <span>Week 2</span>
                                <span>Week 3</span>
                                <span>Week 4</span>
                            </div>
                        </div>
                    </div>

                    {/* Weakness Focus */}
                    <div className="weakness-card">
                        <h3>Weakness Focus</h3>
                        <p className="sub-header-text">Topics needing immediate attention</p>

                        <div className="weakness-list">
                            <div className="weakness-item">
                                <div className="w-icon-box red">
                                    <AlertTriangle size={18} />
                                </div>
                                <div className="w-content">
                                    <div className="w-title">Geometry: Triangles</div>
                                    <div className="w-meta red-text">Accuracy -12%</div>
                                    <div className="w-bar-bg">
                                        <div className="w-bar-fill red" style={{ width: '40%' }}></div>
                                    </div>
                                </div>
                            </div>

                            <div className="weakness-item">
                                <div className="w-icon-box orange">
                                    <Clock size={18} />
                                </div>
                                <div className="w-content">
                                    <div className="w-title">Algebra: Functions</div>
                                    <div className="w-meta orange-text">Speed Slow</div>
                                    <div className="w-bar-bg">
                                        <div className="w-bar-fill orange" style={{ width: '60%' }}></div>
                                    </div>
                                </div>
                            </div>

                            <div className="weakness-item">
                                <div className="w-icon-box yellow">
                                    <Activity size={18} />
                                </div>
                                <div className="w-content">
                                    <div className="w-title">Reading: Inference</div>
                                    <div className="w-meta yellow-text">Consistency Low</div>
                                    <div className="w-bar-bg">
                                        <div className="w-bar-fill yellow" style={{ width: '30%' }}></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Row: Heatmap & Donut */}
                <div className="bottom-section-grid">
                    {/* Heatmap */}
                    <div className="heatmap-card">
                        <div className="card-top">
                            <h3>Topic Proficiency Heatmap</h3>
                            <div className="heatmap-legend">
                                <span>Low</span>
                                <div className="legend-blocks">
                                    <span></span><span></span><span></span><span></span>
                                </div>
                                <span>High</span>
                            </div>
                        </div>

                        <div className="heatmap-cols">
                            <div className="hm-column">
                                <h4>MATH</h4>
                                <HeatmapRow label="Algebra" level={3} />
                                <HeatmapRow label="Geometry" level={2} />
                                <HeatmapRow label="Trigonometry" level={2} />
                                <HeatmapRow label="Statistics" level={4} />
                            </div>
                            <div className="hm-column">
                                <h4>VERBAL</h4>
                                <HeatmapRow label="Reading" level={4} />
                                <HeatmapRow label="Writing" level={3} />
                                <HeatmapRow label="Vocab" level={4} />
                                <HeatmapRow label="Grammar" level={2} />
                            </div>
                            <div className="hm-column">
                                <h4>LOGIC</h4>
                                <HeatmapRow label="Puzzles" level={4} />
                                <HeatmapRow label="Data Interp." level={2} />
                                <HeatmapRow label="Abstract" level={1} />
                                <HeatmapRow label="Sequence" level={3} />
                            </div>
                        </div>
                    </div>

                    {/* Subject Breakdown Donut */}
                    <div className="breakdown-donut-card">
                        <h3>Subject Breakdown</h3>
                        <p className="sub-header-text">Questions attempted distribution</p>

                        <div className="donut-chart-container">
                            <svg viewBox="0 0 100 100" className="donut-svg">
                                <circle cx="50" cy="50" r="40" fill="none" stroke="#2e2b52" strokeWidth="10" />
                                {/* Segments */}
                                <circle cx="50" cy="50" r="40" fill="none" stroke="#3b82f6" strokeWidth="10" strokeDasharray="100 251" strokeDashoffset="0" transform="rotate(-90 50 50)" />
                                <circle cx="50" cy="50" r="40" fill="none" stroke="#8b5cf6" strokeWidth="10" strokeDasharray="80 251" strokeDashoffset="-100" transform="rotate(-90 50 50)" />
                                <circle cx="50" cy="50" r="40" fill="none" stroke="#ec4899" strokeWidth="10" strokeDasharray="71 251" strokeDashoffset="-180" transform="rotate(-90 50 50)" />
                            </svg>
                            <div className="donut-center-text">
                                <span className="donut-total">1,240</span>
                                <span className="donut-label">Total Qs</span>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
};

// Helper Component for Heatmap Rows
const HeatmapRow = ({ label, level }) => {
    return (
        <div className="hm-row">
            <span className="hm-label">{label}</span>
            <div className="hm-bars">
                {[1, 2, 3, 4].map(i => (
                    <div key={i} className={`hm-block ${i <= level ? 'filled' : ''}`}></div>
                ))}
            </div>
        </div>
    );
};

export default PerformanceAnalytics;
