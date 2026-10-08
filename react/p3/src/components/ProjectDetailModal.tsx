import React, { useEffect, useState } from 'react';
import { Project } from '../data/portfolioData';
import { X, CheckCircle2, TrendingUp, Cpu, Code2, Layers, ExternalLink } from 'lucide-react';

interface ProjectDetailModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectDetailModal: React.FC<ProjectDetailModalProps> = ({ project, onClose }) => {
  const [activeTab, setActiveTab] = useState<'overview' | 'architecture' | 'code'>('overview');

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/80 backdrop-blur-sm animate-fadeIn">
      {/* Modal Backdrop */}
      <div className="fixed inset-0" onClick={onClose} />

      {/* Modal Card */}
      <div className="relative w-full max-w-4xl bg-[#0e1118] border border-white/[0.12] rounded-2xl shadow-2xl overflow-hidden z-10 my-8 max-h-[90vh] flex flex-col">
        
        {/* Top Header Bar */}
        <div className="sticky top-0 bg-[#0e1118]/95 backdrop-blur-md px-6 py-4 border-b border-white/[0.08] flex items-center justify-between z-20">
          <div>
            <div className="flex items-center gap-2 text-xs text-white/50 font-mono">
              <span className="text-blue-400 font-semibold">{project.categoryLabel}</span>
              <span>·</span>
              <span>{project.period}</span>
            </div>
            <h3 className="text-lg sm:text-xl font-bold text-white mt-0.5 truncate max-w-md sm:max-w-xl">
              {project.title}
            </h3>
          </div>

          <button
            onClick={onClose}
            className="p-2 text-white/60 hover:text-white rounded-lg hover:bg-white/[0.08] transition-colors focus:outline-none"
            aria-label="닫기"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Scrollable Body */}
        <div className="overflow-y-auto p-6 space-y-8 flex-1">
          
          {/* Hero Media Banner */}
          <div className="relative aspect-[16/9] sm:aspect-[21/9] w-full rounded-xl overflow-hidden bg-[#181c26] border border-white/[0.06]">
            <img
              src={project.image}
              alt={project.title}
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover object-top"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0e1118] via-transparent to-black/30 pointer-events-none" />
          </div>

          {/* Key Metrics Banner (Claim-to-Proof Adjacency) */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 bg-white/[0.02] border border-white/[0.06] rounded-xl p-4">
            {project.metrics.map((m, idx) => (
              <div key={idx} className="flex flex-col border-l-2 border-blue-500 pl-3">
                <span className="text-xl sm:text-2xl font-bold text-white font-mono tabular-nums">
                  {m.value}
                </span>
                <span className="text-xs font-semibold text-white/90 mt-0.5">
                  {m.label}
                </span>
                <span className="text-[11px] text-white/50 mt-0.5">
                  {m.desc}
                </span>
              </div>
            ))}
          </div>

          {/* Navigation Sub-Tabs inside Modal */}
          <div className="flex items-center gap-2 border-b border-white/[0.08] pb-2">
            <button
              onClick={() => setActiveTab('overview')}
              className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors ${
                activeTab === 'overview'
                  ? 'bg-blue-600/20 text-blue-300 border border-blue-500/30'
                  : 'text-white/60 hover:text-white hover:bg-white/[0.04]'
              }`}
            >
              개요 & 핵심 성과
            </button>
            <button
              onClick={() => setActiveTab('architecture')}
              className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors ${
                activeTab === 'architecture'
                  ? 'bg-blue-600/20 text-blue-300 border border-blue-500/30'
                  : 'text-white/60 hover:text-white hover:bg-white/[0.04]'
              }`}
            >
              아키텍처 & 엔지니어링 의사결정
            </button>
            {project.codeSnippet && (
              <button
                onClick={() => setActiveTab('code')}
                className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors ${
                  activeTab === 'code'
                    ? 'bg-blue-600/20 text-blue-300 border border-blue-500/30'
                    : 'text-white/60 hover:text-white hover:bg-white/[0.04]'
                }`}
              >
                코드 스니펫
              </button>
            )}
          </div>

          {/* Tab 1: Overview & Challenges */}
          {activeTab === 'overview' && (
            <div className="space-y-6">
              {/* Problem Definition */}
              <div>
                <h4 className="text-xs font-semibold uppercase tracking-wider text-rose-400 font-mono mb-2">
                  01. 문제 정의 (Problem Statement)
                </h4>
                <p className="text-sm text-white/80 leading-relaxed bg-rose-950/10 border border-rose-500/10 p-4 rounded-xl">
                  {project.problem}
                </p>
              </div>

              {/* Engineered Solution */}
              <div>
                <h4 className="text-xs font-semibold uppercase tracking-wider text-emerald-400 font-mono mb-2">
                  02. 엔지니어링 솔루션 (Engineered Solution)
                </h4>
                <p className="text-sm text-white/80 leading-relaxed bg-emerald-950/10 border border-emerald-500/10 p-4 rounded-xl">
                  {project.solution}
                </p>
              </div>

              {/* Key Highlights */}
              <div>
                <h4 className="text-xs font-semibold uppercase tracking-wider text-blue-400 font-mono mb-3">
                  03. 주요 실행 및 기여 (Key Contributions)
                </h4>
                <ul className="space-y-2.5">
                  {project.highlights.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-sm text-white/70">
                      <CheckCircle2 className="w-4 h-4 text-blue-400 mt-0.5 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Metadata Info */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-white/[0.06] text-xs font-mono text-white/60">
                <div>
                  <span className="text-white/40 block">담당 역할:</span>
                  <span className="text-white/90">{project.role}</span>
                </div>
                <div>
                  <span className="text-white/40 block">팀 구성:</span>
                  <span className="text-white/90">{project.team}</span>
                </div>
              </div>
            </div>
          )}

          {/* Tab 2: Architecture Details */}
          {activeTab === 'architecture' && (
            <div className="space-y-6">
              <div>
                <h4 className="text-xs font-semibold uppercase tracking-wider text-indigo-400 font-mono mb-3">
                  시스템 아키텍처 상세 설계
                </h4>
                <div className="grid grid-cols-1 gap-3">
                  {project.architectureDetails.map((arch, idx) => (
                    <div
                      key={idx}
                      className="p-3.5 bg-white/[0.02] border border-white/[0.06] rounded-xl flex items-start gap-3"
                    >
                      <span className="text-xs font-mono font-bold text-blue-400 mt-0.5">
                        {String(idx + 1).padStart(2, '0')}.
                      </span>
                      <span className="text-sm text-white/80">{arch}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tech Stack Matrix */}
              <div>
                <h4 className="text-xs font-semibold uppercase tracking-wider text-white/50 font-mono mb-3">
                  적용 기술 스택
                </h4>
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 text-xs font-mono text-white/80 bg-white/[0.04] border border-white/[0.08] rounded-md"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Tab 3: Code Snippet */}
          {activeTab === 'code' && project.codeSnippet && (
            <div>
              <div className="flex items-center justify-between text-xs font-mono text-white/50 pb-2 mb-2 border-b border-white/[0.08]">
                <span>{project.codeSnippet.filename}</span>
                <span className="text-blue-400">TypeScript</span>
              </div>
              <pre className="p-4 rounded-xl bg-black/60 border border-white/[0.08] text-xs font-mono text-emerald-300 overflow-x-auto leading-relaxed">
                <code>{project.codeSnippet.code}</code>
              </pre>
            </div>
          )}

        </div>

        {/* Modal Footer */}
        <div className="sticky bottom-0 bg-[#0e1118]/95 backdrop-blur-md px-6 py-4 border-t border-white/[0.08] flex items-center justify-between">
          <div className="text-xs text-white/40 font-mono">
            ESC 키를 누르거나 우측 상단 ✕ 버튼으로 닫을 수 있습니다.
          </div>
          <button
            onClick={onClose}
            className="px-4 py-2 text-xs font-semibold text-white bg-white/[0.08] hover:bg-white/[0.14] rounded-lg transition-colors"
          >
            닫기
          </button>
        </div>

      </div>
    </div>
  );
};
