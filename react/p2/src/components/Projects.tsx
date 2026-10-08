import React, { useState } from 'react';
import { ArrowUpRight, Github, ExternalLink, Code2, Sparkles, Activity } from 'lucide-react';
import { PROJECTS } from '../data/portfolioData';
import { Project, ProjectCategory, Language } from '../types/portfolio';
import { ProjectDemo } from './ProjectDemos';

interface ProjectsProps {
  language: Language;
  onSelectProject: (project: Project) => void;
}

export const Projects: React.FC<ProjectsProps> = ({ language, onSelectProject }) => {
  const [selectedCategory, setSelectedCategory] = useState<ProjectCategory>('all');

  const categories: { key: ProjectCategory; label: { ko: string; en: string } }[] = [
    { key: 'all', label: { ko: '전체 프로젝트', en: 'All Projects' } },
    { key: 'canvas', label: { ko: '캔버스 & 그래픽', en: 'Canvas & Graphics' } },
    { key: 'performance', label: { ko: '성능 최적화', en: 'Performance' } },
    { key: 'design-system', label: { ko: '디자인 시스템', en: 'Design Systems' } },
    { key: 'web-app', label: { ko: '실시간 웹앱', en: 'Real-time Apps' } },
  ];

  const filteredProjects = selectedCategory === 'all'
    ? PROJECTS
    : PROJECTS.filter((p) => p.category === selectedCategory);

  return (
    <section id="projects" className="py-20 border-t border-slate-800/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header & Interactive Filter Bar */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="text-xs font-mono text-cyan-400 mb-1 tracking-wider uppercase">
              Selected Works
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
              {language === 'ko' ? '주요 프로젝트 & 케이스 스터디' : 'Featured Case Studies'}
            </h2>
            <p className="text-sm text-slate-400 mt-1 max-w-xl">
              {language === 'ko'
                ? '단순한 토이 프로젝트가 아닌, 실제 프로덕션 환경의 병목을 해결하고 검증된 엔지니어링 결과물들입니다.'
                : 'Deep-dive architectural case studies solving production bottlenecks with measurable impact.'}
            </p>
          </div>

          {/* Interactive Filter Tabs (Segmented controls with click handlers) */}
          <div className="flex items-center gap-1 p-1 bg-slate-900 border border-slate-800 rounded-xl overflow-x-auto self-start md:self-auto">
            {categories.map((cat) => (
              <button
                key={cat.key}
                onClick={() => setSelectedCategory(cat.key)}
                className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors whitespace-nowrap cursor-pointer ${
                  selectedCategory === cat.key
                    ? 'bg-slate-800 text-white shadow-sm'
                    : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                {cat.label[language]}
              </button>
            ))}
          </div>
        </div>

        {/* Bento Grid Projects Showcase */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group rounded-2xl bg-[#0c0e17] border border-slate-800 hover:border-slate-700 transition-all duration-200 flex flex-col justify-between overflow-hidden shadow-xl"
            >
              {/* Card Media / Interactive Demo Area */}
              <div className="p-4 bg-slate-950/70 border-b border-slate-800/80 relative">
                <ProjectDemo type={project.demoType} accentColor={project.accentColor} />
              </div>

              {/* Card Body */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  {/* Zero-Pill Clean Unboxed Metadata */}
                  <div className="flex items-center gap-2 text-xs text-slate-400 mb-2">
                    <span className="font-mono text-cyan-400">{project.period}</span>
                    <span aria-hidden="true">·</span>
                    <span>{project.role[language]}</span>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-1.5 group-hover:text-cyan-400 transition-colors flex items-center justify-between">
                    <span>{project.title}</span>
                    <ArrowUpRight className="w-5 h-5 text-slate-500 group-hover:text-cyan-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-300 mb-4 line-clamp-2">
                    {project.subtitle[language]}
                  </p>

                  {/* Quantitative Metrics Row */}
                  <div className="grid grid-cols-3 gap-2 py-3 px-3.5 bg-slate-900/60 rounded-xl border border-slate-800/80 mb-5">
                    {project.metrics.map((m, idx) => (
                      <div key={idx} className="text-left">
                        <div className="text-[10px] text-slate-500 truncate">
                          {m.label[language]}
                        </div>
                        <div className="text-xs sm:text-sm font-bold text-white font-mono tabular-nums truncate">
                          {m.value}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Clean unboxed tags with subtle separators */}
                  <div className="flex flex-wrap items-center gap-1.5 text-xs text-slate-400 mb-4">
                    {project.tags.map((tag, idx) => (
                      <React.Fragment key={idx}>
                        <span className="text-slate-300">{tag}</span>
                        {idx < project.tags.length - 1 && (
                          <span className="text-slate-600 font-mono">/</span>
                        )}
                      </React.Fragment>
                    ))}
                  </div>
                </div>

                {/* Card Actions */}
                <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between">
                  <button
                    onClick={() => onSelectProject(project)}
                    className="text-xs font-semibold text-cyan-400 hover:text-cyan-300 transition-colors flex items-center gap-1.5 cursor-pointer"
                  >
                    <span>{language === 'ko' ? '아키텍처 & 해결 과정 분석 보기' : 'Read Full Case Study'}</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>

                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="p-1.5 text-slate-400 hover:text-white hover:bg-slate-800 rounded-lg transition-colors"
                    aria-label="GitHub Repository"
                  >
                    <Github className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
