/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Pillars } from './components/Pillars';
import { Projects } from './components/Projects';
import { Playground } from './components/Playground';
import { Experience } from './components/Experience';
import { TechStack } from './components/TechStack';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { ProjectModal } from './components/ProjectModal';
import { ResumeModal } from './components/ResumeModal';
import { Language, Project } from './types/portfolio';

export default function App() {
  const [language, setLanguage] = useState<Language>('ko');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [resumeOpen, setResumeOpen] = useState(false);

  const handleOpenContact = () => {
    const contactEl = document.getElementById('contact');
    if (contactEl) {
      contactEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#090a0f] text-slate-100 flex flex-col font-sans selection:bg-cyan-500/20 selection:text-cyan-200">
      {/* 3-Zone Top Bar Navigation */}
      <Navbar
        language={language}
        onLanguageChange={setLanguage}
        onOpenResume={() => setResumeOpen(true)}
        onOpenContact={handleOpenContact}
      />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* Hero Section */}
        <Hero
          language={language}
          onOpenContact={handleOpenContact}
        />

        {/* Selected Works & Bento Grid Projects */}
        <Projects
          language={language}
          onSelectProject={(project) => setSelectedProject(project)}
        />

        {/* Engineering Principles & Pillars */}
        <Pillars language={language} />

        {/* Interactive Frontend Lab / Playground */}
        <Playground language={language} />

        {/* Production Experience & Career Timeline */}
        <Experience language={language} />

        {/* Tech Stack & Core Competencies */}
        <TechStack language={language} />

        {/* Contact Form & Communication Channels */}
        <ContactSection language={language} />
      </main>

      {/* Quiet Minimalist Footer */}
      <Footer language={language} />

      {/* Interactive Case Study Modal */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          language={language}
          onClose={() => setSelectedProject(null)}
        />
      )}

      {/* Full Resume / CV Modal */}
      {resumeOpen && (
        <ResumeModal
          language={language}
          onClose={() => setResumeOpen(false)}
        />
      )}
    </div>
  );
}
