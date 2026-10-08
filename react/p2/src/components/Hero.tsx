import React, { useState } from 'react';
import { ArrowRight, Copy, Check, Terminal, ExternalLink, Zap, Shield, Sparkles } from 'lucide-react';
import { Language } from '../types/portfolio';
import { PERSONAL_INFO } from '../data/portfolioData';

interface HeroProps {
  language: Language;
  onOpenContact: () => void;
}

export const Hero: React.FC<HeroProps> = ({ language, onOpenContact }) => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [activeCodeSnippet, setActiveCodeSnippet] = useState<'optimistic' | 'spatial' | 'tokens'>('spatial');

  const copyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2200);
  };

  const codeSnippets = {
    spatial: `// O(1) Spatial Culling Algorithm for Canvas
export class SpatialGrid {
  private cells = new Map<string, Set<NodeId>>();
  
  query(viewport: Rect): NodeId[] {
    const minX = Math.floor(viewport.minX / CELL_SIZE);
    const maxX = Math.floor(viewport.maxX / CELL_SIZE);
    // 60 FPS viewport bounding test
    return this.collectUnique(minX, maxX, viewport);
  }
}`,
    optimistic: `// Zero-Latency Optimistic State Mutation
export const useOptimisticCart = () => {
  return useMutation({
    mutationFn: api.addToCart,
    onMutate: async (newItem) => {
      await queryClient.cancelQueries(['cart']);
      const prev = queryClient.getQueryData(['cart']);
      queryClient.setQueryData(['cart'], (old) => [...old, newItem]);
      return { prev }; // Resilient rollback snapshot
    },
  });
};`,
    tokens: `// Headless Design Token Contract
export const buttonVariants = cva(
  'inline-flex items-center justify-center font-medium focus-visible:ring-2',
  {
    variants: {
      intent: {
        primary: 'bg-cyan-500 text-slate-950 hover:bg-cyan-400',
        subtle: 'bg-slate-900 text-slate-100 hover:bg-slate-800',
      },
    },
    defaultVariants: { intent: 'primary' },
  }
);`,
  };

  return (
    <section className="relative pt-12 pb-20 md:pt-20 md:pb-28 overflow-hidden">
      {/* Subtle radial ambient background glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[350px] bg-cyan-500/10 blur-[130px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Availability Badge */}
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-slate-900 border border-slate-800 rounded-full mb-6">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span className="text-xs text-slate-300">
            {PERSONAL_INFO.statusText[language]}
          </span>
        </div>

        {/* Hero Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left Column: Bold Editorial Typography & Value Proposition */}
          <div className="lg:col-span-7 space-y-6">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight leading-[1.15]">
              {language === 'ko' ? (
                <>
                  수학적 인터랙션 디테일과{' '}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-teal-300 to-blue-500">
                    극단적인 런타임 성능
                  </span>
                  을 추구하는 프론트엔드 엔지니어
                </>
              ) : (
                <>
                  Crafting high-throughput web applications with{' '}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-teal-300 to-blue-500">
                    mathematical precision
                  </span>
                </>
              )}
            </h1>

            <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-xl">
              {PERSONAL_INFO.shortBio[language]}
            </p>

            {/* CTA Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href="#projects"
                className="px-5 py-3 text-xs sm:text-sm font-semibold text-slate-950 bg-cyan-400 hover:bg-cyan-300 rounded-xl transition-all shadow-lg shadow-cyan-400/20 flex items-center gap-2 cursor-pointer"
              >
                <span>{language === 'ko' ? '주요 프로젝트 둘러보기' : 'Explore Projects'}</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <button
                onClick={copyEmail}
                className="px-4 py-3 text-xs sm:text-sm font-medium text-slate-200 hover:text-white bg-slate-900 hover:bg-slate-800 border border-slate-800 rounded-xl transition-all flex items-center gap-2 cursor-pointer"
              >
                {copiedEmail ? (
                  <>
                    <Check className="w-4 h-4 text-emerald-400" />
                    <span className="text-emerald-400 font-medium">이메일 복사 완료!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4 text-slate-400" />
                    <span>{language === 'ko' ? '이메일 주소 복사' : 'Copy Email'}</span>
                  </>
                )}
              </button>

              <button
                onClick={onOpenContact}
                className="px-4 py-3 text-xs sm:text-sm font-medium text-slate-400 hover:text-slate-200 transition-colors"
              >
                {language === 'ko' ? '커피챗 제안하기 ›' : 'Send Message ›'}
              </button>
            </div>

            {/* Proof Metrics (Claim-to-Proof Adjacency) */}
            <div className="pt-6 border-t border-slate-800/80 grid grid-cols-3 gap-4">
              <div>
                <div className="text-xl sm:text-2xl font-bold text-white font-mono tabular-nums">
                  5+ Years
                </div>
                <div className="text-xs text-slate-400 mt-0.5">
                  {language === 'ko' ? '프론트엔드 실무' : 'Production Eng'}
                </div>
              </div>
              <div>
                <div className="text-xl sm:text-2xl font-bold text-cyan-400 font-mono tabular-nums">
                  0.68s
                </div>
                <div className="text-xs text-slate-400 mt-0.5">
                  {language === 'ko' ? '최적화 LCP 기록' : 'Fastest LCP'}
                </div>
              </div>
              <div>
                <div className="text-xl sm:text-2xl font-bold text-emerald-400 font-mono tabular-nums">
                  100%
                </div>
                <div className="text-xs text-slate-400 mt-0.5">
                  {language === 'ko' ? 'Lighthouse Score' : 'Audit Rating'}
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Code Console & Core Web Vitals Status */}
          <div className="lg:col-span-5 space-y-4">
            {/* Live Core Web Vitals Card */}
            <div className="p-4 bg-slate-900/80 border border-slate-800 rounded-xl flex items-center justify-between text-xs">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
                <span className="font-semibold text-slate-200">Core Web Vitals Audit</span>
              </div>
              <div className="flex items-center gap-3 text-slate-400 font-mono text-[11px]">
                <span className="text-emerald-400">LCP 0.68s</span>
                <span>·</span>
                <span className="text-emerald-400">FID 12ms</span>
                <span>·</span>
                <span className="text-emerald-400">CLS 0.00</span>
              </div>
            </div>

            {/* Code Terminal */}
            <div className="bg-[#0b0d16] border border-slate-800 rounded-2xl overflow-hidden shadow-2xl">
              {/* Terminal Header */}
              <div className="px-4 py-3 bg-slate-950/80 border-b border-slate-800 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-rose-500/80" />
                  <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                  <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                  <span className="ml-2 text-xs font-mono text-slate-400">
                    engine.ts
                  </span>
                </div>

                <div className="flex items-center gap-1">
                  {(['spatial', 'optimistic', 'tokens'] as const).map((key) => (
                    <button
                      key={key}
                      onClick={() => setActiveCodeSnippet(key)}
                      className={`px-2 py-0.5 text-[11px] rounded capitalize transition-colors ${
                        activeCodeSnippet === key
                          ? 'bg-slate-800 text-cyan-400 font-mono font-medium'
                          : 'text-slate-500 hover:text-slate-300'
                      }`}
                    >
                      {key}
                    </button>
                  ))}
                </div>
              </div>

              {/* Terminal Code Body */}
              <div className="p-4 overflow-x-auto text-xs font-mono leading-relaxed bg-[#0b0d16] text-slate-300">
                <pre>{codeSnippets[activeCodeSnippet]}</pre>
              </div>

              {/* Terminal Footer */}
              <div className="px-4 py-2.5 bg-slate-950/60 border-t border-slate-800/80 flex items-center justify-between text-[11px] text-slate-500 font-mono">
                <span>TypeScript 5.6 · Strict Mode</span>
                <span className="text-emerald-400">Zero Runtime Overhead</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
