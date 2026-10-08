import React, { useState } from 'react';
import { DEVELOPER_INFO } from '../data/portfolioData';
import { ArrowDown, Copy, Check, Sparkles, MapPin, Mail, ArrowUpRight } from 'lucide-react';

interface HeroProps {
  onOpenResume: () => void;
  onOpenContact: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenResume, onOpenContact }) => {
  const [copied, setCopied] = useState(false);
  const [imageError, setImageError] = useState(false);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(DEVELOPER_INFO.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2200);
    } catch {
      // Fallback
      setCopied(true);
      setTimeout(() => setCopied(false), 2200);
    }
  };

  return (
    <section id="about" className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      {/* Background Lighting Gradients */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none -z-10" />
      <div className="absolute top-1/3 right-1/4 w-[350px] h-[300px] bg-indigo-500/10 rounded-full blur-[100px] pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Typographic Value Proposition */}
          <div className="lg:col-span-7 flex flex-col items-start">
            
            {/* Availability Status Text (Unboxed clean text with subtle separator) */}
            <div className="inline-flex items-center gap-2 text-xs font-medium text-emerald-400 mb-6 tracking-wide">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>새로운 프로젝트 & 협업 제안 가능 (Available for Roles & Projects)</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white leading-[1.18] text-balance mb-6">
              사용자 경험과 엔지니어링 성능의 한계를 넓히는 프론트엔드 개발자,{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-300 to-sky-300">
                {DEVELOPER_INFO.nameKorean}
              </span>
              입니다.
            </h1>

            {/* Sub-prose Bio */}
            <p className="text-base sm:text-lg text-white/70 font-normal leading-relaxed mb-8 max-w-2xl">
              {DEVELOPER_INFO.description}
            </p>

            {/* Quick Metadata Bar (Clean unboxed text with typographic separators) */}
            <div className="flex flex-wrap items-center gap-y-2 gap-x-3 text-xs sm:text-sm text-white/50 mb-8 font-mono">
              <span className="flex items-center gap-1.5 text-white/80">
                <MapPin className="w-3.5 h-3.5 text-blue-400" />
                <span>서울, 대한민국</span>
              </span>
              <span aria-hidden="true" className="text-white/20">·</span>
              <span>React 19 & Next.js</span>
              <span aria-hidden="true" className="text-white/20">·</span>
              <span>디자인 시스템 아키텍처</span>
              <span aria-hidden="true" className="text-white/20">·</span>
              <span>대규모 웹 성능 최적화</span>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 w-full sm:w-auto">
              <a
                href="#projects"
                className="inline-flex items-center justify-center gap-2 px-5 py-2.5 text-sm font-semibold text-white bg-blue-600 hover:bg-blue-500 rounded-lg transition-all duration-150 shadow-md shadow-blue-600/25 active:scale-[0.98] whitespace-nowrap"
              >
                <span>대표 프로젝트 보기</span>
                <ArrowDown className="w-4 h-4" />
              </a>

              <button
                onClick={onOpenResume}
                className="inline-flex items-center justify-center gap-2 px-5 py-2.5 text-sm font-medium text-white/90 bg-white/[0.06] hover:bg-white/[0.12] border border-white/[0.12] rounded-lg transition-colors active:scale-[0.98] whitespace-nowrap"
              >
                <span>이력서 확인하기</span>
                <ArrowUpRight className="w-4 h-4 text-white/60" />
              </button>

              <button
                onClick={handleCopyEmail}
                className="inline-flex items-center justify-center gap-2 px-4 py-2.5 text-sm font-medium text-white/80 hover:text-white bg-transparent hover:bg-white/[0.04] border border-white/[0.08] rounded-lg transition-colors whitespace-nowrap"
                title="이메일 주소 복사"
              >
                {copied ? (
                  <>
                    <Check className="w-4 h-4 text-emerald-400" />
                    <span className="text-emerald-400 font-mono text-xs">이메일 복사됨!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4 text-white/60" />
                    <span className="font-mono text-xs">{DEVELOPER_INFO.email}</span>
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Right Column: Visual Portrait Card with Tech Badges */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-[360px]">
              
              {/* Outer Glow Ring */}
              <div className="absolute -inset-1.5 bg-gradient-to-b from-blue-500/20 via-indigo-500/10 to-transparent rounded-2xl blur-lg opacity-70" />

              {/* Portrait Frame */}
              <div className="relative bg-[#11141c] border border-white/[0.1] rounded-2xl p-4 overflow-hidden shadow-2xl">
                
                {/* Media Container */}
                <div className="relative aspect-square w-full rounded-xl overflow-hidden bg-[#181c26]">
                  {!imageError ? (
                    <img
                      src={DEVELOPER_INFO.avatar}
                      alt="프론트엔드 엔지니어 김민성 프로필 사진"
                      referrerPolicy="no-referrer"
                      onError={() => setImageError(true)}
                      className="w-full h-full object-cover object-center transition-transform duration-500 hover:scale-105"
                    />
                  ) : (
                    /* High fidelity styled fallback container */
                    <div className="w-full h-full flex flex-col items-center justify-center p-6 bg-gradient-to-br from-[#131722] to-[#1c2233] text-center">
                      <div className="w-20 h-20 rounded-full bg-blue-500/10 border border-blue-500/20 flex items-center justify-center mb-4">
                        <Sparkles className="w-8 h-8 text-blue-400" />
                      </div>
                      <span className="text-xl font-bold text-white">김민성</span>
                      <span className="text-xs text-white/50 font-mono mt-1">Frontend Engineer</span>
                    </div>
                  )}

                  {/* Subtle Contrast Scrim at base */}
                  <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#090b10]/95 via-[#090b10]/60 to-transparent pointer-events-none" />

                  {/* Bottom Portrait Info */}
                  <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-xs">
                    <div>
                      <p className="text-white font-semibold text-sm">김민성</p>
                      <p className="text-white/60 font-mono text-[11px]">Senior Frontend Engineer</p>
                    </div>
                    <span className="px-2 py-0.5 rounded text-[11px] font-mono bg-blue-500/20 text-blue-300 border border-blue-500/30">
                      4+ Yrs
                    </span>
                  </div>
                </div>

                {/* Sub-Card Quick Highlights */}
                <div className="mt-4 pt-3 border-t border-white/[0.06] flex items-center justify-between text-xs text-white/60 font-mono">
                  <span>Focus: Web Architecture</span>
                  <span className="text-emerald-400">● 60 FPS Delivery</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Claim-to-Proof Quantitative Adjacency Bar (Directly below hero claims) */}
        <div className="mt-16 pt-10 border-t border-white/[0.08] grid grid-cols-2 md:grid-cols-4 gap-6">
          {DEVELOPER_INFO.stats.map((stat, idx) => (
            <div key={idx} className="flex flex-col">
              <span className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight tabular-nums font-mono">
                {stat.value}
              </span>
              <span className="text-sm font-semibold text-white/90 mt-1">
                {stat.label}
              </span>
              <span className="text-xs text-white/50 mt-0.5">
                {stat.detail}
              </span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
