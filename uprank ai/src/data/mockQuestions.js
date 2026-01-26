export const mockQuestions = [
    {
        id: 1,
        subject: 'Physics',
        topic: 'Units & Dimensions',
        text: "Which of the following quantity is unitless?",
        options: [
            { id: 'A', text: "Velocity Gradient" },
            { id: 'B', text: "Pressure Gradient" },
            { id: 'C', text: "Displacement Gradient" },
            { id: 'D', text: "Force Gradient" }
        ],
        correctAnswer: 'C',
        explanation: "Displacement gradient is change in displacement per unit length, which is dimensionless."
    },
    {
        id: 2,
        subject: 'Physics',
        topic: 'Units & Dimensions',
        text: "The dimension of light year is:",
        options: [
            { id: 'A', text: "[L]" },
            { id: 'B', text: "[T]" },
            { id: 'C', text: "[M]" },
            { id: 'D', text: "[LT^-1]" }
        ],
        correctAnswer: 'A',
        explanation: "Light year is a unit of distance."
    },
    {
        id: 3,
        subject: 'Physics',
        topic: 'Vectors',
        text: "Two vectors having equal magnitude of 5 units, have an angle of 60° between them. Find the magnitude of their resultant vector.",
        options: [
            { id: 'A', text: "5" },
            { id: 'B', text: "5√3" },
            { id: 'C', text: "10" },
            { id: 'D', text: "5√2" }
        ],
        correctAnswer: 'B',
        explanation: "R = √(A² + B² + 2ABcos60°) = √(25 + 25 + 2(25)(0.5)) = √75 = 5√3"
    },
    {
        id: 4,
        subject: 'Physics',
        topic: 'Kinematics',
        text: "A ball is thrown vertically upward with a velocity of 20 m/s. Calculate the maximum height attained. (g = 10 m/s²)",
        options: [
            { id: 'A', text: "10 m" },
            { id: 'B', text: "20 m" },
            { id: 'C', text: "40 m" },
            { id: 'D', text: "15 m" }
        ],
        correctAnswer: 'B',
        explanation: "v² = u² - 2gh => 0 = 400 - 20h => h = 20m"
    },
    {
        id: 5,
        subject: 'Physics',
        topic: 'Errors',
        text: "If the error in the measurement of radius of a sphere is 2%, then the error in the determination of volume of the sphere will be:",
        options: [
            { id: 'A', text: "8%" },
            { id: 'B', text: "2%" },
            { id: 'C', text: "4%" },
            { id: 'D', text: "6%" }
        ],
        correctAnswer: 'D',
        explanation: "V ∝ r³, so % error in V = 3 * (% error in r) = 3 * 2% = 6%"
    },
    {
        id: 6,
        subject: 'Physics',
        topic: 'Kinematics',
        text: "A car moving with a speed of 50 km/h, can be stopped by brakes after at least 6m. If the same car is moving at a speed of 100 km/h, the minimum stopping distance is:",
        options: [
            { id: 'A', text: "6m" },
            { id: 'B', text: "12m" },
            { id: 'C', text: "18m" },
            { id: 'D', text: "24m" }
        ],
        correctAnswer: 'D',
        explanation: "Stopping distance s ∝ u². If u doubles, s becomes 4 times. 6 * 4 = 24m"
    },
    {
        id: 7,
        subject: 'Physics',
        topic: 'Calculus in Physics',
        text: "A particle moves along a straight line such that its displacement at any time t is given by s = t^3 - 6t^2 + 3t + 4. Find the velocity when the acceleration is zero.",
        options: [
            { id: 'A', text: "3 m/s" },
            { id: 'B', text: "-9 m/s" },
            { id: 'C', text: "42 m/s" },
            { id: 'D', text: "-12 m/s" }
        ],
        correctAnswer: 'B',
        explanation: "v = ds/dt = 3t² - 12t + 3. a = dv/dt = 6t - 12. a=0 => t=2. v(2) = 12 - 24 + 3 = -9 m/s"
    },
    {
        id: 8,
        subject: 'Chemistry',
        topic: 'Atomic Structure',
        text: "Which of the following orbitals has the lowest energy?",
        options: [
            { id: 'A', text: "4s" },
            { id: 'B', text: "3d" },
            { id: 'C', text: "4p" },
            { id: 'D', text: "5s" }
        ],
        correctAnswer: 'A',
        explanation: "According to (n+l) rule: 4s(4+0=4), 3d(3+2=5). Lower n+l means lower energy."
    },
    {
        id: 9,
        subject: 'Chemistry',
        topic: 'Stoichiometry',
        text: "The mole fraction of solute in a 1 molal aqueous solution is:",
        options: [
            { id: 'A', text: "0.0177" },
            { id: 'B', text: "0.0344" },
            { id: 'C', text: "0.018" },
            { id: 'D', text: "0.100" }
        ],
        correctAnswer: 'A',
        explanation: "1 molal = 1 mole solute in 1000g water (55.5 moles). Mole fraction = 1 / (1 + 55.5) = 1/56.5 ≈ 0.0177"
    },
    {
        id: 10,
        subject: 'Maths',
        topic: 'Quadratic Equations',
        text: "If the roots of equation x^2 - bx + c = 0 be two consecutive integers, then b^2 - 4c equals:",
        options: [
            { id: 'A', text: "-2" },
            { id: 'B', text: "3" },
            { id: 'C', text: "2" },
            { id: 'D', text: "1" }
        ],
        correctAnswer: 'D',
        explanation: "Difference of roots = 1. (alpha - beta)^2 = 1. (alpha + beta)^2 - 4alpha*beta = 1. b^2 - 4c = 1"
    }
];

// Generate more placeholder questions to reach 30
for (let i = 11; i <= 30; i++) {
    const subject = i <= 20 ? 'Chemistry' : 'Maths';
    const topics = subject === 'Chemistry' ? ['Thermodynamics', 'Equilibrium', 'Bonding'] : ['Calculus', 'Coordinate Geometry', 'Algebra'];
    mockQuestions.push({
        id: i,
        subject: subject,
        topic: topics[i % 3],
        text: `Sample Question ${i} for ${subject} related to ${topics[i % 3]}. This is a placeholder for dynamic content generation.`,
        options: [
            { id: 'A', text: `Option A for Q${i}` },
            { id: 'B', text: `Option B for Q${i}` },
            { id: 'C', text: `Option C for Q${i}` },
            { id: 'D', text: `Option D for Q${i}` }
        ],
        correctAnswer: ['A', 'B', 'C', 'D'][i % 4],
        explanation: `Explanation for Question ${i} goes here. It explains why the answer is correct.`
    });
}
