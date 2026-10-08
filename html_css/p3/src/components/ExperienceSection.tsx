import React from 'react';
import { EXPERIENCES } from '../data/portfolioData';
import { Briefcase, Calendar, CheckCircle2, Award } from 'lucide-react';

export const ExperienceSection: React.FC = () => {
  return (
    <section id="experience" className="py-20 md:py-28 border-t border-white/[0.06] relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-12">
          <p className="text-xs font-semibold text-blue-400 uppercase tracking-widest mb-2 font-mono">
            Career Journey & Impact
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight">
            실전 프로덕트 경험과 주요 성과
          </h2>
          <p className="text-sm text-white/60 mt-2 max-w-xl">
            엔터프라이즈 핀테크부터 고성능 B2B SaaS까지, 실제 사용자에게 임팩트를 전달해온 커리어 여정입니다.
          </p>
        </div>

        {/* Timeline List */}
        <div className="space-y-8">
          {EXPERIENCES.map((exp, index) => (
            <div
              key={index}
              className="bg-[#11141c] border border-white/[0.08] hover:border-white/[0.14] rounded-2xl p-6 sm:p-8 transition-colors"
            >
              <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-4">
                <div>
                  {/* Clean Unboxed Metadata */}
                  <div className="flex items-center gap-2 text-xs text-white/50 font-mono mb-1.5">
                    <span className="text-blue-400 font-semibold">{exp.period}</span>
                    <span aria-hidden="true">·</span>
                    <span>{exp.department}</span>
                  </div>

                  {/* Company & Role */}
                  <h3 className="text-xl font-bold text-white tracking-tight">
                    {exp.role}{' '}
                    <span className="text-white/40 font-normal text-base">
                      @ {exp.company}
                    </span>
                  </h3>
                </div>
              </div>

              {/* Role Description */}
              <p className="text-sm text-white/70 leading-relaxed mb-6">
                {exp.description}
              </p>

              {/* Quantifiable Achievements */}
              <div className="space-y-2.5 mb-6">
                <span className="text-xs font-mono font-semibold uppercase tracking-wider text-white/40 block">
                  핵심 성과 및 기여 내역
                </span>
                <ul className="space-y-2">
                  {exp.achievements.map((ach, achIdx) => (
                    <li key={achIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-white/80">
                      <CheckCircle2 className="w-4 h-4 text-blue-400 mt-0.5 shrink-0" />
                      <span>{ach}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Tech Stack Unboxed Text Separator */}
              <div className="pt-4 border-t border-white/[0.06] flex items-center gap-2 flex-wrap text-xs text-white/50 font-mono">
                <span className="text-white/30">주요 기술:</span>
                <span>{exp.skills.join('  ·  ')}</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
