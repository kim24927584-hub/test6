import React, { useEffect, useState } from 'react';
import { X, Printer, Copy, Check, Download, ExternalLink } from 'lucide-react';
import { PERSONAL_INFO, EXPERIENCES, SKILL_CATEGORIES } from '../data/portfolioData';
import { Language } from '../types/portfolio';

interface ResumeModalProps {
  language: Language;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ language, onClose }) => {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  const handlePrint = () => {
    window.print();
  };

  const handleCopySummary = () => {
    const text = `${PERSONAL_INFO.name[language]} - ${PERSONAL_INFO.title[language]}
Email: ${PERSONAL_INFO.email}
GitHub: ${PERSONAL_INFO.github}

${PERSONAL_INFO.shortBio[language]}

EXPERIENCE:
${EXPERIENCES.map((e) => `- ${e.company} (${e.period}): ${e.role[language]}`).join('\n')}`;

    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10">
      {/* Backdrop */}
      <div
        onClick={onClose}
        className="fixed inset-0 bg-slate-950/80 backdrop-blur-md transition-opacity"
      />

      {/* Modal Container */}
      <div className="relative w-full max-w-3xl max-h-[90vh] bg-[#0d0f18] border border-slate-800 rounded-2xl shadow-2xl flex flex-col overflow-hidden z-10 animate-in fade-in zoom-in-95 duration-200">
        {/* Header */}
        <div className="px-6 py-4 border-b border-slate-800 flex items-center justify-between bg-slate-950/80">
          <div className="flex items-center gap-2">
            <span className="text-sm font-bold text-white">
              {language === 'ko' ? '김민성 프론트엔드 엔지니어 이력서' : 'Minseong Kim Resume / CV'}
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleCopySummary}
              className="px-2.5 py-1.5 text-xs text-slate-300 hover:text-white bg-slate-900 border border-slate-800 rounded-lg transition-colors flex items-center gap-1.5 cursor-pointer"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copied ? '복사 완료' : '텍스트 복사'}</span>
            </button>
            <button
              onClick={handlePrint}
              className="px-2.5 py-1.5 text-xs text-slate-300 hover:text-white bg-slate-900 border border-slate-800 rounded-lg transition-colors flex items-center gap-1.5 cursor-pointer"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>인쇄 / PDF</span>
            </button>
            <button
              onClick={onClose}
              className="p-1.5 text-slate-400 hover:text-white hover:bg-slate-800 rounded-lg transition-colors"
              aria-label="닫기"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Scrollable Printable Document */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-8 text-slate-300 text-xs sm:text-sm leading-relaxed">
          {/* Candidate Info */}
          <div className="border-b border-slate-800 pb-6">
            <h1 className="text-2xl font-black text-white">
              {PERSONAL_INFO.name[language]}
            </h1>
            <p className="text-cyan-400 font-medium text-sm mt-0.5">
              {PERSONAL_INFO.title[language]}
            </p>
            <div className="flex flex-wrap items-center gap-3 text-xs text-slate-400 mt-3 font-mono">
              <span>{PERSONAL_INFO.email}</span>
              <span>·</span>
              <span>{PERSONAL_INFO.location}</span>
              <span>·</span>
              <span>GitHub / LinkedIn</span>
            </div>
            <p className="mt-4 text-xs sm:text-sm text-slate-300 leading-relaxed">
              {PERSONAL_INFO.shortBio[language]}
            </p>
          </div>

          {/* Work Experience */}
          <div className="space-y-6">
            <h2 className="text-xs font-bold uppercase tracking-wider text-cyan-400 font-mono">
              WORK EXPERIENCE
            </h2>

            {EXPERIENCES.map((exp) => (
              <div key={exp.id} className="space-y-2">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between text-xs">
                  <strong className="text-sm text-white font-bold">{exp.company}</strong>
                  <span className="font-mono text-slate-400">{exp.period}</span>
                </div>
                <div className="text-xs text-slate-300 font-medium">
                  {exp.role[language]}
                </div>
                <p className="text-xs text-slate-400">
                  {exp.description[language]}
                </p>
                <ul className="list-disc list-inside space-y-1 text-xs text-slate-300 pt-1">
                  {exp.achievements[language].map((item, idx) => (
                    <li key={idx} className="leading-relaxed">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Core Skills */}
          <div className="space-y-4 pt-4 border-t border-slate-800">
            <h2 className="text-xs font-bold uppercase tracking-wider text-cyan-400 font-mono">
              TECHNICAL COMPETENCIES
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
              {SKILL_CATEGORIES.map((cat, idx) => (
                <div key={idx} className="p-3 bg-slate-900/60 rounded-xl border border-slate-800/80">
                  <div className="font-bold text-white mb-1.5">{cat.title[language]}</div>
                  <div className="text-slate-400">
                    {cat.items.map((i) => i.name).join(', ')}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Education */}
          <div className="space-y-2 pt-4 border-t border-slate-800">
            <h2 className="text-xs font-bold uppercase tracking-wider text-cyan-400 font-mono">
              EDUCATION & CERTIFICATIONS
            </h2>
            <div className="flex justify-between text-xs">
              <div>
                <strong className="text-white">컴퓨터공학과 학사 (B.S. in Computer Science)</strong>
                <div className="text-slate-400">자료구조, 알고리즘, 컴퓨터 아키텍처 수료</div>
              </div>
              <span className="font-mono text-slate-400">2016.03 - 2020.02</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
