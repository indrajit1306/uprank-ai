import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Home, LayoutDashboard, BookOpen, Clock, Activity, FileText, Settings, LogOut, ChevronRight } from 'lucide-react';
import './GlobalSidebar.css';

const GlobalSidebar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const sidebarRef = useRef(null);
    const location = useLocation();

    const toggleSidebar = () => setIsOpen(!isOpen);

    // Close sidebar when clicking outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (sidebarRef.current && !sidebarRef.current.contains(event.target) && isOpen) {
                setIsOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, [isOpen]);

    // Close sidebar on route change
    useEffect(() => {
        setIsOpen(false);
    }, [location]);

    const menuItems = [
        { path: '/', label: 'Landing Page', icon: Home },
        { path: '/dashboard', label: 'Student Dashboard', icon: LayoutDashboard },
        { path: '/exam-selection', label: 'Exam Selection', icon: Settings },
        { path: '/explore-exams', label: 'Explore Exams', icon: BookOpen },

        // Onboarding Flow
        { section: 'Onboarding' },
        { path: '/onboarding/path', label: '1. Path Selection' },
        { path: '/onboarding/timeline', label: '2. Timeline' },
        { path: '/onboarding/rhythm', label: '3. Daily Rhythm' },
        { path: '/onboarding/pulse', label: '4. Pulse Check' },
        { path: '/onboarding/launchpad', label: '5. Launchpad' },

        // Core Features
        { section: 'Features' },
        { path: '/smart-study-plan', label: 'Smart Study Plan', icon: Clock },
        { path: '/mock-test', label: 'Mock Test Interface', icon: FileText },
        { path: '/test-result', label: 'Test Results', icon: Activity },
        { path: '/analytics', label: 'Performance Analytics', icon: Activity },

        // Auth Pages (Maybe less important to highlight but user asked for 'every page')
        { section: 'Authentication' },
        { path: '/login', label: 'Login' },
        { path: '/signup', label: 'Signup' },
    ];

    return (
        <>
            {/* Floating Trigger Button */}
            <button
                className={`global-sidebar-trigger ${isOpen ? 'hidden' : ''}`}
                onClick={toggleSidebar}
                aria-label="Open Menu"
            >
                <Menu size={24} />
            </button>

            {/* Sidebar Overlay */}
            <div className={`sidebar-overlay ${isOpen ? 'active' : ''}`} />

            {/* Sidebar Container */}
            <div ref={sidebarRef} className={`global-sidebar ${isOpen ? 'open' : ''}`}>
                <div className="sidebar-header">
                    <span className="sidebar-title">UpRank AI</span>
                    <button className="close-btn" onClick={toggleSidebar}>
                        <X size={24} />
                    </button>
                </div>

                <div className="sidebar-content">
                    <nav className="sidebar-nav">
                        {menuItems.map((item, index) => {
                            if (item.section) {
                                return (
                                    <div key={index} className="nav-section-label">
                                        {item.section}
                                    </div>
                                );
                            }

                            const Icon = item.icon || ChevronRight;
                            const isActive = location.pathname === item.path;

                            return (
                                <Link
                                    key={index}
                                    to={item.path}
                                    className={`nav-item ${isActive ? 'active' : ''}`}
                                >
                                    <Icon size={18} className="nav-icon" />
                                    <span className="nav-label">{item.label}</span>
                                </Link>
                            );
                        })}
                    </nav>
                </div>

                <div className="sidebar-footer">
                    <div className="sidebar-user">
                        <div className="user-avatar">JD</div>
                        <div className="user-info">
                            <span className="name">John Doe</span>
                            <span className="role">Student</span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default GlobalSidebar;
