import React, { useState, useEffect } from 'react';
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
    const [testData, setTestData] = useState(null);
    const [expandedRow, setExpandedRow] = useState(null);

    useEffect(() => {
        const stored = localStorage.getItem('testResults');
        if (stored) {
            setTestData(JSON.parse(stored));
        }
    }, []);

    const questionsToDisplay = testData ? testData.questions : [];
    const answers = testData ? testData.answers : {};

    const maxScore = questionsToDisplay.length > 0 ? questionsToDisplay.length * 4 : 0;

    // Calculate Accuracy
    const attemptedCount = Object.keys(answers).length;
    const correctCount = questionsToDisplay.filter(q => answers[q.id] === q.correctAnswer).length;
    const incorrectCount = attemptedCount - correctCount;
    const accuracy = attemptedCount > 0 ? Math.round((correctCount / attemptedCount) * 100) : 0;

    // Calculate Score (+4 for Correct, -1 for Incorrect)
    const userScore = (correctCount * 4) - incorrectCount;

    // Calculate Subject-wise Performance
    const subjectStats = ['Physics', 'Chemistry', 'Maths', 'Biology'].map(subject => {
        const subjectQuestions = questionsToDisplay.filter(q => q.subject === subject);
        if (subjectQuestions.length === 0) return null;

        const subCorrect = subjectQuestions.filter(q => answers[q.id] === q.correctAnswer).length;
        const subTotal = subjectQuestions.length;
        const subPercent = Math.round((subCorrect / subTotal) * 100);

        // Color mapping
        const colors = {
            'Physics': '#6366f1',
            'Chemistry': '#ef4444',
            'Maths': '#f59e0b',
            'Biology': '#10b981'
        };

        return { name: subject, percent: subPercent, color: colors[subject] || '#888888' };
    }).filter(Boolean);

    const toggleRow = (id) => {
        setExpandedRow(expandedRow === id ? null : id);
    };

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
                        <h1>Mock Test 5: Full Mock Test</h1>
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
                            <span className="big">{userScore}</span>
                            <span className="total">/ {maxScore}</span>
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
                            <span className="big">{accuracy}%</span>
                        </div>
                        <div className="progress-bar-sm">
                            <div className="fill-purple" style={{ width: `${accuracy}%` }}></div>
                        </div>
                        <div className="stat-trend neutral">
                            {correctCount} Correct • {incorrectCount} Incorrect
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
                                {subjectStats.map(stat => (
                                    <SubjectBar key={stat.name} name={stat.name} percent={stat.percent} color={stat.color} />
                                ))}
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
                                {questionsToDisplay.length > 0 ? (
                                    questionsToDisplay.map((q, index) => {
                                        const userAnswer = answers[q.id];
                                        const isCorrect = userAnswer === q.correctAnswer;
                                        const status = !userAnswer ? 'Unattempted' : isCorrect ? 'Correct' : 'Incorrect';

                                        return (
                                            <React.Fragment key={q.id}>
                                                <TableRow
                                                    q={(index + 1).toString().padStart(2, '0')}
                                                    sub={q.subject}
                                                    topic={q.topic}
                                                    res={status}
                                                    time="--:--"
                                                    onView={() => toggleRow(q.id)}
                                                />
                                                {/* Expanded Row for Answer */}
                                                {expandedRow === q.id && (
                                                    <tr className="expanded-row">
                                                        <td colSpan="6">
                                                            <div style={{ padding: '10px 20px', background: '#f9fafb', borderLeft: '3px solid #6366f1' }}>
                                                                <p className="mb-2"><strong>Question:</strong> {q.text}</p>

                                                                {(() => {
                                                                    const correctOpt = q.options.find(opt => opt.id === q.correctAnswer);
                                                                    const userOpt = userAnswer ? q.options.find(opt => opt.id === userAnswer) : null;

                                                                    return (
                                                                        <div className="answer-details">
                                                                            <p className="mb-1" style={{ color: '#166534' }}>
                                                                                <strong>Correct Answer:</strong> {q.correctAnswer} - {correctOpt?.text}
                                                                            </p>
                                                                            {userAnswer ? (
                                                                                <p className="mb-1" style={{ color: isCorrect ? '#166534' : '#991b1b' }}>
                                                                                    <strong>Your Answer:</strong> {userAnswer} - {userOpt?.text}
                                                                                </p>
                                                                            ) : (
                                                                                <p className="mb-1 text-muted"><strong>Your Answer:</strong> Unattempted</p>
                                                                            )}
                                                                        </div>
                                                                    );
                                                                })()}

                                                                <p className="mt-2 text-gray-700"><strong>Explanation:</strong> {q.explanation}</p>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                )}
                                            </React.Fragment>
                                        );
                                    })
                                ) : (
                                    <tr><td colSpan="6" style={{ textAlign: 'center', padding: '20px' }}>No Test Data Found. Please take a test first.</td></tr>
                                )}
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

const TableRow = ({ q, sub, topic, res, time, slow, onView }) => {
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
                <button className="btn-text-blue" onClick={onView}>View</button>
            </td>
        </tr>
    );
};

export default TestResultPage;
