import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles, Target, Map, BarChart3, ClipboardCheck, Users } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const steps = [
  { icon: ClipboardCheck, title: 'Take Assessment', desc: 'Answer 20 fun questions about your interests and skills' },
  { icon: Target, title: 'Get Matched', desc: 'Our algorithm finds your top 3 career matches' },
  { icon: Map, title: 'Follow Roadmap', desc: 'Get a step-by-step plan to reach your dream career' },
];

const features = [
  { icon: Sparkles, title: 'Smart Matching', desc: 'AI-powered career matching based on your unique profile' },
  { icon: BarChart3, title: 'Career Comparison', desc: 'Compare salaries, growth, and difficulty side by side' },
  { icon: Map, title: 'Detailed Roadmaps', desc: 'From group selection to your first job — every step mapped' },
  { icon: Users, title: 'For 10th & 12th Students', desc: 'Tailored guidance whether you just finished 10th or 12th' },
];

const testimonials = [
  { name: 'Priya S.', grade: '12th PCM', text: "BrightLeap helped me realize I'm a perfect fit for Data Science. The roadmap was so clear!" },
  { name: 'Rahul K.', grade: '10th Student', text: "I was confused between Science and Commerce. The assessment made it crystal clear." },
  { name: 'Ananya M.', grade: '12th Commerce', text: "The career comparison tool helped me choose between CA and MBA. Best decision ever!" },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="pt-24 pb-16 md:pt-32 md:pb-24 relative overflow-hidden">
        <div className="absolute inset-0 gradient-hero opacity-5" />
        <div className="container mx-auto px-4 relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-6">
              🎯 Free Career Guidance for Students
            </span>
            <h1 className="text-4xl md:text-6xl font-display font-bold text-foreground mb-6 leading-tight">
              Confused About Your{' '}
              <span className="gradient-text">Career Path?</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Take our smart assessment and discover your perfect career match. Get personalized roadmaps, compare options, and plan your future with confidence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/assessment"
                className="gradient-primary text-primary-foreground px-8 py-3.5 rounded-xl text-lg font-semibold transition-transform hover:scale-105 inline-flex items-center justify-center gap-2"
              >
                Take Free Assessment <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                to="/careers"
                className="border-2 border-primary text-primary px-8 py-3.5 rounded-xl text-lg font-semibold transition-all hover:bg-primary hover:text-primary-foreground inline-flex items-center justify-center"
              >
                Explore Careers
              </Link>
            </div>
          </motion.div>

          {/* Floating badges */}
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 3, repeat: Infinity }}
            className="hidden md:block absolute top-20 left-10 bg-card rounded-xl shadow-lg p-3 border border-border"
          >
            <span className="text-2xl">💻</span>
            <p className="text-xs font-semibold text-foreground mt-1">Tech</p>
          </motion.div>
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 4, repeat: Infinity }}
            className="hidden md:block absolute top-32 right-16 bg-card rounded-xl shadow-lg p-3 border border-border"
          >
            <span className="text-2xl">🎨</span>
            <p className="text-xs font-semibold text-foreground mt-1">Design</p>
          </motion.div>
          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 3.5, repeat: Infinity }}
            className="hidden md:block absolute bottom-10 left-20 bg-card rounded-xl shadow-lg p-3 border border-border"
          >
            <span className="text-2xl">🩺</span>
            <p className="text-xs font-semibold text-foreground mt-1">Medical</p>
          </motion.div>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2.5, repeat: Infinity }}
            className="hidden md:block absolute bottom-20 right-24 bg-card rounded-xl shadow-lg p-3 border border-border"
          >
            <span className="text-2xl">📊</span>
            <p className="text-xs font-semibold text-foreground mt-1">Business</p>
          </motion.div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-3">
              How It Works
            </h2>
            <p className="text-muted-foreground">Three simple steps to find your career match</p>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {steps.map((step, i) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="text-center"
              >
                <div className="w-16 h-16 rounded-2xl gradient-primary flex items-center justify-center mx-auto mb-4">
                  <step.icon className="w-7 h-7 text-primary-foreground" />
                </div>
                <div className="text-sm font-bold text-primary mb-1">Step {i + 1}</div>
                <h3 className="text-xl font-display font-bold text-foreground mb-2">{step.title}</h3>
                <p className="text-muted-foreground text-sm">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-3">
              Why BrightLeap?
            </h2>
            <p className="text-muted-foreground">Everything you need to make the right career choice</p>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((f, i) => (
              <motion.div
                key={f.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-card rounded-2xl p-6 border border-border card-hover"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <f.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-display font-bold text-foreground mb-2">{f.title}</h3>
                <p className="text-sm text-muted-foreground">{f.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-3">
              Student Stories
            </h2>
            <p className="text-muted-foreground">Hear from students who found their path</p>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {testimonials.map((t, i) => (
              <motion.div
                key={t.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-card rounded-2xl p-6 border border-border"
              >
                <p className="text-muted-foreground text-sm mb-4 italic">"{t.text}"</p>
                <div>
                  <p className="font-display font-bold text-foreground text-sm">{t.name}</p>
                  <p className="text-xs text-muted-foreground">{t.grade}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="gradient-primary rounded-3xl p-10 md:p-16 text-center"
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold text-primary-foreground mb-4">
              Ready to Discover Your Future?
            </h2>
            <p className="text-primary-foreground/80 mb-8 max-w-xl mx-auto">
              Join thousands of students who found their dream career through our free assessment.
            </p>
            <Link
              to="/assessment"
              className="inline-flex items-center gap-2 bg-card text-foreground px-8 py-3.5 rounded-xl text-lg font-semibold transition-transform hover:scale-105"
            >
              Start Now — It's Free <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
