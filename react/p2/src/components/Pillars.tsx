import React from 'react';
import { CORE_PILLARS } from '../data/portfolioData';
import { Language } from '../types/portfolio';
import { Zap, ShieldCheck, Activity } from 'lucide-react';

interface PillarsProps {
  language: Language;
}

export const Pillars: React.FC<PillarsProps> = ({ language }) => {
  const getIcon = (idx: number) => {
    if (idx === 0) return <Zap className="w-5 h-5 text-cyan-400" />;
    if (idx === 1) return <ShieldCheck className="w-5 h-5 text-purple-400" />;
    return <Activity className="w-5 h-5 text-emerald-400" />;
  };

  return (
    <section id="pillars" className="py-20 border-t border-slate-800/80 bg-[#090b12]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="mb-12">
          <div className="text-xs font-mono text-cyan-400 mb-1 tracking-wider uppercase">
            Engineering Principles
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
            {language === 'ko' ? '엔지니어링 철학과 핵심 가치' : 'Core Engineering Pillars'}
          </h2>
          <p className="text-sm text-slate-400 mt-1 max-w-xl">
            {language === 'ko'
              ? '단순한 화면 구현을 넘어, 사용자 인터랙션의 즉시성과 시스템의 안정성을 책임지는 기술적 원칙들입니다.'
              : 'Principles guiding architecture decisions: zero latency, robust accessibility, and scalable real-time state.'}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {CORE_PILLARS.map((pillar, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-slate-900/40 border border-slate-800 hover:border-slate-700 transition-colors flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-xl bg-slate-800/80 border border-slate-700 flex items-center justify-center">
                    {getIcon(idx)}
                  </div>
                  <span className="font-mono text-xs text-slate-500 font-bold">
                    {pillar.number}
                  </span>
                </div>

                <h3 className="text-base sm:text-lg font-bold text-white mb-2 leading-snug">
                  {pillar.title[language]}
                </h3>

                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed mb-6">
                  {pillar.description[language]}
                </p>
              </div>

              <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between text-xs font-mono text-cyan-400">
                <span>{pillar.metric}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
