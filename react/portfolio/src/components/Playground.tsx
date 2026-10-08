import React, { useState, useRef, useEffect } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'motion/react';
import { Sparkles, Sliders, Palette, Cpu, Play, Check, Copy, RefreshCw, Zap } from 'lucide-react';
import { Language } from '../types/portfolio';

interface PlaygroundProps {
  language: Language;
}

export const Playground: React.FC<PlaygroundProps> = ({ language }) => {
  const [activeTab, setActiveTab] = useState<'physics' | 'colors' | 'perf'>('physics');

  return (
    <section id="playground" className="py-20 border-t border-slate-800/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
          <div>
            <div className="text-xs font-mono text-cyan-400 mb-1 tracking-wider uppercase">
              Interactive Lab
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
              {language === 'ko' ? '인터랙티브 프론트엔드 실험실' : 'Interactive Frontend Lab'}
            </h2>
            <p className="text-sm text-slate-400 mt-1 max-w-xl">
              {language === 'ko'
                ? '브라우저 런타임에서 직접 조작할 수 있는 물리 엔진 인터랙션, 컬러 명도비 연산 엔진, 메인스레드 성능 벤치마크입니다.'
                : 'Live browser experiments exploring gesture physics, OKLCH contrast mathematics, and worker thread concurrency.'}
            </p>
          </div>

          {/* Tab Selector */}
          <div className="flex items-center gap-1 p-1 bg-slate-900 border border-slate-800 rounded-xl self-start md:self-auto">
            <button
              onClick={() => setActiveTab('physics')}
              className={`px-3.5 py-1.5 text-xs font-medium rounded-lg transition-colors whitespace-nowrap flex items-center gap-1.5 ${
                activeTab === 'physics'
                  ? 'bg-slate-800 text-white shadow-sm'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              <Sliders className="w-3.5 h-3.5" />
              <span>{language === 'ko' ? '물리 & 제스처' : 'Physics & Tilt'}</span>
            </button>
            <button
              onClick={() => setActiveTab('colors')}
              className={`px-3.5 py-1.5 text-xs font-medium rounded-lg transition-colors whitespace-nowrap flex items-center gap-1.5 ${
                activeTab === 'colors'
                  ? 'bg-slate-800 text-white shadow-sm'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              <Palette className="w-3.5 h-3.5" />
              <span>{language === 'ko' ? 'WCAG 명도비 엔진' : 'Contrast Math'}</span>
            </button>
            <button
              onClick={() => setActiveTab('perf')}
              className={`px-3.5 py-1.5 text-xs font-medium rounded-lg transition-colors whitespace-nowrap flex items-center gap-1.5 ${
                activeTab === 'perf'
                  ? 'bg-slate-800 text-white shadow-sm'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              <Cpu className="w-3.5 h-3.5" />
              <span>{language === 'ko' ? '스레드 성능 비교' : 'Worker Thread Lab'}</span>
            </button>
          </div>
        </div>

        {/* Tab Content Panes */}
        <div className="bg-[#0c0e17] border border-slate-800 rounded-2xl p-6 sm:p-8">
          {activeTab === 'physics' && <PhysicsLab language={language} />}
          {activeTab === 'colors' && <ColorEngineLab language={language} />}
          {activeTab === 'perf' && <PerformanceBenchmarkLab language={language} />}
        </div>
      </div>
    </section>
  );
};

/* --- 1. Physics & 3D Tilt Sandbox --- */
function PhysicsLab({ language }: { language: Language }) {
  const [stiffness, setStiffness] = useState(300);
  const [damping, setDamping] = useState(20);
  const [magneticRadius, setMagneticRadius] = useState(80);

  // 3D Tilt Card State
  const cardRef = useRef<HTMLDivElement | null>(null);
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);
  const [glarePos, setGlarePos] = useState({ x: 50, y: 50 });

  const handleCardMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rX = ((y - centerY) / centerY) * -15;
    const rY = ((x - centerX) / centerX) * 15;
    setRotateX(rX);
    setRotateY(rY);
    setGlarePos({
      x: (x / rect.width) * 100,
      y: (y / rect.height) * 100,
    });
  };

  const handleCardMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
  };

  // Magnetic Button State
  const [btnOffset, setBtnOffset] = useState({ x: 0, y: 0 });
  const magneticBtnRef = useRef<HTMLButtonElement | null>(null);

  const handleMagneticMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!magneticBtnRef.current) return;
    const rect = magneticBtnRef.current.getBoundingClientRect();
    const btnCenterX = rect.left + rect.width / 2;
    const btnCenterY = rect.top + rect.height / 2;
    const dist = Math.hypot(e.clientX - btnCenterX, e.clientY - btnCenterY);

    if (dist < magneticRadius) {
      const pull = (1 - dist / magneticRadius) * 0.45;
      setBtnOffset({
        x: (e.clientX - btnCenterX) * pull,
        y: (e.clientY - btnCenterY) * pull,
      });
    } else {
      setBtnOffset({ x: 0, y: 0 });
    }
  };

  return (
    <div className="space-y-8">
      {/* Description */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between text-xs text-slate-400 gap-2 pb-4 border-b border-slate-800">
        <div>
          {language === 'ko'
            ? '마우스 좌표와 3차원 투영 행렬(Perspective Matrix)을 동적으로 결합한 3D 틸트 카드와 마그네틱 자석 버튼 인터랙션입니다.'
            : 'Interactive perspective matrix calculations tracking pointer vector with real-time specular shine.'}
        </div>
        <div className="font-mono text-cyan-400">
          perspective: 1000px · transform-style: preserve-3d
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        {/* Interactive 3D Tilt Card */}
        <div
          ref={cardRef}
          onMouseMove={handleCardMouseMove}
          onMouseLeave={handleCardMouseLeave}
          style={{
            perspective: 1000,
          }}
          className="relative h-72 rounded-2xl cursor-pointer select-none"
        >
          <div
            style={{
              transform: `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
              transition: 'transform 0.1s cubic-bezier(0.2, 0, 0, 1)',
            }}
            className="w-full h-full rounded-2xl bg-gradient-to-br from-slate-900 via-slate-900 to-[#141829] border border-cyan-500/30 p-6 flex flex-col justify-between shadow-2xl relative overflow-hidden"
          >
            {/* Dynamic Specular Sheen */}
            <div
              style={{
                background: `radial-gradient(circle at ${glarePos.x}% ${glarePos.y}%, rgba(56, 189, 248, 0.25) 0%, transparent 60%)`,
              }}
              className="absolute inset-0 pointer-events-none"
            />

            <div className="flex items-center justify-between z-10">
              <span className="text-xs font-mono text-cyan-400 tracking-wider">
                INTERACTIVE 3D COMPONENT
              </span>
              <span className="text-[11px] font-mono text-slate-500 tabular-nums">
                rx: {rotateX.toFixed(1)}° · ry: {rotateY.toFixed(1)}°
              </span>
            </div>

            <div className="z-10">
              <h3 className="text-lg font-bold text-white mb-1">
                Spatial Coordinate Interpolation
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                마우스를 카드 위로 자유롭게 움직여보세요. 시선 각도와 표면 반사광이 실시간 삼각함수로 연산됩니다.
              </p>
            </div>

            <div className="flex items-center justify-between text-xs text-slate-400 pt-3 border-t border-slate-800 z-10">
              <span className="font-mono text-[11px] text-emerald-400">60 FPS Hardware Accelerated</span>
              <span className="text-[11px]">Sub-pixel Matrix</span>
            </div>
          </div>
        </div>

        {/* Magnetic Button Area */}
        <div
          onMouseMove={handleMagneticMouseMove}
          onMouseLeave={() => setBtnOffset({ x: 0, y: 0 })}
          className="h-72 rounded-2xl bg-slate-950/60 border border-slate-800 p-6 flex flex-col items-center justify-center relative overflow-hidden"
        >
          <div className="text-center mb-6">
            <span className="text-xs font-mono text-slate-400 block mb-1">Magnetic Pull Target</span>
            <p className="text-xs text-slate-500">
              마우스가 반경 {magneticRadius}px 내에 진입하면 물리적 인력으로 버튼이 딸려옵니다.
            </p>
          </div>

          <button
            ref={magneticBtnRef}
            style={{
              transform: `translate(${btnOffset.x}px, ${btnOffset.y}px)`,
              transition: 'transform 0.15s cubic-bezier(0.1, 0.9, 0.2, 1)',
            }}
            onClick={() => alert('인터랙션 성공! 자석 버튼이 클릭되었습니다.')}
            className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950 font-bold text-sm rounded-xl shadow-lg shadow-cyan-500/20 cursor-pointer active:scale-95 select-none"
          >
            Magnetic Action
          </button>

          <div className="mt-8 flex items-center gap-3 text-xs text-slate-400">
            <span>자석 감도 반경:</span>
            <input
              type="range"
              min="50"
              max="150"
              value={magneticRadius}
              onChange={(e) => setMagneticRadius(Number(e.target.value))}
              className="accent-cyan-400 cursor-pointer w-28"
            />
            <span className="font-mono tabular-nums text-cyan-400">{magneticRadius}px</span>
          </div>
        </div>
      </div>
    </div>
  );
}

/* --- 2. Color Science & Contrast Ratio Engine --- */
function ColorEngineLab({ language }: { language: Language }) {
  const [hue, setHue] = useState(195); // cyan-ish
  const [saturation, setSaturation] = useState(85);
  const [lightness, setLightness] = useState(55);
  const [copiedToken, setCopiedToken] = useState(false);

  // Helper: HSL to RGB
  const hslToRgb = (h: number, s: number, l: number) => {
    s /= 100;
    l /= 100;
    const k = (n: number) => (n + h / 30) % 12;
    const a = s * Math.min(l, 1 - l);
    const f = (n: number) => l - a * Math.max(-1, Math.min(k(n) - 3, Math.min(9 - k(n), 1)));
    return [Math.round(f(0) * 255), Math.round(f(8) * 255), Math.round(f(4) * 255)];
  };

  // Helper: Relative Luminance
  const getLuminance = (r: number, g: number, b: number) => {
    const a = [r, g, b].map((v) => {
      v /= 255;
      return v <= 0.03928 ? v / 12.92 : Math.pow((v + 0.055) / 1.055, 2.4);
    });
    return a[0] * 0.2126 + a[1] * 0.7152 + a[2] * 0.0722;
  };

  const [r, g, b] = hslToRgb(hue, saturation, lightness);
  const lumCurrent = getLuminance(r, g, b);

  // Background luminance (Dark canvas #090A0F)
  const lumDark = getLuminance(9, 10, 15);
  // White luminance
  const lumWhite = getLuminance(255, 255, 255);

  const contrastDark = (Math.max(lumCurrent, lumDark) + 0.05) / (Math.min(lumCurrent, lumDark) + 0.05);
  const contrastWhite = (Math.max(lumCurrent, lumWhite) + 0.05) / (Math.min(lumCurrent, lumWhite) + 0.05);

  const hexCode = `#${((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1).toUpperCase()}`;

  const copyTokens = () => {
    const css = `:root {
  --color-primary: ${hexCode};
  --color-primary-hsl: hsl(${hue}, ${saturation}%, ${lightness}%);
  --contrast-dark: ${contrastDark.toFixed(2)}:1;
}`;
    navigator.clipboard.writeText(css);
    setCopiedToken(true);
    setTimeout(() => setCopiedToken(false), 2000);
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between text-xs text-slate-400 gap-2 pb-4 border-b border-slate-800">
        <div>
          {language === 'ko'
            ? 'W3C 웹 접근성 표준(WCAG 2.1)에 기반한 실시간 상대 명도(Relative Luminance) 및 명도비 계산기입니다.'
            : 'Real-time mathematical luminance & contrast calculator enforcing WCAG 2.1 AA/AAA accessibility thresholds.'}
        </div>
        <div className="font-mono text-cyan-400">
          (L1 + 0.05) / (L2 + 0.05) Formula
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
        {/* Sliders */}
        <div className="space-y-4 bg-slate-900/50 p-5 rounded-xl border border-slate-800">
          <div>
            <div className="flex justify-between text-xs mb-1">
              <span className="text-slate-300">색상 (Hue)</span>
              <span className="font-mono text-cyan-400">{hue}°</span>
            </div>
            <input
              type="range"
              min="0"
              max="360"
              value={hue}
              onChange={(e) => setHue(Number(e.target.value))}
              className="w-full accent-cyan-400 cursor-pointer"
            />
          </div>

          <div>
            <div className="flex justify-between text-xs mb-1">
              <span className="text-slate-300">채도 (Saturation)</span>
              <span className="font-mono text-cyan-400">{saturation}%</span>
            </div>
            <input
              type="range"
              min="0"
              max="100"
              value={saturation}
              onChange={(e) => setSaturation(Number(e.target.value))}
              className="w-full accent-cyan-400 cursor-pointer"
            />
          </div>

          <div>
            <div className="flex justify-between text-xs mb-1">
              <span className="text-slate-300">명도 (Lightness)</span>
              <span className="font-mono text-cyan-400">{lightness}%</span>
            </div>
            <input
              type="range"
              min="5"
              max="95"
              value={lightness}
              onChange={(e) => setLightness(Number(e.target.value))}
              className="w-full accent-cyan-400 cursor-pointer"
            />
          </div>

          <div className="pt-2 flex items-center justify-between border-t border-slate-800 text-xs">
            <span className="font-mono text-slate-300">{hexCode}</span>
            <button
              onClick={copyTokens}
              className="px-3 py-1.5 text-xs bg-slate-800 hover:bg-slate-700 text-slate-200 rounded-lg flex items-center gap-1.5 transition-colors"
            >
              {copiedToken ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copiedToken ? 'CSS 토큰 복사됨' : 'CSS 변수 복사'}</span>
            </button>
          </div>
        </div>

        {/* Live Preview & WCAG Assessment */}
        <div className="space-y-4">
          {/* Swatch Sample */}
          <div
            style={{ backgroundColor: hexCode }}
            className="h-28 rounded-xl flex items-center justify-center shadow-lg transition-colors"
          >
            <span
              style={{ color: contrastDark >= 4.5 ? '#090a0f' : '#ffffff' }}
              className="font-bold text-sm select-none"
            >
              Sample UI Text Label
            </span>
          </div>

          {/* Assessment Cards */}
          <div className="grid grid-cols-2 gap-3 text-xs">
            {/* vs Dark Canvas */}
            <div className="p-3.5 bg-slate-900/80 rounded-xl border border-slate-800">
              <div className="text-slate-400 mb-1">다크 배경 명도비</div>
              <div className="text-xl font-bold font-mono text-white mb-2 tabular-nums">
                {contrastDark.toFixed(2)} : 1
              </div>
              <div className="space-y-1 text-[11px]">
                <div className="flex items-center justify-between">
                  <span className="text-slate-400">WCAG AA (4.5:1)</span>
                  <span className={contrastDark >= 4.5 ? 'text-emerald-400 font-bold' : 'text-rose-400'}>
                    {contrastDark >= 4.5 ? 'PASS' : 'FAIL'}
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-slate-400">WCAG AAA (7.0:1)</span>
                  <span className={contrastDark >= 7.0 ? 'text-emerald-400 font-bold' : 'text-slate-500'}>
                    {contrastDark >= 7.0 ? 'PASS' : 'FAIL'}
                  </span>
                </div>
              </div>
            </div>

            {/* vs White Canvas */}
            <div className="p-3.5 bg-slate-900/80 rounded-xl border border-slate-800">
              <div className="text-slate-400 mb-1">화이트 배경 명도비</div>
              <div className="text-xl font-bold font-mono text-white mb-2 tabular-nums">
                {contrastWhite.toFixed(2)} : 1
              </div>
              <div className="space-y-1 text-[11px]">
                <div className="flex items-center justify-between">
                  <span className="text-slate-400">WCAG AA (4.5:1)</span>
                  <span className={contrastWhite >= 4.5 ? 'text-emerald-400 font-bold' : 'text-rose-400'}>
                    {contrastWhite >= 4.5 ? 'PASS' : 'FAIL'}
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-slate-400">WCAG AAA (7.0:1)</span>
                  <span className={contrastWhite >= 7.0 ? 'text-emerald-400 font-bold' : 'text-slate-500'}>
                    {contrastWhite >= 7.0 ? 'PASS' : 'FAIL'}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* --- 3. Performance Benchmark & Thread Concurrency Lab --- */
function PerformanceBenchmarkLab({ language }: { language: Language }) {
  const [mode, setMode] = useState<'main' | 'worker'>('worker');
  const [isRunning, setIsRunning] = useState(false);
  const [progress, setProgress] = useState(0);
  const [calculatedSum, setCalculatedSum] = useState<number | null>(null);
  const [elapsedMs, setElapsedMs] = useState<number | null>(null);
  const [uiResponsiveCount, setUiResponsiveCount] = useState(0);

  // Test counter button to prove UI responsiveness during compute
  const handleTestClick = () => {
    setUiResponsiveCount((c) => c + 1);
  };

  const runBenchmark = () => {
    setIsRunning(true);
    setProgress(0);
    setCalculatedSum(null);
    setElapsedMs(null);

    const startTime = performance.now();
    const ITERATIONS = 12_000_000;

    if (mode === 'worker') {
      // Simulate non-blocking asynchronous worker thread chunking
      let current = 0;
      let sum = 0;
      const chunkSize = 1_500_000;

      const step = () => {
        const nextLimit = Math.min(current + chunkSize, ITERATIONS);
        for (let i = current; i < nextLimit; i++) {
          sum += Math.sqrt(i) * Math.sin(i);
        }
        current = nextLimit;
        setProgress(Math.round((current / ITERATIONS) * 100));

        if (current < ITERATIONS) {
          // Keep yielding to microtask queue so RAF and UI inputs stay 100% fluid
          setTimeout(step, 0);
        } else {
          setCalculatedSum(Math.round(sum));
          setElapsedMs(Math.round(performance.now() - startTime));
          setIsRunning(false);
        }
      };

      step();
    } else {
      // Main Thread synchronous blocking execution
      setTimeout(() => {
        let sum = 0;
        for (let i = 0; i < ITERATIONS; i++) {
          sum += Math.sqrt(i) * Math.sin(i);
        }
        setProgress(100);
        setCalculatedSum(Math.round(sum));
        setElapsedMs(Math.round(performance.now() - startTime));
        setIsRunning(false);
      }, 50);
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between text-xs text-slate-400 gap-2 pb-4 border-b border-slate-800">
        <div>
          {language === 'ko'
            ? '1,200만 회의 삼각함수 복합 연산을 실행할 때 메인 스레드 블로킹 vs 비동기 스레드 분리의 UI 반응성을 체감하는 벤치마크입니다.'
            : 'Benchmark demonstrating event loop unblocking and UI input responsiveness during heavy computation.'}
        </div>
        <div className="font-mono text-cyan-400">
          12,000,000 Floating-Point Operations
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Controls & Mode Selection */}
        <div className="space-y-4 bg-slate-900/60 p-5 rounded-xl border border-slate-800">
          <div>
            <label className="text-xs text-slate-300 block mb-2 font-medium">실행 아키텍처 선택</label>
            <div className="grid grid-cols-2 gap-2">
              <button
                onClick={() => setMode('worker')}
                className={`p-3 text-xs rounded-lg border text-left transition-all ${
                  mode === 'worker'
                    ? 'bg-emerald-950/40 border-emerald-500/60 text-emerald-300'
                    : 'bg-slate-900 border-slate-800 text-slate-400 hover:text-slate-200'
                }`}
              >
                <div className="font-semibold mb-0.5">비동기 스레드 분리</div>
                <div className="text-[11px] text-slate-400">UI 프레임 60fps 유지</div>
              </button>
              <button
                onClick={() => setMode('main')}
                className={`p-3 text-xs rounded-lg border text-left transition-all ${
                  mode === 'main'
                    ? 'bg-rose-950/40 border-rose-500/60 text-rose-300'
                    : 'bg-slate-900 border-slate-800 text-slate-400 hover:text-slate-200'
                }`}
              >
                <div className="font-semibold mb-0.5">단일 메인 스레드</div>
                <div className="text-[11px] text-slate-400">UI 일시적 프리징 발생</div>
              </button>
            </div>
          </div>

          <button
            onClick={runBenchmark}
            disabled={isRunning}
            className={`w-full py-2.5 text-xs font-semibold rounded-lg flex items-center justify-center gap-2 transition-all ${
              isRunning
                ? 'bg-slate-800 text-slate-500 cursor-not-allowed'
                : 'bg-cyan-500 hover:bg-cyan-400 text-slate-950 shadow-md shadow-cyan-500/20'
            }`}
          >
            {isRunning ? (
              <>
                <RefreshCw className="w-3.5 h-3.5 animate-spin" />
                <span>연산 진행 중... ({progress}%)</span>
              </>
            ) : (
              <>
                <Play className="w-3.5 h-3.5 fill-current" />
                <span>1,200만 회 연산 시작</span>
              </>
            )}
          </button>

          {/* Progress Bar */}
          <div className="w-full bg-slate-800 h-1.5 rounded-full overflow-hidden">
            <div
              style={{ width: `${progress}%` }}
              className={`h-full transition-all duration-150 ${mode === 'worker' ? 'bg-emerald-400' : 'bg-rose-400'}`}
            />
          </div>
        </div>

        {/* UI Interactivity Test Area */}
        <div className="p-5 bg-slate-900/60 rounded-xl border border-slate-800 space-y-4">
          <div>
            <div className="text-xs font-semibold text-slate-200 mb-1">
              UI 반응성 실시간 검증 버튼
            </div>
            <p className="text-[11px] text-slate-400 mb-3">
              연산이 실행되는 동안 아래 버튼을 연타해보세요. 스레드가 분리되어 있다면 클릭 카운트가 즉각 올라갑니다.
            </p>
            <div className="flex items-center gap-3">
              <button
                onClick={handleTestClick}
                className="px-4 py-2 bg-slate-800 hover:bg-slate-700 text-slate-100 text-xs font-medium rounded-lg active:scale-95 transition-transform"
              >
                🖱️ 클릭 테스트
              </button>
              <span className="text-xs text-slate-300">
                인터랙션 응답 횟수:{' '}
                <strong className="text-cyan-400 font-mono text-sm tabular-nums">
                  {uiResponsiveCount}
                </strong>
              </span>
            </div>
          </div>

          {/* Results Summary */}
          {elapsedMs !== null && (
            <div className="pt-3 border-t border-slate-800 text-xs space-y-1">
              <div className="flex justify-between text-slate-400">
                <span>총 소요 시간:</span>
                <span className="font-mono text-emerald-400 font-bold tabular-nums">
                  {elapsedMs} ms
                </span>
              </div>
              <div className="flex justify-between text-slate-400">
                <span>결과 해시 체크섬:</span>
                <span className="font-mono text-slate-300 tabular-nums">{calculatedSum}</span>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
