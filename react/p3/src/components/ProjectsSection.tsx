import React, { useState } from 'react';
import { Project, PROJECTS } from '../data/portfolioData';
import { ArrowUpRight, Layers, Sparkles, Code2, Cpu } from 'lucide-react';

interface ProjectsSectionProps {
  onSelectProject: (project: Project) => void;
}

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({ onSelectProject }) => {
  const [activeFilter, setActiveFilter] = useState<'all' | 'design-system' | 'webapp' | 'canvas'>('all');

  const filterTabs = [
    { id: 'all' as const, label: '전체 프로젝트 (All)' },
    { id: 'design-system' as const, label: '디자인 시스템 & 토큰' },
    { id: 'canvas' as const, label: '캔버스 & 그래픽스' },
    { id: 'webapp' as const, label: '대규모 웹 애플리케이션' },
  ];

  const filteredProjects = activeFilter === 'all'
    ? PROJECTS
    : PROJECTS.filter((p) => p.category === activeFilter);

  return (
    <section id="projects" className="py-20 md:py-28 border-t border-white/[0.06] relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            {/* Natural Editorial kicker (no // comment prefix) */}
            <p className="text-xs font-semibold text-blue-400 uppercase tracking-widest mb-2 font-mono">
              Selected Works & Case Studies
            </p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight text-balance">
              비즈니스 임팩트를 창출한 엔지니어링 프로젝트
            </h2>
          </div>

          {/* Interactive Filter Controls (Segmented buttons with working click handler) */}
          <div className="flex items-center gap-1.5 p-1 bg-white/[0.04] border border-white/[0.08] rounded-lg overflow-x-auto max-w-full">
            {filterTabs.map((tab) => {
              const isActive = activeFilter === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveFilter(tab.id)}
                  className={`px-3 py-1.5 text-xs font-medium rounded-md whitespace-nowrap transition-colors focus:outline-none focus-visible:ring-1 focus-visible:ring-blue-400 ${
                    isActive
                      ? 'bg-blue-600 text-white shadow-sm'
                      : 'text-white/70 hover:text-white hover:bg-white/[0.04]'
                  }`}
                >
                  {tab.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Dynamic Bento Grid of Projects */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6">
          {filteredProjects.map((project, index) => {
            // Asymmetric Bento sizing: first 2 projects are wide showcase cards
            const isWide = index === 0 || index === 1;
            const gridColSpan = isWide ? 'lg:col-span-6' : 'lg:col-span-6';

            return (
              <div
                key={project.id}
                onClick={() => onSelectProject(project)}
                className={`group relative bg-[#11141c] hover:bg-[#141824] border border-white/[0.08] hover:border-blue-500/40 rounded-2xl overflow-hidden transition-all duration-200 cursor-pointer flex flex-col justify-between ${gridColSpan} shadow-lg`}
              >
                {/* Top Media Showcase Container */}
                <div className="relative aspect-[16/9] w-full overflow-hidden bg-[#181c26]">
                  <img
                    src={project.image}
                    alt={project.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#11141c] via-transparent to-black/30 pointer-events-none" />

                  {/* Corner Quick Action Affordance */}
                  <div className="absolute top-3.5 right-3.5 p-2 rounded-lg bg-black/60 backdrop-blur-md text-white/80 group-hover:text-white group-hover:bg-blue-600 transition-colors">
                    <ArrowUpRight className="w-4 h-4" />
                  </div>
                </div>

                {/* Card Content Area */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    {/* Clean Unboxed Metadata Line (Zero-Pill discipline) */}
                    <div className="flex items-center flex-wrap gap-2 text-xs text-white/50 font-mono mb-2.5">
                      <span className="text-blue-400 font-medium">{project.categoryLabel}</span>
                      <span aria-hidden="true">·</span>
                      <span>{project.period}</span>
                      <span aria-hidden="true">·</span>
                      <span className="truncate max-w-[150px]">{project.role}</span>
                    </div>

                    {/* Primary Title */}
                    <h3 className="text-xl font-bold text-white group-hover:text-blue-300 transition-colors mb-2 tracking-tight">
                      {project.title}
                    </h3>

                    {/* Subtitle / Summary */}
                    <p className="text-sm text-white/70 line-clamp-2 leading-relaxed mb-4">
                      {project.summary}
                    </p>
                  </div>

                  {/* Bottom Metrics & Tech Stack Preview */}
                  <div className="pt-4 border-t border-white/[0.06] flex flex-col gap-3">
                    {/* Primary Highlight Metrics (Unboxed tabular-nums) */}
                    <div className="grid grid-cols-3 gap-2">
                      {project.metrics.map((m, mIdx) => (
                        <div key={mIdx} className="flex flex-col">
                          <span className="text-base font-bold text-white font-mono tabular-nums group-hover:text-blue-400 transition-colors">
                            {m.value}
                          </span>
                          <span className="text-[11px] text-white/50 truncate">
                            {m.label}
                          </span>
                        </div>
                      ))}
                    </div>

                    {/* Tech Stack Unboxed Text Separators */}
                    <div className="text-xs text-white/40 font-mono truncate">
                      {project.techStack.join('  /  ')}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Project Callout Banner */}
        <div className="mt-12 p-6 rounded-2xl bg-gradient-to-r from-blue-950/30 via-indigo-950/20 to-transparent border border-blue-500/20 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-blue-500/10 border border-blue-500/20 text-blue-400">
              <Cpu className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-semibold text-white">코드 아키텍처와 인터랙션을 직접 테스트해보세요</h4>
              <p className="text-xs text-white/60 mt-0.5">프론트엔드 엔지니어링 역량을 확인할 수 있는 라이브 인터랙티브 실험실을 준비했습니다.</p>
            </div>
          </div>
          <a
            href="#lab"
            className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-500 rounded-lg transition-colors whitespace-nowrap shadow-sm shadow-blue-500/20"
          >
            실험실 열기
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>

      </div>
    </section>
  );
};
