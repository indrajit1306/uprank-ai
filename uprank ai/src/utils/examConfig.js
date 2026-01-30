export const EXAM_CONFIG = {
    'JEE': {
        name: 'JEE Main',
        subjects: ['Physics', 'Chemistry', 'Maths']
    },
    'NEET': {
        name: 'NEET',
        subjects: ['Physics', 'Chemistry', 'Biology']
    },
    'GOVT': {
        name: 'Government Exam',
        subjects: ['Maths', 'Logical Reasoning', 'English', 'Aptitude']
    }
};

export const getQuestionsForExam = (allQuestions, examType) => {
    const config = EXAM_CONFIG[examType] || EXAM_CONFIG['JEE']; // Default to JEE
    return allQuestions.filter(q => config.subjects.includes(q.subject));
};
