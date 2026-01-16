import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Sun, Moon } from 'lucide-react';
import './App.css'; // Ensure styling is available

export const UpRankLogo = () => (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M16 2L2 9L16 16L30 9L16 2Z" stroke="#8b5cf6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M2 23L16 30L30 23" stroke="#06b6d4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M2 16L16 23L30 16" stroke="#8b5cf6" strokeWidth="2" strokeOpacity="0.5" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="16" cy="9" r="2" fill="#06b6d4" />
        <circle cx="16" cy="23" r="2" fill="#8b5cf6" />
    </svg>
);

const Navbar = () => {
    const [theme, setTheme] = useState(() => localStorage.getItem('theme') || 'dark');

    useEffect(() => {
        document.documentElement.setAttribute('data-theme', theme);
        localStorage.setItem('theme', theme);
    }, [theme]);

    const toggleTheme = () => {
        setTheme(prevTheme => prevTheme === 'dark' ? 'light' : 'dark');
    };

    return (
        <nav className="navbar">
            <div className="container nav-container">
                <Link to="/" className="logo-link">
                    <div className="logo">
                        <UpRankLogo />
                        <span>UpRank AI</span>
                    </div>
                </Link>
                <div className="nav-links">
                    <Link to="/#exams">Exams</Link>
                    <a href="/#features">Features</a>
                    <a href="/#pricing">Pricing</a>
                    <a href="/#testimonials">Testimonials</a>
                </div>
                <div className="nav-actions">
                    <button onClick={toggleTheme} className="theme-toggle" aria-label="Toggle theme">
                        {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
                    </button>
                    <Link to="/login" className="login-btn">Log In</Link>
                    <Link to="/signup" className="signup-btn">Sign Up</Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
