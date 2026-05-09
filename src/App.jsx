import React, { useState, useEffect } from 'react';
import { 
  Zap, Palette, Gift, BookOpen, 
  Linkedin, Github, MessageCircle, 
  ExternalLink, Menu, X, ArrowRight
} from 'lucide-react';
import profileImg from './assets/profile.jpeg';

// === SECTION: App / Portfolio (Root) ===
export default function App() {
  // Global scroll reveal effect
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    }, { threshold: 0.1 });

    const elements = document.querySelectorAll('.reveal');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="bg-[#0F172A] min-h-screen text-slate-200 font-sans selection:bg-blue-600 selection:text-white">
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700&family=Syne:wght@400;500;600;700;800&family=Playfair+Display:ital,wght@1,700&display=swap');
          
          html {
            scroll-behavior: smooth;
            background-color: #0F172A;
          }
          
          body {
            font-family: 'DM Sans', sans-serif;
            background-color: #0F172A;
            color: #F8FAFC;
            overflow-x: hidden;
          }

          h1, h2, h3, h4, h5, h6, .font-syne {
            font-family: 'Syne', sans-serif;
          }

          .font-playfair {
            font-family: 'Playfair Display', serif;
          }

          .text-gradient {
            background: linear-gradient(135deg, #3B82F6, #1E40AF);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
          }

          .text-gradient-accent {
            background: linear-gradient(135deg, #F97316, #FB923C);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
          }

          .reveal {
            opacity: 0;
            transform: translateY(30px);
            transition: opacity 0.8s ease-out, transform 0.8s ease-out;
          }

          .reveal.active {
            opacity: 1;
            transform: translateY(0);
          }

          .delay-100 { transition-delay: 100ms; }
          .delay-200 { transition-delay: 200ms; }
          .delay-300 { transition-delay: 300ms; }

          /* CSS Typewriter Effect */
          .typewriter-container {
            display: inline-flex;
            position: relative;
            color: #F97316;
          }
          
          .typewriter-text {
            position: relative;
            white-space: nowrap;
            overflow: hidden;
            border-right: 3px solid #FB923C;
            animation: typing 16s steps(40, end) infinite, blink-caret 0.75s step-end infinite;
          }
          
          .typewriter-text::after {
            content: "";
            animation: typing-words 16s infinite;
          }
          
          @keyframes blink-caret {
            from, to { border-color: transparent }
            50% { border-color: #FB923C }
          }
          
          @keyframes typing-words {
            0%, 22% { content: "Digitalisation"; }
            25%, 47% { content: "Flyers & Logos"; }
            50%, 72% { content: "Objets Personnalisés"; }
            75%, 97% { content: "Développement Web"; }
            100% { content: "Digitalisation"; }
          }

          @keyframes typing {
            0%, 5% { max-width: 0; }
            15%, 20% { max-width: 30ch; }
            23%, 25% { max-width: 0; }
            
            25%, 30% { max-width: 0; }
            40%, 45% { max-width: 30ch; }
            48%, 50% { max-width: 0; }
            
            50%, 55% { max-width: 0; }
            65%, 70% { max-width: 30ch; }
            73%, 75% { max-width: 0; }
            
            75%, 80% { max-width: 0; }
            90%, 95% { max-width: 30ch; }
            98%, 100% { max-width: 0; }
          }

          .grid-bg {
            background-size: 40px 40px;
            background-image: 
              linear-gradient(to right, rgba(255, 255, 255, 0.05) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(255, 255, 255, 0.05) 1px, transparent 1px);
            mask-image: linear-gradient(to bottom, black 40%, transparent 100%);
            -webkit-mask-image: linear-gradient(to bottom, black 40%, transparent 100%);
          }

          .mesh-bg {
            background: radial-gradient(at 0% 0%, rgba(30, 64, 175, 0.3) 0px, transparent 50%),
                        radial-gradient(at 100% 0%, rgba(249, 115, 22, 0.1) 0px, transparent 50%),
                        radial-gradient(at 100% 100%, rgba(30, 64, 175, 0.3) 0px, transparent 50%),
                        radial-gradient(at 0% 100%, rgba(249, 115, 22, 0.1) 0px, transparent 50%);
          }
        `}
      </style>
      
      <Navbar mobileMenuOpen={mobileMenuOpen} setMobileMenuOpen={setMobileMenuOpen} />
      
      <main>
        <Hero />
        <Offres />
        <About />
        <Experience />
        <PortfolioSection />
        <Skills />
        <Contact />
      </main>
      
      <Footer />
      
      {/* Floating WhatsApp Button */}
      <a 
        href="https://wa.me/22890235802" 
        target="_blank" 
        rel="noreferrer"
        className="fixed bottom-6 right-6 md:bottom-8 md:right-8 bg-[#25D366] hover:bg-[#20bd5a] text-white p-4 rounded-full shadow-[0_0_20px_rgba(37,211,102,0.4)] hover:shadow-[0_0_30px_rgba(37,211,102,0.6)] hover:-translate-y-1 transition-all duration-300 z-50 flex items-center justify-center group"
        aria-label="Contactez-moi sur WhatsApp"
      >
        <MessageCircle size={32} className="group-hover:scale-110 transition-transform" />
      </a>
    </div>
  );
}

// === SECTION: Navbar ===
const Navbar = ({ mobileMenuOpen, setMobileMenuOpen }) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-slate-900/90 backdrop-blur-md border-b border-white/10 py-3 shadow-lg' : 'bg-transparent py-5'}`}>
      <div className="container mx-auto px-6 lg:px-12 flex justify-between items-center">
        <a href="#home" className="font-playfair text-2xl md:text-3xl font-bold tracking-tight text-white hover:opacity-80 transition-opacity">
          Proche de <span className="text-orange-500">Dieu</span>
        </a>
        
        <div className="hidden md:flex gap-6 items-center text-sm font-medium text-slate-300">
          <a href="#offres" className="hover:text-white hover:text-orange-400 transition-colors">Services</a>
          <a href="#about" className="hover:text-white hover:text-orange-400 transition-colors">À propos</a>
          <a href="#portfolio" className="hover:text-white hover:text-orange-400 transition-colors">Réalisations</a>
          <a href="#contact" className="px-5 py-2.5 rounded-full backdrop-blur-md bg-white/5 border border-white/10 hover:bg-white/10 transition-all text-white font-syne ml-2">
            Me contacter
          </a>
        </div>
        
        <button 
          className="md:hidden text-white p-2 focus:outline-none" 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)} 
          aria-label="Menu"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      <div className={`absolute top-full left-0 w-full bg-[#0F172A]/95 backdrop-blur-xl border-b border-white/10 transition-all duration-300 overflow-hidden md:hidden ${mobileMenuOpen ? 'max-h-64 border-b' : 'max-h-0 border-transparent'}`}>
        <div className="flex flex-col p-6 gap-4 shadow-2xl">
          <a href="#offres" onClick={() => setMobileMenuOpen(false)} className="text-slate-300 hover:text-orange-400 font-syne text-lg font-medium">Services</a>
          <a href="#about" onClick={() => setMobileMenuOpen(false)} className="text-slate-300 hover:text-orange-400 font-syne text-lg font-medium">À propos</a>
          <a href="#portfolio" onClick={() => setMobileMenuOpen(false)} className="text-slate-300 hover:text-orange-400 font-syne text-lg font-medium">Réalisations</a>
          <a href="#contact" onClick={() => setMobileMenuOpen(false)} className="text-orange-500 font-syne text-lg font-bold mt-2">Me contacter →</a>
        </div>
      </div>
    </nav>
  );
};

// === SECTION: Hero ===
const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-30 z-0"></div>
      <div className="absolute inset-0 mesh-bg z-0"></div>
      
      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="max-w-4xl mx-auto text-center reveal">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full backdrop-blur-md bg-white/5 border border-white/10 mb-8">
            <span className="w-2 h-2 rounded-full bg-orange-500 animate-pulse"></span>
            <span className="text-sm font-medium text-slate-300">Disponible pour de nouveaux projets</span>
          </div>
          
          <h1 className="font-syne text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6 text-white tracking-tight">
            Votre image, magnifiée <br className="hidden md:block"/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-300 to-slate-500">— du pixel à l'objet.</span>
          </h1>
          
          <div className="text-lg md:text-2xl text-slate-300 mb-10 h-10 flex items-center justify-center gap-3">
            <span className="font-light">Expert en</span>
            <div className="typewriter-container font-syne font-bold">
              <span className="typewriter-text text-orange-500 drop-shadow-[0_0_15px_rgba(249,115,22,0.5)]"></span>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a href="#portfolio" className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-gradient-to-r from-blue-700 to-blue-500 hover:from-blue-600 hover:to-blue-400 text-white font-bold transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(37,99,235,0.4)]">
              Voir mes réalisations <ArrowRight size={18} />
            </a>
            <a href="#contact" className="w-full sm:w-auto px-8 py-3.5 rounded-full backdrop-blur-md bg-white/5 border border-white/10 hover:bg-white/10 text-white font-bold transition-all duration-300 flex items-center justify-center">
              Me contacter
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

// === SECTION: Offres ===
const Offres = () => {
  const services = [
    {
      icon: <Zap className="text-orange-500 w-7 h-7" />,
      title: "Digitalisation",
      desc: "Mise en ligne de votre activité : site web, présence digitale, réseaux sociaux et référencement.",
      tag: "Populaire"
    },
    {
      icon: <Palette className="text-blue-500 w-7 h-7" />,
      title: "Flyers & Logos Pro",
      desc: "Identité visuelle complète, flyers événementiels percutants et logos professionnels sur mesure.",
      tag: "Populaire"
    },
    {
      icon: <Gift className="text-purple-500 w-7 h-7" />,
      title: "Objets Personnalisés",
      desc: "Commande de goodies sur mesure : stylos, mugs, tote bags, badges pour vos événements.",
      tag: "Sur devis"
    },
    {
      icon: <BookOpen className="text-green-500 w-7 h-7" />,
      title: "Agendas & Notebooks",
      desc: "Calendriers personnalisés, carnets, agendas et papeterie de haute qualité aux couleurs de votre marque.",
      tag: "Sur devis"
    }
  ];

  return (
    <section id="offres" className="py-24 relative">
      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="text-center mb-16 reveal">
          <h2 className="text-3xl md:text-5xl font-bold font-syne mb-4 text-white">Ce que je fais pour vous</h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-base md:text-lg font-light">
            Un accompagnement complet pour créer, déployer et matérialiser votre identité de marque sur tous les supports.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {services.map((service, idx) => (
            <div key={idx} className={`backdrop-blur-md bg-white/5 border border-white/10 rounded-2xl p-6 lg:p-8 transition-all duration-300 hover:scale-[1.02] hover:border-orange-500/60 hover:bg-white/10 group reveal delay-${(idx % 2 + 1) * 100}`}>
              <div className="flex justify-between items-start mb-6">
                <div className="p-3 rounded-xl bg-[#0F172A]/80 border border-white/5 group-hover:shadow-[0_0_15px_rgba(249,115,22,0.2)] transition-all">
                  {service.icon}
                </div>
                <span className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider ${service.tag === 'Populaire' ? 'bg-blue-500/20 text-blue-400 border border-blue-500/30' : 'bg-white/5 text-slate-300 border border-white/10'}`}>
                  {service.tag}
                </span>
              </div>
              <h3 className="text-xl font-bold font-syne mb-3 text-white group-hover:text-orange-400 transition-colors">{service.title}</h3>
              <p className="text-slate-400 leading-relaxed text-sm lg:text-base">
                {service.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// === SECTION: About ===
const About = () => {
  return (
    <section id="about" className="py-24 bg-slate-800/20 border-y border-white/5">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          <div className="w-full lg:w-5/12 reveal">
            <div className="relative max-w-[320px] mx-auto group">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-orange-500 rounded-[2rem] transform rotate-3 opacity-60 blur-2xl group-hover:opacity-80 group-hover:rotate-6 transition-all duration-700"></div>
              <div className="relative backdrop-blur-md bg-white/5 border border-white/10 rounded-[2rem] overflow-hidden z-10 group-hover:scale-[1.02] transition-transform duration-500 p-2">
                <img src={profileImg} alt="Proche de Dieu" className="w-full h-auto rounded-3xl object-contain shadow-inner" />
              </div>
            </div>
          </div>
          
          <div className="w-full lg:w-7/12 reveal delay-100">
            <h2 className="text-3xl md:text-5xl font-bold font-syne mb-6 text-white leading-tight">
              L'accompagnement <br className="hidden md:block"/>
              <span className="text-orange-500">avant tout.</span>
            </h2>
            <div className="space-y-4 text-slate-300 text-base md:text-lg font-light leading-relaxed">
              <p>
                Mon approche ne se limite pas à la simple exécution technique. Je m'assure que chaque 
                projet reflète parfaitement l'ADN de votre entreprise, de la première 
                maquette web jusqu'à la livraison physique de vos goodies et imprimés.
              </p>
              <p>
                En tant que partenaire dédié à votre image de marque, je coordonne 
                toutes les étapes : stratégie digitale, design visuel et production matérielle, 
                pour vous offrir une expérience fluide et un résultat d'une cohérence absolue.
              </p>
            </div>
            
            <div className="grid grid-cols-3 gap-4 mt-10">
              <div className="backdrop-blur-md bg-white/5 border border-white/10 rounded-xl p-4 text-center hover:bg-white/10 transition-colors">
                <div className="text-3xl font-bold font-syne text-orange-500 mb-1">5+</div>
                <div className="text-xs text-slate-400 font-medium">Années d'XP</div>
              </div>
              <div className="backdrop-blur-md bg-white/5 border border-white/10 rounded-xl p-4 text-center hover:bg-white/10 transition-colors">
                <div className="text-3xl font-bold font-syne text-blue-500 mb-1">20+</div>
                <div className="text-xs text-slate-400 font-medium">Projets livrés</div>
              </div>
              <div className="backdrop-blur-md bg-white/5 border border-white/10 rounded-xl p-4 text-center hover:bg-white/10 transition-colors">
                <div className="text-3xl font-bold font-syne text-purple-500 mb-1">10+</div>
                <div className="text-xs text-slate-400 font-medium">Clients ravis</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// === SECTION: Experience ===
const Experience = () => {
  const experiences = [
    { company: "MassConvoyeur", status: "Actuel", detail: "mass-convoyeur.com" },
    { company: "Orabank", status: "Passé", detail: "Mission technique & accompagnement" },
    { company: "SUNU Assurances", status: "Passé", detail: "Mission technique & réseau" },
    { company: "Freelance", status: "Continu", detail: "Accompagnement Particuliers & PME" }
  ];

  return (
    <section className="py-24 relative">
      <div className="container mx-auto px-6 lg:px-12">
        <h2 className="text-3xl md:text-4xl font-bold font-syne mb-16 text-center text-white reveal">Parcours & Collaborations</h2>
        
        <div className="max-w-3xl mx-auto relative">
          {/* Vertical Line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-white/10 md:-translate-x-1/2"></div>
          
          <div className="space-y-12">
            {experiences.map((exp, idx) => (
              <div key={idx} className={`relative flex flex-col md:flex-row items-center justify-between reveal delay-${(idx % 3) * 100} ${idx % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                {/* Timeline Dot */}
                <div className="absolute left-[-5px] md:left-1/2 w-3 h-3 rounded-full bg-orange-500 md:-translate-x-1/2 border-4 border-[#0F172A] z-10 shadow-[0_0_10px_rgba(249,115,22,0.8)]"></div>
                
                <div className="w-full md:w-5/12 pl-8 md:pl-0">
                  <div className={`backdrop-blur-md bg-white/5 border border-white/10 rounded-xl p-6 hover:bg-white/10 hover:border-white/20 transition-all duration-300 group ${idx % 2 === 0 ? 'md:text-left' : 'md:text-right'}`}>
                    <span className="inline-block px-2 py-1 rounded bg-[#0F172A] text-[10px] font-bold uppercase tracking-wider text-blue-400 mb-3 border border-white/5">
                      {exp.status}
                    </span>
                    <h4 className="text-xl font-bold font-syne text-white mb-1 group-hover:text-orange-400 transition-colors">{exp.company}</h4>
                    <p className="text-slate-400 text-sm">{exp.detail}</p>
                  </div>
                </div>
                <div className="hidden md:block w-5/12"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

// === SECTION: PortfolioSection ===
const PortfolioSection = () => {
  const [activeTab, setActiveTab] = useState('Tous');
  
  const categories = ['Tous', 'Sites Web', 'Digitalisation', 'Print & Logo', 'Objets'];
  
  const projects = [
    { title: "mass-convoyeur.com", category: "Sites Web", stack: "WordPress / Elementor", link: "https://mass-convoyeur.com" },
    { title: "madjobeachhotel.com", category: "Sites Web", stack: "WordPress / UI", link: "https://madjobeachhotel.com" },
    { title: "Flyer Événementiel", category: "Print & Logo", stack: "Illustrator / Canva" },
    { title: "Logo PME", category: "Print & Logo", stack: "Illustrator" },
    { title: "Goodies personnalisés", category: "Objets", stack: "Impression offset" },
    { title: "Agenda Corporate", category: "Objets", stack: "Print sur mesure" },
  ];

  const filteredProjects = activeTab === 'Tous' 
    ? projects 
    : projects.filter(p => p.category === activeTab);

  // Apply basic animation when tab changes
  const [isAnimating, setIsAnimating] = useState(false);
  useEffect(() => {
    setIsAnimating(true);
    const timeout = setTimeout(() => setIsAnimating(false), 400);
    return () => clearTimeout(timeout);
  }, [activeTab]);

  return (
    <section id="portfolio" className="py-24 bg-slate-800/20 border-y border-white/5">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="text-center mb-12 reveal">
          <h2 className="text-3xl md:text-5xl font-bold font-syne mb-4 text-white">Mes Réalisations</h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-base">
            Un aperçu de mon savoir-faire, alliant design, développement et production physique.
          </p>
        </div>
        
        <div className="flex flex-wrap justify-center gap-2 mb-12 reveal delay-100">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveTab(cat)}
              className={`px-5 py-2 rounded-full text-xs md:text-sm font-bold transition-all duration-300 ${
                activeTab === cat 
                  ? 'bg-blue-600 text-white shadow-[0_0_15px_rgba(37,99,235,0.5)] scale-105' 
                  : 'backdrop-blur-md bg-white/5 border border-white/10 text-slate-300 hover:text-white hover:bg-white/10'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
        
        <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 transition-opacity duration-400 ${isAnimating ? 'opacity-0' : 'opacity-100'}`}>
          {filteredProjects.map((project, idx) => (
            <div key={idx} className="backdrop-blur-md bg-white/5 border border-white/10 rounded-xl overflow-hidden group hover:-translate-y-1 transition-all duration-300 hover:shadow-[0_10px_20px_rgba(0,0,0,0.3)] hover:border-white/20 flex flex-col">
              <div className="h-44 w-full bg-gradient-to-br from-slate-800 to-[#0F172A] flex items-center justify-center relative overflow-hidden shrink-0">
                <div className="absolute inset-0 bg-blue-500/5 group-hover:bg-blue-500/20 transition-colors duration-500"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A] to-transparent opacity-60"></div>
                
                <span className="font-syne text-4xl font-bold text-white/10 group-hover:text-white/20 group-hover:scale-110 transition-all duration-700 select-none uppercase">
                  {project.title.substring(0, 2)}
                </span>
                
                <div className="absolute top-3 right-3 px-2 py-1 bg-[#0F172A]/80 backdrop-blur-md rounded text-[10px] font-bold text-orange-400 border border-orange-500/20">
                  {project.category}
                </div>
              </div>
              
              <div className="p-5 relative bg-white/5 backdrop-blur-xl border-t border-white/5 flex-grow flex flex-col">
                <h3 className="font-syne font-bold text-lg text-white mb-1 line-clamp-2 group-hover:text-blue-400 transition-colors">{project.title}</h3>
                <p className="text-xs text-slate-400 mb-4 font-medium flex-grow">{project.stack}</p>
                {project.link ? (
                  <a href={project.link} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-xs font-bold text-white hover:text-orange-400 transition-colors mt-auto">
                    Voir le site en ligne <ExternalLink size={14} />
                  </a>
                ) : (
                  <div className="mt-auto h-[18px]"></div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// === SECTION: Skills ===
const Skills = () => {
  return (
    <section className="py-24 relative">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="text-center mb-16 reveal">
          <h2 className="text-3xl md:text-5xl font-bold font-syne mb-4 text-white">Mon Expertise</h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-base">
            Un panel de compétences transversales pour répondre à tous vos besoins en communication.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Col 1 */}
          <div className="backdrop-blur-md bg-white/5 border border-white/10 rounded-2xl p-8 reveal border-t-4 border-t-blue-500 hover:bg-white/10 transition-colors duration-300">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-blue-500/20 rounded-xl text-blue-400">
                <Palette size={24} />
              </div>
              <h3 className="font-syne text-xl font-bold text-white">Création & Com.</h3>
            </div>
            <ul className="space-y-5">
              {['Flyers & Logos', 'Identité visuelle', 'Infographie', 'Print'].map((skill, i) => (
                <li key={i} className="flex flex-col gap-2">
                  <div className="flex justify-between text-sm font-medium">
                    <span className="text-slate-300">{skill}</span>
                  </div>
                  <div className="h-1.5 w-full bg-slate-800 rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-blue-600 to-blue-400 rounded-full w-[90%] transform origin-left reveal delay-300"></div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Col 2 */}
          <div className="backdrop-blur-md bg-white/5 border border-white/10 rounded-2xl p-8 reveal delay-100 border-t-4 border-t-orange-500 hover:bg-white/10 transition-colors duration-300">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-orange-500/20 rounded-xl text-orange-400">
                <Gift size={24} />
              </div>
              <h3 className="font-syne text-xl font-bold text-white">Objets & Perso.</h3>
            </div>
            <ul className="space-y-5">
              {['Goodies divers', 'Stylos & Agendas', 'Calendriers', 'Notebooks & Mugs'].map((skill, i) => (
                <li key={i} className="flex flex-col gap-2">
                  <div className="flex justify-between text-sm font-medium">
                    <span className="text-slate-300">{skill}</span>
                  </div>
                  <div className="h-1.5 w-full bg-slate-800 rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-orange-600 to-orange-400 rounded-full w-[85%] transform origin-left reveal delay-300"></div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Col 3 */}
          <div className="backdrop-blur-md bg-white/5 border border-white/10 rounded-2xl p-8 reveal delay-200 border-t-4 border-t-slate-500 opacity-90 hover:opacity-100 hover:bg-white/10 transition-all duration-300">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-slate-500/20 rounded-xl text-slate-300">
                <Zap size={24} />
              </div>
              <h3 className="font-syne text-xl font-bold text-white">Tech & Web</h3>
            </div>
            <ul className="space-y-5">
              {['Expertise WordPress', 'Création sur mesure', 'Réseau', 'Infrastructure'].map((skill, i) => (
                <li key={i} className="flex flex-col gap-2">
                  <div className="flex justify-between text-sm font-medium">
                    <span className="text-slate-300">{skill}</span>
                  </div>
                  <div className="h-1.5 w-full bg-slate-800 rounded-full overflow-hidden">
                    <div className="h-full bg-slate-500 rounded-full w-[75%] transform origin-left reveal delay-300"></div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

// === SECTION: Contact ===
const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-[#0F172A] border-t border-white/5 relative overflow-hidden">
      {/* Decorative Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-96 bg-gradient-to-r from-blue-600/20 to-orange-500/20 blur-[120px] rounded-full pointer-events-none"></div>
      
      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16 reveal">
            <h2 className="text-4xl md:text-5xl font-bold font-syne mb-6 text-white">Un projet en tête ? <br className="md:hidden" /><span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600">Parlons-en.</span></h2>
            <p className="text-slate-400 text-lg">Contactez-moi directement sur WhatsApp pour une réponse immédiate, ou laissez-moi un message détaillé.</p>
          </div>
          
          <div className="max-w-3xl mx-auto reveal">
            {/* Form */}
            <form className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-[2rem] p-8 md:p-10 shadow-2xl relative" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div className="space-y-2 group">
                  <label className="text-xs font-bold text-slate-400 ml-1 uppercase tracking-wider group-focus-within:text-blue-400 transition-colors">Nom complet</label>
                  <input type="text" className="w-full bg-[#0F172A]/80 border border-white/5 rounded-xl px-5 py-4 text-white focus:outline-none focus:border-blue-500 focus:bg-[#0F172A] transition-all placeholder:text-slate-600" placeholder="Jean Dupont" />
                </div>
                <div className="space-y-2 group">
                  <label className="text-xs font-bold text-slate-400 ml-1 uppercase tracking-wider group-focus-within:text-blue-400 transition-colors">Email</label>
                  <input type="email" className="w-full bg-[#0F172A]/80 border border-white/5 rounded-xl px-5 py-4 text-white focus:outline-none focus:border-blue-500 focus:bg-[#0F172A] transition-all placeholder:text-slate-600" placeholder="jean@exemple.com" />
                </div>
              </div>
              
              <div className="space-y-2 mb-6 group">
                <label className="text-xs font-bold text-slate-400 ml-1 uppercase tracking-wider group-focus-within:text-blue-400 transition-colors">Type de besoin</label>
                <div className="relative">
                  <select className="w-full bg-[#0F172A]/80 border border-white/5 rounded-xl px-5 py-4 text-white focus:outline-none focus:border-blue-500 focus:bg-[#0F172A] transition-all appearance-none cursor-pointer">
                    <option value="" className="bg-slate-900">Sélectionnez un service</option>
                    <option value="web" className="bg-slate-900">Création Site Web</option>
                    <option value="digital" className="bg-slate-900">Digitalisation & Réseaux</option>
                    <option value="print" className="bg-slate-900">Flyer, Logo & Identité</option>
                    <option value="objets" className="bg-slate-900">Objets personnalisés & Goodies</option>
                    <option value="autre" className="bg-slate-900">Autre demande</option>
                  </select>
                  <div className="absolute inset-y-0 right-0 flex items-center pr-5 pointer-events-none text-slate-500">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                  </div>
                </div>
              </div>
              
              <div className="space-y-2 mb-8 group">
                <label className="text-xs font-bold text-slate-400 ml-1 uppercase tracking-wider group-focus-within:text-blue-400 transition-colors">Votre message</label>
                <textarea rows="4" className="w-full bg-[#0F172A]/80 border border-white/5 rounded-xl px-5 py-4 text-white focus:outline-none focus:border-blue-500 focus:bg-[#0F172A] transition-all placeholder:text-slate-600 resize-none" placeholder="Décrivez votre projet ici..."></textarea>
              </div>
              
              <button type="submit" className="w-full relative group overflow-hidden rounded-xl">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-orange-500 opacity-80 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative px-8 py-5 flex items-center justify-center gap-3 text-white font-bold text-lg">
                  Envoyer ma demande
                  <Zap size={20} className="group-hover:scale-125 transition-transform duration-300" />
                </div>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

// === SECTION: Footer ===
const Footer = () => (
  <footer className="py-8 border-t border-white/5 bg-[#0F172A] text-center text-slate-500">
    <div className="container mx-auto px-6">
      <div className="font-playfair text-xl md:text-2xl font-bold tracking-tight text-white/50 mb-3">
        Proche de <span className="text-orange-500/50">Dieu</span>
      </div>
      <p className="text-xs font-medium">© {new Date().getFullYear()} Proche de Dieu. Tous droits réservés.</p>
    </div>
  </footer>
);
