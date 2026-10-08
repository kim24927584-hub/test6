import React, { useState } from 'react';
import { Menu, X, FileText, Send, Globe } from 'lucide-react';
import { Language } from '../types/portfolio';

interface NavbarProps {
  language: Language;
  onLanguageChange: (lang: Language) => void;
  onOpenResume: () => void;
  onOpenContact: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  language,
  onLanguageChange,
  onOpenResume,
  onOpenContact,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: language === 'ko' ? '프로젝트' : 'Projects', href: '#projects' },
    { label: language === 'ko' ? '핵심 역량' : 'Pillars', href: '#pillars' },
    { label: language === 'ko' ? '인터랙티브 랩' : 'Playground', href: '#playground' },
    { label: language === 'ko' ? '경력 & 여정' : 'Experience', href: '#experience' },
    { label: language === 'ko' ? '기술 스택' : 'Skills', href: '#skills' },
  ];

  return (
    <header className="sticky top-0 z-40 w-full bg-[#090a0f]/90 backdrop-blur-md border-b border-slate-800/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        {/* Zone 1: Single text element wordmark */}
        <a
          href="#"
          className="text-base sm:text-lg font-bold tracking-tight text-white hover:text-cyan-400 transition-colors whitespace-nowrap"
        >
          Minseong Kim
        </a>

        {/* Zone 2: 4-5 clean text navigation links */}
        <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-slate-300">
          {navLinks.map((link, idx) => (
            <a
              key={idx}
              href={link.href}
              className="hover:text-white transition-colors relative py-1 text-xs sm:text-sm whitespace-nowrap"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Zone 3: 1-2 primary actions */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Language Toggle */}
          <button
            onClick={() => onLanguageChange(language === 'ko' ? 'en' : 'ko')}
            className="px-2.5 py-1.5 text-xs font-medium text-slate-300 hover:text-white bg-slate-900 hover:bg-slate-800 border border-slate-800 rounded-lg transition-colors flex items-center gap-1.5 cursor-pointer"
            aria-label="언어 전환"
          >
            <Globe className="w-3.5 h-3.5 text-cyan-400" />
            <span className="font-mono">{language === 'ko' ? 'EN' : 'KO'}</span>
          </button>

          {/* Resume Modal Trigger */}
          <button
            onClick={onOpenResume}
            className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-slate-200 hover:text-white bg-slate-900 hover:bg-slate-800 border border-slate-800 rounded-lg transition-colors cursor-pointer whitespace-nowrap"
          >
            <FileText className="w-3.5 h-3.5 text-cyan-400" />
            <span>{language === 'ko' ? '이력서 보기' : 'Resume'}</span>
          </button>

          {/* Contact Action */}
          <button
            onClick={onOpenContact}
            className="px-3.5 py-1.5 text-xs font-semibold text-slate-950 bg-cyan-400 hover:bg-cyan-300 rounded-lg transition-all shadow-sm shadow-cyan-400/20 cursor-pointer whitespace-nowrap"
          >
            {language === 'ko' ? '커피챗 & 연락' : 'Contact'}
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-1.5 text-slate-400 hover:text-white hover:bg-slate-800 rounded-lg transition-colors"
            aria-label="메뉴 열기"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden px-4 pt-2 pb-4 bg-[#090a0f] border-b border-slate-800 space-y-2">
          {navLinks.map((link, idx) => (
            <a
              key={idx}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 text-sm text-slate-300 hover:text-white hover:bg-slate-900 rounded-lg transition-colors"
            >
              {link.label}
            </a>
          ))}
          <button
            onClick={() => {
              setMobileMenuOpen(false);
              onOpenResume();
            }}
            className="w-full text-left px-3 py-2 text-sm text-cyan-400 hover:bg-slate-900 rounded-lg transition-colors flex items-center gap-2"
          >
            <FileText className="w-4 h-4" />
            <span>{language === 'ko' ? '이력서 전체보기' : 'View Full Resume'}</span>
          </button>
        </div>
      )}
    </header>
  );
};
