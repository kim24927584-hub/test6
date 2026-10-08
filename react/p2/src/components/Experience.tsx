import React from 'react';
import { EXPERIENCES } from '../data/portfolioData';
import { Language } from '../types/portfolio';
import { Briefcase, CheckCircle2 } from 'lucide-react';

interface ExperienceProps {
  language: Language;
}

export const Experience: React.FC<ExperienceProps> = ({ language }) => {
  return (
    <section id="experience" className="py-20 border-t border-slate-800/80 bg-[#090b12]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="mb-12">
          <div className="text-xs font-mono text-cyan-400 mb-1 tracking-wider uppercase">
            Career Journey
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
            {language === 'ko' ? '실무 경력 및 프로덕트 여정' : 'Production Experience'}
          </h2>
          <p className="text-sm text-slate-400 mt-1 max-w-xl">
            {language === 'ko'
              ? '스타트업부터 스케일업 단계까지, 대규모 유저 트래픽을 감당하는 웹 프로덕트를 리딩하고 빌드한 경험입니다.'
              : 'Proven track record scaling production web products from seed stage to enterprise high throughput.'}
          </p>
        </div>

        <div className="space-y-8">
          {EXPERIENCES.map((exp) => (
            <div
              key={exp.id}
              className="p-6 sm:p-8 rounded-2xl bg-slate-900/30 border border-slate-800 hover:border-slate-700/80 transition-colors"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-white">
                    {exp.company}
                  </h3>
                  <div className="text-xs sm:text-sm text-cyan-400 font-medium mt-0.5">
                    {exp.role[language]}
                  </div>
                </div>
                <div className="text-xs font-mono text-slate-400 bg-slate-950/60 px-3 py-1.5 rounded-lg border border-slate-800 self-start sm:self-auto">
                  {exp.period}
                </div>
              </div>

              <p className="text-xs sm:text-sm text-slate-300 mb-6 leading-relaxed">
                {exp.description[language]}
              </p>

              {/* Achievements */}
              <div className="space-y-3 mb-6">
                <div className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                  {language === 'ko' ? '주요 엔지니어링 성과' : 'Key Engineering Achievements'}
                </div>
                <ul className="space-y-2">
                  {exp.achievements[language].map((ach, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{ach}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Skills used */}
              <div className="pt-4 border-t border-slate-800/80 flex flex-wrap items-center gap-2 text-xs text-slate-400">
                <span className="text-slate-500 font-medium">Stack:</span>
                {exp.skills.map((skill, idx) => (
                  <React.Fragment key={idx}>
                    <span className="text-slate-300">{skill}</span>
                    {idx < exp.skills.length - 1 && (
                      <span className="text-slate-600 font-mono">·</span>
                    )}
                  </React.Fragment>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
