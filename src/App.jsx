import React from 'react';
import Nav from './components/nav';
import Hero from './components/hero';
import Solutions from './components/solutions';
import { CloudSection, EfficiencySection, CTABand, CTAPlain } from './components/midsections';
import { Marquee, OutOfBox } from './components/lightsection';
import Fintech from './components/fintech';
import CaseStudies from './components/casestudies';
import Footer from './components/footer';
import { useReveal } from './components/ui';

import './styles/tokens.css';
import './styles/app.css';

export default function App() {
  useReveal();
  return (
    <React.Fragment>
      <Nav />
      <main>
        <Hero />
        <Solutions />
        <CloudSection />
        <EfficiencySection />
        <CTABand id="cta-1" />
        <Marquee />
        <OutOfBox />
        <Fintech />
        <CaseStudies />
        <CTAPlain />
        <Footer />
      </main>
    </React.Fragment>
  );
}
