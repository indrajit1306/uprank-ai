import React, { useState } from 'react';
import {
    Search, Bell, User, BookOpen, Briefcase, Globe, Scale,
    Monitor, PenTool, ChevronDown, MoreHorizontal, Plus, Sun, Moon
} from 'lucide-react';
import { UpRankLogo } from './Navbar';
import { useNavigate } from 'react-router-dom';
import './ExamSelection.css';

const ExamSelection = () => {
    const [activeCategory, setActiveCategory] = useState('All Exams');
    const [theme, setTheme] = useState(() => localStorage.getItem('theme') || 'dark');
    const [searchQuery, setSearchQuery] = useState('');
    const navigate = useNavigate();

    React.useEffect(() => {
        document.documentElement.setAttribute('data-theme', theme);
        localStorage.setItem('theme', theme);
    }, [theme]);

    const toggleTheme = () => {
        setTheme(prevTheme => prevTheme === 'dark' ? 'light' : 'dark');
    };

    const handleSearch = () => {
        // Scroll to explore section when search is clicked
        const exploreSection = document.querySelector('.explore-section');
        if (exploreSection) {
            exploreSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    };

    const categories = [
        "All Exams", "Engineering", "Medical", "Management",
        "Civil Services", "Study Abroad", "K-12 School"
    ];

    const recommendedExams = [
        {
            title: "JEE Advanced",
            subtitle: "Engineering Entrance",
            enrolled: "20k+",
            duration: "6 Months",
            tag: "Popular",
            tagColor: "orange",
            gradientClass: "gradient-slate",
            image: "/jee-bg.png" // Placeholder or generated later
        },
        {
            title: "NEET UG",
            subtitle: "Medical Entrance",
            enrolled: "45k+",
            duration: "1 Year",
            tag: "AI Recommended",
            tagColor: "purple",
            gradientClass: "gradient-indigo",
            image: "/neet-bg.png"
        },
        {
            title: "GMAT Focus",
            subtitle: "Management",
            enrolled: "8k+",
            duration: "3 Months",
            tag: null,
            gradientClass: "gradient-emerald",
            image: "/gmat-bg.png"
        }
    ];

    const exploreExams = [
        { icon: <BookOpen color="#60a5fa" />, title: "Civil Services (CSE)", desc: "Comprehensive prep for Prelims & Mains with AI essay analysis.", tag: "UPSC" },
        { icon: <Globe color="#34d399" />, title: "IELTS Academic", desc: "Speaking and writing practice with real-time AI feedback.", tag: "IELTS" },
        { icon: <Scale color="#f472b6" />, title: "CLAT 2025", desc: "Legal reasoning and aptitude tests for law aspirants.", tag: "CLAT" },
        { icon: <Monitor color="#fbbf24" />, title: "GATE CS & IT", desc: "Advanced engineering concepts for post-grad admissions.", tag: "GATE" },
        { icon: <PenTool color="#818cf8" />, title: "Digital SAT", desc: "Preparation for undergraduate study in the US.", tag: "SAT" },
        { icon: <BookOpen color="#a78bfa" />, title: "GRE General", desc: "Verbal and Quantitative reasoning for grad schools.", tag: "GRE" },
        { icon: <Briefcase color="#f87171" />, title: "NATA Architecture", desc: "Drawing and aesthetic sensitivity tests for architecture.", tag: "NATA" },
    ];

    // Filter exams based on search query
    const filteredExams = searchQuery.trim()
        ? exploreExams.filter(exam =>
            exam.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            exam.tag.toLowerCase().includes(searchQuery.toLowerCase()) ||
            exam.desc.toLowerCase().includes(searchQuery.toLowerCase())
        )
        : exploreExams;

    return (
        <div className="exam-selection-container">
            {/* Navbar */}
            <nav className="dashboard-nav">
                <div className="nav-left">
                    <UpRankLogo />
                    <span className="brand-name">UpRank AI</span>
                </div>
                <div className="nav-center">
                    <a href="#" className="active">Dashboard</a>
                    <a href="#">Exams</a>
                    <a href="#">My Progress</a>
                    <a href="#">Community</a>
                </div>
                <div className="nav-right">
                    <button onClick={toggleTheme} className="icon-btn theme-btn">
                        {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
                    </button>
                    <button className="icon-btn"><Bell size={20} /></button>
                    <div className="user-profile-pic">
                        <User size={20} />
                    </div>
                </div>
            </nav>

            {/* Hero Section */}
            <header className="selection-hero">
                <div className="hero-content">
                    <h1>Select Your Exam Goal</h1>
                    <p>Power your preparation with AI-driven insights for over 50+ competitive exams. Find the right path for your career.</p>

                    <div className="search-bar-wrapper">
                        <Search className="search-icon" size={20} />
                        <input
                            type="text"
                            placeholder="Search for exams (e.g., GMAT, UPSC, NEET)..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
                        />
                        <button className="search-btn" onClick={handleSearch}>Search</button>
                    </div>
                </div>
            </header>

            {/* Content Area */}
            <main className="main-content">
                {/* Categories */}
                <div className="category-section">
                    <div className="section-header">
                        <h3>Browse Categories</h3>
                        <a href="#">View all</a>
                    </div>
                    <div className="category-chips">
                        {categories.map(cat => (
                            <button
                                key={cat}
                                className={`chip ${activeCategory === cat ? 'active' : ''}`}
                                onClick={() => setActiveCategory(cat)}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Recommended */}
                <div className="recommended-section">
                    <div className="section-header">
                        <h3><SparklesIcon /> Recommended for You</h3>
                    </div>
                    <div className="recommended-grid">
                        {recommendedExams.map((exam, idx) => (
                            <div className={`rec-card ${exam.gradientClass}`} key={idx}>
                                {exam.tag && (
                                    <div className={`card-tag ${exam.tagColor}`}>
                                        {exam.tag === 'Popular' ? '🔥 Popular' : exam.tag}
                                    </div>
                                )}
                                <div className="card-spacer"></div> {/* Push content down */}
                                <div className="card-info">
                                    <h4>{exam.title}</h4>
                                    <p>{exam.subtitle}</p>
                                    <div className="card-stats">
                                        <span>👥 {exam.enrolled} Enrolled</span>
                                        <span>🕒 {exam.duration}</span>
                                    </div>
                                    <button className="start-prep-btn">Start Prep</button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Explore Grid */}
                <div className="explore-section">
                    <div className="section-header">
                        <h3>Explore All Exams</h3>
                        <div className="sort-dropdown">
                            Most Relevant <ChevronDown size={16} />
                        </div>
                    </div>
                    {searchQuery && (
                        <p style={{ color: 'var(--text-muted)', marginBottom: '1rem', fontSize: '0.9rem' }}>
                            {filteredExams.length} result{filteredExams.length !== 1 ? 's' : ''} found for "{searchQuery}"
                        </p>
                    )}
                    <div className="explore-grid">
                        {filteredExams.length > 0 ? (
                            <>
                                {filteredExams.map((exam, idx) => (
                                    <div className="explore-card" key={idx}>
                                        <div className="explore-card-top">
                                            <div className="exam-icon-box">{exam.icon}</div>
                                            <span className="exam-code">{exam.tag}</span>
                                        </div>
                                        <h4>{exam.title}</h4>
                                        <p>{exam.desc}</p>
                                        <button className="view-details-btn">View Details</button>
                                    </div>
                                ))}
                                {!searchQuery && (
                                    <div className="explore-card view-all-card" onClick={() => navigate('/explore-exams')}>
                                        <div className="plus-circle">
                                            <Plus size={24} />
                                        </div>
                                        <span>View All 40+ Exams</span>
                                    </div>
                                )}
                            </>
                        ) : (
                            <div style={{
                                gridColumn: '1 / -1',
                                textAlign: 'center',
                                padding: '3rem',
                                color: 'var(--text-muted)'
                            }}>
                                <p style={{ fontSize: '1.1rem', marginBottom: '0.5rem' }}>No exams found</p>
                                <p style={{ fontSize: '0.9rem' }}>Try searching with different keywords</p>
                            </div>
                        )}
                    </div>
                </div>
            </main>

            <footer className="simple-footer">
                <p>&copy; 2026 UpRank AI Inc. All rights reserved.</p>
                <div className="footer-links">
                    <a href="#">Privacy Policy</a>
                    <a href="#">Terms of Service</a>
                    <a href="#">Help Center</a>
                </div>
            </footer>
        </div>
    );
};

const SparklesIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" style={{ marginRight: '8px', verticalAlign: 'middle' }}>
        <path d="M12 2L14.4 7.2L20 9.6L14.4 12L12 17.2L9.6 12L4 9.6L9.6 7.2L12 2Z" fill="#8b5cf6" />
    </svg>
);

export default ExamSelection;
