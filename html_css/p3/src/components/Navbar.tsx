import React, { useState, useEffect } from 'react';
import { DEVELOPER_INFO } from '../data/portfolioData';
import { FileText, Send, Menu, X } from 'lucide-react';

interface NavbarProps {
  onOpenResume: () => void;
  onOpenContact: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenResume, onOpenContact }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: '소개', href: '#about' },
    { label: '프로젝트', href: '#projects' },
    { label: '실험실 (Lab)', href: '#lab' },
    { label: '경력 및 이력', href: '#experience' },
    { label: '기술 역량', href: '#skills' },
    { label: '기술 아티클', href: '#articles' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-200 ${
        scrolled
          ? 'bg-[#090b10]/85 backdrop-blur-md border-b border-white/[0.08] py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Zone 1: Brand Title (Single text element wordmark as per Top Bar Contract) */}
          <a
            href="#"
            className="text-lg font-bold tracking-tight text-white hover:text-blue-400 transition-colors"
          >
            {DEVELOPER_INFO.nameKorean}{' '}
            <span className="text-white/40 font-normal text-sm">
              / {DEVELOPER_INFO.nameEnglish}
            </span>
          </a>

          {/* Zone 2: 4-6 Clean text navigation links with subtle hover underlines */}
          <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-white/70">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="hover:text-white transition-colors relative py-1 after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-blue-500 after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:origin-left"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Zone 3: 1-2 Primary actions */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              onClick={onOpenResume}
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-medium text-white/80 bg-white/[0.06] hover:bg-white/[0.12] border border-white/[0.1] rounded-md transition-colors whitespace-nowrap focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
            >
              <FileText className="w-3.5 h-3.5" />
              <span>이력서 보기</span>
            </button>
            <button
              onClick={onOpenContact}
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-medium text-white bg-blue-600 hover:bg-blue-500 rounded-md transition-colors whitespace-nowrap shadow-sm shadow-blue-500/20 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400"
            >
              <Send className="w-3.5 h-3.5" />
              <span>커피챗 제안</span>
            </button>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-white/80 hover:text-white focus:outline-none"
              aria-label="메뉴 열기"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-3 pt-3 pb-4 border-t border-white/[0.08] flex flex-col gap-3">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-sm font-medium text-white/80 hover:text-white py-1 px-2 rounded hover:bg-white/[0.04]"
              >
                {link.label}
              </a>
            ))}
            <div className="flex items-center gap-2 pt-2 border-t border-white/[0.06]">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenResume();
                }}
                className="flex-1 inline-flex items-center justify-center gap-1.5 py-2 text-xs font-medium text-white/90 bg-white/[0.08] rounded-md"
              >
                <FileText className="w-3.5 h-3.5" />
                이력서 보기
              </button>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenContact();
                }}
                className="flex-1 inline-flex items-center justify-center gap-1.5 py-2 text-xs font-medium text-white bg-blue-600 rounded-md"
              >
                <Send className="w-3.5 h-3.5" />
                커피챗 제안
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};
