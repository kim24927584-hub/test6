import React from 'react';
import { SKILL_CATEGORIES } from '../data/portfolioData';
import { Language } from '../types/portfolio';

interface TechStackProps {
  language: Language;
}

export const TechStack: React.FC<TechStackProps> = ({ language }) => {
  return (
    <section id="skills" className="py-20 border-t border-slate-800/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="mb-12">
          <div className="text-xs font-mono text-cyan-400 mb-1 tracking-wider uppercase">
            Technical Proficiency
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
            {language === 'ko' ? '기술 스택 & 엔지니어링 역량' : 'Technical Competencies'}
          </h2>
          <p className="text-sm text-slate-400 mt-1 max-w-xl">
            {language === 'ko'
              ? '프레임워크 트렌드에 휘둘리지 않고, 브라우저 핵심 원리와 타입 안정성, 런타임 최적화 지식을 바탕으로 기술을 선택합니다.'
              : 'Grounded in browser fundamentals, strong type discipline, and runtime execution models.'}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {SKILL_CATEGORIES.map((cat, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-slate-900/30 border border-slate-800"
            >
              <h3 className="text-base font-bold text-white mb-4 pb-3 border-b border-slate-800 flex items-center justify-between">
                <span>{cat.title[language]}</span>
                <span className="text-xs font-mono text-cyan-400">Layer {idx + 1}</span>
              </h3>

              <div className="space-y-4">
                {cat.items.map((item, itemIdx) => (
                  <div key={itemIdx} className="space-y-1">
                    <div className="flex items-center justify-between text-xs sm:text-sm">
                      <span className="font-semibold text-slate-200">
                        {item.name}
                      </span>
                      <span className="font-mono text-xs text-cyan-400 font-medium">
                        {item.level}
                      </span>
                    </div>
                    <p className="text-xs text-slate-400 leading-relaxed">
                      {item.notes[language]}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
