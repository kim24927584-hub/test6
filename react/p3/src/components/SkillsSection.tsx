import React from 'react';
import { SKILL_CATEGORIES, ENGINEERING_PHILOSOPHIES } from '../data/portfolioData';
import { Check, ShieldCheck, HeartHandshake, Zap, Compass } from 'lucide-react';

export const SkillsSection: React.FC = () => {
  return (
    <section id="skills" className="py-20 md:py-28 border-t border-white/[0.06] bg-[#07090e] relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-12">
          <p className="text-xs font-semibold text-blue-400 uppercase tracking-widest mb-2 font-mono">
            Engineering Capabilities & Tooling
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight">
            기술 역량 및 개발 철학
          </h2>
          <p className="text-sm text-white/60 mt-2 max-w-xl">
            단순히 라이브러리를 사용하는 것을 넘어, 브라우저의 동작 원리와 아키텍처 원칙에 입각하여 개발합니다.
          </p>
        </div>

        {/* 4 Skill Category Matrix */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {SKILL_CATEGORIES.map((cat, idx) => (
            <div
              key={idx}
              className="bg-[#0e1119] border border-white/[0.08] rounded-2xl p-6 sm:p-7 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-lg font-bold text-white tracking-tight">
                    {cat.category}
                  </h3>
                  <span className="text-xs font-mono text-blue-400">0{idx + 1}</span>
                </div>
                <p className="text-xs text-white/50 mb-6">
                  {cat.description}
                </p>

                {/* Skills List */}
                <div className="space-y-4">
                  {cat.skills.map((skill, sIdx) => (
                    <div
                      key={sIdx}
                      className="p-3 rounded-xl bg-white/[0.02] border border-white/[0.04] flex flex-col gap-1"
                    >
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-semibold text-white font-mono">
                          {skill.name}
                        </span>
                        <span className="text-[11px] font-mono text-emerald-400">
                          {skill.level}
                        </span>
                      </div>
                      <p className="text-xs text-white/60 leading-relaxed">
                        {skill.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Engineering Philosophy Cards */}
        <div>
          <div className="mb-6">
            <h3 className="text-xl font-bold text-white tracking-tight">
              개발에 임하는 4가지 원칙
            </h3>
            <p className="text-xs text-white/50 font-mono mt-1">Core Engineering Mindset</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {ENGINEERING_PHILOSOPHIES.map((item, idx) => (
              <div
                key={idx}
                className="p-5 rounded-xl bg-[#11141c] border border-white/[0.08] flex flex-col justify-between"
              >
                <div>
                  <span className="text-xs font-mono text-blue-400 font-bold block mb-3">
                    Principle 0{idx + 1}
                  </span>
                  <h4 className="text-sm font-bold text-white mb-2 leading-snug">
                    {item.title}
                  </h4>
                  <p className="text-xs text-white/60 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
