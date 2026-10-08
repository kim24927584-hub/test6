import React from 'react';
import { DEVELOPER_INFO } from '../data/portfolioData';
import { ArrowUp, Github, Linkedin, Mail } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-white/[0.08] py-12 bg-[#06070a] text-white/60 text-xs">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          
          {/* Brand & Copyright */}
          <div className="flex flex-col sm:flex-row items-center gap-3 text-center sm:text-left">
            <span className="font-bold text-white text-sm">
              {DEVELOPER_INFO.nameKorean}
            </span>
            <span aria-hidden="true" className="hidden sm:inline text-white/20">·</span>
            <span>프론트엔드 엔지니어 포트폴리오</span>
            <span aria-hidden="true" className="hidden sm:inline text-white/20">·</span>
            <span className="text-white/40">© {new Date().getFullYear()} Minseong Kim. All rights reserved.</span>
          </div>

          {/* Social Links & Back to Top */}
          <div className="flex items-center gap-4">
            <a
              href={`mailto:${DEVELOPER_INFO.email}`}
              className="text-white/60 hover:text-white transition-colors"
              aria-label="이메일 보내기"
            >
              <Mail className="w-4 h-4" />
            </a>
            <a
              href={DEVELOPER_INFO.github}
              target="_blank"
              rel="noreferrer"
              className="text-white/60 hover:text-white transition-colors"
              aria-label="GitHub 프로필"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href={DEVELOPER_INFO.linkedin}
              target="_blank"
              rel="noreferrer"
              className="text-white/60 hover:text-white transition-colors"
              aria-label="LinkedIn 프로필"
            >
              <Linkedin className="w-4 h-4" />
            </a>

            <div className="w-px h-4 bg-white/10 mx-1" />

            <button
              onClick={scrollToTop}
              className="p-2 rounded-lg bg-white/[0.04] hover:bg-white/[0.1] text-white/80 hover:text-white transition-colors"
              aria-label="맨 위로 이동"
              title="맨 위로 이동"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>

        </div>
      </div>
    </footer>
  );
};
