'use client';

import { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Navigation from '../components/navigation';
import Hero from '../components/hero';
import Project from '../components/project';
import Skill from '../components/skill';
import FAQS from '@/components/faqs';
import Footer from '@/components/footer';

const AnimatedSection = ({ children }: { children: React.ReactNode }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true, // Only trigger animation once
    threshold: 0.3, // Trigger when 20% of the element is visible
  });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={{
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 1 } },
      }}
    >
      {children}
    </motion.div>
  );
};

export default function Home() {
  return (
    <main className="relative overflow-hidden">
      <Navigation />

      {/* Hero Section */}
      <Hero />

      {/* Projects Section */}
      <div className="mx-auto max-w-5xl p-5 mt-32">
        <AnimatedSection>
          <Project />
        </AnimatedSection>
      </div>

      {/* Skill Section */}
      <div className="mx-auto max-w-5xl p-5 mt-32">
        <AnimatedSection>
          <Skill />
        </AnimatedSection>
      </div>

      {/* FAQS Section */}
      <div className="mx-auto max-w-5xl p-5 mt-32">
        <AnimatedSection>
          <FAQS />
        </AnimatedSection>
      </div>

      {/* Footer Section */}
      <div className="mt-32">
        <AnimatedSection>
          <Footer />
        </AnimatedSection>
      </div>
    </main>
  );
}
