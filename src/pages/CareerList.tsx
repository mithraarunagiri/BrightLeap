import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { careers } from '@/data/careers';
import { getCategoryLabel, categoryColors } from '@/lib/assessment';

const CareerList = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="pt-24 pb-16 container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-10"
        >
          <h1 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-3">
            Explore Career Paths
          </h1>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Browse all available career options with detailed roadmaps, salary info, and more.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {careers.map((career, i) => (
            <motion.div
              key={career.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.08 }}
            >
              <Link
                to={`/career/${career.id}`}
                className="block bg-card rounded-2xl border border-border p-6 card-hover h-full"
              >
                <div className="flex items-center gap-2 mb-3">
                  <span
                    className="w-2 h-2 rounded-full"
                    style={{ backgroundColor: categoryColors[career.category] }}
                  />
                  <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wide">
                    {getCategoryLabel(career.category)}
                  </span>
                </div>
                <h3 className="font-display font-bold text-lg text-foreground mb-2">{career.name}</h3>
                <p className="text-sm text-muted-foreground mb-4">{career.shortDescription}</p>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-muted-foreground">{career.salaryRange}</span>
                  <span className="text-primary text-sm font-medium inline-flex items-center gap-1">
                    Explore <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default CareerList;
