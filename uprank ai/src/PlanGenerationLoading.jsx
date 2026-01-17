import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Settings, HelpCircle, Sparkles, Shield, Database, Cpu, Brain } from 'lucide-react';
import { UpRankLogo } from './Navbar';
import './PlanGenerationLoading.css';

const PlanGenerationLoading = () => {
    const navigate = useNavigate();
    const [progress, setProgress] = useState(0);
    const [task, setTask] = useState("Initializing AI core...");
    const [subTask, setSubTask] = useState("Establishing secure connection...");
    const [daysRemaining, setDaysRemaining] = useState(180);
    const [theme, setTheme] = useState(() => localStorage.getItem('theme') || 'dark');

    useEffect(() => {
        document.documentElement.setAttribute('data-theme', theme);
    }, [theme]);

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

    useEffect(() => {
        // Simulate progress
        const interval = setInterval(() => {
            setProgress(prev => {
                if (prev >= 100) {
                    clearInterval(interval);
                    navigate('/plan-success');
                    return 100;
                }
                // Non-linear progress simulation
                const increment = Math.random() * 2 + 0.5;
                return Math.min(prev + increment, 100);
            });
        }, 100);

        return () => clearInterval(interval);
    }, [navigate]);

    // Update tasks based on progress
    useEffect(() => {
        if (progress < 20) {
            setTask("Analyzing your strengths...");
            setSubTask("Processing Advanced Calculus performance metrics...");
        } else if (progress < 50) {
            setTask("Structuring curriculum...");
            setSubTask("Aligning Organic Chemistry modules with exam dates...");
        } else if (progress < 80) {
            setTask(`Optimizing your ${daysRemaining}-day schedule...`);
            setSubTask("Balancing daily cognitive load distribution...");
        } else {
            setTask("Finalizing study path...");
            setSubTask("Generating day-by-day actionable insights...");
        }
    }, [progress]);

    return (
        <div className="plan-loading-container">
            {/* Header */}
            <header className="pl-header">
                <div className="pl-brand">
                    <div className="pl-logo-wrapper">
                        <UpRankLogo />
                    </div>
                    <span>UpRank AI</span>
                </div>
                <div className="pl-actions">
                    <button className="icon-btn-ghost"><Settings size={20} /></button>
                    <button className="icon-btn-ghost"><HelpCircle size={20} /></button>
                </div>
            </header>

            {/* Main Center Content */}
            <main className="pl-main">
                <div className="orb-container">
                    <div className="progress-ring-svg">
                        <svg className="progress-ring" width="300" height="300">
                            <circle
                                className="progress-ring__circle-bg"
                                stroke="rgba(255,255,255,0.05)"
                                strokeWidth="2"
                                fill="transparent"
                                r="120"
                                cx="150"
                                cy="150"
                            />
                            <circle
                                className="progress-ring__circle"
                                stroke="#8b5cf6"
                                strokeWidth="2"
                                fill="transparent"
                                r="120"
                                cx="150"
                                cy="150"
                                style={{
                                    strokeDasharray: `${2 * Math.PI * 120} ${2 * Math.PI * 120}`,
                                    strokeDashoffset: (2 * Math.PI * 120) - (progress / 100) * (2 * Math.PI * 120)
                                }}
                            />
                        </svg>
                    </div>

                    <div className="glowing-orb">
                        <div className="orb-core"></div>
                        <div className="orb-shine"></div>
                        <div className="floating-sparkles">
                            <Sparkles size={32} color="white" />
                        </div>
                    </div>

                    <div className="orb-label">
                        <span>SYNTHESIZING</span>
                    </div>
                </div>

                <div className="loading-text-content">
                    <h1>Crafting your study path...</h1>
                    <p className="sub-description">
                        Analyzing your strengths in Advanced Calculus and
                        Organic Chemistry to prioritize your {daysRemaining}-day schedule.
                    </p>
                </div>

                <div className="task-card">
                    <div className="task-header">
                        <span className="task-label">CURRENT TASK</span>
                        <span className="task-percent">{Math.round(progress)}%</span>
                    </div>
                    <div className="task-title">
                        {task}
                    </div>
                    <div className="task-progress-track">
                        <div
                            className="task-progress-fill"
                            style={{ width: `${progress}%` }}
                        ></div>
                    </div>
                    <div className="task-footer">
                        <div className="time-est">
                            <ClockIcon size={12} />
                            <span>Estimated time remaining: {Math.max(0, Math.ceil((100 - progress) / 5))} seconds</span>
                        </div>
                    </div>
                </div>
            </main>

            {/* Footer */}
            <footer className="pl-footer">
                <div className="footer-item">
                    <Shield size={14} /> <span>SECURE AI PROCESSING</span>
                </div>
                <div className="footer-item">
                    <Database size={14} /> <span>VERIFIED CONTENT</span>
                </div>
                <div className="footer-item">
                    <Brain size={14} /> <span>LLM ENHANCED</span>
                </div>
            </footer>
        </div>
    );
};

const ClockIcon = ({ size }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"></circle>
        <polyline points="12 6 12 12 16 14"></polyline>
    </svg>
);

export default PlanGenerationLoading;
