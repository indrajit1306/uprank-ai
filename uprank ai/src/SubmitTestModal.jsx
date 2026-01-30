import React from 'react';
import { CheckCircle2, Circle, Bookmark, Timer, X } from 'lucide-react';
import './SubmitTestModal.css';

const SubmitTestModal = ({ isOpen, onClose, onSubmit, summary, timeLeft }) => {
    if (!isOpen) return null;

    return (
        <div className="modal-overlay">
            <div className="submission-modal">
                {/* Breadcrumb & Title */}
                <div className="modal-header">
                    <span className="breadcrumb">Mock Tests / Final Submission</span>
                    <h2>Submit Your Test</h2>
                    <p className="subtitle">
                        Please review your performance summary before finalizing your submission.
                    </p>
                </div>

                {/* Stats Grid */}
                <div className="stats-grid">
                    <div className="stat-card answered">
                        <div className="stat-header">
                            <CheckCircle2 className="icon" size={20} />
                            <span>Answered</span>
                        </div>
                        <div className="stat-value">{summary.answered}</div>
                    </div>

                    <div className="stat-card unanswered">
                        <div className="stat-header">
                            <Circle className="icon" size={20} />
                            <span>Unanswered</span>
                        </div>
                        <div className="stat-value">{summary.unanswered}</div>
                    </div>

                    <div className="stat-card marked">
                        <div className="stat-header">
                            <Bookmark className="icon" size={20} />
                            <span>Marked for Review</span>
                        </div>
                        <div className="stat-value">{summary.marked}</div>
                    </div>
                </div>

                {/* Warning Section */}
                <div className="warning-section">
                    <div className="warning-timer">
                        <Timer className="timer-icon" size={18} />
                        <span className="timer-text">You still have <strong>{timeLeft}</strong> remaining.</span>
                    </div>
                    <p className="warning-text">
                        Are you sure you want to end the test? You won't be able to change your answers after submission.
                    </p>
                </div>

                {/* Action Buttons */}
                <div className="modal-footer">
                    <button className="btn-return" onClick={onClose}>
                        Return to Test
                    </button>
                    <button className="btn-submit" onClick={onSubmit}>
                        <span className="check-icon">✓</span> Yes, Submit Test
                    </button>
                </div>
            </div>
        </div>
    );
};

export default SubmitTestModal;
