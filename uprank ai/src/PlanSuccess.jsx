import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Bell, Settings, User, Calendar, BookOpen, Bot, ArrowRight, Brain, Sun, Moon } from 'lucide-react';
import { UpRankLogo } from './Navbar';
import './PlanSuccess.css';

const PlanSuccess = () => {
    const navigate = useNavigate();
    const [theme, setTheme] = useState(() => localStorage.getItem('theme') || 'dark');

    useEffect(() => {
        document.documentElement.setAttribute('data-theme', theme);
        localStorage.setItem('theme', theme);
    }, [theme]);

    const toggleTheme = () => {
        setTheme(prevTheme => prevTheme === 'dark' ? 'light' : 'dark');
    };

    const [daysRemaining, setDaysRemaining] = useState(180);

    useEffect(() => {
        const storedDate = localStorage.getItem('targetExamDate');
        if (storedDate) {
            const target = new Date(storedDate);
            const now = new Date();
            const diffTime = Math.abs(target - now);
            const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
            setDaysRemaining(diffDays);
        }
    }, []);

    return (
        <div className="plan-success-container">
            {/* Header - Custom for Auth/Success State */}
            <header className="ps-header">
                <div className="ps-brand">
                    <div className="logo-wrapper-small">
                        <UpRankLogo />
                    </div>
                    <span>UpRankAI</span>
                </div>
                <nav className="ps-nav">
                    <a href="#" className="active">Dashboard</a>
                    <a href="#">Study Plan</a>
                    <a href="#">Resources</a>
                </nav>
                <div className="ps-actions">
                    <button onClick={toggleTheme} className="icon-btn-plain">
                        {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
                    </button>
                    <button className="icon-btn-plain"><Bell size={20} /></button>
                    <button className="icon-btn-plain"><Settings size={20} /></button>
                    <div className="user-avatar-small">
                        <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Felix" alt="User" />
                    </div>
                </div>
            </header>

            <main className="ps-main">
                {/* Visual Centerpiece */}
                <div className="success-visual">
                    <div className="glow-ring-outer"></div>
                    <div className="glow-ring-inner">
                        <div className="brain-icon-wrapper">
                            <Brain size={48} color="white" />
                        </div>
                    </div>
                    {/* Decorative floating icons */}
                    <div className="float-icon icon-1">✨</div>
                    <div className="float-icon icon-2">🚀</div>
                </div>

                <div className="success-text">
                    <h1>Your Personal Success Path is Ready!</h1>
                    <p>Our Neural Core has analyzed your goals and created a precision-engineered learning trajectory just for you.</p>
                </div>

                {/* Feature Cards */}
                <div className="ps-cards-grid">
                    <div className="ps-card">
                        <div className="ps-icon-bg">
                            <Calendar size={24} color="#8b5cf6" />
                        </div>
                        <h3>{daysRemaining}-Day Schedule</h3>
                        <p>Optimized Study Timeline</p>
                    </div>

                    <div className="ps-card">
                        <div className="ps-icon-bg">
                            <BookOpen size={24} color="#8b5cf6" />
                        </div>
                        <h3>62 Focus Modules</h3>
                        <p>Targeted Subject Mastery</p>
                    </div>

                    <div className="ps-card">
                        <div className="ps-icon-bg">
                            <Bot size={24} color="#8b5cf6" />
                        </div>
                        <h3>24/7 AI Tutor</h3>
                        <p>Real-time Assistance</p>
                    </div>
                </div>

                {/* CTA */}
                <button className="enter-dashboard-btn" onClick={() => navigate('/dashboard')}>
                    Enter Dashboard <ArrowRight size={20} />
                </button>
            </main>

            <footer className="ps-footer">
                <div className="verified-badge">
                    <div className="shield-icon">🛡️</div>
                    <span>Success transition powered by Neural AI Core Engine v4.0</span>
                </div>
            </footer>
        </div>
    );
};

export default PlanSuccess;
