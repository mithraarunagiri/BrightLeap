import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, BookOpen, GraduationCap, Briefcase, DollarSign, Building2, Award, Code, MapPin, GitCompare } from 'lucide-react';
import Navbar from '@/components/Navbar';
import { careers } from '@/data/careers';

const iconMap = {
  overview: BookOpen,
  group: GraduationCap,
  degree: GraduationCap,
  exams: Award,
  skills: Code,
  projects: Code,
  internship: Briefcase,
  salary: DollarSign,
  companies: Building2,
};

const CareerDetail = () => {
  const { id } = useParams();
  const career = careers.find(c => c.id === id);

  if (!career) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-display font-bold text-foreground mb-4">Career not found</h1>
          <Link to="/careers" className="text-primary hover:underline">Browse all careers</Link>
        </div>
      </div>
    );
  }

  const infoSections = [
    { icon: MapPin, label: 'Required Group', value: career.group },
    { icon: GraduationCap, label: 'Degree Options', value: career.degreeOptions.join(', ') },
    { icon: Award, label: 'Entrance Exams', value: career.entranceExams.join(', ') },
    { icon: DollarSign, label: 'Salary Range', value: career.salaryRange },
    { icon: Briefcase, label: 'Internship Path', value: career.internshipPath },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="pt-24 pb-16 container mx-auto px-4 max-w-4xl">
        <Link to="/careers" className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary text-sm mb-6 transition-colors">
          <ArrowLeft className="w-4 h-4" /> Back to Careers
        </Link>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
            <div>
              <h1 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-2">{career.name}</h1>
              <p className="text-muted-foreground">{career.description}</p>
            </div>
            <Link
              to={`/compare?career1=${career.id}`}
              className="inline-flex items-center gap-2 border border-border px-4 py-2 rounded-xl text-sm font-medium text-muted-foreground hover:bg-muted transition-colors flex-shrink-0"
            >
              <GitCompare className="w-4 h-4" /> Compare
            </Link>
          </div>

          {/* Quick Info Cards */}
          <div className="grid md:grid-cols-2 gap-4 mb-10">
            {infoSections.map((section, i) => (
              <motion.div
                key={section.label}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.08 }}
                className="bg-card rounded-xl border border-border p-4"
              >
                <div className="flex items-center gap-2 mb-1">
                  <section.icon className="w-4 h-4 text-primary" />
                  <span className="text-xs font-semibold text-primary uppercase tracking-wide">{section.label}</span>
                </div>
                <p className="text-sm text-foreground">{section.value}</p>
              </motion.div>
            ))}
          </div>

          {/* Skills */}
          <div className="mb-10">
            <h2 className="text-xl font-display font-bold text-foreground mb-4">Skills to Learn</h2>
            <div className="flex flex-wrap gap-2">
              {career.skills.map(skill => (
                <span key={skill} className="px-3 py-1.5 bg-primary/10 text-primary rounded-lg text-sm font-medium">
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Timeline Roadmap */}
          <div className="mb-10">
            <h2 className="text-xl font-display font-bold text-foreground mb-6">Career Roadmap</h2>
            <div className="relative">
              <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-border" />
              {career.roadmap.map((step, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 + i * 0.1 }}
                  className="relative pl-14 pb-8 last:pb-0"
                >
                  <div className="absolute left-3.5 w-5 h-5 rounded-full gradient-primary border-4 border-background" />
                  <div className="bg-card rounded-xl border border-border p-4">
                    <div className="flex items-center justify-between mb-1">
                      <h3 className="font-display font-bold text-foreground">{step.title}</h3>
                      <span className="text-xs text-muted-foreground bg-muted px-2 py-0.5 rounded-full">{step.duration}</span>
                    </div>
                    <p className="text-sm text-muted-foreground">{step.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Companies */}
          <div className="mb-10">
            <h2 className="text-xl font-display font-bold text-foreground mb-4">Companies Hiring</h2>
            <div className="flex flex-wrap gap-3">
              {career.companies.map(company => (
                <div key={company} className="bg-card border border-border rounded-xl px-4 py-2 text-sm font-medium text-foreground">
                  {company}
                </div>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div>
            <h2 className="text-xl font-display font-bold text-foreground mb-4">Recommended Certifications</h2>
            <div className="flex flex-wrap gap-3">
              {career.certifications.map(cert => (
                <div key={cert} className="bg-warm-light border border-warm/20 rounded-xl px-4 py-2 text-sm font-medium text-secondary-foreground">
                  <Award className="w-3.5 h-3.5 inline mr-1.5" />{cert}
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default CareerDetail;
