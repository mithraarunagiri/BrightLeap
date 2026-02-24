import { Category, CategoryScore, CareerMatch, QuestionOption } from '@/data/types';
import { careers } from '@/data/careers';

const categoryLabels: Record<Category, string> = {
  tech: 'Technology',
  creative: 'Creative & Design',
  business: 'Business & Finance',
  medical: 'Medical & Healthcare',
  science: 'Science & Research',
  humanities: 'Humanities & Arts',
};

export function getCategoryLabel(category: Category): string {
  return categoryLabels[category];
}

export function calculateScores(answers: QuestionOption[]): CategoryScore[] {
  const scores: Record<Category, number> = {
    tech: 0, creative: 0, business: 0, medical: 0, science: 0, humanities: 0,
  };
  const maxScores: Record<Category, number> = {
    tech: 0, creative: 0, business: 0, medical: 0, science: 0, humanities: 0,
  };

  // Calculate max possible for each category
  answers.forEach(() => {
    Object.keys(scores).forEach(cat => {
      maxScores[cat as Category] += 5;
    });
  });

  // Accumulate actual scores
  answers.forEach(answer => {
    scores[answer.category] += answer.weight;
  });

  // Convert to percentages
  return Object.entries(scores)
    .map(([category, score]) => ({
      category: category as Category,
      score,
      percentage: maxScores[category as Category] > 0
        ? Math.round((score / maxScores[category as Category]) * 100)
        : 0,
    }))
    .sort((a, b) => b.percentage - a.percentage);
}

export function getCareerMatches(scores: CategoryScore[]): CareerMatch[] {
  const topCategories = scores.slice(0, 3);

  return careers
    .map(career => {
      const categoryScore = topCategories.find(s => s.category === career.category);
      const matchPercentage = categoryScore
        ? Math.min(98, categoryScore.percentage + Math.floor(Math.random() * 8))
        : Math.max(20, Math.floor(Math.random() * 40));
      return { career, matchPercentage };
    })
    .sort((a, b) => b.matchPercentage - a.matchPercentage);
}

export const categoryColors: Record<Category, string> = {
  tech: 'hsl(168, 65%, 38%)',
  creative: 'hsl(36, 95%, 60%)',
  business: 'hsl(260, 55%, 60%)',
  medical: 'hsl(0, 70%, 55%)',
  science: 'hsl(210, 80%, 55%)',
  humanities: 'hsl(330, 60%, 55%)',
};
