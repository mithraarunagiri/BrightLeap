import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { GitCompare, Check } from 'lucide-react';
import Navbar from '@/components/Navbar';
import { careers } from '@/data/careers';
import { Career } from '@/data/types';

const Compare = () => {
  const [searchParams] = useSearchParams();
  const [career1, setCareer1] = useState<Career | null>(null);
  const [career2, setCareer2] = useState<Career | null>(null);

  useEffect(() => {
    const c1 = searchParams.get('career1');
    if (c1) setCareer1(careers.find(c => c.id === c1) || null);
  }, [searchParams]);

  const compareFields: { label: string; getValue: (c: Career) => string }[] = [
    { label: 'Category', getValue: c => c.category.charAt(0).toUpperCase() + c.category.slice(1) },
    { label: 'Required Group', getValue: c => c.group },
    { label: 'Duration', getValue: c => c.duration },
    { label: 'Fees', getValue: c => c.fees },
    { label: 'Difficulty', getValue: c => c.difficulty },
    { label: 'Salary Range', getValue: c => c.salaryRange },
    { label: 'Growth Rate', getValue: c => c.growthRate },
    { label: 'Key Skills', getValue: c => c.skills.slice(0, 3).join(', ') },
    { label: 'Top Companies', getValue: c => c.companies.slice(0, 3).join(', ') },
    { label: 'Entrance Exams', getValue: c => c.entranceExams.slice(0, 2).join(', ') },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="pt-24 pb-16 container mx-auto px-4 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-8"
        >
          <div className="inline-flex items-center gap-2 text-primary mb-3">
            <GitCompare className="w-5 h-5" />
          </div>
          <h1 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-2">
            Compare Careers
          </h1>
          <p className="text-muted-foreground">Select two careers to compare side by side</p>
        </motion.div>

        {/* Selectors */}
        <div className="grid grid-cols-2 gap-4 mb-8">
          <div>
            <label className="text-sm font-medium text-foreground mb-2 block">Career 1</label>
            <select
              value={career1?.id || ''}
              onChange={e => setCareer1(careers.find(c => c.id === e.target.value) || null)}
              className="w-full p-3 rounded-xl border border-border bg-card text-foreground text-sm focus:ring-2 focus:ring-primary outline-none"
            >
              <option value="">Select a career</option>
              {careers.map(c => (
                <option key={c.id} value={c.id} disabled={c.id === career2?.id}>{c.name}</option>
              ))}
            </select>
          </div>
          <div>
            <label className="text-sm font-medium text-foreground mb-2 block">Career 2</label>
            <select
              value={career2?.id || ''}
              onChange={e => setCareer2(careers.find(c => c.id === e.target.value) || null)}
              className="w-full p-3 rounded-xl border border-border bg-card text-foreground text-sm focus:ring-2 focus:ring-primary outline-none"
            >
              <option value="">Select a career</option>
              {careers.map(c => (
                <option key={c.id} value={c.id} disabled={c.id === career1?.id}>{c.name}</option>
              ))}
            </select>
          </div>
        </div>

        {/* Comparison Table */}
        {career1 && career2 ? (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-card rounded-2xl border border-border overflow-hidden"
          >
            {/* Header */}
            <div className="grid grid-cols-3 border-b border-border">
              <div className="p-4 bg-muted/50 font-display font-bold text-sm text-muted-foreground">Criteria</div>
              <div className="p-4 bg-primary/5 font-display font-bold text-sm text-foreground text-center border-x border-border">{career1.name}</div>
              <div className="p-4 bg-warm-light/50 font-display font-bold text-sm text-foreground text-center">{career2.name}</div>
            </div>
            {compareFields.map((field, i) => (
              <div
                key={field.label}
                className={`grid grid-cols-3 ${i < compareFields.length - 1 ? 'border-b border-border' : ''}`}
              >
                <div className="p-4 text-sm font-medium text-muted-foreground bg-muted/30">{field.label}</div>
                <div className="p-4 text-sm text-foreground text-center border-x border-border">{field.getValue(career1)}</div>
                <div className="p-4 text-sm text-foreground text-center">{field.getValue(career2)}</div>
              </div>
            ))}
          </motion.div>
        ) : (
          <div className="bg-muted/30 rounded-2xl border border-border p-12 text-center">
            <GitCompare className="w-12 h-12 text-muted-foreground mx-auto mb-3" />
            <p className="text-muted-foreground">Select two careers above to see a detailed comparison</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Compare;
