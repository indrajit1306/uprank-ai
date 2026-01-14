import React, { useState } from 'react';
import { Eye, EyeOff, Check, User, Mail, Lock } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { UpRankLogo } from './Navbar'; // Reuse logo
import './Signup.css';

const Signup = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        password: '',
        confirmPassword: '',
        agree: false
    });
    const navigate = useNavigate();

    const strength = (formData.password.length / 12) * 100; // Simple fake strength calculation

    const handleSubmit = (e) => {
        e.preventDefault();
        // In a real app, validation and api call here
        navigate('/exam-selection');
    }

    return (
        <div className="signup-container">
            {/* Left Panel */}
            <div className="signup-left">
                <div className="brand-header">
                    <div className="logo-flex">
                        <UpRankLogo />
                        <span>UpRank AI</span>
                    </div>
                </div>

                <div className="visual-content">
                    <div className="hero-image-container">
                        <img src="/signup-brain.png" alt="Digital Brain" className="signup-hero-img" />
                    </div>
                </div>

                <div className="left-footer">
                    <h1>Master Your Exams with AI Precision</h1>
                    <p>Join a community of high achievers using predictive analytics to focus on what matters most.</p>

                    <div className="social-proof">
                        <div className="avatars">
                            <span className="avatar">👩</span>
                            <span className="avatar">👨</span>
                            <span className="avatar">👩‍🦱</span>
                            <div className="avatar-count">+2k</div>
                        </div>
                        <div className="ratings">
                            <div className="stars">★★★★★</div>
                            <span>Trusted by students worldwide</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Right Panel */}
            <div className="signup-right">
                <div className="top-nav">
                    <span>Already a member? <Link to="/login">Log in</Link></span>
                </div>

                <div className="signup-form-wrapper">
                    <div className="form-header">
                        <h2>Create your account</h2>
                        <p>Start your journey to academic excellence today.</p>
                    </div>

                    <div className="social-signup">
                        <button className="social-btn-dark">
                            <img src="https://www.svgrepo.com/show/475656/google-color.svg" alt="Google" width="18" />
                            Google
                        </button>
                        <button className="social-btn-dark">
                            <img src="https://www.svgrepo.com/show/448225/github.svg" alt="GitHub" width="18" style={{ filter: 'invert(1)' }} />
                            GitHub
                        </button>
                    </div>

                    <div className="divider-text">Or sign up with email</div>

                    <form className="signup-form" onSubmit={handleSubmit}>
                        <div className="form-row">
                            <label>Full Name</label>
                            <div className="input-group">
                                <input type="text" placeholder="Jane Doe" className="dark-input" />
                                <User size={16} className="input-icon" />
                            </div>
                        </div>

                        <div className="form-row">
                            <label>Email Address</label>
                            <div className="input-group">
                                <input type="email" placeholder="student@example.com" className="dark-input" />
                                <Mail size={16} className="input-icon" />
                            </div>
                        </div>

                        <div className="form-row">
                            <label>Password</label>
                            <div className="input-group">
                                <input
                                    type={showPassword ? "text" : "password"}
                                    placeholder="••••••••"
                                    className="dark-input"
                                    value={formData.password}
                                    onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                                />
                                <button type="button" className="toggle-btn" onClick={() => setShowPassword(!showPassword)}>
                                    {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                                </button>
                            </div>
                            <div className="strength-bar-bg">
                                <div className="strength-bar-fill" style={{ width: `${Math.min(strength, 100)}%` }}></div>
                            </div>
                            <div className="strength-label">
                                {strength < 40 ? 'Weak' : strength < 80 ? 'Medium' : 'Strong'}
                            </div>
                        </div>

                        <div className="form-row">
                            <label>Confirm Password</label>
                            <div className="input-group">
                                <input type="password" placeholder="••••••••" className="dark-input" />
                                <Lock size={16} className="input-icon" />
                            </div>
                        </div>

                        <div className="checkbox-row">
                            <input type="checkbox" id="terms" />
                            <label htmlFor="terms">I agree to the <a href="#">Terms of Service</a> and <a href="#">Privacy Policy</a>.</label>
                        </div>

                        <button type="submit" className="create-account-btn">Create Account</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Signup;
