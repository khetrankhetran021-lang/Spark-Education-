/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { 
  BookOpen, 
  GraduationCap, 
  Video, 
  FileText, 
  LayoutDashboard, 
  Mail, 
  Phone, 
  MapPin, 
  Facebook, 
  Twitter, 
  Instagram, 
  Linkedin, 
  Menu, 
  X, 
  ChevronRight, 
  Award,
  Users,
  Search,
  Play
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

// --- TYPES ---
type Page = 'home' | 'about' | 'courses' | 'videos' | 'notes' | 'quiz' | 'contact';

// --- MAIN APP COMPONENT ---
export default function App() {
  const [currentPage, setCurrentPage] = useState<Page>('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Scroll to top when page changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage]);

  // --- SUB-COMPONENTS ---

  // 1. Navigation Bar
  const Navbar = () => (
    <nav className="fixed top-0 left-0 w-full bg-white/90 backdrop-blur-md shadow-sm z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div 
            className="flex items-center space-x-2 cursor-pointer" 
            onClick={() => setCurrentPage('home')}
          >
            <div className="bg-blue-600 p-2 rounded-lg">
              <GraduationCap className="text-white w-6 h-6" />
            </div>
            <span className="text-2xl font-bold text-gray-900 tracking-tight">
              Smart<span className="text-blue-600">Learn</span>
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <NavLink id="nav-home" label="Home" active={currentPage === 'home'} onClick={() => setCurrentPage('home')} />
            <NavLink id="nav-about" label="About" active={currentPage === 'about'} onClick={() => setCurrentPage('about')} />
            <NavLink id="nav-courses" label="Courses" active={currentPage === 'courses'} onClick={() => setCurrentPage('courses')} />
            <NavLink id="nav-videos" label="Videos" active={currentPage === 'videos'} onClick={() => setCurrentPage('videos')} />
            <NavLink id="nav-notes" label="Notes" active={currentPage === 'notes'} onClick={() => setCurrentPage('notes')} />
            <NavLink id="nav-quiz" label="Quiz" active={currentPage === 'quiz'} onClick={() => setCurrentPage('quiz')} />
            <NavLink id="nav-contact" label="Contact" active={currentPage === 'contact'} onClick={() => setCurrentPage('contact')} />
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button 
              id="mobile-menu-toggle"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-600 hover:text-blue-600 focus:outline-none"
            >
              {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden bg-white border-t border-gray-100 shadow-xl"
          >
            <div className="px-4 pt-2 pb-6 space-y-1">
              <MobileNavLink id="mobile-home" label="Home" onClick={() => { setCurrentPage('home'); setIsMenuOpen(false); }} />
              <MobileNavLink id="mobile-about" label="About" onClick={() => { setCurrentPage('about'); setIsMenuOpen(false); }} />
              <MobileNavLink id="mobile-courses" label="Courses" onClick={() => { setCurrentPage('courses'); setIsMenuOpen(false); }} />
              <MobileNavLink id="mobile-videos" label="Videos" onClick={() => { setCurrentPage('videos'); setIsMenuOpen(false); }} />
              <MobileNavLink id="mobile-notes" label="Notes" onClick={() => { setCurrentPage('notes'); setIsMenuOpen(false); }} />
              <MobileNavLink id="mobile-quiz" label="Quiz" onClick={() => { setCurrentPage('quiz'); setIsMenuOpen(false); }} />
              <MobileNavLink id="mobile-contact" label="Contact" onClick={() => { setCurrentPage('contact'); setIsMenuOpen(false); }} />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );

  const NavLink = ({ label, active, onClick, id }: { label: string, active: boolean, onClick: () => void, id: string }) => (
    <button 
      id={id}
      onClick={onClick}
      className={`text-sm font-medium transition-colors duration-200 ${
        active ? 'text-blue-600 border-b-2 border-blue-600 pb-1' : 'text-gray-600 hover:text-blue-600'
      }`}
    >
      {label}
    </button>
  );

  const MobileNavLink = ({ label, onClick, id }: { label: string, onClick: () => void, id: string }) => (
    <button 
      id={id}
      onClick={onClick}
      className="block w-full text-left px-4 py-3 text-base font-medium text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-md"
    >
      {label}
    </button>
  );

  // 2. Footer Section
  const Footer = () => (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="bg-blue-600 p-1.5 rounded">
                <GraduationCap className="w-5 h-5" />
              </div>
              <span className="text-xl font-bold">SmartLearn</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Empowering students with quality education at their fingertips. Join our community and start your journey today.
            </p>
            <div className="flex space-x-4">
              <SocialIcon icon={<Facebook size={18} />} id="footer-fb" />
              <SocialIcon icon={<Twitter size={18} />} id="footer-tw" />
              <SocialIcon icon={<Instagram size={18} />} id="footer-ig" />
              <SocialIcon icon={<Linkedin size={18} />} id="footer-li" />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li><button onClick={() => setCurrentPage('home')} className="hover:text-blue-400 transition-colors">Home</button></li>
              <li><button onClick={() => setCurrentPage('about')} className="hover:text-blue-400 transition-colors">About Us</button></li>
              <li><button onClick={() => setCurrentPage('courses')} className="hover:text-blue-400 transition-colors">Courses</button></li>
              <li><button onClick={() => setCurrentPage('quiz')} className="hover:text-blue-400 transition-colors">Online Quiz</button></li>
            </ul>
          </div>

          {/* Courses */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Popular Courses</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li>English Programming</li>
              <li>Advanced Mathematics</li>
              <li>Computer Science</li>
              <li>Modern Science</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Contact Us</h4>
            <ul className="space-y-4 text-sm text-gray-400">
              <li className="flex items-start space-x-3">
                <Mail className="w-5 h-5 text-blue-500 mt-0.5" />
                <span>info@smartlearn.com</span>
              </li>
              <li className="flex items-start space-x-3">
                <Phone className="w-5 h-5 text-blue-500 mt-0.5" />
                <span>+1 234 567 890</span>
              </li>
              <li className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-blue-500 mt-0.5" />
                <span>123 Learning Ave, Education City</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 pt-8 text-center text-gray-500 text-xs">
          <p>&copy; {new Date().getFullYear()} Smart Learn Academy. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );

  const SocialIcon = ({ icon, id }: { icon: React.ReactNode, id: string }) => (
    <a 
      id={id}
      href="#" 
      className="bg-gray-800 p-2 rounded-full hover:bg-blue-600 transition-all duration-300 transform hover:-translate-y-1"
    >
      {icon}
    </a>
  );

  // --- RENDER CURRENT PAGE ---
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col font-sans selection:bg-blue-100 selection:text-blue-700">
      <Navbar />
      
      <main className="flex-grow pt-20">
        <AnimatePresence mode="wait">
          {currentPage === 'home' && <HomePage key="home" onPageChange={setCurrentPage} />}
          {currentPage === 'about' && <AboutPage key="about" />}
          {currentPage === 'courses' && <CoursesPage key="courses" />}
          {currentPage === 'videos' && <VideosPage key="videos" />}
          {currentPage === 'notes' && <NotesPage key="notes" />}
          {currentPage === 'quiz' && <QuizPage key="quiz" />}
          {currentPage === 'contact' && <ContactPage key="contact" />}
        </AnimatePresence>
      </main>

      <Footer />
    </div>
  );
}

// --- SUB-PAGES ---

// 1. HOME PAGE
function HomePage({ onPageChange }: { onPageChange: (p: Page) => void }) {
  const latestCourses = [
    { title: 'English Grammar Masterclass', tutor: 'Sarah Johnson', icon: <BookOpen className="w-6 h-6 text-blue-600" />, category: 'English' },
    { title: 'Data Structures with C++', tutor: 'Dr. James Smith', icon: <LayoutDashboard className="w-6 h-6 text-emerald-600" />, category: 'Computer' },
    { title: 'Advanced Calculus', tutor: 'Maria Garcia', icon: <Award className="w-6 h-6 text-purple-600" />, category: 'Math' },
  ];

  return (
    <motion.div 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Hero Section */}
      <section id="hero" className="relative py-20 lg:py-32 overflow-hidden bg-gradient-to-br from-blue-700 to-blue-900 text-white">
        <div className="absolute inset-0 opacity-10">
          <img 
            src="https://images.unsplash.com/photo-1523240715629-662e31219e2f?auto=format&fit=crop&q=80&w=2070" 
            alt="Library background" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="lg:grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6">
                Master New Skills with <span className="text-blue-300">Smart Learn</span> Experts
              </h1>
              <p className="text-lg md:text-xl text-blue-100 mb-8 max-w-xl leading-relaxed">
                Unlock your potential with our free online courses. Learn from top educators and join a community of lifelong learners.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button 
                  id="primary-cta-courses"
                  onClick={() => onPageChange('courses')}
                  className="bg-white text-blue-700 hover:bg-blue-50 px-8 py-4 rounded-xl font-bold text-lg shadow-lg hover:shadow-xl transition-all flex items-center justify-center space-x-2"
                >
                  <span>Browse Courses</span>
                  <ChevronRight size={20} />
                </button>
                <button 
                  id="secondary-cta-quiz"
                  onClick={() => onPageChange('quiz')}
                  className="bg-blue-600/30 backdrop-blur-md text-white border border-blue-400 hover:bg-blue-600/50 px-8 py-4 rounded-xl font-bold text-lg transition-all"
                >
                  Try Free Quiz
                </button>
              </div>
            </motion.div>
            <motion.div 
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="hidden lg:block"
            >
              <div className="relative">
                <div className="absolute -inset-4 bg-blue-400/20 rounded-full blur-3xl animate-pulse"></div>
                <img 
                  src="https://images.unsplash.com/photo-1543269865-cbf427effbad?auto=format&fit=crop&q=80&w=2070" 
                  alt="Student learning" 
                  className="rounded-3xl shadow-2xl relative z-10 border-8 border-white/10"
                  referrerPolicy="no-referrer"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-3xl mx-auto mb-16">
            <h2 className="text-blue-600 font-bold tracking-wider uppercase text-sm mb-4">Why Smart Learn?</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Revolutionizing Education Globally</h3>
            <p className="text-gray-600 text-lg">
              We provide a seamless learning experience combining interactive content, professional tutoring, and a focus on student growth.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <FeatureCard 
              icon={<Award className="w-10 h-10 text-orange-500" />}
              title="Certified Experts"
              desc="Learn from the best educators in their respective fields with years of experience."
              id="feature-experts"
            />
            <FeatureCard 
              icon={<Users className="w-10 h-10 text-blue-500" />}
              title="Global Community"
              desc="Connect with thousands of students worldwide and share your learning journey."
              id="feature-community"
            />
            <FeatureCard 
              icon={<Play className="w-10 h-10 text-red-500" />}
              title="Lifetime Access"
              desc="Study at your own pace with lifetime access to all course materials and videos."
              id="feature-access"
            />
          </div>
        </div>
      </section>

      {/* Latest Courses Preview */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Latest Courses</h2>
              <p className="text-gray-600">Start learning something new today!</p>
            </div>
            <button 
              id="view-all-courses"
              onClick={() => onPageChange('courses')}
              className="text-blue-600 font-semibold hover:underline flex items-center"
            >
              View All Courses <ChevronRight size={18} />
            </button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {latestCourses.map((course, i) => (
              <motion.div 
                key={i}
                whileHover={{ y: -10 }}
                className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden group hover:shadow-xl transition-all"
              >
                <div className="h-48 bg-blue-100 flex items-center justify-center overflow-hidden">
                   <img 
                    src={`https://picsum.photos/seed/course-${i}/600/400`} 
                    alt={course.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="p-6">
                  <span className="inline-block px-3 py-1 bg-blue-50 text-blue-600 text-xs font-bold rounded-full mb-4">
                    {course.category}
                  </span>
                  <h4 className="text-xl font-bold text-gray-900 mb-2">{course.title}</h4>
                  <p className="text-gray-500 text-sm mb-6 flex items-center">
                    <Users size={16} className="mr-2" /> {course.tutor}
                  </p>
                  <button 
                    onClick={() => onPageChange('courses')}
                    className="w-full py-3 bg-blue-600 text-white font-bold rounded-xl hover:bg-blue-700 transition-colors shadow-md hover:shadow-lg"
                  >
                    Start Learning
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-blue-600 rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-32 -mt-32"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-black/10 rounded-full -ml-32 -mb-32"></div>
            <div className="relative z-10">
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-8">Ready to Start Your Future?</h2>
              <p className="text-blue-100 text-lg mb-10 max-w-2xl mx-auto">
                Join over 10,000 students already learning on Smart Learn Academy. It's free and always will be.
              </p>
              <button 
                id="cta-join-now"
                onClick={() => onPageChange('contact')}
                className="bg-white text-blue-600 px-10 py-4 rounded-full font-bold text-lg hover:bg-blue-50 transition-all shadow-xl hover:scale-105 active:scale-95"
              >
                Join Now Free
              </button>
            </div>
          </div>
        </div>
      </section>
    </motion.div>
  );
}

function FeatureCard({ icon, title, desc, id }: { icon: React.ReactNode, title: string, desc: string, id: string }) {
  return (
    <div id={id} className="p-8 rounded-2xl bg-gray-50 hover:bg-white hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
      <div className="mb-6 flex justify-center">{icon}</div>
      <h4 className="text-xl font-bold text-gray-900 mb-4">{title}</h4>
      <p className="text-gray-600 leading-relaxed">{desc}</p>
    </div>
  );
}

// 2. ABOUT PAGE
function AboutPage() {
  const teachers = [
    { name: 'Prof. Anderson', role: 'Math Specialist', img: 'https://i.pravatar.cc/150?u=a1' },
    { name: 'Dr. Emily Watson', role: 'Science Researcher', img: 'https://i.pravatar.cc/150?u=a2' },
    { name: 'Mark Stevens', role: 'Tech Enthusiast', img: 'https://i.pravatar.cc/150?u=a3' },
    { name: 'Linda Grey', role: 'English Expert', img: 'https://i.pravatar.cc/150?u=a4' },
  ];

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }} 
      animate={{ opacity: 1, y: 0 }} 
      exit={{ opacity: 0, y: -20 }}
      className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20"
    >
      <div className="text-center mb-20">
        <h2 className="text-4xl font-bold text-gray-900 mb-6">About Smart Learn Academy</h2>
        <p className="text-gray-600 text-lg max-w-3xl mx-auto">
          We are committed to providing accessible, high-quality education to everyone, everywhere. Our platform bridges the gap between knowledge and learners.
        </p>
      </div>

      {/* Mission & Vision */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-32 items-center">
        <div>
          <img 
            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=2071" 
            alt="Team collaboration" 
            className="rounded-3xl shadow-lg"
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="space-y-8">
          <div>
            <h3 className="text-2xl font-bold text-blue-600 mb-4">Our Mission</h3>
            <p className="text-gray-700 leading-relaxed text-lg">
              To democratize education by offering free, world-class learning resources and tools to students of all backgrounds, fostering a culture of lifelong learning.
            </p>
          </div>
          <div>
            <h3 className="text-2xl font-bold text-blue-600 mb-4">Our Vision</h3>
            <p className="text-gray-700 leading-relaxed text-lg">
              To be the world's leading community-driven education platform where knowledge flows freely and every student has the tools to succeed.
            </p>
          </div>
        </div>
      </div>

      {/* Teachers Section */}
      <div className="text-center">
        <h3 className="text-3xl font-bold text-gray-900 mb-12">Meet Our Expert Teachers</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {teachers.map((teacher, i) => (
            <motion.div 
              key={i}
              whileHover={{ y: -10 }}
              className="bg-white p-6 rounded-3xl shadow-sm border border-gray-100 text-center"
            >
              <img 
                src={teacher.img} 
                alt={teacher.name} 
                className="w-24 h-24 rounded-full mx-auto mb-6 border-4 border-blue-50 shadow-md"
                referrerPolicy="no-referrer"
              />
              <h4 className="text-xl font-bold text-gray-900">{teacher.name}</h4>
              <p className="text-blue-600 font-medium text-sm mt-2">{teacher.role}</p>
              <div className="flex justify-center space-x-3 mt-6">
                <Facebook size={16} className="text-gray-400 hover:text-blue-600 cursor-pointer" />
                <Twitter size={16} className="text-gray-400 hover:text-blue-400 cursor-pointer" />
                <Linkedin size={16} className="text-gray-400 hover:text-blue-800 cursor-pointer" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

// 3. COURSES PAGE
function CoursesPage() {
  const courses = [
    { id: 'eng', title: 'English Masterclass', subject: 'English', desc: 'Master grammar, vocabulary, and communication skills.', color: 'bg-blue-500', icon: <BookOpen className="w-8 h-8 text-white" /> },
    { id: 'math', title: 'Mathematics Genius', subject: 'Math', desc: 'From basic algebra to advanced calculus simplified.', color: 'bg-emerald-500', icon: <Award className="w-8 h-8 text-white" /> },
    { id: 'comp', title: 'Computer Pro', subject: 'Computer', desc: 'Learn programming, web development, and hardware.', color: 'bg-indigo-500', icon: <LayoutDashboard className="w-8 h-8 text-white" /> },
    { id: 'sci', title: 'Science Explorer', subject: 'Science', desc: 'Explore the wonders of biology, physics, and chemistry.', color: 'bg-orange-500', icon: <Search className="w-8 h-8 text-white" /> },
  ];

  return (
    <motion.div 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20"
    >
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Courses</h2>
        <p className="text-gray-600">Choose your subject and start your learning journey today.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {courses.map((c) => (
          <motion.div 
            key={c.id}
            whileHover={{ y: -5 }}
            className="bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden flex flex-col h-full"
          >
            <div className={`${c.color} p-10 flex items-center justify-center`}>
              {c.icon}
            </div>
            <div className="p-8 flex-grow flex flex-col">
              <span className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-2">{c.subject}</span>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{c.title}</h3>
              <p className="text-gray-600 text-sm mb-8 leading-relaxed line-clamp-3">
                {c.desc}
              </p>
              <button 
                id={`start-${c.id}`}
                className="mt-auto w-full py-4 bg-gray-900 text-white rounded-xl font-bold hover:bg-blue-600 transition-colors shadow-lg active:scale-95"
              >
                Start Learning
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}

// 4. VIDEOS PAGE
function VideosPage() {
  const videos = [
    { title: 'Introduction to English Grammar', views: '2.5k', duration: '12:45', id: 'vid1' },
    { title: 'Solving Quadratic Equations', views: '1.2k', duration: '15:20', id: 'vid2' },
    { title: 'Learn Python in 10 Minutes', views: '5k', duration: '10:00', id: 'vid3' },
    { title: 'Human Anatomy Basics', views: '800', duration: '18:10', id: 'vid4' },
    { title: 'The Universe & Beyond', views: '3k', duration: '20:30', id: 'vid5' },
    { title: 'Advanced Network Protocols', views: '1.5k', duration: '25:00', id: 'vid6' },
  ];

  return (
    <motion.div 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20"
    >
      <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">Video Lessons</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {videos.map((vid, i) => (
          <motion.div 
            key={i}
            whileHover={{ scale: 1.02 }}
            className="group cursor-pointer"
          >
            <div className="relative rounded-2xl overflow-hidden aspect-video bg-gray-200 mb-4 shadow-lg">
              <img 
                src={`https://picsum.photos/seed/video-${i}/800/450`} 
                alt={vid.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                <div className="w-16 h-16 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center group-hover:scale-125 transition-transform">
                  <Play className="text-white fill-white" size={32} />
                </div>
              </div>
              <span className="absolute bottom-3 right-3 bg-black/80 text-white text-xs px-2 py-1 rounded font-mono">
                {vid.duration}
              </span>
            </div>
            <h4 className="text-lg font-bold text-gray-900 mb-1 group-hover:text-blue-600 transition-colors">{vid.title}</h4>
            <div className="flex items-center text-gray-500 text-xs">
              <span>{vid.views} views</span>
              <span className="mx-2">•</span>
              <span>2 days ago</span>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}

// 5. NOTES PAGE
function NotesPage() {
  const notes = [
    { title: 'English Tenses PDF', size: '2.5 MB', type: 'English' },
    { title: 'Calculus Formulas', size: '1.8 MB', type: 'Math' },
    { title: 'C++ Cheat Sheet', size: '3.1 MB', type: 'Computer' },
    { title: 'Periodic Table Guide', size: '4.2 MB', type: 'Science' },
    { title: 'Network OSI Model', size: '1.2 MB', type: 'Computer' },
    { title: 'Linear Algebra Notes', size: '2.9 MB', type: 'Math' },
  ];

  return (
    <motion.div 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20"
    >
      <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">Free Downloadable Notes</h2>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {notes.map((note, i) => (
          <motion.div 
            key={i}
            whileHover={{ x: 5 }}
            className="flex items-center p-6 bg-white rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-all group"
          >
            <div className="bg-red-50 p-4 rounded-xl mr-6 group-hover:bg-red-100 transition-colors">
              <FileText className="text-red-600 w-8 h-8" />
            </div>
            <div className="flex-grow">
              <h4 className="text-lg font-bold text-gray-900 group-hover:text-blue-600 transition-colors">{note.title}</h4>
              <p className="text-gray-400 text-xs mt-1 uppercase font-bold">{note.type} • {note.size}</p>
            </div>
            <button 
              id={`download-${i}`}
              className="p-2 text-gray-400 hover:text-blue-600 transition-colors"
            >
              <ChevronRight size={24} />
            </button>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}

// 6. QUIZ PAGE
function QuizPage() {
  const [currentStep, setCurrentStep] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);

  const questions = [
    {
      q: "What is the capital of programming languages?",
      options: ["Python", "C++", "Java", "English (Wait, what?)"],
      answer: 0
    },
    {
      q: "If 2 + 2 = 4, then what is 10 + 20?",
      options: ["30", "40", "50", "100"],
      answer: 0
    },
    {
      q: "Which planet is known as the Red Planet?",
      options: ["Earth", "Mars", "Jupiter", "Venus"],
      answer: 1
    },
    {
      q: "What does HTML stand for?",
      options: ["Hyper Text Markup Language", "High Tech Multi Language", "Home Tool Markup Language", "Hyperlink Text Modding Language"],
      answer: 0
    }
  ];

  const handleAnswer = (index: number) => {
    if (index === questions[currentStep].answer) {
      setScore(score + 1);
    }
    
    if (currentStep < questions.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      setShowResult(true);
    }
  };

  const resetQuiz = () => {
    setCurrentStep(0);
    setScore(0);
    setShowResult(false);
  };

  return (
    <motion.div 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      className="max-w-3xl mx-auto px-4 py-20"
    >
      <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12 border border-gray-100">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-gray-900">Knowledge Quiz</h2>
          <p className="text-gray-500 mt-2">Challenge yourself and test your brain!</p>
        </div>

        {!showResult ? (
          <div>
            <div className="flex justify-between items-center mb-8">
              <span className="text-sm font-bold text-blue-600 bg-blue-50 px-3 py-1 rounded-full">
                Question {currentStep + 1} of {questions.length}
              </span>
              <div className="w-48 h-2 bg-gray-100 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-blue-600 transition-all duration-300" 
                  style={{ width: `${((currentStep + 1) / questions.length) * 100}%` }}
                ></div>
              </div>
            </div>

            <h3 className="text-2xl font-bold text-gray-900 mb-8 leading-tight">
              {questions[currentStep].q}
            </h3>

            <div className="grid grid-cols-1 gap-4">
              {questions[currentStep].options.map((opt, i) => (
                <button
                  key={i}
                  id={`quiz-option-${i}`}
                  onClick={() => handleAnswer(i)}
                  className="w-full text-left p-5 rounded-2xl border border-gray-200 hover:border-blue-500 hover:bg-blue-50 transition-all font-medium text-gray-700 flex justify-between items-center group"
                >
                  <span>{opt}</span>
                  <ChevronRight size={20} className="text-gray-300 group-hover:text-blue-500 transform group-hover:translate-x-2 transition-transform" />
                </button>
              ))}
            </div>
          </div>
        ) : (
          <motion.div 
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="text-center p-6"
          >
            <div className="inline-block p-6 bg-blue-50 rounded-full mb-8">
              <Award className="w-20 h-20 text-blue-600" />
            </div>
            <h3 className="text-4xl font-bold text-gray-900 mb-4">Quiz Completed!</h3>
            <p className="text-xl text-gray-600 mb-8">
              Your Score: <span className="text-blue-600 font-extrabold">{score}</span> / {questions.length}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                id="reset-quiz-btn"
                onClick={resetQuiz}
                className="bg-blue-600 text-white px-10 py-4 rounded-xl font-bold hover:bg-blue-700 transition-all shadow-lg active:scale-95"
              >
                Try Again
              </button>
              <button 
                id="finish-quiz-home"
                onClick={() => resetQuiz()}
                className="bg-gray-100 text-gray-700 px-10 py-4 rounded-xl font-bold hover:bg-gray-200 transition-all"
              >
                Back to Home
              </button>
            </div>
          </motion.div>
        )}
      </div>
    </motion.div>
  );
}

// 7. CONTACT PAGE
function ContactPage() {
  const [formStatus, setFormStatus] = useState<null | 'success'>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('success');
    setTimeout(() => setFormStatus(null), 3000);
  };

  return (
    <motion.div 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20"
    >
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-gray-900 mb-4">Contact Us</h2>
        <p className="text-gray-600">Have questions? We're here to help you.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        {/* Contact Info */}
        <div className="lg:col-span-1 space-y-8">
          <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100">
            <h4 className="text-xl font-bold text-gray-900 mb-8">Get In Touch</h4>
            <div className="space-y-6">
              <ContactInfoItem 
                icon={<Mail className="text-blue-600" />}
                title="Email Us"
                content="support@smartlearn.id"
              />
              <ContactInfoItem 
                icon={<Phone className="text-emerald-600" />}
                title="Call Us"
                content="+1 234 567 890"
              />
              <ContactInfoItem 
                icon={<MapPin className="text-red-600" />}
                title="Visit Us"
                content="123 Academy Blvd, Learning Suite 404"
              />
            </div>
          </div>

          <div className="bg-blue-600 p-8 rounded-3xl text-white">
            <h4 className="text-xl font-bold mb-6">Social Connect</h4>
            <p className="text-blue-100 text-sm mb-8 leading-relaxed">
              Stay updated with the latest courses and news by following us on social media.
            </p>
            <div className="flex space-x-4">
              <SocialIconWhite icon={<Facebook size={20} />} id="contact-fb" />
              <SocialIconWhite icon={<Twitter size={20} />} id="contact-tw" />
              <SocialIconWhite icon={<Instagram size={20} />} id="contact-ig" />
              <SocialIconWhite icon={<Linkedin size={20} />} id="contact-li" />
            </div>
          </div>
        </div>

        {/* Message Form */}
        <div className="lg:col-span-2">
          <div className="bg-white p-8 md:p-12 rounded-3xl shadow-sm border border-gray-100">
            <h4 className="text-2xl font-bold text-gray-900 mb-10">Send Us a Message</h4>
            <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-bold text-gray-700 ml-1">Full Name</label>
                <input 
                  id="contact-name"
                  type="text" 
                  placeholder="John Doe" 
                  required
                  className="w-full px-5 py-4 bg-gray-50 rounded-xl border border-gray-100 focus:bg-white focus:ring-4 focus:ring-blue-100 focus:border-blue-500 outline-none transition-all"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-gray-700 ml-1">Email Address</label>
                <input 
                  id="contact-email"
                  type="email" 
                  placeholder="john@example.com" 
                  required
                  className="w-full px-5 py-4 bg-gray-50 rounded-xl border border-gray-100 focus:bg-white focus:ring-4 focus:ring-blue-100 focus:border-blue-500 outline-none transition-all"
                />
              </div>
              <div className="space-y-2 md:col-span-2">
                <label className="text-sm font-bold text-gray-700 ml-1">Subject</label>
                <input 
                  id="contact-subject"
                  type="text" 
                  placeholder="How can we help?" 
                  className="w-full px-5 py-4 bg-gray-50 rounded-xl border border-gray-100 focus:bg-white focus:ring-4 focus:ring-blue-100 focus:border-blue-500 outline-none transition-all"
                />
              </div>
              <div className="space-y-2 md:col-span-2">
                <label className="text-sm font-bold text-gray-700 ml-1">Message</label>
                <textarea 
                  id="contact-message"
                  placeholder="Your message here..." 
                  rows={5}
                  required
                  className="w-full px-5 py-4 bg-gray-50 rounded-xl border border-gray-100 focus:bg-white focus:ring-4 focus:ring-blue-100 focus:border-blue-500 outline-none transition-all resize-none"
                ></textarea>
              </div>
              <div className="md:col-span-2">
                <button 
                  id="contact-submit"
                  type="submit"
                  className="w-full md:w-auto px-12 py-4 bg-blue-600 text-white font-bold rounded-xl hover:bg-blue-700 shadow-lg hover:shadow-xl transition-all active:scale-95 flex items-center justify-center space-x-2"
                >
                  {formStatus === 'success' ? 'Message Sent!' : 'Send Message'}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

function ContactInfoItem({ icon, title, content }: { icon: React.ReactNode, title: string, content: string }) {
  return (
    <div className="flex items-start space-x-4">
      <div className="bg-gray-50 p-3 rounded-xl">{icon}</div>
      <div>
        <h5 className="font-bold text-gray-900 text-sm">{title}</h5>
        <p className="text-gray-500 text-sm mt-1">{content}</p>
      </div>
    </div>
  );
}

function SocialIconWhite({ icon, id }: { icon: React.ReactNode, id: string }) {
  return (
    <a id={id} href="#" className="bg-white/10 p-2 rounded-lg hover:bg-white/30 transition-all duration-300">
      {icon}
    </a>
  );
}
