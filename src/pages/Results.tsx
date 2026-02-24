import { useEffect, useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Trophy, ArrowRight, Download } from 'lucide-react';
import Navbar from '@/components/Navbar';
import { QuestionOption, CategoryScore, CareerMatch } from '@/data/types';
import { calculateScores, getCareerMatches, getCategoryLabel, categoryColors } from '@/lib/assessment';
import { generateCareerPDF } from '@/lib/pdf';

const Results = () => {
  const navigate = useNavigate();
  const [scores, setScores] = useState<CategoryScore[]>([]);
  const [matches, setMatches] = useState<CareerMatch[]>([]);

  useEffect(() => {
    const raw = sessionStorage.getItem('assessmentAnswers');
    if (!raw) {
      navigate('/assessment');
      return;
    }
    const answers: QuestionOption[] = JSON.parse(raw);
    const s = calculateScores(answers);
    setScores(s);
    setMatches(getCareerMatches(s));
  }, [navigate]);

  const topMatches = matches.slice(0, 3);
  const medals = ['🥇', '🥈', '🥉'];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="pt-24 pb-16 container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-10"
        >
          <div className="inline-flex items-center gap-2 bg-warm-light text-secondary-foreground px-4 py-1.5 rounded-full text-sm font-semibold mb-4">
            <Trophy className="w-4 h-4" /> Your Results Are Ready!
          </div>
          <h1 className="text-3xl md:text-4xl font-display font-bold text-foreground">
            Your Career Matches
          </h1>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-8 max-w-6xl mx-auto">
          {/* Category Scores */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="lg:col-span-2 bg-card rounded-2xl border border-border p-6"
          >
            <h3 className="font-display font-bold text-foreground mb-6">Your Interest Profile</h3>
            <div className="space-y-4">
              {scores.filter(s => s.percentage > 0).map((s, i) => (
                <div key={s.category}>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-foreground font-medium">{getCategoryLabel(s.category)}</span>
                    <span className="text-muted-foreground">{s.percentage}%</span>
                  </div>
                  <div className="h-3 bg-muted rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${s.percentage}%` }}
                      transition={{ delay: 0.3 + i * 0.1, duration: 0.5 }}
                      className="h-full rounded-full"
                      style={{ backgroundColor: categoryColors[s.category] }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Top 3 Matches */}
          <div className="lg:col-span-3 space-y-4">
            {topMatches.map((m, i) => (
              <motion.div
                key={m.career.id}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 + i * 0.15 }}
                className="bg-card rounded-2xl border border-border p-6 card-hover"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-2xl">{medals[i]}</span>
                      <h3 className="font-display font-bold text-xl text-foreground">{m.career.name}</h3>
                    </div>
                    <p className="text-muted-foreground text-sm mb-4">{m.career.shortDescription}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {m.career.skills.slice(0, 3).map(skill => (
                        <span key={skill} className="px-2.5 py-1 bg-muted rounded-lg text-xs text-muted-foreground font-medium">
                          {skill}
                        </span>
                      ))}
                    </div>
                    <div className="flex gap-3">
                      <Link
                        to={`/career/${m.career.id}`}
                        className="inline-flex items-center gap-1.5 gradient-primary text-primary-foreground px-4 py-2 rounded-lg text-sm font-semibold transition-transform hover:scale-105"
                      >
                        View Roadmap <ArrowRight className="w-4 h-4" />
                      </Link>
                      <button
                        onClick={() => generateCareerPDF(m.career, m.matchPercentage)}
                        className="inline-flex items-center gap-1.5 border border-border px-4 py-2 rounded-lg text-sm font-medium text-muted-foreground hover:bg-muted transition-colors"
                      >
                        <Download className="w-4 h-4" /> PDF
                      </button>
                    </div>
                  </div>
                  <div className="flex-shrink-0 text-center">
                    <div className="relative w-20 h-20">
                      <svg className="w-20 h-20 -rotate-90" viewBox="0 0 80 80">
                        <circle cx="40" cy="40" r="34" fill="none" stroke="hsl(var(--muted))" strokeWidth="6" />
                        <motion.circle
                          cx="40" cy="40" r="34" fill="none"
                          stroke={categoryColors[m.career.category]}
                          strokeWidth="6"
                          strokeLinecap="round"
                          strokeDasharray={`${2 * Math.PI * 34}`}
                          initial={{ strokeDashoffset: 2 * Math.PI * 34 }}
                          animate={{ strokeDashoffset: 2 * Math.PI * 34 * (1 - m.matchPercentage / 100) }}
                          transition={{ delay: 0.5 + i * 0.15, duration: 0.8 }}
                        />
                      </svg>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <span className="text-lg font-display font-bold text-foreground">{m.matchPercentage}%</span>
                      </div>
                    </div>
                    <span className="text-xs text-muted-foreground">Match</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Other careers */}
        {matches.length > 3 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="mt-10 max-w-6xl mx-auto"
          >
            <h3 className="font-display font-bold text-foreground mb-4">Other Career Options</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {matches.slice(3).map(m => (
                <Link
                  key={m.career.id}
                  to={`/career/${m.career.id}`}
                  className="bg-card rounded-xl border border-border p-4 card-hover flex items-center justify-between"
                >
                  <div>
                    <h4 className="font-semibold text-foreground text-sm">{m.career.name}</h4>
                    <p className="text-xs text-muted-foreground">{m.matchPercentage}% match</p>
                  </div>
                  <ArrowRight className="w-4 h-4 text-muted-foreground" />
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default Results;
