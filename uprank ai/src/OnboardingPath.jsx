import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { BarChart, Brain, Zap, ArrowRight, Sparkles } from 'lucide-react';
import './OnboardingPath.css';

const OnboardingPath = () => {
    const navigate = useNavigate();
    const [selectedPath, setSelectedPath] = useState('mastery'); // Default selected as per image

    const paths = [
        {
            id: 'rank',
            title: 'Target Top Rank',
            desc: 'High-intensity preparation focusing on competitive mock exams, percentile ranking, and deep performance analytics.',
            icon: <BarChart size={32} />
        },
        {
            id: 'mastery',
            title: 'Concept Mastery',
            desc: 'Focus on foundational learning with interactive AI tutoring, visual concept maps, and step-by-step problem solving.',
            icon: <Brain size={32} />
        },
        {
            id: 'speed',
            title: 'Speed Revision',
            desc: 'Optimized for rapid learning using active recall, smart flashcards, and condensed summaries for upcoming deadlines.',
            icon: <Zap size={32} />
        }
    ];

    return (
        <div className="onboarding-container">
            {/* Header */}
            <header className="onboarding-header">
                <div className="logo-section">
                    <div className="logo-icon-box">
                        <Sparkles size={16} color="white" />
                    </div>
                    <span className="logo-text">UpRank AI</span>
                </div>

                <div className="progress-section">
                    <div className="progress-labels">
                        <span>STEP 1: GOAL</span>
                        <span>20% COMPLETE</span>
                    </div>
                    <div className="progress-bar-bg">
                        <div className="progress-bar-fill" style={{ width: '20%' }}></div>
                    </div>
                </div>

                <button className="skip-btn">Skip for now</button>
            </header>

            {/* Main Content */}
            <main className="onboarding-main">
                <div className="text-center mb-5">
                    <h1 className="main-title">Begin Your Journey</h1>
                    <p className="sub-title">Tailor your AI experience to your specific goals. Select the path that best aligns with your preparation strategy.</p>
                </div>

                <div className="path-cards-container">
                    {paths.map((path) => (
                        <div
                            key={path.id}
                            className={`path-card ${selectedPath === path.id ? 'selected' : ''}`}
                            onClick={() => setSelectedPath(path.id)}
                        >
                            <div className="card-icon-wrapper">
                                {path.icon}
                            </div>
                            <h3>{path.title}</h3>
                            <p>{path.desc}</p>

                            {selectedPath === path.id && (
                                <div className="selected-badge">
                                    CURRENTLY SELECTED
                                </div>
                            )}
                        </div>
                    ))}
                </div>

                <div className="action-area">
                    <button
                        className="continue-btn"
                        onClick={() => navigate('/subject-selection')} // Placeholder route
                    >
                        Continue to Subject Selection <ArrowRight size={20} />
                    </button>
                    <p className="disclaimer">You can change your path at any time in settings.</p>
                </div>
            </main>

            {/* Footer */}
            <footer className="onboarding-footer">
                <a href="#">Support</a>
                <a href="#">Privacy Policy</a>
                <a href="#">Terms of Service</a>
            </footer>
        </div>
    );
};

export default OnboardingPath;
