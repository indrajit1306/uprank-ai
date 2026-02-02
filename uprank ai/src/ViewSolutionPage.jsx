import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {
    ArrowLeft,
    CheckCircle,
    XCircle,
    HelpCircle,
    BookOpen,
    Filter,
    Clock,
    Target
} from 'lucide-react';
import { UpRankLogo } from './Navbar';
import './ViewSolutionPage.css';

const ViewSolutionPage = () => {
    const navigate = useNavigate();
    const [testData, setTestData] = useState(null);
    const [filter, setFilter] = useState('all'); // all, incorrect, unattempted, correct

    useEffect(() => {
        const stored = localStorage.getItem('testResults');
        if (stored) {
            setTestData(JSON.parse(stored));
        } else {
            // Redirect if no data found
            navigate('/dashboard');
        }
    }, [navigate]);

    if (!testData) return <div className="loading-state">Loading solutions...</div>;

    const { questions, answers } = testData;

    // Filter Logic
    const filteredQuestions = questions.filter(q => {
        const userAnswer = answers[q.id];
        const isCorrect = userAnswer === q.correctAnswer;

        if (filter === 'all') return true;
        if (filter === 'correct') return isCorrect;
        if (filter === 'incorrect') return userAnswer && !isCorrect;
        if (filter === 'unattempted') return !userAnswer;
        return true;
    });

    return (
        <div className="view-solution-container">
            {/* Navbar (Simplified for focus) */}
            <nav className="result-navbar">
                <div className="nav-brand">
                    <div className="brand-logo-small">
                        <UpRankLogo />
                    </div>
                    <span>UpRank AI</span>
                </div>
                <div className="nav-links">
                    <Link to="/test-result" className="back-link">
                        <ArrowLeft size={16} /> Back to Results
                    </Link>
                </div>
            </nav>

            <div className="solution-content-width">
                {/* Header Actions */}
                <div className="solution-header">
                    <div>
                        <h1>Solution & Explanations</h1>
                        <p>Detailed analysis of your performance in <strong>Full Mock Test</strong></p>
                    </div>
                </div>

                {/* Filters */}
                <div className="solution-filters">
                    <div
                        className={`filter-chip ${filter === 'all' ? 'active' : ''}`}
                        onClick={() => setFilter('all')}
                    >
                        All Questions <span className="count-badge">{questions.length}</span>
                    </div>
                    <div
                        className={`filter-chip ${filter === 'correct' ? 'active' : ''}`}
                        onClick={() => setFilter('correct')}
                    >
                        Correct <span className="count-badge">
                            {questions.filter(q => answers[q.id] === q.correctAnswer).length}
                        </span>
                    </div>
                    <div
                        className={`filter-chip ${filter === 'incorrect' ? 'active' : ''}`}
                        onClick={() => setFilter('incorrect')}
                    >
                        Incorrect <span className="count-badge">
                            {questions.filter(q => answers[q.id] && answers[q.id] !== q.correctAnswer).length}
                        </span>
                    </div>
                    <div
                        className={`filter-chip ${filter === 'unattempted' ? 'active' : ''}`}
                        onClick={() => setFilter('unattempted')}
                    >
                        Unattempted <span className="count-badge">
                            {questions.filter(q => !answers[q.id]).length}
                        </span>
                    </div>
                </div>

                {/* Questions List */}
                <div className="questions-list">
                    {filteredQuestions.length > 0 ? (
                        filteredQuestions.map((q, index) => {
                            const userAnswer = answers[q.id];
                            const isCorrect = userAnswer === q.correctAnswer;
                            let status = 'unattempted';
                            if (userAnswer) status = isCorrect ? 'correct' : 'incorrect';

                            return (
                                <div key={q.id} className="question-card">
                                    <div className="q-header">
                                        <div className="q-meta">
                                            <div className="q-number">Question {questions.indexOf(q) + 1}</div>
                                            <div className="details-meta">
                                                <span className="meta-tag">{q.subject}</span>
                                                <span className="meta-tag">{q.topic}</span>
                                            </div>
                                        </div>
                                        <div className={`q-badge ${status}`}>
                                            {status === 'correct' && <><CheckCircle size={14} /> Correct</>}
                                            {status === 'incorrect' && <><XCircle size={14} /> Incorrect</>}
                                            {status === 'unattempted' && <><HelpCircle size={14} /> Unattempted</>}
                                        </div>
                                    </div>

                                    <div className="q-text">{q.text}</div>

                                    <div className="options-grid">
                                        {q.options.map((opt) => {
                                            const isOptCorrect = opt.id === q.correctAnswer;
                                            const isOptSelected = opt.id === userAnswer;

                                            let optClass = 'option-item';
                                            if (isOptCorrect) optClass += ' correct';
                                            else if (isOptSelected && !isOptCorrect) optClass += ' incorrect';

                                            return (
                                                <div key={opt.id} className={optClass}>
                                                    <div className="option-marker">
                                                        {isOptCorrect ? '✓' : (isOptSelected ? '✕' : opt.id)}
                                                    </div>
                                                    <span>{opt.text}</span>
                                                </div>
                                            );
                                        })}
                                    </div>

                                    <div className="explanation-box">
                                        <div className="exp-title">
                                            <BookOpen size={16} /> Explanation
                                        </div>
                                        <div className="exp-text">
                                            {q.explanation}
                                        </div>
                                    </div>
                                </div>
                            );
                        })
                    ) : (
                        <div className="empty-state">
                            <p>No questions found for this filter.</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ViewSolutionPage;
