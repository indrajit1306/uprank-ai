import React, { useState } from 'react';
import { Eye, EyeOff, Sparkles } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import Navbar from './Navbar';
import './Login.css';

const Login = () => {
    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate();

    return (
        <>
            <Navbar />
            <div className="login-container">
                <div className="login-content">
                    <div className="login-left">
                        <div className="text-content">
                            <h1>Welcome Back<span className="dot">.</span></h1>
                            <p>Log in to continue your personalized exam preparation journey powered by neural networks.</p>
                        </div>

                        <div className="neural-card">
                            <img src="/neural-network.png" alt="AI Neural Network" className="neural-img" />
                            <div className="ai-center-text">AI</div>
                            <div className="ai-status">
                                <Sparkles size={14} color="#a855f7" />
                                <span>AI Analysis Active</span>
                            </div>
                            <div className="floating-node node-1"></div>
                            <div className="floating-node node-2"></div>
                            <div className="floating-node node-3"></div>
                        </div>
                    </div>

                    <div className="login-right">
                        <div className="form-box">
                            <h2>Sign In</h2>
                            <p className="subtitle">Enter your credentials to access your dashboard.</p>

                            <div className="social-buttons">
                                <button className="social-btn">
                                    <img src="https://www.svgrepo.com/show/475656/google-color.svg" alt="Google" width="20" />
                                    Google
                                </button>
                                <button className="social-btn">
                                    <img src="https://www.svgrepo.com/show/448225/github.svg" alt="GitHub" width="20" className="github-icon" />
                                    GitHub
                                </button>
                            </div>

                            <div className="divider">
                                <span>OR CONTINUE WITH</span>
                            </div>

                            <form className="login-form" onSubmit={(e) => {
                                e.preventDefault();
                                // In a real app, perform auth check here
                                navigate('/exam-selection');
                            }}>
                                <div className="form-group">
                                    <label>Email Address</label>
                                    <input type="email" placeholder="student@example.com" />
                                </div>

                                <div className="form-group">
                                    <label>Password</label>
                                    <div className="input-wrapper">
                                        <input
                                            type={showPassword ? "text" : "password"}
                                            placeholder="Enter your password"
                                        />
                                        <button
                                            type="button"
                                            className="toggle-pass"
                                            onClick={() => setShowPassword(!showPassword)}
                                        >
                                            {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                                        </button>
                                    </div>
                                    <div className="forgot-pass">
                                        <Link to="/forgot-password">Forgot Password?</Link>
                                    </div>
                                </div>

                                <button type="submit" className="login-submit-btn">Log In</button>
                            </form>

                            <p className="switch-auth">
                                Don't have an account? <Link to="/signup">Sign Up</Link>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Login;
