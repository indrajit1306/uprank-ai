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
import { Link, useNavigate } from 'react-router-dom';
import './MockTestInterface.css';

const MockTestInterface = () => {
    const navigate = useNavigate();
    // State management
    const [currentSubject, setCurrentSubject] = useState('Physics');
    const [currentQuestion, setCurrentQuestion] = useState(1);
    const [selectedOption, setSelectedOption] = useState(null);

    const [timeLeft, setTimeLeft] = useState(9912); // seconds (2:45:12)
    const [showSubmitModal, setShowSubmitModal] = useState(false);

    // Palette data simulation
    const questionPalette = Array.from({ length: 30 }, (_, i) => {
        const num = i + 1;
        let status = 'not-visited';

        // Simulating some previous activity
        if ([2, 3, 5].includes(num)) status = 'answered';
        else if ([6].includes(num)) status = 'marked';
        else if ([4].includes(num)) status = 'not-answered-reviewed';

        // Highlight current question
        if (num === currentQuestion) status = 'current';

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

    // Question Data
    const questionsData = {
        1: {
            text: <span>Which of the following quantity is <strong>unitless</strong>?</span>,
            options: [
                { id: 'A', text: "Velocity Gradient" },
                { id: 'B', text: "Pressure Gradient" },
                { id: 'C', text: "Displacement Gradient" },
                { id: 'D', text: "Force Gradient" }
            ]
        },
        2: {
            text: <span>The dimension of <strong>light year</strong> is:</span>,
            options: [
                { id: 'A', text: "[L]" },
                { id: 'B', text: "[T]" },
                { id: 'C', text: "[M]" },
                { id: 'D', text: "[LT^-1]" }
            ]
        },
        3: {
            text: <span>Two vectors having equal magnitude of 5 units, have an angle of 60° between them. Find the magnitude of their resultant vector.</span>,
            options: [
                { id: 'A', text: "5" },
                { id: 'B', text: "5√3" },
                { id: 'C', text: "10" },
                { id: 'D', text: "5√2" }
            ]
        },
        4: {
            text: <span>A ball is thrown vertically upward with a velocity of 20 m/s. Calculate the maximum height attained. (g = 10 m/s²)</span>,
            options: [
                { id: 'A', text: "10 m" },
                { id: 'B', text: "20 m" },
                { id: 'C', text: "40 m" },
                { id: 'D', text: "15 m" }
            ]
        },
        5: {
            text: <span>If the error in the measurement of radius of a sphere is 2%, then the error in the determination of volume of the sphere will be:</span>,
            options: [
                { id: 'A', text: "8%" },
                { id: 'B', text: "2%" },
                { id: 'C', text: "4%" },
                { id: 'D', text: "6%" }
            ]
        },
        6: {
            text: <span>A car moving with a speed of 50 km/h, can be stopped by brakes after at least 6m. If the same car is moving at a speed of 100 km/h, the minimum stopping distance is:</span>,
            options: [
                { id: 'A', text: "6m" },
                { id: 'B', text: "12m" },
                { id: 'C', text: "18m" },
                { id: 'D', text: "24m" }
            ]
        },
        24: {
            text: <span>A particle moves along a straight line such that its displacement at any time <span className="math-font">t</span> is given by <span className="code-block">s = t^3 - 6t^2 + 3t + 4</span>. Find the velocity when the acceleration is zero.</span>,
            options: [
                { id: 'A', text: "3 m/s" },
                { id: 'B', text: "-9 m/s" },
                { id: 'C', text: "42 m/s" },
                { id: 'D', text: "-12 m/s" }
            ]
        }
    };

    const currentQ = questionsData[currentQuestion] || {
        text: "Question content coming soon...",
        options: [
            { id: 'A', text: "Option A" },
            { id: 'B', text: "Option B" },
            { id: 'C', text: "Option C" },
            { id: 'D', text: "Option D" }
        ]
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
                    <button
                        className="submit-btn-outline"
                        onClick={() => setShowSubmitModal(true)}
                    >
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
                            <h3>{currentQ.text}</h3>
                        </div>
                    </div>

                    <div className="options-grid">
                        {currentQ.options.map((opt) => (
                            <div
                                key={opt.id}
                                className={`option-card ${selectedOption === opt.id ? 'selected' : ''}`}
                                onClick={() => setSelectedOption(opt.id)}
                            >
                                <div className="opt-radio"></div>
                                <span className="opt-text">{opt.text}</span>
                                <span className="opt-label">{opt.id}</span>
                            </div>
                        ))}
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

            {/* Submit Confirmation Modal */}
            {showSubmitModal && (
                <div className="modal-overlay">
                    <div className="modal-content">
                        <h2>Submit Test?</h2>
                        <p>Are you sure you want to submit your test? You will not be able to change your answers after submission.</p>
                        <div className="modal-actions">
                            <button className="cancel-btn" onClick={() => setShowSubmitModal(false)}>Cancel</button>
                            <button className="confirm-btn" onClick={() => {
                                // Handle submission logic here (e.g., navigate to results)
                                setShowSubmitModal(false);
                                navigate('/test-result');
                            }}>Confirm Submit</button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default MockTestInterface;
