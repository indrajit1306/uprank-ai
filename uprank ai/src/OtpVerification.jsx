import React, { useState, useRef, useEffect } from 'react';
import { useLocation, Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, ShieldCheck, Lock } from 'lucide-react';
import { UpRankLogo } from './Navbar';
import './OtpVerification.css';

const OtpVerification = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const email = location.state?.email || "johndoe@example.com"; // Fallback if direct access

    const [otp, setOtp] = useState(['', '', '', '', '', '']);
    const [timeLeft, setTimeLeft] = useState(600); // 10 minutes in seconds for example
    const inputsRef = useRef([]);
    const [theme, setTheme] = useState(() => localStorage.getItem('theme') || 'dark');

    useEffect(() => {
        document.documentElement.setAttribute('data-theme', theme);
        localStorage.setItem('theme', theme);
    }, [theme]);

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
        }, 1000);
        return () => clearInterval(timer);
    }, []);

    const handleChange = (element, index) => {
        if (isNaN(element.value)) return false;

        const newOtp = [...otp];
        newOtp[index] = element.value;
        setOtp(newOtp);

        // Focus next input
        if (element.value && index < 5) {
            inputsRef.current[index + 1].focus();
        }
    };

    const handleKeyDown = (e, index) => {
        if (e.key === "Backspace" && !otp[index] && index > 0) {
            inputsRef.current[index - 1].focus();
        }
    };

    const formatTime = (seconds) => {
        const mins = Math.floor(seconds / 60);
        const secs = seconds % 60;
        return {
            mins: mins.toString().padStart(2, '0'),
            secs: secs.toString().padStart(2, '0')
        };
    };

    const { mins, secs } = formatTime(timeLeft);

    return (
        <div className="otp-container">
            <header className="otp-header">
                <div className="logo-section">
                    <UpRankLogo />
                    <span>UpRank AI</span>
                </div>
                <div className="header-links">
                    <a href="#">Help Center</a>
                    <a href="#">Contact Support</a>
                </div>
            </header>

            <div className="otp-card-wrapper">
                <div className="otp-card">
                    <div className="icon-badge">
                        <ShieldCheck size={28} color="#ffffff" />
                    </div>

                    <h2>Check your inbox</h2>
                    <p className="otp-instruction">
                        We've sent a 6-digit verification code to<br />
                        <strong>{email}</strong>. Please enter it below.
                    </p>

                    <div className="otp-inputs">
                        {otp.map((data, index) => (
                            <input
                                key={index}
                                type="text"
                                maxLength="1"
                                value={data}
                                onChange={(e) => handleChange(e.target, index)}
                                onKeyDown={(e) => handleKeyDown(e, index)}
                                ref={(el) => inputsRef.current[index] = el}
                            />
                        ))}
                    </div>

                    <div className="timer-display">
                        <div className="time-box">
                            <span className="time-val">{mins}</span>
                            <span className="time-label">MINUTES</span>
                        </div>
                        <span className="colon">:</span>
                        <div className="time-box">
                            <span className="time-val">{secs}</span>
                            <span className="time-label">SECONDS</span>
                        </div>
                    </div>

                    <button className="verify-btn">Verify Account</button>

                    <p className="resend-text">
                        Didn't receive the code? <button className="resend-link">Resend Code</button>
                    </p>

                    <Link to="/login" className="back-login-link">
                        <ArrowLeft size={16} /> Back to Login
                    </Link>

                    <div className="secure-footer">
                        <Lock size={14} />
                        <span>SECURELY ENCRYPTED AUTHENTICATION</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OtpVerification;
