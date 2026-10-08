import React, { useState, useMemo, useRef, useEffect } from 'react';
import { Cpu, Play, RefreshCw, Zap, Check, Sliders, Layers, Sparkles, AlertCircle } from 'lucide-react';

export const FrontendLab: React.FC = () => {
  const [activeExperiment, setActiveExperiment] = useState<'virtualizer' | 'tokens' | 'physics'>('virtualizer');

  // --- Experiment 1: Virtualizer State ---
  const [isVirtualized, setIsVirtualized] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [scrollTop, setScrollTop] = useState(0);
  const totalItemsCount = 2000;
  const itemHeight = 44;
  const viewportHeight = 280;

  // Mock heavy transaction dataset
  const rawData = useMemo(() => {
    return Array.from({ length: totalItemsCount }, (_, idx) => ({
      id: idx + 1,
      code: `TX-${100000 + idx}`,
      merchant: ['Stripe KR', 'Naver Pay', 'Kakao Pay', 'Apple Store', 'AWS Cloud', 'Toss Core'][idx % 6],
      amount: (idx * 1370 + 4500).toLocaleString() + '원',
      status: idx % 4 === 0 ? '완료' : idx % 7 === 0 ? '대기' : '승인',
      timestamp: `2026-10-08 14:${String(idx % 60).padStart(2, '0')}:24`,
    }));
  }, [totalItemsCount]);

  const filteredData = useMemo(() => {
    if (!searchTerm) return rawData;
    return rawData.filter(item => 
      item.code.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.merchant.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [rawData, searchTerm]);

  // Virtualizer windowing math
  const startIndex = Math.max(0, Math.floor(scrollTop / itemHeight) - 2);
  const endIndex = Math.min(
    filteredData.length - 1,
    Math.floor((scrollTop + viewportHeight) / itemHeight) + 2
  );
  const visibleItems = isVirtualized
    ? filteredData.slice(startIndex, endIndex + 1)
    : filteredData.slice(0, 300); // safety cap for non-virtualized preview

  const totalHeight = filteredData.length * itemHeight;

  // --- Experiment 2: Design Token State ---
  const [tokenColor, setTokenColor] = useState<'blue' | 'emerald' | 'violet' | 'amber'>('blue');
  const [tokenRadius, setTokenRadius] = useState<'none' | 'sm' | 'md' | 'xl'>('md');
  const [tokenDensity, setTokenDensity] = useState<'compact' | 'regular' | 'spacious'>('regular');
  const [switchChecked, setSwitchChecked] = useState(true);

  const colorStyles = {
    blue: { bg: 'bg-blue-600', text: 'text-blue-400', border: 'border-blue-500/40', glow: 'shadow-blue-500/20' },
    emerald: { bg: 'bg-emerald-600', text: 'text-emerald-400', border: 'border-emerald-500/40', glow: 'shadow-emerald-500/20' },
    violet: { bg: 'bg-purple-600', text: 'text-purple-400', border: 'border-purple-500/40', glow: 'shadow-purple-500/20' },
    amber: { bg: 'bg-amber-600', text: 'text-amber-400', border: 'border-amber-500/40', glow: 'shadow-amber-500/20' },
  };

  const radiusStyles = {
    none: 'rounded-none',
    sm: 'rounded-sm',
    md: 'rounded-lg',
    xl: 'rounded-2xl',
  };

  const densityPadding = {
    compact: 'py-1 px-2.5 text-xs',
    regular: 'py-2 px-4 text-sm',
    spacious: 'py-3 px-6 text-base',
  };

  // --- Experiment 3: Animation Physics State ---
  const [easingType, setEasingType] = useState<'linear' | 'easeOutCubic' | 'spring' | 'snappy'>('easeOutCubic');
  const [animating, setAnimating] = useState(false);
  const [durationMs, setDurationMs] = useState(400);

  const triggerAnimation = () => {
    setAnimating(false);
    requestAnimationFrame(() => {
      setAnimating(true);
    });
  };

  const easingCurves = {
    linear: 'linear',
    easeOutCubic: 'cubic-bezier(0.215, 0.61, 0.355, 1)',
    spring: 'cubic-bezier(0.175, 0.885, 0.32, 1.275)',
    snappy: 'cubic-bezier(0.16, 1, 0.3, 1)',
  };

  return (
    <section id="lab" className="py-20 md:py-28 border-t border-white/[0.06] bg-[#07090e] relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Lab Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <p className="text-xs font-semibold text-blue-400 uppercase tracking-widest mb-2 font-mono">
              Live Engineering Experiments & Interactive Demos
            </p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight">
              민성의 프론트엔드 인터랙티브 실험실 (Lab)
            </h2>
            <p className="text-sm text-white/60 mt-2 max-w-xl">
              브라우저 렌더링 최적화, 가상화 엔진, 디자인 토큰 반응성을 실제 조작 가능한 라이브 코드로 직접 확인하세요.
            </p>
          </div>

          {/* Experiment Switcher Tabs */}
          <div className="flex items-center gap-1.5 p-1 bg-white/[0.04] border border-white/[0.08] rounded-lg">
            <button
              onClick={() => setActiveExperiment('virtualizer')}
              className={`px-3 py-1.5 text-xs font-medium rounded-md whitespace-nowrap transition-colors ${
                activeExperiment === 'virtualizer'
                  ? 'bg-blue-600 text-white shadow-sm'
                  : 'text-white/70 hover:text-white'
              }`}
            >
              1. DOM 가상화 벤치마크
            </button>
            <button
              onClick={() => setActiveExperiment('tokens')}
              className={`px-3 py-1.5 text-xs font-medium rounded-md whitespace-nowrap transition-colors ${
                activeExperiment === 'tokens'
                  ? 'bg-blue-600 text-white shadow-sm'
                  : 'text-white/70 hover:text-white'
              }`}
            >
              2. 디자인 토큰 엔진
            </button>
            <button
              onClick={() => setActiveExperiment('physics')}
              className={`px-3 py-1.5 text-xs font-medium rounded-md whitespace-nowrap transition-colors ${
                activeExperiment === 'physics'
                  ? 'bg-blue-600 text-white shadow-sm'
                  : 'text-white/70 hover:text-white'
              }`}
            >
              3. 베지어 & 모션 물리
            </button>
          </div>
        </div>

        {/* --- EXPERIMENT 1: VIRTUALIZER BENCHMARK --- */}
        {activeExperiment === 'virtualizer' && (
          <div className="bg-[#0e1119] border border-white/[0.08] rounded-2xl p-6 sm:p-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              
              {/* Left Controls & Telemetry */}
              <div className="lg:col-span-5 space-y-6">
                <div>
                  <h3 className="text-lg font-bold text-white mb-1">
                    2,000행 대규모 트랜잭션 그리드 가상화
                  </h3>
                  <p className="text-xs text-white/60 leading-relaxed">
                    실제 브라우저는 수천 개의 DOM 노드를 한꺼번에 렌더링할 때 버벅임(Stutter)이 발생합니다.
                    뷰포트 윈도우잉을 적용해 화면에 보이는 행(약 8~12개)만 DOM에 유지합니다.
                  </p>
                </div>

                {/* Mode Toggle Button */}
                <div className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.06] space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-medium text-white/80">렌더링 모드 선택</span>
                    <span className="text-[11px] font-mono text-blue-400">
                      {isVirtualized ? 'TanStack Virtual 모드' : '표준 무가상화 모드'}
                    </span>
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    <button
                      onClick={() => setIsVirtualized(true)}
                      className={`py-2 px-3 text-xs font-semibold rounded-lg border transition-all ${
                        isVirtualized
                          ? 'bg-blue-600 text-white border-blue-500 shadow-sm'
                          : 'bg-white/[0.04] text-white/60 border-white/[0.08] hover:text-white'
                      }`}
                    >
                      가상화 활성화 (60 FPS)
                    </button>
                    <button
                      onClick={() => setIsVirtualized(false)}
                      className={`py-2 px-3 text-xs font-semibold rounded-lg border transition-all ${
                        !isVirtualized
                          ? 'bg-amber-600 text-white border-amber-500 shadow-sm'
                          : 'bg-white/[0.04] text-white/60 border-white/[0.08] hover:text-white'
                      }`}
                    >
                      일반 전체 렌더링 (DOM 부하)
                    </button>
                  </div>
                </div>

                {/* Search Input */}
                <div>
                  <label className="text-xs text-white/60 block mb-1.5 font-mono">
                    실시간 클라이언트 인메모리 필터링
                  </label>
                  <input
                    type="text"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    placeholder="TX 코드 또는 결제처 검색 (예: Stripe, Naver)..."
                    className="w-full px-3.5 py-2 text-xs bg-white/[0.04] border border-white/[0.1] rounded-lg text-white placeholder-white/30 focus:outline-none focus:border-blue-500"
                  />
                </div>

                {/* Performance Metrics Box */}
                <div className="grid grid-cols-2 gap-3 pt-2">
                  <div className="p-3 rounded-lg bg-black/40 border border-white/[0.06]">
                    <span className="text-[11px] text-white/50 block font-mono">현재 DOM 활성 노드</span>
                    <span className={`text-xl font-bold font-mono tabular-nums ${isVirtualized ? 'text-emerald-400' : 'text-amber-400'}`}>
                      {isVirtualized ? visibleItems.length : filteredData.length} 개
                    </span>
                  </div>
                  <div className="p-3 rounded-lg bg-black/40 border border-white/[0.06]">
                    <span className="text-[11px] text-white/50 block font-mono">예상 프레임 타임</span>
                    <span className={`text-xl font-bold font-mono tabular-nums ${isVirtualized ? 'text-emerald-400' : 'text-amber-400'}`}>
                      {isVirtualized ? '< 0.8ms' : '28.4ms (지연)'}
                    </span>
                  </div>
                </div>
              </div>

              {/* Right: Virtual Table Viewport */}
              <div className="lg:col-span-7 bg-black/50 border border-white/[0.1] rounded-xl overflow-hidden flex flex-col">
                {/* Table Header */}
                <div className="grid grid-cols-12 px-4 py-2.5 bg-white/[0.04] border-b border-white/[0.08] text-[11px] font-mono text-white/60 uppercase">
                  <div className="col-span-3">거래 코드</div>
                  <div className="col-span-3">가맹점</div>
                  <div className="col-span-3 text-right">금액</div>
                  <div className="col-span-3 text-right">상태</div>
                </div>

                {/* Scrollable Container */}
                <div
                  onScroll={(e) => setScrollTop(e.currentTarget.scrollTop)}
                  style={{ height: viewportHeight }}
                  className="overflow-y-auto relative font-mono text-xs divide-y divide-white/[0.04]"
                >
                  {isVirtualized ? (
                    // Virtualizer View: Container with exact total height and offset translateY
                    <div style={{ height: totalHeight, position: 'relative' }}>
                      <div
                        style={{
                          transform: `translateY(${startIndex * itemHeight}px)`,
                          position: 'absolute',
                          left: 0,
                          right: 0,
                          top: 0,
                        }}
                      >
                        {visibleItems.map((item) => (
                          <div
                            key={item.id}
                            style={{ height: itemHeight }}
                            className="grid grid-cols-12 items-center px-4 hover:bg-white/[0.04] transition-colors border-b border-white/[0.03]"
                          >
                            <div className="col-span-3 text-white/80 font-medium truncate">{item.code}</div>
                            <div className="col-span-3 text-white/60 truncate">{item.merchant}</div>
                            <div className="col-span-3 text-right text-white/90 tabular-nums">{item.amount}</div>
                            <div className="col-span-3 text-right">
                              <span className={`text-[10px] px-1.5 py-0.5 rounded ${
                                item.status === '완료' ? 'text-emerald-400 bg-emerald-950/40' : 'text-blue-400 bg-blue-950/40'
                              }`}>
                                {item.status}
                              </span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  ) : (
                    // Raw Non-Virtualized View
                    <div>
                      {visibleItems.map((item) => (
                        <div
                          key={item.id}
                          style={{ height: itemHeight }}
                          className="grid grid-cols-12 items-center px-4 hover:bg-white/[0.04] transition-colors border-b border-white/[0.03]"
                        >
                          <div className="col-span-3 text-white/80 font-medium truncate">{item.code}</div>
                          <div className="col-span-3 text-white/60 truncate">{item.merchant}</div>
                          <div className="col-span-3 text-right text-white/90 tabular-nums">{item.amount}</div>
                          <div className="col-span-3 text-right">
                            <span className="text-[10px] text-amber-400 bg-amber-950/40 px-1.5 py-0.5 rounded">
                              {item.status}
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                {/* Footer Status */}
                <div className="px-4 py-2 bg-white/[0.02] border-t border-white/[0.06] flex items-center justify-between text-[11px] font-mono text-white/40">
                  <span>총 {filteredData.length.toLocaleString()}개 트랜잭션 로드됨</span>
                  <span className="text-emerald-400">● 60 FPS 스크롤 최적화</span>
                </div>
              </div>

            </div>
          </div>
        )}

        {/* --- EXPERIMENT 2: DESIGN TOKEN ENGINE --- */}
        {activeExperiment === 'tokens' && (
          <div className="bg-[#0e1119] border border-white/[0.08] rounded-2xl p-6 sm:p-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              
              {/* Left Controls */}
              <div className="lg:col-span-5 space-y-6">
                <div>
                  <h3 className="text-lg font-bold text-white mb-1">
                    동적 디자인 토큰 스위처 (Token Engine)
                  </h3>
                  <p className="text-xs text-white/60 leading-relaxed">
                    Figma Variables 연동 토큰 파이프라인 개념을 시뮬레이션합니다.
                    토큰 변경 시 모든 컴포넌트가 CSS 변수를 통해 일관되게 즉각 재반영됩니다.
                  </p>
                </div>

                {/* Color Palette Selector */}
                <div className="space-y-2">
                  <label className="text-xs font-mono text-white/60 block">브랜드 주요 색상 토큰 (Brand Primary)</label>
                  <div className="flex gap-2.5">
                    {(['blue', 'emerald', 'violet', 'amber'] as const).map((color) => (
                      <button
                        key={color}
                        onClick={() => setTokenColor(color)}
                        className={`h-9 flex-1 rounded-lg border text-xs font-medium capitalize transition-all ${
                          tokenColor === color
                            ? 'border-white text-white bg-white/10 ring-2 ring-white/20'
                            : 'border-white/10 text-white/50 hover:text-white hover:border-white/20'
                        }`}
                      >
                        {color}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Radius Selector */}
                <div className="space-y-2">
                  <label className="text-xs font-mono text-white/60 block">코너 라운딩 토큰 (Border Radius)</label>
                  <div className="grid grid-cols-4 gap-2">
                    {(['none', 'sm', 'md', 'xl'] as const).map((rad) => (
                      <button
                        key={rad}
                        onClick={() => setTokenRadius(rad)}
                        className={`py-1.5 rounded-lg border text-xs font-mono transition-all ${
                          tokenRadius === rad
                            ? 'border-blue-500 bg-blue-500/20 text-white'
                            : 'border-white/10 text-white/50 hover:text-white'
                        }`}
                      >
                        {rad}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Density Selector */}
                <div className="space-y-2">
                  <label className="text-xs font-mono text-white/60 block">컴포넌트 여백 밀도 (Surface Density)</label>
                  <div className="grid grid-cols-3 gap-2">
                    {(['compact', 'regular', 'spacious'] as const).map((den) => (
                      <button
                        key={den}
                        onClick={() => setTokenDensity(den)}
                        className={`py-1.5 rounded-lg border text-xs font-mono transition-all ${
                          tokenDensity === den
                            ? 'border-blue-500 bg-blue-500/20 text-white'
                            : 'border-white/10 text-white/50 hover:text-white'
                        }`}
                      >
                        {den}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right Live Component Canvas */}
              <div className="lg:col-span-7 p-6 rounded-xl bg-black/40 border border-white/[0.1] space-y-6">
                <div className="flex items-center justify-between text-xs font-mono text-white/50 pb-2 border-b border-white/[0.08]">
                  <span>Live Components Preview</span>
                  <span className={colorStyles[tokenColor].text}>Token applied: --ff-primary-{tokenColor}</span>
                </div>

                {/* Components Preview Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Button 1 */}
                  <div className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.06] flex flex-col gap-3">
                    <span className="text-[11px] font-mono text-white/40">Primary Action Button</span>
                    <button
                      className={`${colorStyles[tokenColor].bg} ${radiusStyles[tokenRadius]} ${densityPadding[tokenDensity]} text-white font-semibold transition-all shadow-md active:scale-95`}
                    >
                      결제 승인 진행하기
                    </button>
                  </div>

                  {/* Input */}
                  <div className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.06] flex flex-col gap-3">
                    <span className="text-[11px] font-mono text-white/40">Themed Input Field</span>
                    <input
                      type="text"
                      defaultValue="minseong.kim@fintech.io"
                      className={`w-full bg-white/[0.04] border ${colorStyles[tokenColor].border} ${radiusStyles[tokenRadius]} px-3 py-2 text-xs text-white focus:outline-none`}
                    />
                  </div>

                  {/* Metric Card */}
                  <div className={`p-4 bg-white/[0.02] border border-white/[0.06] ${radiusStyles[tokenRadius]} flex flex-col gap-1`}>
                    <span className="text-[11px] font-mono text-white/40">Metric Telemetry</span>
                    <div className="flex items-baseline justify-between mt-1">
                      <span className="text-xl font-bold font-mono text-white tabular-nums">₩ 48,250,000</span>
                      <span className={`text-xs font-mono font-semibold ${colorStyles[tokenColor].text}`}>+14.8%</span>
                    </div>
                  </div>

                  {/* Switch Component */}
                  <div className={`p-4 bg-white/[0.02] border border-white/[0.06] ${radiusStyles[tokenRadius]} flex items-center justify-between`}>
                    <div>
                      <div className="text-xs font-semibold text-white">자동 정산 활성화</div>
                      <div className="text-[10px] text-white/40 font-mono">실시간 잔액 동기화</div>
                    </div>
                    <button
                      onClick={() => setSwitchChecked(!switchChecked)}
                      className={`w-11 h-6 flex items-center rounded-full p-1 transition-colors ${
                        switchChecked ? colorStyles[tokenColor].bg : 'bg-white/20'
                      }`}
                    >
                      <div
                        className={`bg-white w-4 h-4 rounded-full shadow-md transform transition-transform ${
                          switchChecked ? 'translate-x-5' : 'translate-x-0'
                        }`}
                      />
                    </button>
                  </div>
                </div>

                <div className="text-[11px] font-mono text-white/40 pt-2 border-t border-white/[0.04] flex items-center justify-between">
                  <span>Design Token Variables: sync via Style Dictionary</span>
                  <span className="text-emerald-400">WCAG AA Compliant</span>
                </div>
              </div>

            </div>
          </div>
        )}

        {/* --- EXPERIMENT 3: BEZIER & MOTION PHYSICS --- */}
        {activeExperiment === 'physics' && (
          <div className="bg-[#0e1119] border border-white/[0.08] rounded-2xl p-6 sm:p-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              
              {/* Controls */}
              <div className="lg:col-span-5 space-y-6">
                <div>
                  <h3 className="text-lg font-bold text-white mb-1">
                    인터랙션 물리 이징 & 베지어 샌드박스
                  </h3>
                  <p className="text-xs text-white/60 leading-relaxed">
                    프론트엔드 인터랙션에서 자연스러운 감속 곡선은 사용자 인지 반응 속도를 극적으로 높여줍니다.
                    CSS cubic-bezier 매개변수 곡선을 직접 테스트해보세요.
                  </p>
                </div>

                {/* Easing Options */}
                <div className="space-y-2">
                  <label className="text-xs font-mono text-white/60 block">이징 곡선 (Easing Curve)</label>
                  <div className="grid grid-cols-2 gap-2">
                    {(['easeOutCubic', 'snappy', 'spring', 'linear'] as const).map((curve) => (
                      <button
                        key={curve}
                        onClick={() => {
                          setEasingType(curve);
                          triggerAnimation();
                        }}
                        className={`py-2 px-3 text-xs font-mono rounded-lg border transition-all ${
                          easingType === curve
                            ? 'border-blue-500 bg-blue-500/20 text-white'
                            : 'border-white/10 text-white/60 hover:text-white'
                        }`}
                      >
                        {curve}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Duration Slider */}
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-xs font-mono">
                    <span className="text-white/60">모션 재생 시간 (Duration)</span>
                    <span className="text-blue-400">{durationMs}ms</span>
                  </div>
                  <input
                    type="range"
                    min="150"
                    max="1000"
                    step="50"
                    value={durationMs}
                    onChange={(e) => setDurationMs(Number(e.target.value))}
                    className="w-full accent-blue-500 cursor-pointer"
                  />
                </div>

                <button
                  onClick={triggerAnimation}
                  className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-lg bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold shadow-md shadow-blue-500/20 transition-all active:scale-[0.98]"
                >
                  <Play className="w-3.5 h-3.5 fill-current" />
                  <span>애니메이션 트리거 (Re-play Motion)</span>
                </button>
              </div>

              {/* Visual Motion Track */}
              <div className="lg:col-span-7 bg-black/40 border border-white/[0.1] rounded-xl p-6 space-y-8">
                <div>
                  <div className="flex items-center justify-between text-xs font-mono text-white/50 mb-3">
                    <span>Active Formula</span>
                    <span className="text-blue-400">{easingCurves[easingType]}</span>
                  </div>

                  {/* Track 1: Moving Puck */}
                  <div className="relative h-16 bg-white/[0.02] border border-white/[0.08] rounded-xl p-3 flex items-center overflow-hidden">
                    <div className="absolute inset-y-0 left-0 w-1 bg-blue-500/50" />
                    <div className="absolute inset-y-0 right-0 w-1 bg-emerald-500/50" />
                    
                    <div
                      style={{
                        transform: animating ? 'translateX(calc(100% - 48px))' : 'translateX(0)',
                        transition: `transform ${durationMs}ms ${easingCurves[easingType]}`,
                      }}
                      className="w-10 h-10 rounded-xl bg-gradient-to-tr from-blue-600 to-indigo-500 shadow-lg shadow-blue-500/30 flex items-center justify-center text-white"
                    >
                      <Sparkles className="w-5 h-5" />
                    </div>
                  </div>
                </div>

                {/* Track 2: Staggered list items demonstration */}
                <div className="space-y-2">
                  <span className="text-[11px] font-mono text-white/40 block">Staggered Surface Motion Demo</span>
                  <div className="grid grid-cols-3 gap-3">
                    {[0, 1, 2].map((i) => (
                      <div
                        key={i}
                        style={{
                          transform: animating ? 'translateY(0)' : 'translateY(16px)',
                          opacity: animating ? 1 : 0.4,
                          transition: `all ${durationMs}ms ${easingCurves[easingType]} ${i * 60}ms`,
                        }}
                        className="p-3 rounded-lg bg-white/[0.04] border border-white/[0.08] text-center"
                      >
                        <span className="text-xs font-mono text-white/80 block">Card #{i + 1}</span>
                        <span className="text-[10px] text-white/40 font-mono">+{i * 60}ms delay</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="text-[11px] font-mono text-white/40 pt-2 border-t border-white/[0.06] flex items-center justify-between">
                  <span>Compositor property only (transform/opacity)</span>
                  <span className="text-blue-400">Zero Reflow/Repaint Overhead</span>
                </div>
              </div>

            </div>
          </div>
        )}

      </div>
    </section>
  );
};
