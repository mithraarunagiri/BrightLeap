export type Category = 'tech' | 'creative' | 'business' | 'medical' | 'science' | 'humanities';

export interface QuestionOption {
  text: string;
  category: Category;
  weight: number;
}

export interface Question {
  id: number;
  text: string;
  options: QuestionOption[];
}

export interface CareerRoadmapStep {
  title: string;
  description: string;
  duration: string;
}

export interface Career {
  id: string;
  name: string;
  category: Category;
  description: string;
  shortDescription: string;
  group: string;
  degreeOptions: string[];
  entranceExams: string[];
  skills: string[];
  projects: string[];
  internshipPath: string;
  salaryRange: string;
  avgSalary: number;
  companies: string[];
  roadmap: CareerRoadmapStep[];
  difficulty: 'Easy' | 'Moderate' | 'Hard';
  duration: string;
  growthRate: string;
  fees: string;
  certifications: string[];
}

export interface CategoryScore {
  category: Category;
  score: number;
  percentage: number;
}

export interface CareerMatch {
  career: Career;
  matchPercentage: number;
}
