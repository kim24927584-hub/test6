import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'motion/react';
import { Play, RotateCcw, Zap, Sparkles, Check, ArrowRight, ShieldCheck, Activity } from 'lucide-react';

interface ProjectDemoProps {
  type: 'canvas' | 'commerce' | 'tokens' | 'dashboard';
  accentColor: string;
}

export const ProjectDemo: React.FC<ProjectDemoProps> = ({ type, accentColor }) => {
  // 1. Interactive Canvas Mini Whiteboard Demo
  if (type === 'canvas') {
    return <CanvasMiniDemo accentColor={accentColor} />;
  }

  // 2. Pulse Commerce Optimistic Checkout Demo
  if (type === 'commerce') {
    return <CommerceMiniDemo accentColor={accentColor} />;
  }

  // 3. Aura Design System Token & Variant Switcher Demo
  if (type === 'tokens') {
    return <TokensMiniDemo accentColor={accentColor} />;
  }

  // 4. HyperDash High-Frequency Data Streaming Demo
  return <DashboardMiniDemo accentColor={accentColor} />;
};

/* --- 1. Canvas Mini Whiteboard --- */
function CanvasMiniDemo({ accentColor }: { accentColor: string }) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [nodeCount, setNodeCount] = useState(120);
  const [isDrawing, setIsDrawing] = useState(false);
  const [tool, setTool] = useState<'node' | 'connect' | 'clear'>('node');
  const [fps, setFps] = useState(60);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationId: number;
    let lastTime = performance.now();
    let frames = 0;

    // Generate sample nodes
    const nodes: { x: number; y: number; vx: number; vy: number; radius: number; color: string }[] = [];
    for (let i = 0; i < nodeCount; i++) {
      nodes.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.8,
        vy: (Math.random() - 0.5) * 0.8,
        radius: Math.random() * 3 + 2,
        color: i % 3 === 0 ? accentColor : '#64748b',
      });
    }

    const render = (now: number) => {
      frames++;
      if (now - lastTime >= 1000) {
        setFps(Math.round((frames * 1000) / (now - lastTime)));
        frames = 0;
        lastTime = now;
      }

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw subtle spatial grid
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.04)';
      ctx.lineWidth = 1;
      const gridSize = 24;
      for (let x = 0; x < canvas.width; x += gridSize) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, canvas.height);
        ctx.stroke();
      }
      for (let y = 0; y < canvas.height; y += gridSize) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(canvas.width, y);
        ctx.stroke();
      }

      // Update and draw connections (O(n) proximity)
      ctx.strokeStyle = 'rgba(56, 189, 248, 0.12)';
      for (let i = 0; i < nodes.length; i++) {
        const a = nodes[i];
        a.x += a.vx;
        a.y += a.vy;

        if (a.x < 0 || a.x > canvas.width) a.vx *= -1;
        if (a.y < 0 || a.y > canvas.height) a.vy *= -1;

        // Draw connections with next 3 nodes
        for (let j = i + 1; j < Math.min(i + 4, nodes.length); j++) {
          const b = nodes[j];
          const dist = Math.hypot(a.x - b.x, a.y - b.y);
          if (dist < 70) {
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.stroke();
          }
        }

        // Draw node
        ctx.fillStyle = a.color;
        ctx.beginPath();
        ctx.arc(a.x, a.y, a.radius, 0, Math.PI * 2);
        ctx.fill();
      }

      animationId = requestAnimationFrame(render);
    };

    animationId = requestAnimationFrame(render);
    return () => cancelAnimationFrame(animationId);
  }, [nodeCount, accentColor]);

  const handleCanvasClick = (e: React.MouseEvent<HTMLCanvasElement>) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const rect = canvas.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    setNodeCount((prev) => Math.min(prev + 10, 300));
  };

  return (
    <div className="flex flex-col gap-3 p-4 bg-slate-950/80 rounded-xl border border-slate-800">
      <div className="flex items-center justify-between text-xs">
        <div className="flex items-center gap-3">
          <span className="font-semibold text-slate-200">Interactive Canvas Sandbox</span>
          <span className="text-slate-500">·</span>
          <span className="text-emerald-400 font-mono tabular-nums">{fps} FPS</span>
          <span className="text-slate-500">·</span>
          <span className="text-slate-400 font-mono tabular-nums">{nodeCount} Nodes</span>
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={() => setNodeCount((c) => Math.min(c + 30, 400))}
            className="px-2.5 py-1 text-xs font-medium text-slate-300 hover:text-white bg-slate-800 hover:bg-slate-700 rounded transition-colors whitespace-nowrap"
          >
            + 30 노드 추가
          </button>
          <button
            onClick={() => setNodeCount(80)}
            className="px-2 py-1 text-xs text-slate-400 hover:text-white bg-slate-800/60 rounded transition-colors"
            title="Reset"
          >
            <RotateCcw className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      <div className="relative w-full h-56 bg-slate-900/90 rounded-lg overflow-hidden border border-slate-800/80 cursor-crosshair">
        <canvas
          ref={canvasRef}
          width={600}
          height={224}
          onClick={handleCanvasClick}
          className="w-full h-full block"
        />
        <div className="absolute bottom-2 left-2 pointer-events-none text-[10px] text-slate-400 bg-slate-950/70 px-2 py-0.5 rounded backdrop-blur">
          캔버스를 클릭하여 실시간 노드 생성 및 물리 궤적 테스트
        </div>
      </div>
    </div>
  );
}

/* --- 2. Commerce Mini Optimistic UI Demo --- */
function CommerceMiniDemo({ accentColor }: { accentColor: string }) {
  const [cartCount, setCartCount] = useState(1);
  const [totalPrice, setTotalPrice] = useState(149);
  const [isProcessing, setIsProcessing] = useState(false);
  const [latencyMode, setLatencyMode] = useState<'optimistic' | 'traditional'>('optimistic');
  const [logs, setLogs] = useState<string[]>([
    'RSC Initial Shell rendered in 42ms',
    'Edge cache HIT on dynamic stock inventory',
  ]);

  const handleAddToCart = () => {
    if (latencyMode === 'optimistic') {
      // Instant visual update
      setCartCount((c) => c + 1);
      setTotalPrice((p) => p + 149);
      setLogs((l) => [
        `[Optimistic UI: 0ms] UI State committed instantly. Syncing background network...`,
        ...l.slice(0, 3),
      ]);
      // Background sync simulated
      setTimeout(() => {
        setLogs((l) => [`[Network Resolved: 180ms] Server ACK confirmed 200 OK`, ...l.slice(0, 3)]);
      }, 180);
    } else {
      // Traditional blocking UI
      setIsProcessing(true);
      setLogs((l) => [`[Blocking UI] Sending mutation and waiting for response...`, ...l.slice(0, 3)]);
      setTimeout(() => {
        setCartCount((c) => c + 1);
        setTotalPrice((p) => p + 149);
        setIsProcessing(false);
        setLogs((l) => [`[Blocking UI: 650ms] Complete. UI unblocked`, ...l.slice(0, 3)]);
      }, 650);
    }
  };

  return (
    <div className="flex flex-col gap-3 p-4 bg-slate-950/80 rounded-xl border border-slate-800">
      <div className="flex items-center justify-between text-xs">
        <div className="flex items-center gap-2">
          <span className="font-semibold text-slate-200">Next.js Optimistic State Lab</span>
          <span className="text-slate-500">·</span>
          <span className="text-cyan-400 font-mono tabular-nums">LCP: 0.68s</span>
        </div>
        <div className="flex items-center gap-1 bg-slate-900 p-0.5 rounded-lg border border-slate-800">
          <button
            onClick={() => setLatencyMode('optimistic')}
            className={`px-2.5 py-1 text-xs font-medium rounded transition-colors whitespace-nowrap ${
              latencyMode === 'optimistic' ? 'bg-emerald-500 text-slate-950 font-semibold' : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            낙관적 업데이트 (0ms)
          </button>
          <button
            onClick={() => setLatencyMode('traditional')}
            className={`px-2.5 py-1 text-xs font-medium rounded transition-colors whitespace-nowrap ${
              latencyMode === 'traditional' ? 'bg-slate-700 text-white font-semibold' : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            기존 블로킹 방식
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        {/* Product Card */}
        <div className="p-3 bg-slate-900/90 rounded-lg border border-slate-800 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-1">
              <span className="text-xs text-slate-400">Minimal Wool Overshirt</span>
              <span className="text-sm font-semibold text-white font-mono tabular-nums">$149</span>
            </div>
            <p className="text-[11px] text-slate-500 mb-3">Edge-cached asset · Dynamic RSC boundary</p>
          </div>

          <div className="flex items-center justify-between pt-2 border-t border-slate-800/80">
            <span className="text-xs text-slate-400">
              담긴 수량: <strong className="text-emerald-400 tabular-nums">{cartCount}</strong>
            </span>
            <button
              onClick={handleAddToCart}
              disabled={isProcessing}
              className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-all flex items-center gap-1.5 whitespace-nowrap ${
                isProcessing
                  ? 'bg-slate-800 text-slate-400 cursor-wait'
                  : 'bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-semibold'
              }`}
            >
              {isProcessing ? '처리 중...' : '+ 장바구니 담기'}
            </button>
          </div>
        </div>

        {/* Live Event Log */}
        <div className="p-3 bg-slate-900/50 rounded-lg border border-slate-800/70 font-mono text-[11px] flex flex-col justify-between">
          <div className="text-slate-400 mb-1 flex items-center justify-between">
            <span>State Pipeline Logs</span>
            <span className="text-emerald-400">Total: ${totalPrice}</span>
          </div>
          <div className="space-y-1 overflow-hidden">
            {logs.map((log, idx) => (
              <div key={idx} className="truncate text-slate-300">
                <span className="text-slate-600 mr-1.5">›</span>
                {log}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

/* --- 3. Tokens Mini Design System Demo --- */
function TokensMiniDemo({ accentColor }: { accentColor: string }) {
  const [variant, setVariant] = useState<'primary' | 'secondary' | 'outline' | 'ghost'>('primary');
  const [size, setSize] = useState<'sm' | 'md' | 'lg'>('md');
  const [isCopied, setIsCopied] = useState(false);

  const getButtonClasses = () => {
    let base = 'font-medium transition-all flex items-center justify-center gap-2 rounded-lg cursor-pointer select-none ';
    if (size === 'sm') base += 'px-3 py-1.5 text-xs ';
    if (size === 'md') base += 'px-4 py-2 text-sm ';
    if (size === 'lg') base += 'px-5 py-2.5 text-base ';

    if (variant === 'primary') base += 'bg-purple-600 hover:bg-purple-500 text-white shadow-sm shadow-purple-900/20 active:scale-98';
    if (variant === 'secondary') base += 'bg-slate-800 hover:bg-slate-700 text-slate-100 border border-slate-700 active:scale-98';
    if (variant === 'outline') base += 'bg-transparent hover:bg-slate-800 text-purple-400 border border-purple-500/50 active:scale-98';
    if (variant === 'ghost') base += 'bg-transparent hover:bg-slate-800 text-slate-300 active:scale-98';
    return base;
  };

  const codeSnippet = `<Button variant="${variant}" size="${size}" aria-label="Confirm Action">
  <Check className="w-4 h-4" /> Confirm Action
</Button>`;

  const copyCode = () => {
    navigator.clipboard.writeText(codeSnippet);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  };

  return (
    <div className="flex flex-col gap-3 p-4 bg-slate-950/80 rounded-xl border border-slate-800">
      <div className="flex items-center justify-between text-xs">
        <div className="flex items-center gap-2">
          <span className="font-semibold text-slate-200">Aura Primitives Sandbox</span>
          <span className="text-slate-500">·</span>
          <span className="text-purple-400">Headless + CVA</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-[11px] text-emerald-400">WCAG AA Compliant</span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 items-center">
        {/* Controls */}
        <div className="space-y-3 bg-slate-900/60 p-3 rounded-lg border border-slate-800/80">
          <div>
            <label className="text-[11px] font-medium text-slate-400 block mb-1">Variant (토큰 변형)</label>
            <div className="grid grid-cols-4 gap-1">
              {(['primary', 'secondary', 'outline', 'ghost'] as const).map((v) => (
                <button
                  key={v}
                  onClick={() => setVariant(v)}
                  className={`py-1 text-xs rounded capitalize transition-colors ${
                    variant === v ? 'bg-purple-600 text-white font-medium' : 'bg-slate-800/80 text-slate-400 hover:text-white'
                  }`}
                >
                  {v}
                </button>
              ))}
            </div>
          </div>

          <div>
            <label className="text-[11px] font-medium text-slate-400 block mb-1">Size (크기 토큰)</label>
            <div className="grid grid-cols-3 gap-1">
              {(['sm', 'md', 'lg'] as const).map((s) => (
                <button
                  key={s}
                  onClick={() => setSize(s)}
                  className={`py-1 text-xs rounded uppercase font-mono transition-colors ${
                    size === s ? 'bg-slate-700 text-white font-medium' : 'bg-slate-800/80 text-slate-400 hover:text-white'
                  }`}
                >
                  {s}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Live Preview */}
        <div className="flex flex-col items-center justify-center p-6 bg-slate-900/90 rounded-lg border border-slate-800 min-h-[130px]">
          <button className={getButtonClasses()}>
            <Check className="w-4 h-4 shrink-0" />
            <span>Confirm Action</span>
          </button>
          <button
            onClick={copyCode}
            className="mt-3 text-[11px] text-slate-500 hover:text-slate-300 flex items-center gap-1 transition-colors"
          >
            {isCopied ? 'JSX Copied to Clipboard!' : 'JSX 복사하기'}
          </button>
        </div>
      </div>
    </div>
  );
}

/* --- 4. Dashboard Mini Streaming Chart Demo --- */
function DashboardMiniDemo({ accentColor }: { accentColor: string }) {
  const [dataPoints, setDataPoints] = useState<number[]>(() =>
    Array.from({ length: 24 }, () => 140 + Math.random() * 20)
  );
  const [currentVal, setCurrentVal] = useState(148.5);
  const [delta, setDelta] = useState('+2.4%');
  const [isStreaming, setIsStreaming] = useState(true);

  useEffect(() => {
    if (!isStreaming) return;
    const interval = setInterval(() => {
      setDataPoints((prev) => {
        const last = prev[prev.length - 1];
        const next = Math.max(100, Math.min(200, last + (Math.random() - 0.48) * 4));
        setCurrentVal(Number(next.toFixed(2)));
        const d = (((next - 140) / 140) * 100).toFixed(2);
        setDelta(`${Number(d) >= 0 ? '+' : ''}${d}%`);
        return [...prev.slice(1), next];
      });
    }, 250);

    return () => clearInterval(interval);
  }, [isStreaming]);

  const min = Math.min(...dataPoints);
  const max = Math.max(...dataPoints);
  const range = max - min || 1;

  // Build SVG path
  const width = 480;
  const height = 90;
  const points = dataPoints.map((val, idx) => {
    const x = (idx / (dataPoints.length - 1)) * width;
    const y = height - ((val - min) / range) * (height - 16) - 8;
    return `${x},${y}`;
  });
  const pathD = `M ${points.join(' L ')}`;

  return (
    <div className="flex flex-col gap-3 p-4 bg-slate-950/80 rounded-xl border border-slate-800">
      <div className="flex items-center justify-between text-xs">
        <div className="flex items-center gap-2">
          <span className="font-semibold text-slate-200">HyperDash Real-time Stream</span>
          <span className="text-slate-500">·</span>
          <span className="text-amber-400 font-mono tabular-nums">{currentVal} USD</span>
          <span className={`text-[11px] font-mono tabular-nums ${delta.startsWith('+') ? 'text-emerald-400' : 'text-rose-400'}`}>
            ({delta})
          </span>
        </div>
        <button
          onClick={() => setIsStreaming((s) => !s)}
          className="px-2.5 py-1 text-xs font-medium rounded bg-slate-800 hover:bg-slate-700 text-slate-300 transition-colors"
        >
          {isStreaming ? '스트림 일시중지' : '스트림 재개'}
        </button>
      </div>

      <div className="relative w-full h-24 bg-slate-900/90 rounded-lg p-2 border border-slate-800 overflow-hidden">
        <svg viewBox={`0 0 ${width} ${height}`} className="w-full h-full overflow-visible">
          <defs>
            <linearGradient id="chartGrad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#f59e0b" stopOpacity="0.3" />
              <stop offset="100%" stopColor="#f59e0b" stopOpacity="0.0" />
            </linearGradient>
          </defs>
          <path
            d={`${pathD} L ${width},${height} L 0,${height} Z`}
            fill="url(#chartGrad)"
          />
          <path
            d={pathD}
            fill="none"
            stroke="#f59e0b"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    </div>
  );
}
