import React from 'react';
import {
    BookOpen, Brain, Calculator, ChevronRight, GraduationCap, Layout,
    LineChart, MessageSquare, PlayCircle, Scale, ScrollText, Sparkles,
    Stethoscope, Target, Users, Zap, CheckCircle2, Globe, Twitter,
    Linkedin, Instagram
} from 'lucide-react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import { UpRankLogo } from './Navbar'; // Also need UpRankLogo if used in footer, but footer uses it? Yes.

export const LandingPage = () => {
    return (
        <>
            <Navbar />
            <Hero />
            <TrustedBy />
            <ChooseYourBattle />
            <WhySwitch />
            <HallOfFame />
            <Pricing />
            <Footer />
        </>
    );
};



const Hero = () => (
    <header className="hero">
        <div className="container hero-container">
            <div className="hero-content">
                <div className="chip">
                    <Sparkles size={14} /> <span>AI POWERED LEARNING</span>
                </div>
                <h1>
                    Crush Your Exams <br />
                    with Your <span className="highlight">Personal <br /> AI Tutor</span>
                </h1>
                <p className="hero-subtext">
                    Adaptive study plans, instant doubt solving, and predicted question papers — tailored exactly to your learning style and weak points.
                </p>
                <div className="hero-buttons">
                    <button className="primary-btn">Start Studying For Free</button>
                    <button className="secondary-btn">
                        <PlayCircle size={20} /> View Demo
                    </button>
                </div>
                <div className="trust-badges">
                    <span><CheckCircle2 size={16} /> No Credit card required</span>
                    <span><CheckCircle2 size={16} /> 7-day free trial</span>
                </div>
            </div>
            <div className="hero-image">
                <div className="hero-image-wrapper">
                    <img src="/hero-illustration.png" alt="AI Tutor Dashboard" className="hero-img" />
                    <div className="performance-overlay">
                        <div className="performance-icon">
                            <LineChart size={24} color="#4ade80" />
                        </div>
                        <div className="performance-text">
                            <small>PERFORMANCE</small>
                            <strong>Probability of Success: 94%</strong>
                        </div>
                    </div>
                </div>
                <div className="glow-effect"></div>
            </div>
        </div>
    </header>
);

const TrustedBy = () => (
    <section className="trusted-by">
        <div className="container">
            <p>TRUSTED BY STUDENTS FROM TOP UNIVERSITIES</p>
            <div className="logos">
                <div className="logo-item">🏛️ STANFORD</div>
                <div className="logo-item">📘 OXFORD</div>
                <div className="logo-item">🔬 MIT</div>
                <div className="logo-item">⚖️ HARVARD</div>
            </div>
        </div>
    </section>
);

const ChooseYourBattle = () => {
    const exams = [
        { icon: <Calculator />, name: 'SAT', desc: 'Scholastic Assessment Test' },
        { icon: <Brain />, name: 'GRE', desc: 'Graduate Record Exam' },
        { icon: <Stethoscope />, name: 'MCAT', desc: 'Medical College Admission' },
        { icon: <Scale />, name: 'LSAT', desc: 'Law School Admission' },
        { icon: <Globe />, name: 'TOEFL', desc: 'English Language Test' },
        { icon: <ScrollText />, name: 'GATE', desc: 'Graduate Aptitude Test' },
        { icon: <Zap />, name: 'JEE Main', desc: 'Joint Entrance Exam' },
        { icon: <Layout />, name: 'View All', desc: '10+ Exams Available', special: true },
    ];

    return (
        <section className="section exams-section" id="exams">
            <div className="container">
                <h2 className="section-title">Choose Your Battle</h2>
                <p className="section-subtitle">We have specialized AI models trained on thousands of past papers for every major competitive exam.</p>

                <div className="exam-grid">
                    {exams.map((exam, index) => (
                        <div key={index} className={`exam-card ${exam.special ? 'special' : ''}`}>
                            <div className="icon-box">{exam.icon}</div>
                            <h3>{exam.name}</h3>
                            <p>{exam.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

const WhySwitch = () => (
    <section className="section features-section" id="features">
        <div className="container">
            <div className="features-layout">
                <div className="features-text">
                    <small className="purple-text">SMART FEATURES</small>
                    <h2>Why students switch to UpRank AI?</h2>
                    <p>Traditional studying is linear. UpRank AI is dynamic. It learns what you don't know and focuses your energy there.</p>
                </div>
                <div className="ai-message-card">
                    <div className="ai-avatar">
                        <Sparkles size={16} />
                    </div>
                    <div className="message-content">
                        <small>AI Tutor says:</small>
                        <p>"You're strong in Algebra but weak in Geometry. Let's focus on Triangles today."</p>
                        <div className="progress-bar"><div className="fill" style={{ width: '65%' }}></div></div>
                    </div>
                </div>
            </div>

            <div className="features-grid">
                <div className="feature-card">
                    <div className="feature-icon"><Target /></div>
                    <h3>Adaptive Learning Path</h3>
                    <p>The curriculum changes in real-time based on your mock test performance.</p>
                </div>
                <div className="feature-card">
                    <div className="feature-icon"><MessageSquare /></div>
                    <h3>Instant Doubt Solving</h3>
                    <p>Snap a photo of any question and get a step-by-step video explanation instantly.</p>
                </div>
                <div className="feature-card">
                    <div className="feature-icon"><LineChart /></div>
                    <h3>Predictive Analytics</h3>
                    <p>Our AI predicts the probability of questions appearing in your upcoming exam.</p>
                </div>
            </div>
        </div>
    </section>
);

const HallOfFame = () => {
    const testimonials = [
        {
            text: "I was stuck at a 1200 SAT score for months. UpRank AI told me exactly what I was missing. In 3 weeks, I jumped to 1450.",
            name: "Sarah Jenkins",
            role: "Stanford Class of '27",
            avatar: "S"
        },
        {
            text: "The doubt solving feature is insane. It's like having a professor in your pocket at 2 AM. Worth every penny for the Pro plan.",
            name: "Michael Chen",
            role: "GRE Score: 335",
            avatar: "M"
        },
        {
            text: "The predicted question papers for MCAT were scary accurate. I felt like I had already seen 40% of the exam before walking in.",
            name: "Priya Patel",
            role: "Med Student, Johns Hopkins",
            avatar: "P"
        }
    ];

    return (
        <section className="section testimonials-section" id="testimonials">
            <div className="container">
                <h2 className="section-title">Hall of Fame</h2>
                <div className="testimonials-grid">
                    {testimonials.map((t, i) => (
                        <div key={i} className="testimonial-card">
                            <div className="stars">★★★★★</div>
                            <p>"{t.text}"</p>
                            <div className="user-profile">
                                <div className="user-avatar">{t.avatar}</div>
                                <div>
                                    <h4>{t.name}</h4>
                                    <small>{t.role}</small>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

const Pricing = () => (
    <section className="section pricing-section" id="pricing">
        <div className="container">
            <h2 className="section-title">Invest in Your Future</h2>
            <p className="section-subtitle">Transparent pricing. Cancel anytime. 100% money-back guarantee if your score doesn't improve.</p>

            <div className="pricing-grid">
                <div className="pricing-card">
                    <h3>Starter</h3>
                    <div className="price">$0<span>/mo</span></div>
                    <p>Perfect for getting a feel of the platform.</p>
                    <ul className="features-list">
                        <li><CheckCircle2 size={16} /> 1 Mock Test per week</li>
                        <li><CheckCircle2 size={16} /> Basic Performance Report</li>
                        <li><CheckCircle2 size={16} /> Community Forum Access</li>
                    </ul>
                    <button className="outline-btn">Get Started</button>
                </div>

                <div className="pricing-card popular">
                    <div className="badge">MOST POPULAR</div>
                    <h3>Scholar</h3>
                    <div className="price">$29<span>/mo</span></div>
                    <p>Everything you need to ace the exam.</p>
                    <ul className="features-list">
                        <li><CheckCircle2 size={16} /> Unlimited Mock Tests</li>
                        <li><CheckCircle2 size={16} /> AI Doubt Solver (Unlimited)</li>
                        <li><CheckCircle2 size={16} /> Masterclass (Generative AI)</li>
                        <li><CheckCircle2 size={16} /> Adaptive Study Plan</li>
                    </ul>
                    <button className="primary-btn full-width">Start Free Trial</button>
                </div>

                <div className="pricing-card">
                    <h3>Ranker</h3>
                    <div className="price">$59<span>/mo</span></div>
                    <p>For students aiming for the top 1%.</p>
                    <ul className="features-list">
                        <li><CheckCircle2 size={16} /> Everything in Scholar</li>
                        <li><CheckCircle2 size={16} /> 1-on-1 Human Mentorship</li>
                        <li><CheckCircle2 size={16} /> University Application Guide</li>
                    </ul>
                    <button className="outline-btn">Contact Sales</button>
                </div>
            </div>
        </div>
    </section>
);

const Footer = () => (
    <footer className="footer">
        <div className="container footer-grid">
            <div className="footer-brand">
                <div className="logo">
                    <UpRankLogo />
                    <span>UpRank AI</span>
                </div>
                <p>Empowering students worldwide with AI-driven personalized learning. Join the revolution today.</p>
                <div className="social-icons">
                    <Twitter size={20} />
                    <Linkedin size={20} />
                    <Instagram size={20} />
                </div>
            </div>
            <div>
                <h4>Platform</h4>
                <ul>
                    <li><a href="#">Exams</a></li>
                    <li><a href="#">Features</a></li>
                    <li><a href="#">Pricing</a></li>
                    <li><a href="#">Success Stories</a></li>
                </ul>
            </div>
            <div>
                <h4>Resources</h4>
                <ul>
                    <li><a href="#">Blog</a></li>
                    <li><a href="#">Study Guides</a></li>
                    <li><a href="#">Privacy</a></li>
                    <li><a href="#">Help Center</a></li>
                </ul>
            </div>
            <div>
                <h4>Company</h4>
                <ul>
                    <li><a href="#">About Us</a></li>
                    <li><a href="#">Careers</a></li>
                    <li><a href="#">Ethical Policy</a></li>
                    <li><a href="#">Terms of Service</a></li>
                </ul>
            </div>
        </div>
        <div className="container copyright">
            <p>© 2026 UpRank AI Inc. All rights reserved.</p>
        </div>
    </footer>
);

export default LandingPage;
