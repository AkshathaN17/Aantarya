export interface QuizQuestion {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number;
  fact: string;
}

export const quizQuestions: QuizQuestion[] = [
  {
    id: 1,
    question: "Which king built the Bangalore Fort and Palace?",
    options: [
      "Kempe Gowda I",
      "Tipu Sultan",
      "Chikkadevaraja Wodeyar",
      "Krishna Deva Raya"
    ],
    correctAnswer: 0,
    fact: "Kempe Gowda I built the Bangalore Fort in 1537. The fort played a crucial role in the city's early development."
  },
  {
    id: 2,
    question: "Which famous street in Bengaluru is known as the 'Food Street'?",
    options: [
      "VV Puram",
      "Brigade Road",
      "Commercial Street",
      "MG Road"
    ],
    correctAnswer: 0,
    fact: "VV Puram, also known as Thindi Beedi, is famous for its street food vendors serving local delicacies like paddu, holige, and masala dosa."
  },
  {
    id: 3,
    question: "Which famous Bengaluru temple is known for its massive bull statue?",
    options: [
      "ISKCON Temple",
      "Bull Temple",
      "Gavi Gangadhareshwara Temple",
      "Someshwara Temple"
    ],
    correctAnswer: 1,
    fact: "The Bull Temple (Nandi Temple) houses one of the largest Nandi statues in the world, carved from a single granite block."
  },
  {
    id: 4,
    question: "Which historic market in Bengaluru is known for its flower vendors?",
    options: [
      "Russell Market",
      "KR Market",
      "Gandhi Bazaar",
      "Johnson Market"
    ],
    correctAnswer: 1,
    fact: "Krishna Rajendra Market (KR Market) is Bengaluru's largest wholesale market and is famous for its flower vendors who create intricate flower garlands."
  },
  {
    id: 5,
    question: "Which famous Bengaluru restaurant is credited with inventing the Butter Masala Dosa?",
    options: [
      "MTR",
      "CTR",
      "Vidyarthi Bhavan",
      "Central Tiffin Room"
    ],
    correctAnswer: 2,
    fact: "Vidyarthi Bhavan, established in 1943, is credited with creating the iconic Butter Masala Dosa, now replicated across South India."
  },
  {
    id: 6,
    question: "What was the original purpose of Cubbon Park?",
    options: [
      "Public Garden",
      "Military Parade Ground",
      "Royal Garden",
      "Botanical Research Center"
    ],
    correctAnswer: 1,
    fact: "Cubbon Park was originally created in 1870 as a military parade ground but later transformed into a public park named after Sir Mark Cubbon."
  },
  {
    id: 7,
    question: "Which famous shopping street in Bengaluru is known for traditional silk sarees?",
    options: [
      "Commercial Street",
      "Brigade Road",
      "Chickpet",
      "MG Road"
    ],
    correctAnswer: 2,
    fact: "Chickpet is Bengaluru's oldest shopping area and is famous for its traditional silk sarees, particularly the Mysore Silk variety."
  },
  {
    id: 8,
    question: "What is unique about the Gavi Gangadhareshwara Temple's architecture?",
    options: [
      "It's built upside down",
      "It has musical pillars",
      "Sun rays light up the shrine on specific days",
      "It's made entirely of glass"
    ],
    correctAnswer: 2,
    fact: "On Makara Sankranti, sun rays pass through the horns of a stone bull outside and illuminate the shrine inside, demonstrating ancient architectural expertise."
  },
  {
    id: 9,
    question: "Which famous educational institution in Bengaluru was established in 1909?",
    options: [
      "Indian Institute of Science",
      "National Law School",
      "Christ University",
      "Bangalore University"
    ],
    correctAnswer: 0,
    fact: "IISc was established in 1909 with active support from Jamsetji Tata and the Mysore Kingdom, becoming India's premier scientific research institution."
  },
  {
    id: 10,
    question: "Which is Bengaluru's oldest surviving restaurant?",
    options: [
      "Vidyarthi Bhavan",
      "MTR",
      "Indian Coffee House",
      "Koshy's"
    ],
    correctAnswer: 3,
    fact: "Established in 1940, Koshy's is Bangalore's oldest surviving restaurant and has been a popular meeting place for intellectuals, artists, and politicians."
  }
];