import React, { useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Code, Smartphone, Cloud, Bot, TrendingUp, PenTool, CheckCircle } from 'lucide-react';
import { Button, GeneratedImage, SectionTitle, TextReveal, TiltCard, ParallaxImage, FloatingElement } from './UI';
import { ServiceItem, ProjectItem, StepItem } from '../types';

// Preload critical hero image
if (typeof window !== 'undefined') {
  const heroImg = new Image();
  heroImg.src = '/images/hero-bg.png';
}

/* ---------------- HERO SECTION ---------------- */

export const Hero: React.FC = () => {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 1000], [0, 400]);
  const opacity = useTransform(scrollY, [0, 500], [1, 0]);

  // Mouse spotlight state
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    if (!containerRef.current) return;
    const { left, top } = containerRef.current.getBoundingClientRect();
    setMousePosition({
      x: e.clientX - left,
      y: e.clientY - top,
    });
  };

  return (
    <section
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-[#0a0a0a]"
    >
      {/* Background Image Layer with Parallax */}
      <motion.div style={{ y, opacity }} className="absolute inset-0 z-0">
        <GeneratedImage
          src="/images/hero-bg.png"
          alt="Hero Background"
          className="w-full h-full"
          overlayOpacity={0.3}
        />
      </motion.div>

      {/* Interactive Spotlight Overlay */}
      <div
        className="absolute inset-0 z-1 pointer-events-none transition-opacity duration-300"
        style={{
          background: `radial-gradient(800px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(6,182,212,0.1), transparent 40%)`
        }}
      />

      {/* Floating Elements */}
      <div className="absolute inset-0 pointer-events-none z-1 overflow-hidden">
        <FloatingElement delay={0} duration={6} className="absolute top-1/4 left-10 w-64 h-64 bg-cyan-500/10 rounded-full blur-[80px]" />
        <FloatingElement delay={1} duration={7} className="absolute bottom-1/4 right-10 w-96 h-96 bg-blue-600/10 rounded-full blur-[100px]" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 relative z-10 text-center">
        <div className="mb-6">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tight leading-[1.1] text-white">
            <TextReveal className="justify-center">Build Smarter.</TextReveal>
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600">
              <TextReveal className="justify-center" delay={0.4}>Launch Faster.</TextReveal>
            </span>
          </h1>
        </div>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto mb-10"
        >
          We turn complex ideas into powerful digital products—at a fraction of the traditional time and cost.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="flex flex-col md:flex-row gap-4 justify-center"
        >
          <Button href="#contact" variant="primary">Start Your Project</Button>
          <Button href="#portfolio" variant="secondary">See Our Work</Button>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/50"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="flex flex-col items-center gap-2"
        >
          <span className="text-xs uppercase tracking-widest text-cyan-500/70">Scroll</span>
          <div className="w-px h-12 bg-gradient-to-b from-cyan-500 to-transparent"></div>
        </motion.div>
      </motion.div>
    </section>
  );
};

/* ---------------- PROBLEM SECTION ---------------- */

export const ProblemSolution: React.FC = () => {
  return (
    <section className="py-32 bg-[#0a0a0a] relative overflow-hidden group">
      {/* 1. Deep Texture Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a] via-transparent to-[#0a0a0a] z-20" />
        <GeneratedImage
          src="/images/problem-speed.png"
          className="w-full h-full opacity-80 group-hover:opacity-100 transition-all duration-[2000ms] ease-out scale-105 group-hover:scale-100"
          overlayOpacity={0.3}
          alt="Speed Texture"
        />
      </div>

      {/* 2. Technical Grid Overlay */}
      <div className="absolute inset-0 z-10 bg-[linear-gradient(rgba(6,182,212,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(6,182,212,0.03)_1px,transparent_1px)] bg-[size:100px_100px] pointer-events-none" />

      {/* 3. Ambient Glow Orbs */}
      <FloatingElement delay={0} duration={10} className="absolute top-0 right-0 w-[800px] h-[800px] bg-cyan-900/10 blur-[150px] rounded-full pointer-events-none z-10 translate-x-1/3 -translate-y-1/3" />
      <FloatingElement delay={2} duration={12} className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-blue-900/10 blur-[120px] rounded-full pointer-events-none z-10 -translate-x-1/3 translate-y-1/3" />

      <div className="container mx-auto px-6 relative z-30">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <SectionTitle title="What Used to Take Months Now Takes Weeks" subtitle="The New Standard" />
            <div className="space-y-6 text-lg text-gray-400 leading-relaxed">
              <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}>
                Traditional development is slow and expensive. Agencies charge premium rates, timelines stretch for months, and budgets balloon out of control.
              </motion.p>
              <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.4 }} className="text-white font-medium border-l-2 border-cyan-500 pl-4 bg-white/5 p-6 rounded-r-sm backdrop-blur-sm border-r border-t border-b border-white/5">
                Digital VisionWorks operates differently. By leveraging AI-first development workflows and modern tooling, we deliver production-ready applications in a fraction of the time—without sacrificing quality.
              </motion.div>
              <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.6 }}>
                Whether you're a startup launching your first product or an established business streamlining operations, we build solutions that actually ship.
              </motion.p>
            </div>
          </motion.div>

          <div className="relative aspect-square md:aspect-[4/3] rounded-sm overflow-hidden border border-white/10 shadow-[0_0_50px_rgba(0,0,0,0.5)] group-hover:border-cyan-500/30 transition-colors duration-500">
            <ParallaxImage
              src="/images/problem-workspace.png"
              className="w-full h-full"
              overlayOpacity={0.1}
            />
            {/* Decorative Corner Accents */}
            <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-cyan-500 opacity-50"></div>
            <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-cyan-500 opacity-50"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

/* ---------------- SERVICES SECTION ---------------- */

const services: ServiceItem[] = [
  {
    title: "Custom Web Applications",
    description: "From internal tools to customer-facing platforms, we build responsive web applications tailored to your exact requirements.",
    iconName: "Code",
    imageSrc: "/images/service-code.png"
  },
  {
    title: "SaaS Development",
    description: "Turn your idea into a scalable software-as-a-service product. We handle architecture, authentication, billing integration.",
    iconName: "Cloud",
    imageSrc: "/images/service-cloud.png"
  },
  {
    title: "Mobile-First PWAs",
    description: "Progressive Web Apps that feel native without the app store hassle. Install directly from the browser, work offline.",
    iconName: "Smartphone",
    imageSrc: "/images/service-smartphone.png"
  },
  {
    title: "AI Integration",
    description: "Integrate AI into your workflows—chatbots, document processing, intelligent search, and custom automation.",
    iconName: "Bot",
    imageSrc: "/images/service-bot.png"
  },
  {
    title: "Consulting & Strategy",
    description: "Not sure where to start? We help you define requirements, choose the right tech stack, and create a roadmap.",
    iconName: "TrendingUp",
    imageSrc: "/images/service-trending.png"
  },
  {
    title: "Content & Marketing",
    description: "From landing pages to full marketing sites, we create digital experiences that convert visitors into customers.",
    iconName: "PenTool",
    imageSrc: "/images/service-pen.png"
  }
];

const IconMap: Record<string, React.FC<any>> = {
  Code, Cloud, Smartphone, Bot, TrendingUp, PenTool
};

export const Services: React.FC = () => {
  return (
    <section id="services" className="py-24 bg-[#080808] relative">
      <div className="container mx-auto px-6 relative z-10">
        <SectionTitle title="What We Build" subtitle="Our Expertise" />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 perspective-1000">
          {services.map((service, index) => {
            const Icon = IconMap[service.iconName];
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                <TiltCard className="h-full bg-[#111] border border-white/5 p-8 rounded-sm group hover:border-cyan-500/50 hover:shadow-[0_0_40px_rgba(6,182,212,0.15)] transition-all relative overflow-hidden flex flex-col justify-between min-h-[320px]">

                  {/* Background Image (Visible by default in grayscale, Color on Hover) */}
                  <div className="absolute inset-0 opacity-40 group-hover:opacity-80 transition-all duration-700 mix-blend-screen pointer-events-none filter grayscale group-hover:grayscale-0">
                    <GeneratedImage
                      src={service.imageSrc}
                      className="w-full h-full transform group-hover:scale-110 transition-transform duration-1000"
                      overlayOpacity={0.4}
                      alt={service.title}
                    />
                  </div>

                  {/* Internal Glow on Hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-sm"></div>

                  <div className="mb-6 inline-flex items-center justify-center w-14 h-14 bg-gradient-to-br from-[#1a1a1a] to-[#0d0d0d] border border-white/10 rounded-lg group-hover:border-cyan-500/50 transition-colors relative z-10 shadow-lg group-hover:scale-110 duration-300">
                    <Icon className="w-6 h-6 text-cyan-400" />
                  </div>

                  <div className="relative z-10 mt-auto">
                    <h3 className="text-xl font-bold mb-4 group-hover:text-cyan-400 transition-colors">{service.title}</h3>
                    <p className="text-gray-400 text-sm leading-relaxed">{service.description}</p>
                  </div>
                </TiltCard>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

/* ---------------- DIFFERENTIATORS SECTION ---------------- */

export const WhyUs: React.FC = () => {
  return (
    <section className="py-24 bg-[#050505] border-y border-white/5 relative overflow-hidden">
      {/* Background Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-2 gap-16 items-start">

          {/* Left Column: Visual + Title */}
          <div className="md:sticky md:top-32">
            <SectionTitle title="The Digital VisionWorks Difference" subtitle="Why Choose Us" />
            <div className="hidden md:block aspect-[3/4] w-full rounded-sm overflow-hidden border border-white/10 shadow-2xl mt-8 relative">
              <ParallaxImage
                src="/images/why-us-sculpture.png"
                aspectRatio="3:4"
                className="w-full h-full"
                overlayOpacity={0.2}
              />
            </div>
          </div>

          {/* Right Column: Content */}
          <div className="space-y-16 mt-8 md:mt-0">
            {[
              {
                id: 'ai-first',
                title: "AI-First Development",
                desc: "We don't just build software—we build it smarter. AI-assisted coding, testing, and iteration means faster delivery and fewer bugs."
              },
              {
                id: 'startup-speed',
                title: "Startup Speed, Enterprise Quality",
                desc: "Move fast without breaking things. Our agile process delivers working software in weeks, not quarters."
              },
              {
                id: 'transparent',
                title: "Transparent Partnership",
                desc: "No black boxes. You'll have direct access to your development team, clear timelines, and regular demos."
              }
            ].map((item, idx) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.2 }}
                className="group relative pl-8 border-l border-white/10 hover:border-cyan-500 transition-colors duration-500"
              >
                <div className="absolute -left-3 top-0 w-6 h-6 bg-[#050505] border border-white/20 group-hover:border-cyan-500 rounded-full flex items-center justify-center transition-colors">
                  <div className="w-2 h-2 bg-cyan-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </div>
                <div className="text-5xl font-black text-white/5 mb-4 group-hover:text-cyan-500/10 transition-colors absolute -top-10 right-0 select-none">0{idx + 1}</div>
                <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-cyan-400 transition-colors">{item.title}</h3>
                <p className="text-gray-400 text-lg leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

/* ---------------- PORTFOLIO SECTION ---------------- */

const projects: ProjectItem[] = [
  {
    title: "Clockwork Venue",
    type: "SaaS Platform",
    description: "A real-time venue management system for nightclubs and entertainment venues. Features live rotation tracking, VIP timers, DJ dashboards, payout reporting, and multi-device sync across floor staff.",
    techStack: ["React", "TypeScript", "Firebase"],
    link: "https://clockworkvenue.com",
    // Highly specific prompt for Clockwork Venue branding
    imageSrc: "/images/portfolio-clockwork.png"
  },
  {
    title: "Dogmora",
    type: "Consumer Application",
    description: "A pet health and memory platform that helps dog owners track their pet's life—from daily moments to vet visits. AI-powered summaries make vet appointments more productive.",
    techStack: ["React", "Firebase", "PWA"],
    link: "https://dogmora.com",
    // Highly specific prompt for Dogmora branding
    imageSrc: "/images/portfolio-dogmora.png"
  }
];

export const Portfolio: React.FC = () => {
  return (
    <section id="portfolio" className="py-24 bg-[#0a0a0a]">
      <div className="container mx-auto px-6">
        <SectionTitle title="Projects That Ship" subtitle="Featured Work" />

        <div className="space-y-32">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className={`flex flex-col ${index % 2 === 1 ? 'md:flex-row-reverse' : 'md:flex-row'} gap-12 items-center`}
            >
              {/* Image Side */}
              <div className="w-full md:w-3/5">
                <motion.div
                  initial={{ opacity: 0, scale: 0.9, rotate: index % 2 === 0 ? -2 : 2 }}
                  whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.8 }}
                  className="relative group rounded-sm overflow-hidden border border-white/10 shadow-2xl bg-[#111]"
                >
                  <div className="aspect-[16/10] relative z-10">
                    <ParallaxImage
                      src={project.imageSrc}
                      aspectRatio="16:9" // Using standard aspect ratio but cutting via CSS for shape
                      overlayOpacity={0}
                    />
                  </div>
                  {/* Glass overlay on hover */}
                  <div className="absolute inset-0 bg-cyan-500/0 group-hover:bg-cyan-500/10 z-20 transition-colors duration-500 mix-blend-overlay pointer-events-none" />
                </motion.div>
              </div>

              {/* Text Side */}
              <motion.div
                initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="w-full md:w-2/5"
              >
                <span className="inline-block px-3 py-1 mb-4 text-xs font-bold tracking-widest text-cyan-400 border border-cyan-500/30 rounded-full uppercase bg-cyan-950/20">
                  {project.type}
                </span>
                <h3 className="text-3xl md:text-5xl font-bold mb-6">{project.title}</h3>
                <p className="text-lg text-gray-400 mb-8 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-3 mb-10">
                  {project.techStack.map((tech) => (
                    <span key={tech} className="px-3 py-1 bg-[#1a1a1a] border border-white/10 text-gray-300 text-xs font-semibold rounded-sm">
                      {tech}
                    </span>
                  ))}
                </div>

                <Button href={project.link} variant="secondary">View Live Project</Button>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

/* ---------------- PROCESS SECTION ---------------- */

const steps: StepItem[] = [
  { number: "01", title: "Discovery", description: "We start by understanding your problem, your users, and your goals." },
  { number: "02", title: "Architecture", description: "We map out the technical approach and design the user experience." },
  { number: "03", title: "Build & Iterate", description: "Agile sprints with regular demos. You see working software early." },
  { number: "04", title: "Launch", description: "We deploy to production, handle the handoff, and provide documentation." }
];

export const Process: React.FC = () => {
  return (
    <section className="py-32 bg-[#0a0a0a] relative overflow-hidden">
      {/* Background schematic */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <GeneratedImage
          src="/images/process-bg.png"
          className="w-full h-full"
          overlayOpacity={0.8}
          alt="Process Background"
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <SectionTitle title="How We Work" subtitle="The Process" />

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">

          {/* Connecting Line (Desktop) */}
          <div className="hidden md:block absolute top-6 left-[12.5%] right-[12.5%] h-px bg-white/10">
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: '100%' }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, delay: 0.2 }}
              className="h-full bg-gradient-to-r from-cyan-500 to-blue-600"
            />
          </div>

          {steps.map((step, idx) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2 }}
              className="relative"
            >
              <div className="w-12 h-12 rounded-full border border-cyan-500 bg-[#0a0a0a] flex items-center justify-center text-cyan-400 font-bold mb-6 relative z-10 shadow-[0_0_20px_rgba(6,182,212,0.3)]">
                {step.number}
              </div>
              <h3 className="text-xl font-bold mb-3">{step.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

/* ---------------- ABOUT SECTION ---------------- */

export const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-[#080808] relative">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Visual */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="order-2 md:order-1 relative aspect-square rounded-sm overflow-hidden border border-white/10 shadow-2xl"
          >
            <ParallaxImage
              src="/images/about-team.png"
              aspectRatio="1:1"
              className="w-full h-full"
              overlayOpacity={0.3}
            />
          </motion.div>

          {/* Content */}
          <div className="order-1 md:order-2">
            <SectionTitle title="Who We Are" />
            <div className="space-y-6 text-gray-300 leading-relaxed text-lg">
              <motion.p initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}>
                Digital VisionWorks LLC is a North American software studio founded on a simple belief: great software shouldn't require massive teams or massive budgets.
              </motion.p>
              <motion.p initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.3 }}>
                We're developers, designers, and problem-solvers who've spent years in the trenches—building products, shipping features, and learning what actually works. Now we bring that experience to clients who want to move fast and build right.
              </motion.p>
              <motion.p initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.4 }} className="text-white border-l-4 border-cyan-500 pl-6 py-2 bg-white/5">
                When you work with us, you get direct access to senior talent, not layers of project managers. We're small by design, selective about projects, and obsessive about quality.
              </motion.p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

/* ---------------- CONTACT SECTION ---------------- */

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!validateEmail(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Project description is required';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Please provide more details about your project';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (validateForm()) {
      setIsSubmitting(true);
      // Simulate form submission - actual email sending to be implemented later
      setTimeout(() => {
        setIsSubmitting(false);
        setIsSubmitted(true);
        setFormData({ name: '', email: '', message: '' });
      }, 1000);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Clear error when user starts typing
    if (errors[name as keyof FormErrors]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };

  return (
    <section id="contact" className="py-32 bg-[#0a0a0a] relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 z-0 pointer-events-none" aria-hidden="true">
        <GeneratedImage
          src="/images/contact-bg.png"
          className="w-full h-full opacity-30"
          overlayOpacity={0.8}
          alt=""
        />
      </div>

      {/* Additional ambient lights */}
      <div aria-hidden="true" className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-900/20 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto bg-[#111]/90 backdrop-blur-md border border-white/10 p-8 md:p-12 rounded-sm shadow-2xl relative overflow-hidden"
        >
          {/* Top Highlight */}
          <div aria-hidden="true" className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-500 via-blue-500 to-cyan-500"></div>

          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 text-white">Let's Build Something</h2>
            <p className="text-gray-400">Have a project in mind? Tell us about it.</p>
          </div>

          {isSubmitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center py-12"
              role="alert"
              aria-live="polite"
            >
              <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-cyan-500/20 flex items-center justify-center">
                <CheckCircle className="w-8 h-8 text-cyan-400" aria-hidden="true" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Message Sent!</h3>
              <p className="text-gray-400 mb-6">
                Thank you for reaching out. We'll get back to you within 24 hours.
              </p>
              <button
                onClick={() => setIsSubmitted(false)}
                className="text-cyan-400 hover:text-cyan-300 font-semibold focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 focus:ring-offset-[#111] rounded-sm px-2 py-1"
              >
                Send another message
              </button>
            </motion.div>
          ) : (
            <form className="space-y-6" onSubmit={handleSubmit} noValidate>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="contact-name" className="text-sm font-semibold text-gray-400 uppercase tracking-wider">
                    Name <span className="text-cyan-400">*</span>
                  </label>
                  <input
                    type="text"
                    id="contact-name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    aria-required="true"
                    aria-invalid={!!errors.name}
                    aria-describedby={errors.name ? 'name-error' : undefined}
                    className={`w-full bg-[#0a0a0a] border ${errors.name ? 'border-red-500' : 'border-white/10'} p-4 text-white focus:border-cyan-500 focus:outline-none focus:ring-1 focus:ring-cyan-500 transition-all rounded-sm hover:border-white/20`}
                    placeholder="John Doe"
                  />
                  {errors.name && (
                    <p id="name-error" className="text-red-400 text-sm" role="alert">
                      {errors.name}
                    </p>
                  )}
                </div>
                <div className="space-y-2">
                  <label htmlFor="contact-email" className="text-sm font-semibold text-gray-400 uppercase tracking-wider">
                    Email <span className="text-cyan-400">*</span>
                  </label>
                  <input
                    type="email"
                    id="contact-email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    aria-required="true"
                    aria-invalid={!!errors.email}
                    aria-describedby={errors.email ? 'email-error' : undefined}
                    className={`w-full bg-[#0a0a0a] border ${errors.email ? 'border-red-500' : 'border-white/10'} p-4 text-white focus:border-cyan-500 focus:outline-none focus:ring-1 focus:ring-cyan-500 transition-all rounded-sm hover:border-white/20`}
                    placeholder="john@company.com"
                  />
                  {errors.email && (
                    <p id="email-error" className="text-red-400 text-sm" role="alert">
                      {errors.email}
                    </p>
                  )}
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="contact-message" className="text-sm font-semibold text-gray-400 uppercase tracking-wider">
                  Project Description <span className="text-cyan-400">*</span>
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  aria-required="true"
                  aria-invalid={!!errors.message}
                  aria-describedby={errors.message ? 'message-error' : undefined}
                  className={`w-full bg-[#0a0a0a] border ${errors.message ? 'border-red-500' : 'border-white/10'} p-4 text-white focus:border-cyan-500 focus:outline-none focus:ring-1 focus:ring-cyan-500 transition-all rounded-sm hover:border-white/20`}
                  placeholder="Tell us about your idea..."
                />
                {errors.message && (
                  <p id="message-error" className="text-red-400 text-sm" role="alert">
                    {errors.message}
                  </p>
                )}
              </div>

              <div className="pt-4 text-center md:text-left">
                <Button
                  type="submit"
                  className="w-full md:w-auto min-w-[200px]"
                  variant="primary"
                  ariaLabel={isSubmitting ? 'Sending message...' : 'Send message'}
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </Button>
              </div>
            </form>
          )}

          <div className="mt-8 text-center border-t border-white/10 pt-8">
            <p className="text-gray-400">
              Prefer email? Reach us directly at{' '}
              <a
                href="mailto:hello@digitalvisionworks.com"
                className="text-cyan-400 hover:text-cyan-300 font-bold focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 focus:ring-offset-[#111] rounded-sm"
              >
                hello@digitalvisionworks.com
              </a>
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};