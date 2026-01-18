import React, { useState, useEffect } from 'react';
import {
    ArrowLeft,
    AlertCircle,
    Bookmark,
    X,
    ChevronLeft,
    ChevronRight,
    Info,
    Timer
} from 'lucide-react';
import { Link } from 'react-router-dom';
import './MockTestInterface.css';

const MockTestInterface = () => {
    // State management
    const [currentSubject, setCurrentSubject] = useState('Physics');
    const [currentQuestion, setCurrentQuestion] = useState(24);
    const [selectedOption, setSelectedOption] = useState(null);
    const [timeLeft, setTimeLeft] = useState(9912); // seconds (2:45:12)

    // Palette data simulation
    const questionPalette = Array.from({ length: 30 }, (_, i) => {
        const num = i + 1;
        let status = 'not-visited';
        if ([1, 2, 3, 4, 5].includes(num)) status = 'answered'; // Purple
        else if ([24].includes(num)) status = 'current'; // Blue border
        else if ([6].includes(num)) status = 'marked'; // Yellow
        else if ([4].includes(num)) status = 'not-answered-reviewed'; // Red

        return { id: num, status };
    });

    // Timer countdown
    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
        }, 1000);
        return () => clearInterval(timer);
    }, []);

    const formatTime = (seconds) => {
        const h = Math.floor(seconds / 3600);
        const m = Math.floor((seconds % 3600) / 60);
        const s = seconds % 60;
        return `${String(h).padStart(2, '0')} : ${String(m).padStart(2, '0')} : ${String(s).padStart(2, '0')}`;
    };

    return (
        <div className="mock-test-container">
            {/* Header */}
            <header className="test-header">
                <div className="header-left">
                    <Link to="/dashboard" className="back-btn">
                        <ArrowLeft size={20} />
                    </Link>
                    <h1>JEE Main Mock Test 4</h1>
                </div>
                <div className="header-right">
                    <button className="submit-btn-outline">
                        <span className="submit-icon">→</span> Submit Test
                    </button>
                </div>
            </header>

            {/* Sub-Header / Tabs */}
            <div className="test-tabs">
                <button
                    className={`tab-btn ${currentSubject === 'Physics' ? 'active' : ''}`}
                    onClick={() => setCurrentSubject('Physics')}
                >
                    Physics
                </button>
                <button
                    className={`tab-btn ${currentSubject === 'Chemistry' ? 'active' : ''}`}
                    onClick={() => setCurrentSubject('Chemistry')}
                >
                    Chemistry
                </button>
                <button
                    className={`tab-btn ${currentSubject === 'Maths' ? 'active' : ''}`}
                    onClick={() => setCurrentSubject('Maths')}
                >
                    Maths
                </button>
            </div>

            {/* Main Layout */}
            <div className="test-body">
                {/* Left Area: Question Section */}
                <main className="question-area">
                    <div className="question-header-row">
                        <div className="q-tags">
                            <span className="tag-blue">Single Choice</span>
                            <span className="tag-dark">+4 / -1 Marks</span>
                        </div>
                        <button className="report-btn">
                            <AlertCircle size={16} /> REPORT
                        </button>
                    </div>

                    <div className="question-content">
                        <div className="q-number">Q.{currentQuestion}</div>
                        <div className="q-text">
                            <h3>
                                A particle moves along a straight line such that its displacement at any time <span className="math-font">t</span> is given by <span className="code-block">s = t^3 - 6t^2 + 3t + 4</span>. Find the velocity when the acceleration is zero.
                            </h3>
                        </div>
                    </div>

                    <div className="options-grid">
                        <div
                            className={`option-card ${selectedOption === 'A' ? 'selected' : ''}`}
                            onClick={() => setSelectedOption('A')}
                        >
                            <div className="opt-radio"></div>
                            <span className="opt-text">3 m/s</span>
                            <span className="opt-label">A</span>
                        </div>
                        <div
                            className={`option-card ${selectedOption === 'B' ? 'selected' : ''}`}
                            onClick={() => setSelectedOption('B')}
                        >
                            <div className="opt-radio"></div>
                            <span className="opt-text">-9 m/s</span>
                            <span className="opt-label">B</span>
                        </div>
                        <div
                            className={`option-card ${selectedOption === 'C' ? 'selected' : ''}`}
                            onClick={() => setSelectedOption('C')}
                        >
                            <div className="opt-radio"></div>
                            <span className="opt-text">42 m/s</span>
                            <span className="opt-label">C</span>
                        </div>
                        <div
                            className={`option-card ${selectedOption === 'D' ? 'selected' : ''}`}
                            onClick={() => setSelectedOption('D')}
                        >
                            <div className="opt-radio"></div>
                            <span className="opt-text">-12 m/s</span>
                            <span className="opt-label">D</span>
                        </div>
                    </div>

                    {/* Floating Timer in Question Area */}
                    <div className="floating-timer">
                        <Timer size={16} className="timer-icon" />
                        <span className="timer-text">{formatTime(timeLeft)}</span>
                        <span className="timer-label">LEFT</span>
                    </div>
                </main>

                {/* Right Area: Sidebar */}
                <aside className="test-sidebar">
                    <div className="candidate-info">
                        <div className="avatar-circle">JD</div>
                        <div className="user-details">
                            <span className="user-name">John Doe</span>
                            <span className="user-id">Candidate ID: 8933012</span>
                        </div>
                    </div>

                    <div className="palette-section">
                        <h4>QUESTION PALETTE</h4>
                        <div className="palette-legend">
                            <div className="legend-item"><span className="dot answered"></span> Answered</div>
                            <div className="legend-item"><span className="dot not-answered"></span> Not Answered</div>
                            <div className="legend-item"><span className="dot marked"></span> Marked</div>
                            <div className="legend-item"><span className="dot not-visited"></span> Not Visited</div>
                        </div>

                        <div className="palette-grid">
                            {questionPalette.map((q) => (
                                <button
                                    key={q.id}
                                    className={`palette-btn ${q.status}`}
                                    onClick={() => setCurrentQuestion(q.id)}
                                >
                                    {q.id}
                                    {q.status === 'marked' && <span className="marker-dot"></span>}
                                </button>
                            ))}
                        </div>
                    </div>

                    <div className="sidebar-footer-btn">
                        <button className="qp-btn">
                            <Info size={16} /> Question Paper
                        </button>
                    </div>
                </aside>
            </div>

            {/* Footer Actions */}
            <footer className="test-footer">
                <div className="footer-left">
                    <button className="action-btn-secondary box-btn">
                        <Bookmark size={16} fill="currentColor" /> Mark for Review
                    </button>
                    <button className="action-btn-ghost" onClick={() => setSelectedOption(null)}>
                        <X size={16} /> Clear Response
                    </button>
                </div>
                <div className="footer-right">
                    <button className="action-btn-outline" onClick={() => setCurrentQuestion(prev => Math.max(1, prev - 1))}>
                        <ChevronLeft size={16} /> Previous
                    </button>
                    <button className="action-btn-primary" onClick={() => setCurrentQuestion(prev => Math.min(30, prev + 1))}>
                        Save & Next <ChevronRight size={16} />
                    </button>
                </div>
            </footer>
        </div>
    );
};

export default MockTestInterface;
