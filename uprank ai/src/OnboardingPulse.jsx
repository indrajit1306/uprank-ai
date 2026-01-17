import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Sparkles, Beaker, Calculator, BookOpen, Moon, Sun } from 'lucide-react';
import { UpRankLogo } from './Navbar'; // Reusing UpRank branding despite image showing "Knowledge Pulse" text
import './OnboardingPulse.css';

const OnboardingPulse = () => {
    const navigate = useNavigate();
    const [theme, setTheme] = useState(() => localStorage.getItem('theme') || 'dark');

    useEffect(() => {
        document.documentElement.setAttribute('data-theme', theme);
        localStorage.setItem('theme', theme);
    }, [theme]);

    const toggleTheme = () => {
        setTheme(prevTheme => prevTheme === 'dark' ? 'light' : 'dark');
    };

    // State for subject ratings
    const [ratings, setRatings] = useState({
        physics: 'mid',
        organicChemistry: 'low',
        calculus: 'high',
        dataInterpretation: 'mid',
        criticalReasoning: 'high'
    });

    const handleRatingChange = (subject, rating) => {
        setRatings(prev => ({ ...prev, [subject]: rating }));
    };

    // Helper to render rating buttons
    const RatingGroup = ({ subject, currentRating }) => (
        <div className="rating-group">
            <button
                className={`rating-btn low ${currentRating === 'low' ? 'active' : ''}`}
                onClick={() => handleRatingChange(subject, 'low')}
            >
                LOW
            </button>
            <button
                className={`rating-btn mid ${currentRating === 'mid' ? 'active' : ''}`}
                onClick={() => handleRatingChange(subject, 'mid')}
            >
                MID
            </button>
            <button
                className={`rating-btn high ${currentRating === 'high' ? 'active' : ''}`}
                onClick={() => handleRatingChange(subject, 'high')}
            >
                HIGH
            </button>
        </div>
    );

    return (
        <div className="pulse-container">
            {/* Header */}
            <header className="pulse-header">
                <div className="pulse-brand">
                    <div className="brand-logo-sq">
                        <UpRankLogo />
                    </div>
                    <span className="brand-text">UpRank AI</span>
                </div>
                <div className="header-actions">
                    <button onClick={toggleTheme} className="theme-toggle-btn" style={{
                        background: 'none', border: 'none', cursor: 'pointer', color: 'var(--text-muted)', display: 'flex', alignItems: 'center'
                    }}>
                        {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
                    </button>
                    <a href="#" className="nav-link">Onboarding</a>
                    <a href="#" className="nav-link">Support</a>
                    <div className="user-avatar-sm"></div>
                </div>
            </header>

            <div className="pulse-layout">
                {/* Full Width Top Section */}
                <div className="progress-card">
                    <div className="progress-header">
                        <div>
                            <h2>Onboarding Progress</h2>
                            <p>Step 4: Strength Assessment</p>
                        </div>
                        <span className="step-fraction">4<span className="step-total">/5</span></span>
                    </div>
                    <div className="progress-bar-bg">
                        <div className="progress-bar-fill" style={{ width: '80%' }}></div>
                    </div>
                    <p className="progress-subtext">Almost there! Just define your pulse.</p>
                </div>

                <div className="section-intro">
                    <h1>Map Your Knowledge Pulse</h1>
                    <p>Tell us where you stand. Our AI will curate a personalized study path based on your strengths and gaps.</p>
                </div>

                {/* Content Details Row */}
                <div className="pulse-content-row">
                    {/* Main Left Column (Subjects) */}
                    <main className="pulse-main">
                        {/* Core Sciences */}
                        <div className="subject-category">
                            <h3 className="category-title"><Beaker size={20} /> Core Sciences</h3>
                            <div className="cards-row">
                                <div className="subject-card">
                                    <h4>Physics</h4>
                                    <RatingGroup subject="physics" currentRating={ratings.physics} />
                                </div>
                                <div className="subject-card">
                                    <h4>Organic Chemistry</h4>
                                    <RatingGroup subject="organicChemistry" currentRating={ratings.organicChemistry} />
                                </div>
                            </div>
                        </div>

                        {/* Quantitative */}
                        <div className="subject-category">
                            <h3 className="category-title"><Calculator size={20} /> Quantitative</h3>
                            <div className="cards-row">
                                <div className="subject-card">
                                    <h4>Calculus & Algebra</h4>
                                    <RatingGroup subject="calculus" currentRating={ratings.calculus} />
                                </div>
                                <div className="subject-card">
                                    <h4>Data Interpretation</h4>
                                    <RatingGroup subject="dataInterpretation" currentRating={ratings.dataInterpretation} />
                                </div>
                            </div>
                        </div>

                        {/* Verbal & Logic */}
                        <div className="subject-category">
                            <h3 className="category-title"><BookOpen size={20} /> Verbal & Logic</h3>
                            <div className="cards-row">
                                <div className="subject-card full-width">
                                    <h4>Critical Reasoning</h4>
                                    <RatingGroup subject="criticalReasoning" currentRating={ratings.criticalReasoning} />
                                </div>
                            </div>
                        </div>
                    </main>

                    {/* Right Sidebar */}
                    <aside className="pulse-sidebar">
                        <div className="ai-insight-card">
                            <div className="ai-avatar-wrapper">
                                <div className="ai-avatar-circle">
                                    {/* Using a placeholder gradient or image for avatar */}
                                    <img src="https://ui-avatars.com/api/?name=AI&background=0D8ABC&color=fff" alt="AI" />
                                </div>
                                <div className="online-indicator"></div>
                            </div>

                            <div className="ai-chat-bubble">
                                <div className="bubble-arrow"></div>
                                <p>
                                    "Great! I see you're confident in <strong>Calculus</strong>. We will focus on your weak areas like <strong>Organic Chemistry</strong> first to bridge the gap."
                                </p>
                            </div>

                            <div className="insight-stats">
                                <h5>AI INSIGHTS</h5>
                                <div className="stat-row">
                                    <span className="stat-label">Confidence Level</span>
                                    <span className="stat-val text-green">Balanced</span>
                                </div>
                                <div className="stat-row">
                                    <span className="stat-label">Focus Priority</span>
                                    <span className="stat-val text-red">High (Sciences)</span>
                                </div>
                            </div>
                        </div>
                    </aside>
                </div>
            </div>

            {/* Sticky Footer */}
            <footer className="pulse-footer">
                <div className="footer-content">
                    <button className="back-btn-simple" onClick={() => navigate('/onboarding/rhythm')}>
                        <ArrowLeft size={16} /> Back
                    </button>

                    <div className="footer-actions">
                        <button className="skip-btn-simple">Skip for now</button>
                        <button className="generate-btn" onClick={() => {
                            localStorage.setItem('knowledgePulse', JSON.stringify(ratings));
                            navigate('/onboarding/launchpad');
                        }}>
                            Generate My Plan <Sparkles size={16} />
                        </button>
                    </div>
                </div>
            </footer>

            {/* Copyright */}
            <div className="copyright-text">
                <p>&copy; 2024 Knowledge Pulse AI. All rights reserved.</p>
                <p>Privacy Policy &nbsp; Terms of Service</p>
            </div>
        </div>
    );
};

export default OnboardingPulse;
