import React, { useState } from 'react';
import { Mail, ArrowLeft, Sparkles, Zap, Brain } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { UpRankLogo } from './Navbar';
import './ForgotPassword.css';

const ForgotPassword = () => {
    const [email, setEmail] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        navigate('/verify-otp', { state: { email } });
    };

    return (
        <div className="forgot-container">
            {/* Left Panel */}
            <div className="forgot-left">
                <div className="floating-badge badge-1">
                    <Brain size={24} color="#a855f7" />
                </div>

                <div className="left-content">
                    <h1>Unlock Your<br /><span className="highlight-text">Full Potential</span></h1>
                    <p>Our AI-driven platform adapts to your learning style, helping you master complex topics faster and ace your competitive exams.</p>

                    <div className="feature-badges">
                        <div className="pill-badge">
                            <Sparkles size={16} />
                            <span>Smart Analysis</span>
                        </div>
                        <div className="pill-badge">
                            <Zap size={16} />
                            <span>Instant Feedback</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Right Panel */}
            <div className="forgot-right">
                <div className="back-btn-container">
                    <Link to="/login" className="back-btn">
                        <ArrowLeft size={16} />
                        Back to Login
                    </Link>
                </div>

                <div className="forgot-form-wrapper">
                    <div className="center-brand">
                        <UpRankLogo />
                        <span>UpRank AI</span>
                    </div>

                    <div className="form-head">
                        <h2>Forgot Password?</h2>
                        <p>Enter the email address associated with your account and we'll send you a link to reset your password.</p>
                    </div>

                    <form className="forgot-form" onSubmit={handleSubmit}>
                        <div className="input-group-label">Email Address</div>
                        <div className="dark-input-group">
                            <input
                                type="email"
                                placeholder="name@example.com"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                            <Mail className="input-icon" size={18} />
                        </div>

                        <button className="reset-btn">Send Reset Link</button>
                    </form>

                    <p className="bottom-link">
                        Remember your password? <Link to="/login">Log in</Link>
                    </p>

                    <div className="support-link">
                        Need help? <a href="#">Contact Support</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ForgotPassword;
