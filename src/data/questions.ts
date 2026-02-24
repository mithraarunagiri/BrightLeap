import { Question } from './types';

export const questions: Question[] = [
  {
    id: 1,
    text: "You enjoy solving problems using logic and reasoning",
    options: [
      { text: "Strongly agree – I love debugging and puzzles", category: "tech", weight: 5 },
      { text: "I prefer creative problem solving", category: "creative", weight: 3 },
      { text: "I like analyzing business problems", category: "business", weight: 4 },
      { text: "I enjoy diagnosing health issues", category: "medical", weight: 3 },
    ],
  },
  {
    id: 2,
    text: "When working on a group project, you naturally take the role of…",
    options: [
      { text: "The technical architect", category: "tech", weight: 5 },
      { text: "The designer or storyteller", category: "creative", weight: 5 },
      { text: "The team leader or strategist", category: "business", weight: 5 },
      { text: "The researcher or data collector", category: "science", weight: 4 },
    ],
  },
  {
    id: 3,
    text: "Which activity excites you the most?",
    options: [
      { text: "Building an app or website", category: "tech", weight: 5 },
      { text: "Creating art, music, or videos", category: "creative", weight: 5 },
      { text: "Starting a small business or selling", category: "business", weight: 5 },
      { text: "Conducting a science experiment", category: "science", weight: 5 },
    ],
  },
  {
    id: 4,
    text: "You spend your free time mostly…",
    options: [
      { text: "Coding or exploring tech gadgets", category: "tech", weight: 4 },
      { text: "Drawing, writing, or photography", category: "creative", weight: 4 },
      { text: "Reading about entrepreneurs and markets", category: "business", weight: 4 },
      { text: "Watching medical or nature documentaries", category: "medical", weight: 3 },
    ],
  },
  {
    id: 5,
    text: "Which subject do you enjoy the most in school?",
    options: [
      { text: "Mathematics & Computer Science", category: "tech", weight: 5 },
      { text: "Languages & Literature", category: "humanities", weight: 5 },
      { text: "Economics & Accountancy", category: "business", weight: 5 },
      { text: "Biology & Chemistry", category: "medical", weight: 5 },
    ],
  },
  {
    id: 6,
    text: "How do you prefer to express your ideas?",
    options: [
      { text: "Through code or technical diagrams", category: "tech", weight: 4 },
      { text: "Through visuals, sketches, or design", category: "creative", weight: 5 },
      { text: "Through presentations and pitches", category: "business", weight: 4 },
      { text: "Through research papers and reports", category: "science", weight: 4 },
    ],
  },
  {
    id: 7,
    text: "What kind of work environment do you prefer?",
    options: [
      { text: "A tech startup with flexible hours", category: "tech", weight: 4 },
      { text: "A creative studio or freelance setup", category: "creative", weight: 4 },
      { text: "A corporate office with clear structure", category: "business", weight: 4 },
      { text: "A hospital, lab, or research center", category: "medical", weight: 4 },
    ],
  },
  {
    id: 8,
    text: "When you see a beautiful product, you think about…",
    options: [
      { text: "How it was built technically", category: "tech", weight: 4 },
      { text: "The design and user experience", category: "creative", weight: 5 },
      { text: "The business model behind it", category: "business", weight: 4 },
      { text: "The science or research behind it", category: "science", weight: 3 },
    ],
  },
  {
    id: 9,
    text: "Which of these tools would you love to master?",
    options: [
      { text: "Python, JavaScript, or databases", category: "tech", weight: 5 },
      { text: "Photoshop, Figma, or video editors", category: "creative", weight: 5 },
      { text: "Excel, Tally, or stock trading platforms", category: "business", weight: 5 },
      { text: "Microscope, lab equipment, or medical tools", category: "medical", weight: 5 },
    ],
  },
  {
    id: 10,
    text: "What motivates you the most?",
    options: [
      { text: "Innovation and building new things", category: "tech", weight: 4 },
      { text: "Self-expression and creativity", category: "creative", weight: 4 },
      { text: "Financial success and leadership", category: "business", weight: 4 },
      { text: "Helping people and saving lives", category: "medical", weight: 5 },
    ],
  },
  {
    id: 11,
    text: "You find it easy to…",
    options: [
      { text: "Think in patterns and algorithms", category: "tech", weight: 5 },
      { text: "Come up with unique ideas and concepts", category: "creative", weight: 4 },
      { text: "Negotiate and persuade people", category: "business", weight: 4 },
      { text: "Memorize facts and biological processes", category: "medical", weight: 4 },
    ],
  },
  {
    id: 12,
    text: "Which YouTube content do you watch the most?",
    options: [
      { text: "Tech reviews and coding tutorials", category: "tech", weight: 4 },
      { text: "Art, design, and creative vlogs", category: "creative", weight: 4 },
      { text: "Startup stories and finance tips", category: "business", weight: 4 },
      { text: "Science experiments and space documentaries", category: "science", weight: 4 },
    ],
  },
  {
    id: 13,
    text: "If you could attend any event, it would be…",
    options: [
      { text: "A hackathon or tech conference", category: "tech", weight: 5 },
      { text: "An art exhibition or film festival", category: "creative", weight: 5 },
      { text: "A business summit or networking event", category: "business", weight: 5 },
      { text: "A medical or science symposium", category: "science", weight: 4 },
    ],
  },
  {
    id: 14,
    text: "Your ideal project would involve…",
    options: [
      { text: "Building a software product or AI model", category: "tech", weight: 5 },
      { text: "Designing a brand identity or game", category: "creative", weight: 5 },
      { text: "Launching a product in the market", category: "business", weight: 5 },
      { text: "Researching a cure or new theory", category: "science", weight: 5 },
    ],
  },
  {
    id: 15,
    text: "How do you handle stress?",
    options: [
      { text: "I break problems into smaller parts", category: "tech", weight: 3 },
      { text: "I express myself through art or music", category: "creative", weight: 3 },
      { text: "I plan and organize to regain control", category: "business", weight: 3 },
      { text: "I research solutions and stay calm", category: "medical", weight: 3 },
    ],
  },
  {
    id: 16,
    text: "What kind of books do you enjoy reading?",
    options: [
      { text: "Science fiction and technology", category: "tech", weight: 3 },
      { text: "Fiction, poetry, and graphic novels", category: "humanities", weight: 4 },
      { text: "Biographies of business leaders", category: "business", weight: 4 },
      { text: "Medical thrillers and science books", category: "medical", weight: 3 },
    ],
  },
  {
    id: 17,
    text: "If you were to start a club in school, it would be…",
    options: [
      { text: "Robotics or Coding Club", category: "tech", weight: 5 },
      { text: "Art, Drama, or Media Club", category: "creative", weight: 5 },
      { text: "Entrepreneurship or Debate Club", category: "business", weight: 5 },
      { text: "Science or Environment Club", category: "science", weight: 5 },
    ],
  },
  {
    id: 18,
    text: "Which global challenge would you want to solve?",
    options: [
      { text: "Digital divide and cybersecurity", category: "tech", weight: 4 },
      { text: "Cultural preservation and media literacy", category: "humanities", weight: 4 },
      { text: "Poverty and economic inequality", category: "business", weight: 4 },
      { text: "Disease prevention and public health", category: "medical", weight: 5 },
    ],
  },
  {
    id: 19,
    text: "Your strongest quality is…",
    options: [
      { text: "Analytical thinking", category: "tech", weight: 4 },
      { text: "Imagination and originality", category: "creative", weight: 4 },
      { text: "Communication and leadership", category: "business", weight: 4 },
      { text: "Empathy and patience", category: "medical", weight: 4 },
    ],
  },
  {
    id: 20,
    text: "Where do you see yourself in 10 years?",
    options: [
      { text: "Leading a tech team or running a startup", category: "tech", weight: 5 },
      { text: "Working as a designer, filmmaker, or artist", category: "creative", weight: 5 },
      { text: "Running a company or managing investments", category: "business", weight: 5 },
      { text: "Practicing medicine or doing research", category: "medical", weight: 5 },
    ],
  },
];
