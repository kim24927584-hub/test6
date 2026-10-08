import React, { useEffect } from 'react';
import { DEVELOPER_INFO, EXPERIENCES, PROJECTS, SKILL_CATEGORIES } from '../data/portfolioData';
import { X, Printer, Download, Mail, MapPin, Globe, CheckCircle2 } from 'lucide-react';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/80 backdrop-blur-md overflow-y-auto animate-fadeIn">
      <div className="fixed inset-0" onClick={onClose} />

      <div className="relative w-full max-w-4xl bg-[#0d1017] border border-white/[0.12] rounded-2xl shadow-2xl overflow-hidden z-10 my-6 max-h-[92vh] flex flex-col">
        
        {/* Top Control Bar */}
        <div className="sticky top-0 bg-[#0d1017]/95 backdrop-blur-md px-6 py-4 border-b border-white/[0.08] flex items-center justify-between z-20">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
            <h3 className="text-sm font-bold text-white font-mono">
              이력서 (Resume) — {DEVELOPER_INFO.nameKorean}
            </h3>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-white/80 bg-white/[0.06] hover:bg-white/[0.12] rounded-lg border border-white/[0.1] transition-colors"
              title="이력서 인쇄 또는 PDF 저장"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>인쇄 / PDF 저장</span>
            </button>
            <button
              onClick={onClose}
              className="p-1.5 text-white/60 hover:text-white rounded-lg hover:bg-white/[0.08]"
              aria-label="닫기"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Resume Content Sheet */}
        <div className="overflow-y-auto p-6 sm:p-10 space-y-8 flex-1 text-white/90 print:bg-white print:text-black">
          
          {/* Header Section */}
          <div className="border-b border-white/[0.1] pb-6 flex flex-col sm:flex-row sm:items-start justify-between gap-4">
            <div>
              <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                {DEVELOPER_INFO.nameKorean}{' '}
                <span className="text-white/40 font-normal text-lg">
                  ({DEVELOPER_INFO.nameEnglish})
                </span>
              </h1>
              <p className="text-sm text-blue-400 font-mono mt-1 font-semibold">
                {DEVELOPER_INFO.title} (웹 아키텍처 & 성능 엔지니어링)
              </p>
              <p className="text-xs text-white/60 mt-2 max-w-xl leading-relaxed">
                {DEVELOPER_INFO.description}
              </p>
            </div>

            <div className="text-xs font-mono text-white/60 space-y-1 sm:text-right shrink-0">
              <div className="flex items-center sm:justify-end gap-1.5">
                <Mail className="w-3.5 h-3.5 text-blue-400" />
                <span>{DEVELOPER_INFO.email}</span>
              </div>
              <div className="flex items-center sm:justify-end gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-blue-400" />
                <span>서울, 대한민국</span>
              </div>
            </div>
          </div>

          {/* Section: Core Summary */}
          <div>
            <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-blue-400 mb-3">
              01. 핵심 강점 요약 (Core Summary)
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {DEVELOPER_INFO.stats.map((s, idx) => (
                <div key={idx} className="p-3 rounded-lg bg-white/[0.02] border border-white/[0.06]">
                  <div className="text-lg font-bold font-mono text-white tabular-nums">{s.value}</div>
                  <div className="text-xs font-semibold text-white/80">{s.label}</div>
                  <div className="text-[11px] text-white/50">{s.detail}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Section: Work Experience */}
          <div>
            <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-blue-400 mb-4">
              02. 경력 사항 (Work Experience)
            </h2>
            <div className="space-y-6">
              {EXPERIENCES.map((exp, idx) => (
                <div key={idx} className="space-y-2">
                  <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                    <h3 className="text-sm font-bold text-white">
                      {exp.role} <span className="text-white/50">| {exp.company}</span>
                    </h3>
                    <span className="text-xs font-mono text-white/50">{exp.period}</span>
                  </div>
                  <p className="text-xs text-white/70 leading-relaxed">
                    {exp.description}
                  </p>
                  <ul className="space-y-1 pt-1">
                    {exp.achievements.map((ach, aIdx) => (
                      <li key={aIdx} className="flex items-start gap-2 text-xs text-white/80">
                        <CheckCircle2 className="w-3.5 h-3.5 text-blue-400 mt-0.5 shrink-0" />
                        <span>{ach}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="text-[11px] font-mono text-white/40 pt-1">
                    Tech: {exp.skills.join(' · ')}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Section: Featured Projects */}
          <div>
            <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-blue-400 mb-4">
              03. 주요 프로젝트 (Key Projects)
            </h2>
            <div className="space-y-5">
              {PROJECTS.map((proj) => (
                <div key={proj.id} className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.06] space-y-2">
                  <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                    <h4 className="text-sm font-bold text-white">
                      {proj.title}
                    </h4>
                    <span className="text-xs font-mono text-white/50">{proj.period}</span>
                  </div>
                  <p className="text-xs text-white/70 leading-relaxed">
                    {proj.summary}
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 py-1">
                    {proj.metrics.map((m, mIdx) => (
                      <div key={mIdx} className="text-xs font-mono">
                        <span className="text-white font-bold">{m.value}</span>{' '}
                        <span className="text-white/50">({m.label})</span>
                      </div>
                    ))}
                  </div>
                  <div className="text-[11px] font-mono text-white/40">
                    스택: {proj.techStack.join(', ')}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Section: Skills Matrix */}
          <div>
            <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-blue-400 mb-3">
              04. 기술 역량 (Technical Skills)
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
              {SKILL_CATEGORIES.map((cat, idx) => (
                <div key={idx} className="p-3 rounded-lg bg-white/[0.02] border border-white/[0.06]">
                  <span className="font-bold text-white block mb-1.5">{cat.category}</span>
                  <div className="space-y-1 text-white/70">
                    {cat.skills.map((s, sIdx) => (
                      <div key={sIdx} className="flex justify-between font-mono">
                        <span>{s.name}</span>
                        <span className="text-emerald-400">{s.level}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Bottom Footer */}
        <div className="px-6 py-3 bg-[#0d1017] border-t border-white/[0.08] flex items-center justify-between text-xs font-mono text-white/40">
          <span>최종 업데이트: 2026년 10월</span>
          <button
            onClick={onClose}
            className="px-4 py-1.5 font-semibold text-white bg-white/[0.08] hover:bg-white/[0.12] rounded-lg transition-colors"
          >
            닫기
          </button>
        </div>

      </div>
    </div>
  );
};
