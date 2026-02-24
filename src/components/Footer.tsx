import { Compass } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => (
  <footer className="bg-foreground text-primary-foreground py-12">
    <div className="container mx-auto px-4">
      <div className="grid md:grid-cols-3 gap-8">
        <div>
          <div className="flex items-center gap-2 font-display text-xl font-bold mb-3">
            <Compass className="w-5 h-5" />
            BrightLeap
          </div>
          <p className="text-sm opacity-70">
            Helping students discover their perfect career path through personalized assessments and expert guidance.
          </p>
        </div>
        <div>
          <h4 className="font-display font-semibold mb-3">Quick Links</h4>
          <div className="flex flex-col gap-2 text-sm opacity-70">
            <Link to="/assessment" className="hover:opacity-100 transition-opacity">Take Assessment</Link>
            <Link to="/careers" className="hover:opacity-100 transition-opacity">Explore Careers</Link>
            <Link to="/compare" className="hover:opacity-100 transition-opacity">Compare Careers</Link>
          </div>
        </div>
        <div>
          <h4 className="font-display font-semibold mb-3">Resources</h4>
          <div className="flex flex-col gap-2 text-sm opacity-70">
            <span>Career Roadmaps</span>
            <span>Entrance Exam Guide</span>
            <span>Scholarship Finder</span>
          </div>
        </div>
      </div>
      <div className="border-t border-primary-foreground/20 mt-8 pt-6 text-center text-sm opacity-50">
        © {new Date().getFullYear()} BrightLeap. Built to guide your future.
      </div>
    </div>
  </footer>
);

export default Footer;
