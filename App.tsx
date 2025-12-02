import React from 'react';
import { Navbar, Footer } from './components/Layout';
import {
  Hero,
  ProblemSolution,
  Services,
  WhyUs,
  Portfolio,
  Process,
  About,
  Contact
} from './components/LandingSections';
import { ScrollProgress, NoiseOverlay, CursorFollower } from './components/UI';
import { ErrorBoundary } from './components/ErrorBoundary';

const App: React.FC = () => {
  return (
    <ErrorBoundary>
      <div className="min-h-screen bg-[#0a0a0a] text-white selection:bg-cyan-500 selection:text-black cursor-auto">
        {/* Skip to main content link for accessibility */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[200] focus:px-4 focus:py-2 focus:bg-cyan-500 focus:text-black focus:font-bold focus:rounded-sm focus:outline-none"
        >
          Skip to main content
        </a>

        {/* Global Premium UI Wrappers */}
        <ScrollProgress />
        <NoiseOverlay />
        <CursorFollower />

        <Navbar />

        <main id="main-content" role="main" tabIndex={-1}>
          <Hero />
          <ProblemSolution />
          <Services />
          <WhyUs />
          <Portfolio />
          <Process />
          <About />
          <Contact />
        </main>

        <Footer />
      </div>
    </ErrorBoundary>
  );
};

export default App;