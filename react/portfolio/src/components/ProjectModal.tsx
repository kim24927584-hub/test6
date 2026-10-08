import React, { useState, useEffect } from 'react';
import { X, ExternalLink, Github, CheckCircle2, Layers, Cpu, Activity, BarChart3 } from 'lucide-react';
import { Project, Language } from '../types/portfolio';
import { ProjectDemo } from './ProjectDemos';

interface ProjectModalProps {
  project: Project | null;
  language: Language;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, language, onClose }) => {
  const [activeTab, setActiveTab] = useState<'overview' | 'architecture' | 'demo'>('overview');

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10">
      {/* Backdrop */}
      <div
        onClick={onClose}
        className="fixed inset-0 bg-slate-950/80 backdrop-blur-md transition-opacity"
      />

      {/* Modal Dialog */}
      <div className="relative w-full max-w-4xl max-h-[90vh] bg-[#0d0f18] border border-slate-800 rounded-2xl shadow-2xl flex flex-col overflow-hidden z-10 animate-in fade-in zoom-in-95 duration-200">
        {/* Header */}
        <div className="px-6 py-5 border-b border-slate-800 flex items-start justify-between bg-slate-950/60">
          <div>
            <div className="flex items-center gap-3 mb-1 text-xs text-slate-400">
              <span className="font-mono text-cyan-400">{project.period}</span>
              <span>·</span>
              <span>{project.role[language]}</span>
            </div>
            <h2 className="text-xl md:text-2xl font-bold text-white tracking-tight">
              {project.title}
            </h2>
            <p className="text-sm text-slate-400 mt-0.5">
              {project.subtitle[language]}
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-slate-400 hover:text-white hover:bg-slate-800 rounded-lg transition-colors"
            aria-label="닫기"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tab Controls (Segmented Tabs with Active State) */}
        <div className="px-6 pt-3 pb-2 border-b border-slate-800/80 flex items-center justify-between gap-2 bg-[#0a0c13] overflow-x-auto">
          <div className="flex items-center gap-1.5 p-1 bg-slate-900/90 rounded-lg border border-slate-800">
            <button
              onClick={() => setActiveTab('overview')}
              className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors whitespace-nowrap ${
                activeTab === 'overview'
                  ? 'bg-slate-800 text-white shadow-sm'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              {language === 'ko' ? '프로젝트 개요 & 문제 해결' : 'Overview & Solutions'}
            </button>
            <button
              onClick={() => setActiveTab('architecture')}
              className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors whitespace-nowrap ${
                activeTab === 'architecture'
                  ? 'bg-slate-800 text-white shadow-sm'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              {language === 'ko' ? '아키텍처 & 핵심 기술' : 'Architecture & Tech'}
            </button>
            <button
              onClick={() => setActiveTab('demo')}
              className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors whitespace-nowrap ${
                activeTab === 'demo'
                  ? 'bg-cyan-500/20 text-cyan-300 font-semibold border border-cyan-500/40'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              {language === 'ko' ? '⚡ 라이브 인터랙티브 데모' : '⚡ Live Interactive Demo'}
            </button>
          </div>

          {/* External Links */}
          <div className="flex items-center gap-2">
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noreferrer"
              className="p-1.5 text-xs text-slate-400 hover:text-white hover:bg-slate-800 rounded transition-colors flex items-center gap-1.5"
            >
              <Github className="w-4 h-4" />
              <span className="hidden sm:inline">GitHub</span>
            </a>
          </div>
        </div>

        {/* Modal Scrollable Body */}
        <div className="p-6 overflow-y-auto space-y-6 flex-1 text-sm text-slate-300 leading-relaxed">
          {/* Key Metrics Row */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {project.metrics.map((m, idx) => (
              <div
                key={idx}
                className="p-3.5 bg-slate-900/70 border border-slate-800 rounded-xl"
              >
                <div className="text-xs text-slate-400 mb-1">{m.label[language]}</div>
                <div className="text-base sm:text-lg font-bold text-white font-mono tabular-nums">
                  {m.value}
                </div>
              </div>
            ))}
          </div>

          {/* TAB 1: OVERVIEW */}
          {activeTab === 'overview' && (
            <div className="space-y-6">
              <div>
                <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2">
                  {language === 'ko' ? '프로젝트 요약' : 'Project Summary'}
                </h4>
                <p className="text-slate-200">{project.summary[language]}</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 bg-rose-950/20 border border-rose-900/30 rounded-xl">
                  <h4 className="text-xs font-semibold uppercase tracking-wider text-rose-400 mb-2 flex items-center gap-1.5">
                    <span>{language === 'ko' ? '해결하고자 한 기술적 문제' : 'Technical Bottlenecks'}</span>
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-300">
                    {project.problem[language]}
                  </p>
                </div>

                <div className="p-4 bg-emerald-950/20 border border-emerald-900/30 rounded-xl">
                  <h4 className="text-xs font-semibold uppercase tracking-wider text-emerald-400 mb-2 flex items-center gap-1.5">
                    <span>{language === 'ko' ? '엔지니어링 접근법 & 해결책' : 'Engineering Approach'}</span>
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-300">
                    {project.solution[language]}
                  </p>
                </div>
              </div>

              <div>
                <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-3">
                  {language === 'ko' ? '핵심 성과 & 배운 점 (Key Takeaways)' : 'Key Takeaways & Lessons'}
                </h4>
                <ul className="space-y-2.5">
                  {project.keyTakeaways[language].map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                      <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}

          {/* TAB 2: ARCHITECTURE */}
          {activeTab === 'architecture' && (
            <div className="space-y-6">
              <div>
                <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-3 flex items-center gap-1.5">
                  <Layers className="w-4 h-4 text-cyan-400" />
                  <span>{language === 'ko' ? '시스템 아키텍처 계층 구조' : 'Architecture Layers'}</span>
                </h4>
                <div className="space-y-2">
                  {project.architecture.map((layer, idx) => (
                    <div
                      key={idx}
                      className="p-3 bg-slate-900/80 border border-slate-800 rounded-lg font-mono text-xs text-slate-200 flex items-center gap-3"
                    >
                      <span className="w-5 h-5 rounded bg-slate-800 flex items-center justify-center text-[10px] text-cyan-400 font-bold shrink-0">
                        {idx + 1}
                      </span>
                      <span>{layer}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2">
                  {language === 'ko' ? '적용 기술 스택' : 'Applied Tech Stack'}
                </h4>
                <div className="flex flex-wrap gap-2 text-xs text-slate-400">
                  {project.tags.map((tag, idx) => (
                    <span key={idx} className="bg-slate-900 border border-slate-800 px-2.5 py-1 rounded text-slate-300">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* TAB 3: LIVE DEMO */}
          {activeTab === 'demo' && (
            <div className="space-y-3">
              <div className="text-xs text-slate-400">
                {language === 'ko'
                  ? '실제 브라우저 런타임에서 작동하는 인터랙티브 모듈입니다. 직접 클릭하거나 설정을 변경해보세요.'
                  : 'Live browser runtime sandbox demonstrating the underlying interaction mechanics.'}
              </div>
              <ProjectDemo type={project.demoType} accentColor={project.accentColor} />
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="px-6 py-4 border-t border-slate-800 bg-slate-950/80 flex items-center justify-between">
          <div className="text-xs text-slate-500">
            ESC 키를 눌러 닫을 수 있습니다
          </div>
          <button
            onClick={onClose}
            className="px-4 py-2 text-xs font-medium bg-slate-800 hover:bg-slate-700 text-white rounded-lg transition-colors"
          >
            {language === 'ko' ? '닫기' : 'Close'}
          </button>
        </div>
      </div>
    </div>
  );
};
