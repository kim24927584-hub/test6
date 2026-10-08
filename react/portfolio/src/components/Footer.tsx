import React from 'react';
import { ArrowUp, Github, Linkedin, ExternalLink } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { Language } from '../types/portfolio';

interface FooterProps {
  language: Language;
}

export const Footer: React.FC<FooterProps> = ({ language }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-12 border-t border-slate-800 bg-[#07080d] text-xs text-slate-500">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        {/* Left: Brand & Copyright */}
        <div className="flex items-center gap-3">
          <span className="font-semibold text-slate-300">Minjun Kim</span>
          <span>·</span>
          <span>© {new Date().getFullYear()} All rights reserved.</span>
        </div>

        {/* Center: Clean links */}
        <div className="flex items-center gap-4 text-slate-400">
          <a
            href={PERSONAL_INFO.github}
            target="_blank"
            rel="noreferrer"
            className="hover:text-white transition-colors"
          >
            GitHub
          </a>
          <a
            href={PERSONAL_INFO.linkedin}
            target="_blank"
            rel="noreferrer"
            className="hover:text-white transition-colors"
          >
            LinkedIn
          </a>
          <a
            href={PERSONAL_INFO.blog}
            target="_blank"
            rel="noreferrer"
            className="hover:text-white transition-colors"
          >
            Blog
          </a>
        </div>

        {/* Right: Back to top */}
        <button
          onClick={scrollToTop}
          className="p-2 bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-white border border-slate-800 rounded-lg transition-colors flex items-center gap-1.5 cursor-pointer"
          aria-label="맨 위로 스크롤"
        >
          <ArrowUp className="w-3.5 h-3.5" />
          <span>{language === 'ko' ? '맨 위로' : 'Top'}</span>
        </button>
      </div>
    </footer>
  );
};
