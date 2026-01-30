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
import SubmitTestModal from './SubmitTestModal';

import { useSearchParams } from 'react-router-dom';
import { EXAM_CONFIG, getQuestionsForExam } from './utils/examConfig';
import { mockQuestions as allQuestions } from './data/mockQuestions';

const MockTestInterface = () => {
    const navigate = useNavigate();
    const [searchParams] = useSearchParams();

    // Determine Exam Type (Default to JEE if not specified)
    // You can test by visiting /mock-test?type=NEET or /mock-test?type=GOVT
    const examType = searchParams.get('type') || 'JEE';
    const currentConfig = EXAM_CONFIG[examType] || EXAM_CONFIG['JEE'];

    // Filter questions based on exam configuration
    const mockQuestions = getQuestionsForExam(allQuestions, examType);
    const subjects = currentConfig.subjects;

    // State management
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0); // 0-indexed across filtered questions
    const [userAnswers, setUserAnswers] = useState({}); // { questionId: optionId }
    const [markedForReview, setMarkedForReview] = useState([]); // [questionIds]
    const [visitedQuestions, setVisitedQuestions] = useState(new Set()); // Initialize later based on first Q

    // Derived current question
    const currentQ = mockQuestions[currentQuestionIndex];
    if (!currentQ) return <div className="p-8 text-white">Loading questions for {examType}...</div>;

    const currentQuestionId = currentQ.id;
    const currentSubject = currentQ.subject; // Dynamic subject from current question

    useEffect(() => {
        // Initialize visited with first Q if empty
        if (mockQuestions.length > 0 && visitedQuestions.size === 0) {
            setVisitedQuestions(new Set([mockQuestions[0].id]));
        }
    }, [mockQuestions]);

    const [timeLeft, setTimeLeft] = useState(9912); // seconds (2:45:12)
    const [showSubmitModal, setShowSubmitModal] = useState(false);

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

    // Dynamic Palette generation
    const questionPalette = mockQuestions.map((q) => {
        let status = 'not-visited';
        if (visitedQuestions.has(q.id)) {
            if (userAnswers[q.id]) {
                status = 'answered';
                if (markedForReview.includes(q.id)) status = 'marked';
            } else {
                status = 'not-answered';
                if (markedForReview.includes(q.id)) status = 'marked';
            }
        }
        if (currentQ && q.id === currentQ.id) status = 'current';
        return { id: q.id, status };
    });

    // Handle Option Selection
    const handleOptionSelect = (optionId) => {
        setUserAnswers(prev => ({ ...prev, [currentQuestionId]: optionId }));
    };

    const handleNext = () => {
        const nextIndex = Math.min(mockQuestions.length - 1, currentQuestionIndex + 1);
        setCurrentQuestionIndex(nextIndex);
        setVisitedQuestions(prev => new Set(prev).add(mockQuestions[nextIndex].id));
    };

    const handlePrev = () => {
        const prevIndex = Math.max(0, currentQuestionIndex - 1);
        setCurrentQuestionIndex(prevIndex);
        setVisitedQuestions(prev => new Set(prev).add(mockQuestions[prevIndex].id));
    };

    const jumpToQuestion = (id) => {
        const index = mockQuestions.findIndex(q => q.id === id);
        if (index !== -1) {
            setCurrentQuestionIndex(index);
            setVisitedQuestions(prev => new Set(prev).add(id));
        }
    };

    const clearResponse = () => {
        setUserAnswers(prev => {
            const newState = { ...prev };
            delete newState[currentQuestionId];
            return newState;
        });
    };

    const markReview = () => {
        setMarkedForReview(prev => {
            if (prev.includes(currentQuestionId)) return prev.filter(id => id !== currentQuestionId);
            return [...prev, currentQuestionId];
        });
    };

    const submitTest = () => {
        // Save results to localStorage to be picked up by result page
        localStorage.setItem('testResults', JSON.stringify({
            answers: userAnswers,
            questions: mockQuestions, // passing questions might be redundant if both pages import same file, but safe
            score: calculateScore()
        }));
        setShowSubmitModal(false);
        navigate('/test-result');
    };

    const calculateScore = () => {
        let score = 0;
        mockQuestions.forEach(q => {
            if (userAnswers[q.id] === q.correctAnswer) score += 4;
            else if (userAnswers[q.id]) score -= 1;
        });
        return score;
    };

    const getSummaryStats = () => {
        const total = mockQuestions.length;
        const marked = markedForReview.length;

        // Count total answered questions
        const answeredIds = Object.keys(userAnswers).map(id => Number(id)); // Keys are strings
        const totalAnswered = answeredIds.length;

        // Count how many accepted answers are also marked for review
        // (These will be counted in 'Marked' bucket, so remove from 'Answered' bucket)
        const markedSet = new Set(markedForReview);
        const answeredAndMarked = answeredIds.filter(id => markedSet.has(id)).length;

        const displayAnswered = totalAnswered - answeredAndMarked;
        const displayMarked = marked;
        const displayUnanswered = total - displayAnswered - displayMarked;

        return {
            answered: displayAnswered,
            unanswered: displayUnanswered,
            marked: displayMarked
        };
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
                {subjects.map((subject) => (
                    <button
                        key={subject}
                        className={`tab-btn ${currentSubject === subject ? 'active' : ''}`}
                        onClick={() => {
                            const firstQuestionIndex = mockQuestions.findIndex(q => q.subject === subject);
                            if (firstQuestionIndex !== -1) {
                                setCurrentQuestionIndex(firstQuestionIndex);
                            }
                        }}
                    >
                        {subject}
                    </button>
                ))}
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
                        <div className="q-number">Q.{currentQuestionIndex + 1}</div>
                        <div className="q-text">
                            <h3>{currentQ.text}</h3>
                        </div>
                    </div>

                    <div className="options-grid">
                        {currentQ.options.map((opt) => (
                            <div
                                key={opt.id}
                                className={`option-card ${userAnswers[currentQuestionId] === opt.id ? 'selected' : ''}`}
                                onClick={() => handleOptionSelect(opt.id)}
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
                                    onClick={() => jumpToQuestion(q.id)}
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
                    <button className="action-btn-secondary box-btn" onClick={markReview}>
                        <Bookmark size={16} fill={markedForReview.includes(currentQuestionId) ? "currentColor" : "none"} /> Mark for Review
                    </button>
                    <button className="action-btn-ghost" onClick={clearResponse}>
                        <X size={16} /> Clear Response
                    </button>
                </div>
                <div className="footer-right">
                    <button className="action-btn-outline" onClick={handlePrev} disabled={currentQuestionIndex === 0}>
                        <ChevronLeft size={16} /> Previous
                    </button>
                    <button className="action-btn-primary" onClick={handleNext}>
                        Save & Next <ChevronRight size={16} />
                    </button>
                </div>
            </footer>

            <SubmitTestModal
                isOpen={showSubmitModal}
                onClose={() => setShowSubmitModal(false)}
                onSubmit={submitTest}
                summary={getSummaryStats()}
                timeLeft={formatTime(timeLeft)}
            />
        </div>
    );
};

export default MockTestInterface;
