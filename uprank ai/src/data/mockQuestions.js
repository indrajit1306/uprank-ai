export const mockQuestions = [
    // --- PHYSICS (1-10) ---
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
        explanation: "Displacement gradient is change in displacement per unit length (L/L), which is dimensionless."
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
        explanation: "Light year is a unit of distance traveled by light in vacuum in one year, so its dimension is Length [L]."
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
        explanation: "Using v² = u² - 2gh => 0 = 400 - 20h => h = 20m."
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
        explanation: "Volume V ∝ r³, so % error in V = 3 * (% error in r) = 3 * 2% = 6%."
    },
    {
        id: 6,
        subject: 'Physics',
        topic: 'Kinematics',
        text: "A car moving with a speed of 50 km/h can be stopped by brakes after at least 6m. If the same car is moving at a speed of 100 km/h, the minimum stopping distance is:",
        options: [
            { id: 'A', text: "6m" },
            { id: 'B', text: "12m" },
            { id: 'C', text: "18m" },
            { id: 'D', text: "24m" }
        ],
        correctAnswer: 'D',
        explanation: "Stopping distance s ∝ u². If velocity doubles (50 to 100), stopping distance becomes 4 times. 6m * 4 = 24m."
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
        explanation: "v = ds/dt = 3t² - 12t + 3. a = dv/dt = 6t - 12. Acceleration is zero when 6t-12=0 => t=2s. v(2) = 3(4) - 24 + 3 = -9 m/s."
    },
    {
        id: 8,
        subject: 'Physics',
        topic: 'Gravitation',
        text: "The escape velocity from the surface of electric earth is approximately:",
        options: [
            { id: 'A', text: "11.2 km/s" },
            { id: 'B', text: "8.0 km/s" },
            { id: 'C', text: "9.8 km/s" },
            { id: 'D', text: "12.4 km/s" }
        ],
        correctAnswer: 'A',
        explanation: "Escape velocity v_e = √(2gR) ≈ 11.2 km/s for Earth."
    },
    {
        id: 9,
        subject: 'Physics',
        topic: 'Thermodynamics',
        text: "In an isothermal process, which quantity remains constant?",
        options: [
            { id: 'A', text: "Pressure" },
            { id: 'B', text: "Volume" },
            { id: 'C', text: "Temperature" },
            { id: 'D', text: "Heat" }
        ],
        correctAnswer: 'C',
        explanation: "An isothermal process is a thermodynamic process in which the temperature of the system remains constant (ΔT = 0)."
    },
    {
        id: 10,
        subject: 'Physics',
        topic: 'Waves',
        text: "Sound waves are:",
        options: [
            { id: 'A', text: "Transverse" },
            { id: 'B', text: "Longitudinal" },
            { id: 'C', text: "Electromagnetic" },
            { id: 'D', text: "Non-mechanical" }
        ],
        correctAnswer: 'B',
        explanation: "Sound waves in gases and liquids are longitudinal waves, consisting of compressions and rarefactions."
    },

    // --- CHEMISTRY (11-20) ---
    {
        id: 11,
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
        explanation: "According to (n+l) rule: 4s(4+0=4), 3d(3+2=5). Lower n+l means lower energy. 4s fills before 3d."
    },
    {
        id: 12,
        subject: 'Chemistry',
        topic: 'Solutions',
        text: "The mole fraction of solute in a 1 molal aqueous solution is:",
        options: [
            { id: 'A', text: "0.0177" },
            { id: 'B', text: "0.0344" },
            { id: 'C', text: "0.018" },
            { id: 'D', text: "0.100" }
        ],
        correctAnswer: 'A',
        explanation: "1 molal = 1 mole solute in 1000g water. Moles of water = 1000/18 = 55.5 moles. Mole fraction = 1 / (1 + 55.5) = 1/56.5 ≈ 0.0177."
    },
    {
        id: 13,
        subject: 'Chemistry',
        topic: 'Periodic Properties',
        text: "Which element has the highest electronegativity?",
        options: [
            { id: 'A', text: "Chlorine" },
            { id: 'B', text: "Oxygen" },
            { id: 'C', text: "Fluorine" },
            { id: 'D', text: "Nitrogen" }
        ],
        correctAnswer: 'C',
        explanation: "Fluorine is the most electronegative element in the periodic table with a value of 4.0 on the Pauling scale."
    },
    {
        id: 14,
        subject: 'Chemistry',
        topic: 'Chemical Bonding',
        text: "The hybridization of carbon in Methane (CH4) is:",
        options: [
            { id: 'A', text: "sp" },
            { id: 'B', text: "sp2" },
            { id: 'C', text: "sp3" },
            { id: 'D', text: "dsp2" }
        ],
        correctAnswer: 'C',
        explanation: "Carbon in CH4 forms 4 sigma bonds with no lone pairs, so it is sp3 hybridized with a tetrahedral geometry."
    },
    {
        id: 15,
        subject: 'Chemistry',
        topic: 'Thermodynamics',
        text: "For an exothermic reaction, ΔH is:",
        options: [
            { id: 'A', text: "Positive" },
            { id: 'B', text: "Negative" },
            { id: 'C', text: "Zero" },
            { id: 'D', text: "Infinity" }
        ],
        correctAnswer: 'B',
        explanation: "For exothermic reactions, heat is released, so the enthalpy change (ΔH) is negative."
    },
    {
        id: 16,
        subject: 'Chemistry',
        topic: 'Equilibrium',
        text: "Which factor affects the value of the equilibrium constant (K)?",
        options: [
            { id: 'A', text: "Concentration" },
            { id: 'B', text: "Pressure" },
            { id: 'C', text: "Catalyst" },
            { id: 'D', text: "Temperature" }
        ],
        correctAnswer: 'D',
        explanation: "Only temperature changes the value of the equilibrium constant K. Concentration, pressure, and catalysts affect the position but not K."
    },
    {
        id: 17,
        subject: 'Chemistry',
        topic: 'States of Matter',
        text: "PV = nRT is the equation for:",
        options: [
            { id: 'A', text: "Real Gas" },
            { id: 'B', text: "Ideal Gas" },
            { id: 'C', text: "Liquid" },
            { id: 'D', text: "Solid" }
        ],
        correctAnswer: 'B',
        explanation: "PV = nRT is the Ideal Gas Law equation."
    },
    {
        id: 18,
        subject: 'Chemistry',
        topic: 'Electrochemistry',
        text: "In an electrochemical cell, oxidation occurs at the:",
        options: [
            { id: 'A', text: "Cathode" },
            { id: 'B', text: "Anode" },
            { id: 'C', text: "Salt Bridge" },
            { id: 'D', text: "Electrolyte" }
        ],
        correctAnswer: 'B',
        explanation: "Oxidation always occurs at the Anode, while reduction occurs at the Cathode (Remember 'An Ox' and 'Red Cat')."
    },
    {
        id: 19,
        subject: 'Chemistry',
        topic: 'Organic Chemistry',
        text: "The functional group -COOH represents:",
        options: [
            { id: 'A', text: "Alcohol" },
            { id: 'B', text: "Aldehyde" },
            { id: 'C', text: "Carboxylic Acid" },
            { id: 'D', text: "Ketone" }
        ],
        correctAnswer: 'C',
        explanation: "-COOH is the Carboxyl group, which is characteristic of Carboxylic Acids."
    },
    {
        id: 20,
        subject: 'Chemistry',
        topic: 'Acids and Bases',
        text: "pH of a neutral solution at 25°C is:",
        options: [
            { id: 'A', text: "0" },
            { id: 'B', text: "1" },
            { id: 'C', text: "7" },
            { id: 'D', text: "14" }
        ],
        correctAnswer: 'C',
        explanation: "At 25°C (298K), the ionic product of water is 10^-14, so a neutral solution has pH = 7."
    },

    // --- MATHEMATICS (21-30) ---
    {
        id: 21,
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
        explanation: "Let roots be α, α+1. Difference is 1. Discriminant D = b²-4c = (α - β)² = 1² = 1."
    },
    {
        id: 22,
        subject: 'Maths',
        topic: 'Complex Numbers',
        text: "The value of i^4 is:",
        options: [
            { id: 'A', text: "1" },
            { id: 'B', text: "-1" },
            { id: 'C', text: "i" },
            { id: 'D', text: "-i" }
        ],
        correctAnswer: 'A',
        explanation: "i = √-1, i^2 = -1, i^4 = (i^2)^2 = (-1)^2 = 1."
    },
    {
        id: 23,
        subject: 'Maths',
        topic: 'Calculus',
        text: "The derivative of sin(x) with respect to x is:",
        options: [
            { id: 'A', text: "cos(x)" },
            { id: 'B', text: "-cos(x)" },
            { id: 'C', text: "sin(x)" },
            { id: 'D', text: "-sin(x)" }
        ],
        correctAnswer: 'A',
        explanation: "d/dx(sin x) = cos x."
    },
    {
        id: 24,
        subject: 'Maths',
        topic: 'Matrices',
        text: "If A is a square matrix such that A^2 = A, then A is called:",
        options: [
            { id: 'A', text: "Idempotent matrix" },
            { id: 'B', text: "Nilpotent matrix" },
            { id: 'C', text: "Involutory matrix" },
            { id: 'D', text: "Orthogonal matrix" }
        ],
        correctAnswer: 'A',
        explanation: "A matrix A is idempotent if A^2 = A."
    },
    {
        id: 25,
        subject: 'Maths',
        topic: 'Probability',
        text: "In a single throw of two dice, what is the probability of getting a sum of 9?",
        options: [
            { id: 'A', text: "1/9" },
            { id: 'B', text: "1/6" },
            { id: 'C', text: "1/12" },
            { id: 'D', text: "5/36" }
        ],
        correctAnswer: 'A',
        explanation: "Favorable outcomes: (3,6), (4,5), (5,4), (6,3) = 4. Total outcomes = 36. Probability = 4/36 = 1/9."
    },
    {
        id: 26,
        subject: 'Maths',
        topic: 'Trigonometry',
        text: "The value of sin^2(30°) + cos^2(30°) is:",
        options: [
            { id: 'A', text: "0" },
            { id: 'B', text: "1" },
            { id: 'C', text: "1/2" },
            { id: 'D', text: "2" }
        ],
        correctAnswer: 'B',
        explanation: "Identity sin²θ + cos²θ = 1 for any angle θ."
    },
    {
        id: 27,
        subject: 'Maths',
        topic: 'Coordinate Geometry',
        text: "Distance between points (0,0) and (3,4) is:",
        options: [
            { id: 'A', text: "3" },
            { id: 'B', text: "4" },
            { id: 'C', text: "5" },
            { id: 'D', text: "7" }
        ],
        correctAnswer: 'C',
        explanation: "Distance = √((x2-x1)² + (y2-y1)²) = √(3² + 4²) = √(9+16) = √25 = 5."
    },
    {
        id: 28,
        subject: 'Maths',
        topic: 'Logarithms',
        text: "The value of log_10(1000) is:",
        options: [
            { id: 'A', text: "10" },
            { id: 'B', text: "100" },
            { id: 'C', text: "2" },
            { id: 'D', text: "3" }
        ],
        correctAnswer: 'D',
        explanation: "1000 = 10^3, so log_10(1000) = log_10(10^3) = 3log_10(10) = 3(1) = 3."
    },
    {
        id: 29,
        subject: 'Maths',
        topic: 'Vectors',
        text: "If vector A = i + j and vector B = i - j, then the angle between them is:",
        options: [
            { id: 'A', text: "0°" },
            { id: 'B', text: "45°" },
            { id: 'C', text: "90°" },
            { id: 'D', text: "180°" }
        ],
        correctAnswer: 'C',
        explanation: "Dot product A·B = (1)(1) + (1)(-1) = 0. Since dot product is zero, vectors are perpendicular (90°)."
    },
    {
        id: 30,
        subject: 'Maths',
        topic: 'Limits',
        text: "Limit as x approaches 0 of (sin x)/x is:",
        options: [
            { id: 'A', text: "0" },
            { id: 'B', text: "1" },
            { id: 'C', text: "Infinity" },
            { id: 'D', text: "Undefined" }
        ],
        correctAnswer: 'B',
        explanation: "Standard limit: lim(x→0) (sin x)/x = 1."
    },

    // --- BIOLOGY (31-40) ---
    {
        id: 31,
        subject: 'Biology',
        topic: 'Cell Biology',
        text: "Which organelle is known as the 'powerhouse of the cell'?",
        options: [
            { id: 'A', text: "Nucleus" },
            { id: 'B', text: "Mitochondria" },
            { id: 'C', text: "Ribosome" },
            { id: 'D', text: "Lysosome" }
        ],
        correctAnswer: 'B',
        explanation: "Mitochondria generate most of the cell's supply of adenosine triphosphate (ATP), used as a source of chemical energy."
    },
    {
        id: 32,
        subject: 'Biology',
        topic: 'Genetics',
        text: "Which of the following is NOT a nitrogenous base found in DNA?",
        options: [
            { id: 'A', text: "Adenine" },
            { id: 'B', text: "Guanine" },
            { id: 'C', text: "Uracil" },
            { id: 'D', text: "Thymine" }
        ],
        correctAnswer: 'C',
        explanation: "Uracil is found in RNA. DNA contains Thymine instead of Uracil."
    },
    {
        id: 33,
        subject: 'Biology',
        topic: 'Human Physiology',
        text: "The universal blood donor group is:",
        options: [
            { id: 'A', text: "A" },
            { id: 'B', text: "B" },
            { id: 'C', text: "AB" },
            { id: 'D', text: "O-" }
        ],
        correctAnswer: 'D',
        explanation: "O negative blood type lacks A, B, and Rh antigens, making it compatible with all other blood types."
    },
    {
        id: 34,
        subject: 'Biology',
        topic: 'Botany',
        text: "The process by which plants make their own food is called:",
        options: [
            { id: 'A', text: "Respiration" },
            { id: 'B', text: "Photosynthesis" },
            { id: 'C', text: "Transpiration" },
            { id: 'D', text: "Digestion" }
        ],
        correctAnswer: 'B',
        explanation: "Photosynthesis is the process used by plants to convert light energy into chemical energy."
    },
    {
        id: 35,
        subject: 'Biology',
        topic: 'Human Anatomy',
        text: "The longest bone in the human body is:",
        options: [
            { id: 'A', text: "Femur" },
            { id: 'B', text: "Humerus" },
            { id: 'C', text: "Tibia" },
            { id: 'D', text: "Fibula" }
        ],
        correctAnswer: 'A',
        explanation: "The Femur (thigh bone) is the longest and strongest bone in the human body."
    },
    {
        id: 36,
        subject: 'Biology',
        topic: 'Ecology',
        text: "Organisms that feed on dead and decaying matter are called:",
        options: [
            { id: 'A', text: "Producers" },
            { id: 'B', text: "Consumers" },
            { id: 'C', text: "Decomposers" },
            { id: 'D', text: "Carnivores" }
        ],
        correctAnswer: 'C',
        explanation: "Decomposers (like fungi and bacteria) break down dead organic material."
    },
    {
        id: 37,
        subject: 'Biology',
        topic: 'Evolution',
        text: "The theory of Natural Selection was proposed by:",
        options: [
            { id: 'A', text: "Lamarck" },
            { id: 'B', text: "Charles Darwin" },
            { id: 'C', text: "Mendel" },
            { id: 'D', text: "Pasteur" }
        ],
        correctAnswer: 'B',
        explanation: "Charles Darwin proposed the theory of evolution by Natural Selection."
    },
    {
        id: 38,
        subject: 'Biology',
        topic: 'Microbiology',
        text: "Which of the following diseases is caused by a virus?",
        options: [
            { id: 'A', text: "Tuberculosis" },
            { id: 'B', text: "Cholera" },
            { id: 'C', text: "COVID-19" },
            { id: 'D', text: "Typhoid" }
        ],
        correctAnswer: 'C',
        explanation: "COVID-19 is caused by the SARS-CoV-2 virus. The others are bacterial."
    },
    {
        id: 39,
        subject: 'Biology',
        topic: 'Zoology',
        text: "The largest mammal on Earth is:",
        options: [
            { id: 'A', text: "African Elephant" },
            { id: 'B', text: "Blue Whale" },
            { id: 'C', text: "Giraffe" },
            { id: 'D', text: "White Shark" }
        ],
        correctAnswer: 'B',
        explanation: "The Blue Whale is the largest animal known to have ever lived."
    },
    {
        id: 40,
        subject: 'Biology',
        topic: 'Nutrition',
        text: "Deficiency of Vitamin C causes:",
        options: [
            { id: 'A', text: "Rickets" },
            { id: 'B', text: "Beriberi" },
            { id: 'C', text: "Scurvy" },
            { id: 'D', text: "Night Blindness" }
        ],
        correctAnswer: 'C',
        explanation: "Scurvy is a disease resulting from a lack of vitamin C (ascorbic acid)."
    },
    // --- LOGICAL REASONING (41-45) ---
    {
        id: 41,
        subject: 'Logical Reasoning',
        topic: 'Series',
        text: "Look at this series: 2, 1, (1/2), (1/4), ... What number should come next?",
        options: [
            { id: 'A', text: "(1/3)" },
            { id: 'B', text: "(1/8)" },
            { id: 'C', text: "(2/8)" },
            { id: 'D', text: "(1/16)" }
        ],
        correctAnswer: 'B',
        explanation: "This is a simple division series; each number is one-half of the previous number."
    },
    {
        id: 42,
        subject: 'Logical Reasoning',
        topic: 'Analogy',
        text: "Odometer is to mileage as compass is to?",
        options: [
            { id: 'A', text: "Speed" },
            { id: 'B', text: "Hiking" },
            { id: 'C', text: "Needle" },
            { id: 'D', text: "Direction" }
        ],
        correctAnswer: 'D',
        explanation: "An odometer is an instrument used to measure mileage. A compass is an instrument used to determine direction."
    },

    // --- ENGLISH (46-50) ---
    {
        id: 46,
        subject: 'English',
        topic: 'Synonyms',
        text: "Select the synonym of: BRIEF",
        options: [
            { id: 'A', text: "Limited" },
            { id: 'B', text: "Small" },
            { id: 'C', text: "Little" },
            { id: 'D', text: "Short" }
        ],
        correctAnswer: 'D',
        explanation: "Brief means of short duration."
    },
    {
        id: 47,
        subject: 'English',
        topic: 'Antonyms',
        text: "Select the antonym of: ENORMOUS",
        options: [
            { id: 'A', text: "Soft" },
            { id: 'B', text: "Average" },
            { id: 'C', text: "Tiny" },
            { id: 'D', text: "Weak" }
        ],
        correctAnswer: 'C',
        explanation: "Enormous means very large; Tiny means very small."
    },

    // --- APTITUDE (51-55) ---
    {
        id: 51,
        subject: 'Aptitude',
        topic: 'Percentages',
        text: "What is 20% of 50% of 75% of 80?",
        options: [
            { id: 'A', text: "12" },
            { id: 'B', text: "6" },
            { id: 'C', text: "5" },
            { id: 'D', text: "2.5" }
        ],
        correctAnswer: 'B',
        explanation: "(20/100) * (50/100) * (75/100) * 80 = (1/5)*(1/2)*(3/4)*80 = 6."
    },
    {
        id: 52,
        subject: 'Aptitude',
        topic: 'Time and Work',
        text: "A can do a work in 15 days and B in 20 days. If they work on it together for 4 days, then the fraction of the work that is left is:",
        options: [
            { id: 'A', text: "1/4" },
            { id: 'B', text: "1/10" },
            { id: 'C', text: "7/15" },
            { id: 'D', text: "8/15" }
        ],
        correctAnswer: 'D',
        explanation: "A's 1 day work = 1/15, B's 1 day work = 1/20. (A+B)'s 1 day = 7/60. 4 days = 28/60 = 7/15. Remaining = 1 - 7/15 = 8/15."
    },
    // --- HISTORY (53-54) ---
    {
        id: 53,
        subject: 'History',
        topic: 'Modern History',
        text: "Who among the following wrote the book 'Poverty and Un-British Rule in India'?",
        options: [
            { id: 'A', text: "Dadabhai Naoroji" },
            { id: 'B', text: "R.C. Dutt" },
            { id: 'C', text: "Mahatma Gandhi" },
            { id: 'D', text: "Jawaharlal Nehru" }
        ],
        correctAnswer: 'A',
        explanation: "Dadabhai Naoroji wrote 'Poverty and Un-British Rule in India' which exposed the economic drainage of India by the British."
    },
    {
        id: 54,
        subject: 'History',
        topic: 'Ancient History',
        text: "Which of the following Harappan sites is located in Gujarat?",
        options: [
            { id: 'A', text: "Kalibangan" },
            { id: 'B', text: "Ropar" },
            { id: 'C', text: "Banavali" },
            { id: 'D', text: "Dholavira" }
        ],
        correctAnswer: 'D',
        explanation: "Dholavira is an archaeological site at Khadirbet in Bhachau Taluka of Kutch District, in the state of Gujarat."
    },

    // --- GEOGRAPHY (55-56) ---
    {
        id: 55,
        subject: 'Geography',
        topic: 'Indian Drainage System',
        text: "Which river is known as the 'Sorrow of Bihar'?",
        options: [
            { id: 'A', text: "Ganga" },
            { id: 'B', text: "Kosi" },
            { id: 'C', text: "Son" },
            { id: 'D', text: "Gandak" }
        ],
        correctAnswer: 'B',
        explanation: "The Kosi River is known as the 'Sorrow of Bihar' due to its frequent and devastating floods."
    },
    {
        id: 56,
        subject: 'Geography',
        topic: 'Solar System',
        text: "Which planet is known as the 'Red Planet'?",
        options: [
            { id: 'A', text: "Venus" },
            { id: 'B', text: "Mars" },
            { id: 'C', text: "Jupiter" },
            { id: 'D', text: "Saturn" }
        ],
        correctAnswer: 'B',
        explanation: "Mars is known as the Red Planet due to the reddish appearance of its surface caused by iron oxide."
    },

    // --- POLITY (57-58) ---
    {
        id: 57,
        subject: 'Polity',
        topic: 'Fundamental Rights',
        text: "Which Article of the Indian Constitution deals with the Abolition of Untouchability?",
        options: [
            { id: 'A', text: "Article 16" },
            { id: 'B', text: "Article 17" },
            { id: 'C', text: "Article 18" },
            { id: 'D', text: "Article 23" }
        ],
        correctAnswer: 'B',
        explanation: "Article 17 of the Indian Constitution abolishes 'untouchability' and forbids its practice in any form."
    },
    {
        id: 58,
        subject: 'Polity',
        topic: 'Parliament',
        text: "The joint sitting of the Parliament is presided over by the:",
        options: [
            { id: 'A', text: "President" },
            { id: 'B', text: "Prime Minister" },
            { id: 'C', text: "Chairman of Rajya Sabha" },
            { id: 'D', text: "Speaker of Lok Sabha" }
        ],
        correctAnswer: 'D',
        explanation: "The joint sitting of the Parliament is called by the President but presided over by the Speaker of the Lok Sabha."
    },

    // --- ECONOMY (59-60) ---
    {
        id: 59,
        subject: 'Economy',
        topic: 'Banking',
        text: "Which body regulates the money supply in India?",
        options: [
            { id: 'A', text: "Finance Ministry" },
            { id: 'B', text: "SBI" },
            { id: 'C', text: "Reserve Bank of India" },
            { id: 'D', text: "NITI Aayog" }
        ],
        correctAnswer: 'C',
        explanation: "The Reserve Bank of India (RBI) is the central bank of India and regulates the money supply and banking system."
    },
    {
        id: 60,
        subject: 'Economy',
        topic: 'Inflation',
        text: "Which of the following is used to measure inflation in India?",
        options: [
            { id: 'A', text: "Consumer Price Index (CPI)" },
            { id: 'B', text: "Wholesale Price Index (WPI)" },
            { id: 'C', text: "GDP Deflator" },
            { id: 'D', text: "All of the above" }
        ],
        correctAnswer: 'D',
        explanation: "Inflation is essentially measured by WPI and CPI in India. GDP deflator is also a measure. However, CPI is the primary metric for inflation targeting by RBI."
    },

    // --- ENVIRONMENT (61-62) ---
    {
        id: 61,
        subject: 'Environment',
        topic: 'Protected Areas',
        text: "In which state is the Kuno National Park located?",
        options: [
            { id: 'A', text: "Rajasthan" },
            { id: 'B', text: "Madhya Pradesh" },
            { id: 'C', text: "Gujarat" },
            { id: 'D', text: "Maharashtra" }
        ],
        correctAnswer: 'B',
        explanation: "Kuno National Park is located in Madhya Pradesh, famous for the reintroduction of Cheetahs in India."
    },
    {
        id: 62,
        subject: 'Environment',
        topic: 'Climate Change',
        text: "Which gas is primarily responsible for the Greenhouse Effect?",
        options: [
            { id: 'A', text: "Oxygen" },
            { id: 'B', text: "Nitrogen" },
            { id: 'C', text: "Carbon Dioxide" },
            { id: 'D', text: "Argon" }
        ],
        correctAnswer: 'C',
        explanation: "Carbon Dioxide (CO2) is the primary greenhouse gas emitted through human activities and is a major driver of global warming."
    }
];
