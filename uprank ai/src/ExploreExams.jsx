import React, { useState } from 'react';
import {
    Search, Bell, User, Filter, ChevronDown, Check,
    Clock, Users, BarChart2, Eye, BookOpen, Briefcase, Globe, Scale
} from 'lucide-react';
import { UpRankLogo } from './Navbar';
import { Link, useNavigate } from 'react-router-dom';
import './ExploreExams.css';

const ExploreExams = () => {
    const navigate = useNavigate();
    // State for filters (simplified for visuals)
    const [filters, setFilters] = useState({
        engineering: true,
        medical: false,
        management: false,
        civilServices: false,
        studyAbroad: false,
        advanced: false,
        moderate: false,
        basic: false,
        shortTerm: false,
        mediumTerm: false,
        longTerm: false
    });

    const [visibleCount, setVisibleCount] = useState(6);

    const categories = [
        { name: 'Engineering', count: 12, key: 'engineering' },
        { name: 'Medical', count: 8, key: 'medical' },
        { name: 'Management', count: 6, key: 'management' },
        { name: 'Civil Services', count: 4, key: 'civilServices' },
        { name: 'Study Abroad', count: 10, key: 'studyAbroad' }
    ];

    const allExams = [
        {
            title: "JEE Advanced 2024",
            desc: "India's premier engineering entrance test for IIT admissions.",
            enrolled: "150k+",
            duration: "12 Months",
            difficulty: "Hard",
            tags: ["Popular", "AI Recommended"],
            icon: <BookOpen color="#60a5fa" />,
            color: "rgba(96, 165, 250, 0.1)"
        },
        {
            title: "NEET UG 2024",
            desc: "Unified medical entrance exam for MBBS and BDS aspirants across top colleges.",
            enrolled: "2.1M+",
            duration: "1 Year",
            difficulty: "Medium",
            tags: [],
            icon: <Briefcase color="#34d399" />,
            color: "rgba(52, 211, 153, 0.1)"
        },
        {
            title: "GMAT Focus Edition",
            desc: "Streamlined graduate management admission test focusing on business skills.",
            enrolled: "85k+",
            duration: "3 Months",
            difficulty: "Medium",
            tags: ["AI Recommended"],
            icon: <BarChart2 color="#a78bfa" />,
            color: "rgba(167, 139, 250, 0.1)"
        },
        {
            title: "UPSC Civil Services",
            desc: "One of the most competitive exams in the world for Indian Administrative Services.",
            enrolled: "1M+",
            duration: "18 Months",
            difficulty: "Ultra",
            tags: [],
            icon: <BookOpen color="#60a5fa" />,
            color: "rgba(96, 165, 250, 0.1)"
        },
        {
            title: "IELTS Academic",
            desc: "English language proficiency test for study and work in English-speaking countries.",
            enrolled: "3M+",
            duration: "1 Month",
            difficulty: "Easy",
            tags: [],
            icon: <Globe color="#f87171" />,
            color: "rgba(248, 113, 113, 0.1)"
        },
        {
            title: "CLAT 2025",
            desc: "Common Law Admission Test for entrance to national law universities.",
            enrolled: "60k+",
            duration: "6 Months",
            difficulty: "Medium",
            tags: [],
            icon: <Scale color="#fbbf24" />,
            color: "rgba(251, 191, 36, 0.1)"
        },
        {
            title: "GATE CS & IT",
            desc: "Graduate Aptitude Test in Engineering for postgraduate admissions.",
            enrolled: "800k+",
            duration: "10 Months",
            difficulty: "Hard",
            tags: ["Popular"],
            icon: <BookOpen color="#fbbf24" />,
            color: "rgba(251, 191, 36, 0.1)"
        },
        {
            title: "CAT 2024",
            desc: "Common Admission Test for admission into IIMs and top B-schools.",
            enrolled: "2.5L+",
            duration: "8 Months",
            difficulty: "Hard",
            tags: [],
            icon: <BarChart2 color="#a78bfa" />,
            color: "rgba(167, 139, 250, 0.1)"
        },
        {
            title: "SAT Digital",
            desc: "Standardized test widely used for college admissions in the United States.",
            enrolled: "2M+",
            duration: "4 Months",
            difficulty: "Medium",
            tags: [],
            icon: <Globe color="#34d399" />,
            color: "rgba(52, 211, 153, 0.1)"
        },
        {
            title: "GRE General Test",
            desc: "Admissions test for graduate and business schools worldwide.",
            enrolled: "500k+",
            duration: "5 Months",
            difficulty: "Medium",
            tags: [],
            icon: <BookOpen color="#60a5fa" />,
            color: "rgba(96, 165, 250, 0.1)"
        },
        {
            title: "TOEFL iBT",
            desc: "English language test for university study, work and immigration.",
            enrolled: "1.5M+",
            duration: "2 Months",
            difficulty: "Running",
            tags: [],
            icon: <Globe color="#f87171" />,
            color: "rgba(248, 113, 113, 0.1)"
        },
        {
            title: "NDA & NA",
            desc: "National Defence Academy & Naval Academy Examination.",
            enrolled: "4L+",
            duration: "6 Months",
            difficulty: "Hard",
            tags: [],
            icon: <Briefcase color="#fbbf24" />,
            color: "rgba(251, 191, 36, 0.1)"
        },
        {
            title: "CA Foundation",
            desc: "Entry-level exam for the Chartered Accountancy course in India.",
            enrolled: "1L+",
            duration: "6 Months",
            difficulty: "Hard",
            tags: [],
            icon: <BarChart2 color="#f87171" />,
            color: "rgba(248, 113, 113, 0.1)"
        },
        {
            title: "CFA Level 1",
            desc: "Global professional credential in the investment management profession.",
            enrolled: "200k+",
            duration: "6 Months",
            difficulty: "Hard",
            tags: ["Popular"],
            icon: <BarChart2 color="#a78bfa" />,
            color: "rgba(167, 139, 250, 0.1)"
        },
        {
            title: "SSC CGL",
            desc: "Combined Graduate Level Examination for government jobs in India.",
            enrolled: "3M+",
            duration: "1 Year",
            difficulty: "Medium",
            tags: [],
            icon: <Briefcase color="#60a5fa" />,
            color: "rgba(96, 165, 250, 0.1)"
        },
        {
            title: "IBPS PO",
            desc: "Probationary Officer exam for recruitment in public sector banks.",
            enrolled: "1.5M+",
            duration: "6 Months",
            difficulty: "Medium",
            tags: [],
            icon: <Briefcase color="#34d399" />,
            color: "rgba(52, 211, 153, 0.1)"
        },
        {
            title: "RRB NTPC",
            desc: "Non-Technical Popular Categories recruitment by Railway Recruitment Board.",
            enrolled: "10M+",
            duration: "8 Months",
            difficulty: "Easy",
            tags: [],
            icon: <Briefcase color="#fbbf24" />,
            color: "rgba(251, 191, 36, 0.1)"
        },
        {
            title: "XAT 2024",
            desc: "Xavier Aptitude Test for admission to XLRI and other top B-schools.",
            enrolled: "1L+",
            duration: "6 Months",
            difficulty: "Hard",
            tags: [],
            icon: <BarChart2 color="#a78bfa" />,
            color: "rgba(167, 139, 250, 0.1)"
        },
        {
            title: "SNAP Test",
            desc: "Symbiosis National Aptitude Test for MBA admission.",
            enrolled: "60k+",
            duration: "4 Months",
            difficulty: "Medium",
            tags: [],
            icon: <BarChart2 color="#f87171" />,
            color: "rgba(248, 113, 113, 0.1)"
        },
        {
            title: "NMAT by GMAC",
            desc: "Candidate-friendly MBA entrance exam for NMIMS and others.",
            enrolled: "80k+",
            duration: "3 Months",
            difficulty: "Medium",
            tags: [],
            icon: <BarChart2 color="#34d399" />,
            color: "rgba(52, 211, 153, 0.1)"
        },
        {
            title: "LSAT India",
            desc: "Law School Admission Test for admission to top law colleges.",
            enrolled: "15k+",
            duration: "4 Months",
            difficulty: "Hard",
            tags: [],
            icon: <Scale color="#60a5fa" />,
            color: "rgba(96, 165, 250, 0.1)"
        },
        {
            title: "AILET 2025",
            desc: "All India Law Entrance Test for NLU Delhi.",
            enrolled: "20k+",
            duration: "1 Year",
            difficulty: "Hard",
            tags: [],
            icon: <Scale color="#fbbf24" />,
            color: "rgba(251, 191, 36, 0.1)"
        },
        {
            title: "CMAT 2024",
            desc: "Common Management Admission Test by NTA.",
            enrolled: "70k+",
            duration: "5 Months",
            difficulty: "Medium",
            tags: [],
            icon: <BarChart2 color="#a78bfa" />,
            color: "rgba(167, 139, 250, 0.1)"
        },
        {
            title: "MAT May 2024",
            desc: "Management Aptitude Test for MBA pgdm admissions.",
            enrolled: "2L+",
            duration: "3 Months",
            difficulty: "Easy",
            tags: [],
            icon: <BarChart2 color="#f87171" />,
            color: "rgba(248, 113, 113, 0.1)"
        },
        {
            title: "CTET 2024",
            desc: "Central Teacher Eligibility Test for teaching jobs in schools.",
            enrolled: "2.5M+",
            duration: "4 Months",
            difficulty: "Medium",
            tags: [],
            icon: <BookOpen color="#34d399" />,
            color: "rgba(52, 211, 153, 0.1)"
        },
        {
            title: "UGC NET",
            desc: "Determine eligibility for Assistant Professor or JRF.",
            enrolled: "8L+",
            duration: "6 Months",
            difficulty: "Hard",
            tags: [],
            icon: <BookOpen color="#60a5fa" />,
            color: "rgba(96, 165, 250, 0.1)"
        },
        {
            title: "CSIR NET",
            desc: "National Eligibility Test for Junior Research Fellowship in Science.",
            enrolled: "2L+",
            duration: "8 Months",
            difficulty: "Ultra",
            tags: ["AI Recommended"],
            icon: <BookOpen color="#a78bfa" />,
            color: "rgba(167, 139, 250, 0.1)"
        },
        {
            title: "GATE Mechanical",
            desc: "Graduate Aptitude Test in Engineering for ME aspirants.",
            enrolled: "1.5L+",
            duration: "1 Year",
            difficulty: "Hard",
            tags: [],
            icon: <Briefcase color="#fbbf24" />,
            color: "rgba(251, 191, 36, 0.1)"
        },
        {
            title: "GATE Electrical",
            desc: "Graduate Aptitude Test in Engineering for EE aspirants.",
            enrolled: "1L+",
            duration: "1 Year",
            difficulty: "Hard",
            tags: [],
            icon: <Briefcase color="#f87171" />,
            color: "rgba(248, 113, 113, 0.1)"
        },
        {
            title: "Indian Engg Services",
            desc: "UPSC ESE exam for technical officers in Govt of India.",
            enrolled: "2L+",
            duration: "18 Months",
            difficulty: "Ultra",
            tags: ["Popular"],
            icon: <Briefcase color="#60a5fa" />,
            color: "rgba(96, 165, 250, 0.1)"
        },
        {
            title: "SBI PO",
            desc: "Recruitment for Probationary Officers in State Bank of India.",
            enrolled: "1M+",
            duration: "6 Months",
            difficulty: "Hard",
            tags: ["Popular"],
            icon: <Briefcase color="#34d399" />,
            color: "rgba(52, 211, 153, 0.1)"
        },
        {
            title: "RBI Grade B",
            desc: "Recruitment of Officers in Grade 'B' (General) in RBI.",
            enrolled: "2L+",
            duration: "1 Year",
            difficulty: "Hard",
            tags: [],
            icon: <Briefcase color="#a78bfa" />,
            color: "rgba(167, 139, 250, 0.1)"
        },
        {
            title: "BITSAT 2024",
            desc: "Entrance exam for BITS Pilani, Goa and Hyderabad campuses.",
            enrolled: "3L+",
            duration: "6 Months",
            difficulty: "Medium",
            tags: [],
            icon: <BookOpen color="#fbbf24" />,
            color: "rgba(251, 191, 36, 0.1)"
        },
        {
            title: "VITEEE 2024",
            desc: "VIT Engineering Entrance Examination.",
            enrolled: "2L+",
            duration: "6 Months",
            difficulty: "Medium",
            tags: [],
            icon: <BookOpen color="#f87171" />,
            color: "rgba(248, 113, 113, 0.1)"
        },
        {
            title: "SRMJEEE 2024",
            desc: "Joint Entrance Examination for SRM Institute.",
            enrolled: "1.5L+",
            duration: "4 Months",
            difficulty: "Easy",
            tags: [],
            icon: <BookOpen color="#60a5fa" />,
            color: "rgba(96, 165, 250, 0.1)"
        },
        {
            title: "NEET PG",
            desc: "Eligibility-cum-ranking examination for Post Graduate Medical Courses.",
            enrolled: "1.8L+",
            duration: "1 Year",
            difficulty: "Hard",
            tags: [],
            icon: <Briefcase color="#34d399" />,
            color: "rgba(52, 211, 153, 0.1)"
        },
        {
            title: "USMLE Step 1",
            desc: "United States Medical Licensing Examination.",
            enrolled: "50k+",
            duration: "1 Year",
            difficulty: "Hard",
            tags: ["AI Recommended"],
            icon: <Briefcase color="#a78bfa" />,
            color: "rgba(167, 139, 250, 0.1)"
        },
        {
            title: "PLAB 1",
            desc: "Professional and Linguistic Assessments Board test for UK.",
            enrolled: "20k+",
            duration: "6 Months",
            difficulty: "Medium",
            tags: [],
            icon: <Briefcase color="#fbbf24" />,
            color: "rgba(251, 191, 36, 0.1)"
        },
        {
            title: "FMGE",
            desc: "Foreign Medical Graduates Examination for India practice.",
            enrolled: "30k+",
            duration: "6 Months",
            difficulty: "Hard",
            tags: [],
            icon: <Briefcase color="#f87171" />,
            color: "rgba(248, 113, 113, 0.1)"
        }
    ];

    const visibleExams = allExams.slice(0, visibleCount);

    const handleLoadMore = () => {
        setVisibleCount(prev => Math.min(prev + 6, allExams.length));
    };

    const toggleFilter = (key) => {
        setFilters(prev => ({ ...prev, [key]: !prev[key] }));
    };

    return (
        <div className="explore-container">
            {/* Navbar Reuse */}
            <nav className="dashboard-nav">
                <div className="nav-left">
                    <UpRankLogo />
                    <span className="brand-name">UpRank AI</span>
                </div>
                <div className="nav-center">
                    <Link to="/exam-selection">Dashboard</Link>
                    <a href="#" className="active">Exams</a>
                    <a href="#">My Progress</a>
                    <a href="#">Community</a>
                </div>
                <div className="nav-right">
                    <button className="icon-btn"><Bell size={20} /></button>
                    <div className="user-profile-pic">
                        <User size={20} />
                    </div>
                </div>
            </nav>

            <div className="explore-content">
                <div className="breadcrumbs">
                    <span>Home</span> <span className="separator">›</span> <span className="current">Explore Exams</span>
                </div>

                <div className="explore-header">
                    <h1>Explore All Exams</h1>
                    <p>Discover over 40+ courses tailored for your success.</p>
                </div>

                <div className="search-area">
                    <div className="large-search-bar">
                        <Search className="search-icon" size={20} />
                        <input type="text" placeholder="Search for your dream exam (e.g., UPSC, JEE, SAT...)" />
                    </div>
                    <div className="trending-tags">
                        <span>TRENDING:</span>
                        <button className="tag-btn">JEE 2024</button>
                        <button className="tag-btn">SAT Practice</button>
                        <button className="tag-btn">UPSC Prelims</button>
                        <button className="tag-btn">Medical Entrance</button>
                    </div>
                </div>

                <div className="explore-layout">
                    {/* Sidebar Filters */}
                    <aside className="filters-sidebar">
                        <div className="filter-group">
                            <h3>CATEGORIES</h3>
                            {categories.map(cat => (
                                <div className="checkbox-item" key={cat.key} onClick={() => toggleFilter(cat.key)}>
                                    <div className={`custom-checkbox ${filters[cat.key] ? 'checked' : ''}`}>
                                        {filters[cat.key] && <Check size={12} />}
                                    </div>
                                    <span className="label-text">{cat.name}</span>
                                    <span className="count-badge">{cat.count}</span>
                                </div>
                            ))}
                        </div>

                        <div className="filter-group">
                            <h3>EXAM DIFFICULTY</h3>
                            {['Advanced', 'Moderate', 'Basic'].map(diff => {
                                const key = diff.toLowerCase();
                                return (
                                    <div className="checkbox-item" key={key} onClick={() => toggleFilter(key)}>
                                        <div className={`custom-checkbox ${filters[key] ? 'checked' : ''}`}>
                                            {filters[key] && <Check size={12} />}
                                        </div>
                                        <span className="label-text">{diff}</span>
                                    </div>
                                );
                            })}
                        </div>

                        <div className="filter-group">
                            <h3>STUDY DURATION</h3>
                            {['Short term (1-3 mo)', 'Medium term (3-6 mo)', 'Long term (6+ mo)'].map((dur, i) => {
                                const key = ['shortTerm', 'mediumTerm', 'longTerm'][i];
                                return (
                                    <div className="checkbox-item" key={key} onClick={() => toggleFilter(key)}>
                                        <div className={`custom-checkbox ${filters[key] ? 'checked' : ''}`}>
                                            {filters[key] && <Check size={12} />}
                                        </div>
                                        <span className="label-text">{dur}</span>
                                    </div>
                                );
                            })}
                        </div>

                        <div className="ai-quiz-card">
                            <div className="sparkles-icon">✨</div>
                            <h4>Need a recommendation?</h4>
                            <p>Let our AI analyze your profile and suggest the best exams for your career goals.</p>
                            <button className="quiz-btn">Take AI Quiz</button>
                        </div>
                    </aside>

                    {/* Exam Grid */}
                    <div className="exam-cards-grid">
                        {visibleExams.map((exam, index) => (
                            <div className="exam-detail-card" key={index}>
                                <div className="card-top-row">
                                    <div className="icon-wrapper" style={{ background: exam.color }}>
                                        {exam.icon}
                                    </div>
                                    <div className="card-badges">
                                        {exam.tags.includes('Popular') && <span className="badge popular">Popular</span>}
                                        {exam.tags.includes('AI Recommended') && <span className="badge ai">AI Recommended</span>}
                                    </div>
                                </div>

                                <h3>{exam.title}</h3>
                                <p className="desc">{exam.desc}</p>

                                <div className="exam-meta">
                                    <div className="meta-item">
                                        <Users size={14} /> <span>{exam.enrolled}</span>
                                    </div>
                                    <div className="meta-item">
                                        <Clock size={14} /> <span>{exam.duration}</span>
                                    </div>
                                    <div className="meta-item">
                                        <BarChart2 size={14} /> <span>{exam.difficulty}</span>
                                    </div>
                                </div>

                                <div className="card-actions">
                                    <button className="start-btn" onClick={() => navigate('/onboarding/path')}>Start Prep</button>
                                    <button className="view-btn"><Eye size={18} /></button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="load-more-container">
                    {visibleCount < allExams.length ? (
                        <button className="load-more-btn" onClick={handleLoadMore}>
                            Load More Exams <ChevronDown size={16} />
                        </button>
                    ) : (
                        <p style={{ color: '#64748b' }}>No more exams to load.</p>
                    )}
                    <p>Showing {visibleCount} of {allExams.length} exams</p>
                </div>
            </div>

            <footer className="simple-footer" style={{ marginTop: '4rem' }}>
                <div className="footer-left">
                    <UpRankLogo />
                    <span style={{ marginLeft: '8px', color: '#94a3b8', fontSize: '0.9rem' }}>© 2024 UpRank AI Inc. All rights reserved.</span>
                </div>
                <div className="footer-links">
                    <a href="#">Privacy Policy</a>
                    <a href="#">Terms of Service</a>
                    <a href="#">Help Center</a>
                </div>
            </footer>
        </div>
    );
};

export default ExploreExams;
