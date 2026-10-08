import { Project, ExperienceItem, SkillCategory } from '../types/portfolio';

export const PERSONAL_INFO = {
  name: {
    ko: '김민준',
    en: 'Minjun Kim',
  },
  title: {
    ko: '프론트엔드 엔지니어 & UI 아키텍트',
    en: 'Frontend Engineer & UI Architect',
  },
  shortBio: {
    ko: '수학적 인터랙션 디테일과 런타임 성능 최적화에 집착하는 5년 차 프론트엔드 엔지니어입니다. 대용량 실시간 렌더링, 제로 런타임 디자인 시스템, 접근성 높은 웹 애플리케이션을 구축합니다.',
    en: '5+ years frontend engineer obsessed with algorithmic interaction fidelity and runtime performance. Specialized in high-throughput real-time rendering, headless design systems, and resilient web apps.',
  },
  email: 'kim24927584@gmail.com',
  github: 'https://github.com',
  linkedin: 'https://linkedin.com',
  blog: 'https://velog.io',
  location: 'Seoul, South Korea',
  statusText: {
    ko: '현재 새로운 프로젝트 및 팀 합류 기회를 검토하고 있습니다',
    en: 'Open for high-impact frontend engineering roles and collaborations',
  },
};

export const CORE_PILLARS = [
  {
    number: '01',
    title: {
      ko: '극한의 런타임 & 로딩 성능 최적화',
      en: 'Runtime & Web Vitals Optimization',
    },
    description: {
      ko: '초기 로딩 LCP 0.8초 미만 달성, 번들 트리 쉐이킹, 60fps 프레임 드랍 없는 가상화 스크롤 및 Web Worker 연산 분리로 매끄러운 사용자 경험을 제공합니다.',
      en: 'Sub-second LCP, zero-layout-shift pipelines, tree-shaken bundles, and offloading heavy compute to Web Workers for sustained 60fps interaction.',
    },
    metric: 'LCP 0.72s · 60fps Guaranteed',
  },
  {
    number: '02',
    title: {
      ko: '확장 가능한 디자인 시스템 & WAI-ARIA',
      en: 'Scalable Design Systems & Accessibility',
    },
    description: {
      ko: '40+ 개 이상의 재사용 가능한 헤드리스 컴포넌트, 철저한 WAI-ARIA 키보드 탐색, 토큰 기반 컬러 테마 파이프라인으로 개발 속도와 품질을 동시에 극대화합니다.',
      en: '40+ headless primitives with full WAI-ARIA compliance, strict design tokens, and keyboard-first accessibility across dark/light mode architectures.',
    },
    metric: '40+ Headless Primitives · WCAG AA',
  },
  {
    number: '03',
    title: {
      ko: '실시간 데이터 & 협업 캔버스 아키텍처',
      en: 'Real-time Canvas & State Architecture',
    },
    description: {
      ko: 'Canvas 2D / WebGL 렌더링 파이프라인과 CRDT 기반의 충돌 없는 실시간 동기화 상태 관리를 직접 설계하여 복잡한 도메인 문제를 해결합니다.',
      en: 'Direct Canvas 2D / WebGL rendering pipelines combined with CRDT-based conflict-free state sync for complex multiplayer canvas workflows.',
    },
    metric: '100k+ Entities 60fps · CRDT Sync',
  },
];

export const PROJECTS: Project[] = [
  {
    id: 'spectra-canvas',
    title: 'Spectra Canvas',
    subtitle: {
      ko: '대규모 실시간 협업 벡터 캔버스 & 다이어그래밍 엔진',
      en: 'High-throughput collaborative vector canvas & diagram engine',
    },
    period: '2024.03 - 2024.09',
    category: 'canvas',
    role: {
      ko: '프론트엔드 리드 개발 (1인 아키텍처 설계 & 구현)',
      en: 'Lead Frontend Engineer (Solo Architecture & Implementation)',
    },
    featured: true,
    metrics: [
      { label: { ko: '렌더링 성능', en: 'Render Speed' }, value: '60 FPS at 10k Nodes' },
      { label: { ko: '동기화 지연시간', en: 'Sync Latency' }, value: '< 25ms (WebRTC)' },
      { label: { ko: '번들 사이즈', en: 'Bundle Size' }, value: '38 KB (Gzip)' },
    ],
    tags: ['HTML5 Canvas', 'TypeScript', 'WebSockets', 'CRDT (Yjs)', 'Zustand', 'Web Workers'],
    summary: {
      ko: 'Figma 및 Miro 수준의 부드러운 패닝/줌과 수만 개의 벡터 도형을 60fps로 다루는 실시간 협업 화이트보드 엔진입니다.',
      en: 'A high-performance interactive infinite canvas supporting smooth 60fps panning, zooming, and simultaneous multi-cursor vector manipulation.',
    },
    problem: {
      ko: 'DOM 기반 노드 렌더링 시 1,000개 이상의 엘리먼트에서 심각한 가비지 컬렉션(GC) 스터터링과 리플로우 비용이 발생하여 30fps 이하로 성능이 저하되는 문제가 있었습니다.',
      en: 'DOM-based tree nodes suffered massive reflow costs and GC stuttering beyond 1,000 elements, dropping frame rates below 30fps under heavy interactions.',
    },
    solution: {
      ko: '화면 뷰포트 바운딩 박스를 계산하는 공간 분할(Spatial Hashing) 알고리즘을 구현하여 화면 밖의 노드를 즉시 컬링(Culling)하고, 연산 집약적인 충돌 감지와 패스 계산을 Web Worker로 격리했습니다.',
      en: 'Implemented a Spatial Hashing quad-tree partitioner to cull non-visible nodes, along with offloading collision checks and spline math into a dedicated Web Worker.',
    },
    keyTakeaways: {
      ko: [
        'OffscreenCanvas 및 RequestAnimationFrame 파이프라인을 최적화하여 10,000개 노드 기준 60fps 렌더링 유지',
        'Yjs CRDT 기반으로 오프라인 작업 후 재접속 시에도 충돌 없는 자동 머지 구현',
        '행렬 변환(Affine Matrix) 수학을 적용해 정밀한 무한 줌/패닝 및 회전 좌표계 처리',
      ],
      en: [
        'Maintained sustained 60fps with 10,000+ geometric objects via OffscreenCanvas and dirty-rectangle rendering',
        'Conflict-free multi-user live cursors and undo/redo stacks powered by Yjs CRDTs',
        'Custom 2D Affine Transformation engine for fluid sub-pixel zoom and pan gestures',
      ],
    },
    architecture: [
      'Layer 1: Viewport Math & Spatial Grid Index (O(1) Culling)',
      'Layer 2: OffscreenCanvas Double-Buffering Renderer',
      'Layer 3: Yjs CRDT State Store + Local Undo/Redo Log',
      'Layer 4: Web Worker Background Vector Math & Path Tessellation',
    ],
    demoType: 'canvas',
    githubUrl: 'https://github.com/example/spectra-canvas',
    liveUrl: 'https://spectra-canvas.demo',
    accentColor: '#38bdf8',
  },
  {
    id: 'pulse-commerce',
    title: 'Pulse Commerce',
    subtitle: {
      ko: 'LCP 0.68초 달성 초고속 헤드리스 커머스 플랫폼',
      en: 'Sub-second headless e-commerce with Next.js App Router',
    },
    period: '2023.08 - 2024.02',
    category: 'performance',
    role: {
      ko: '프론트엔드 엔지니어 (성능 아키텍처 & 결제 플로우)',
      en: 'Frontend Engineer (Performance & Checkout Pipeline)',
    },
    featured: true,
    metrics: [
      { label: { ko: 'LCP 개선율', en: 'LCP Reduction' }, value: '3.4s → 0.68s (-80%)' },
      { label: { ko: 'Lighthouse 성능', en: 'Lighthouse Score' }, value: '100 / 100' },
      { label: { ko: '전환율 상승', en: 'Conversion Lift' }, value: '+28.4% YoY' },
    ],
    tags: ['Next.js 14', 'React Server Components', 'Tailwind CSS', 'Partial Prerendering', 'Turbopack'],
    summary: {
      ko: '대규모 상품 카탈로그와 복잡한 필터링 인터페이스를 갖춘 글로벌 패션 이커머스에서 극단적인 로딩 속도와 부드러운 페이지 전환을 달성했습니다.',
      en: 'Engineered an ultra-fast global fashion storefront leveraging React Server Components, Streaming SSR, and aggressive image optimization pipelines.',
    },
    problem: {
      ko: '기존 SPA 구조에서 1.8MB에 달하는 무거운 번들과 폭포수형(Waterfall) API 호출로 인해 모바일 3G/LTE 환경에서 초기 이탈률이 42%에 달했습니다.',
      en: 'Heavy client bundle size (1.8MB) and cascading API waterfalls led to a 42% bounce rate on average mobile networks.',
    },
    solution: {
      ko: 'React Server Components(RSC)를 전면 도입하여 자바스크립트 번들을 84KB로 95% 감축하고, Partial Prerendering(PPR)과 엣지 캐싱, 반응형 이미지 srcset 최적화로 초기 렌더링을 즉각 완료시켰습니다.',
      en: 'Migrated to RSC to slash client JS down to 84KB, coupled with Partial Prerendering, Edge Caching, and instant optimistic checkout state.',
    },
    keyTakeaways: {
      ko: [
        'Next.js Streaming SSR과 Suspense 경계를 세밀하게 분리해 스켈레톤 깜빡임 없는 점진적 로딩 구축',
        'AVIF 차세대 이미지 포맷 자동 변환 및 Blurhash 플레이스홀더 파이프라인 연동',
        'Zustand 기반 장바구니 낙관적 업데이트(Optimistic UI)로 지연시간 없는 구매 인터랙션 완성',
      ],
      en: [
        'Streamlined Suspense boundaries for flicker-free incremental layout hydration',
        'Dynamic AVIF image generation pipeline with instant blurhash placeholders',
        'Zero-latency optimistic cart interactions backed by resilient local rollback',
      ],
    },
    architecture: [
      'Edge CDN (Vercel Edge) -> Edge Middleware (Geo/A/B routing)',
      'Next.js 14 App Router -> React Server Components (Static Shell)',
      'Suspense Streaming -> Dynamic Inventory & Pricing Chunks',
      'Client Islands -> Interactive Swiper, Cart & Checkout Engine',
    ],
    demoType: 'commerce',
    githubUrl: 'https://github.com/example/pulse-commerce',
    liveUrl: 'https://pulse-commerce.demo',
    accentColor: '#10b981',
  },
  {
    id: 'aura-design-system',
    title: 'Aura Design System',
    subtitle: {
      ko: '40+ 컴포넌트 멀티 브랜드 엔터프라이즈 디자인 시스템',
      en: 'Multi-brand enterprise headless design system with full accessibility',
    },
    period: '2023.01 - 2023.07',
    category: 'design-system',
    role: {
      ko: '디자인 시스템 코어 아키텍트',
      en: 'Core Design System Architect',
    },
    featured: true,
    metrics: [
      { label: { ko: '컴포넌트 수', en: 'Components' }, value: '42 Primitives' },
      { label: { ko: '접근성 준수율', en: 'WCAG Rating' }, value: '100% WCAG AA' },
      { label: { ko: '팀 개발 속도', en: 'Dev Velocity' }, value: '+3.5x Faster' },
    ],
    tags: ['TypeScript', 'Radix UI', 'Tailwind CSS', 'Storybook', 'CVA', 'Vitest'],
    summary: {
      ko: '7개 이상의 서비스 프로덕트가 공유하는 통일된 디자인 언어와 컴포넌트 라이브러리입니다. 철저한 접근성 검증과 다크모드/테마 토큰 체계를 갖추었습니다.',
      en: 'Unified design language and component library shared across 7 production web applications with zero runtime CSS overhead.',
    },
    problem: {
      ko: '프로덕트별로 중복 구현된 모달, 드롭다운, 툴팁 코드로 인해 UI 일관성이 깨지고, 스크린 리더 및 키보드 사용자를 위한 접근성이 전혀 지원되지 않았습니다.',
      en: 'Fragmented UI implementations across independent teams caused visual inconsistencies and severe accessibility gaps for keyboard/screen-reader users.',
    },
    solution: {
      ko: 'Headless UI 철학을 기반으로 상태 로직과 스타일링 레이어를 완벽히 분리하고, Class Variance Authority(CVA)와 CSS 변수 기반 디자인 토큰 파이프라인을 구축했습니다.',
      en: 'Architected headless primitives separating interaction logic from presentation, powered by strict CSS custom properties and typed CVA variants.',
    },
    keyTakeaways: {
      ko: [
        'WAI-ARIA 1.2 표준을 준수하는 포커스 트랩(Focus Trap), ARIA 라이브 리전, 키보드 단축키 지원',
        'Storybook 및 Chromatic을 활용한 시각적 회귀(Visual Regression) 테스트 자동화 파이프라인 구축',
        'NPM 사내 패키지 배포 및 체계적인 SemVer 버전 관리와 마이그레이션 가이드 문서화',
      ],
      en: [
        'Zero accessibility regressions via automated Axe Core testing in CI/CD pipelines',
        'Semantic design token bridge enabling seamless multi-brand white-labeling in 1 line of CSS',
        'Comprehensive interactive Storybook documentation with live sandbox playgrounds',
      ],
    },
    architecture: [
      'Design Tokens (Figma Tokens JSON -> Style Dictionary -> CSS Vars)',
      'Behavioral Core (Radix UI / Custom Hooks for Keyboard & Focus)',
      'Styling Layer (Tailwind CSS + Class Variance Authority variants)',
      'Testing Tier (Axe-core accessibility audit + Playwright E2E)',
    ],
    demoType: 'tokens',
    githubUrl: 'https://github.com/example/aura-design-system',
    liveUrl: 'https://aura-design-system.demo',
    accentColor: '#a855f7',
  },
  {
    id: 'hyperdash-telemetry',
    title: 'HyperDash Telemetry',
    subtitle: {
      ko: '초당 5,000건 실시간 금융 시계열 데이터 스트리밍 대시보드',
      en: 'Real-time financial telemetry dashboard rendering 5k updates/sec',
    },
    period: '2022.06 - 2022.12',
    category: 'web-app',
    role: {
      ko: '프론트엔드 엔지니어',
      en: 'Frontend Engineer',
    },
    featured: false,
    metrics: [
      { label: { ko: '데이터 처리량', en: 'Throughput' }, value: '5,000 msgs / sec' },
      { label: { ko: '메인스레드 부하', en: 'CPU Load' }, value: '< 8% Utilization' },
      { label: { ko: '프레임 드랍', en: 'Dropped Frames' }, value: '0% (Jank-Free)' },
    ],
    tags: ['React', 'TypeScript', 'Web Workers', 'WebSockets', 'Canvas 2D', 'ArrayBuffer'],
    summary: {
      ko: '가상자산 및 주식 시세 호가창과 틱 차트를 실시간으로 브라우저 메인 스레드 멈춤 없이 부드럽게 렌더링하는 엔터프라이즈 모니터링 콘솔입니다.',
      en: 'Enterprise-grade financial terminal dashboard rendering high-frequency tick charts and order books without dropping a single frame.',
    },
    problem: {
      ko: '초당 수천 개의 WebSocket 메시지가 들어올 때 JSON 파싱과 React 상태 업데이트가 메인 스레드를 100% 점유하여 브라우저 탭이 얼어붙는 현상이 발생했습니다.',
      en: 'High-frequency WebSocket payloads choked React reconciliation, locking the main thread and freezing user inputs.',
    },
    solution: {
      ko: 'WebSocket 수신과 이진 바이너리(ArrayBuffer/Protobuf) 디코딩을 전용 Web Worker로 이전하고, RAF 기반 버퍼링 큐(Throttle Batching)를 설계해 렌더링 빈도를 60hz로 제어했습니다.',
      en: 'Offloaded socket ingestion and binary decoding to a Web Worker, utilizing SharedArrayBuffer and a RAF batch queue to throttle renders smoothly.',
    },
    keyTakeaways: {
      ko: [
        'Web Worker와 메인 스레드 간 Transferable Objects를 활용해 제로 카피(Zero-Copy) 메모리 전송 달성',
        'Canvas 2D 기반 커스텀 틱 차트 엔진으로 수만 개의 데이터 포인트를 밀리초 단위로 렌더',
        '상태 업데이트 격리를 위해 슬라이스 단위의 원자적(Atomic) 구독 모델 설계',
      ],
      en: [
        'Zero-copy memory transfers using Transferable Objects across worker boundaries',
        'Custom hardware-accelerated 2D canvas charting engine handling 50k+ data points',
        'Fine-grained selector subscriptions preventing unnecessary parent component rerenders',
      ],
    },
    architecture: [
      'Network Stream: WSS -> Binary Protobuf Payload',
      'Worker Thread: Ingestion -> Decode -> Ring Buffer Accumulator',
      'Main Thread Sync: requestAnimationFrame 16.6ms Batch Dispatch',
      'Render Engine: Canvas 2D Direct Path Blitting with Tabular Numbers',
    ],
    demoType: 'dashboard',
    githubUrl: 'https://github.com/example/hyperdash',
    liveUrl: 'https://hyperdash.demo',
    accentColor: '#f59e0b',
  },
];

export const EXPERIENCES: ExperienceItem[] = [
  {
    id: 'exp-1',
    company: 'HyperScale Corp (하이퍼스케일)',
    role: {
      ko: 'Senior Frontend Engineer (프론트엔드 리드)',
      en: 'Senior Frontend Engineer (Frontend Lead)',
    },
    period: '2023.03 - 현재 (Present)',
    description: {
      ko: '글로벌 엔터프라이즈 SaaS 제품의 프론트엔드 아키텍처 전반을 총괄하고, 8명의 프론트엔드 엔지니어링 챕터를 리딩하고 있습니다.',
      en: 'Leading the frontend architecture and an 8-engineer chapter across core enterprise SaaS web applications.',
    },
    achievements: {
      ko: [
        'Next.js 14 App Router 기반으로 핵심 프로덕트 마이그레이션을 주도하여 번들 사이즈 62% 감축 및 초기 로딩 시간(LCP) 0.7초 달성',
        '사내 공통 UI 라이브러리 Aura Design System 구축 및 배포, 전사 제품 신규 피처 개발 리드타임 45% 단축',
        'CI/CD 파이프라인에 Lighthouse CI 및 Playwright 시각적 회귀 테스트를 연동하여 배포 후 결함 발생률 70% 감소',
      ],
      en: [
        'Spearheaded core platform migration to Next.js App Router, shrinking JS payload by 62% and reaching 0.7s LCP',
        'Architected and published company-wide Aura Design System, accelerating feature velocity by 45%',
        'Integrated Lighthouse CI and Playwright visual regression checks into CI/CD, reducing post-release regressions by 70%',
      ],
    },
    skills: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Architecture', 'Performance', 'Playwright'],
  },
  {
    id: 'exp-2',
    company: 'Studio Metric (스튜디오 메트릭)',
    role: {
      ko: 'Frontend Engineer (프론트엔드 엔지니어)',
      en: 'Frontend Engineer',
    },
    period: '2021.07 - 2023.02',
    description: {
      ko: '데이터 분석 대시보드 및 고인터랙티브 웹 솔루션 개발. 데이터 시각화 및 인터랙티브 웹 캔버스 기술 연구개발.',
      en: 'Engineered analytics dashboards and interactive creative web tools with heavy focus on data visualization.',
    },
    achievements: {
      ko: [
        'Canvas 2D 기반 대규모 차팅 엔진을 자체 개발하여 타사 라이브러리 대비 렌더링 메모리 점유율 50% 절감',
        'TanStack Query(React Query) 도입으로 서버 상태 캐싱 전략을 일원화하고 네트워크 중복 요청 85% 제거',
        'W3C 웹 접근성 지침(WCAG) 준수 프로젝트를 주도하여 공공기관 및 대기업 클라이언트 표준 인증 획득',
      ],
      en: [
        'Engineered custom 2D canvas charting engine, slashing browser memory footprint by 50% vs legacy D3 setup',
        'Unified server-state caching with TanStack Query, eliminating 85% of redundant network roundtrips',
        'Led comprehensive accessibility compliance program, achieving full WCAG AA certification for enterprise tiers',
      ],
    },
    skills: ['React', 'TypeScript', 'Canvas API', 'TanStack Query', 'Zustand', 'Storybook'],
  },
  {
    id: 'exp-3',
    company: 'Vivid Lab (비비드 랩)',
    role: {
      ko: 'Junior Frontend Developer',
      en: 'Junior Frontend Developer',
    },
    period: '2020.01 - 2021.06',
    description: {
      ko: '반응형 모바일 웹 및 전자상거래 프론트엔드 구현. 크로스 브라우징 및 성능 최적화 업무 수행.',
      en: 'Built responsive mobile-first ecommerce websites and landing experiences with high animation fidelity.',
    },
    achievements: {
      ko: [
        '100% 모바일 반응형 이커머스 웹사이트 12개 프로젝트 성공적 런칭 및 운영',
        'Web Vitals 개선 작업을 통해 구글 검색 SEO 랭킹 상위권 진입 기여',
      ],
      en: [
        'Delivered 12 responsive ecommerce projects on tight schedules with zero critical launch bugs',
        'Drove Core Web Vitals optimizations boosting organic Google search rankings',
      ],
    },
    skills: ['JavaScript (ES6+)', 'React', 'HTML5/CSS3', 'Responsive Design', 'Git'],
  },
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: {
      ko: '핵심 프론트엔드 (Core Frontend)',
      en: 'Core Frontend',
    },
    items: [
      {
        name: 'TypeScript',
        level: 'Mastery',
        notes: {
          ko: '엄격한 타입 시스템, 제네릭, 조건부 타입, 유틸리티 타입 마스터리',
          en: 'Strict typing, conditional types, generics, and compiler configurations',
        },
      },
      {
        name: 'React 19 & Next.js 14/15',
        level: 'Mastery',
        notes: {
          ko: 'RSC, Server Actions, Suspense, 스트리밍 SSR 및 하이드레이션 최적화',
          en: 'RSC, Server Actions, granular Suspense boundaries, streaming SSR',
        },
      },
      {
        name: 'Tailwind CSS & CSS Architecture',
        level: 'Mastery',
        notes: {
          ko: '디자인 토큰 바인딩, 반응형 모바일 우선, 제로 런타임 최적화',
          en: 'Design tokens, zero-runtime efficiency, fluid responsive layouts',
        },
      },
      {
        name: 'Modern JavaScript (ESNext)',
        level: 'Mastery',
        notes: {
          ko: '이벤트 루프 심층 이해, Web Workers, 가비지 컬렉션 구조 파악',
          en: 'Event loop mechanics, memory profiles, microtasks, execution contexts',
        },
      },
    ],
  },
  {
    title: {
      ko: '상태 관리 & 데이터 플로우 (State & Data Flow)',
      en: 'State & Data Flow',
    },
    items: [
      {
        name: 'TanStack Query (React Query)',
        level: 'Mastery',
        notes: {
          ko: '서버 상태 캐싱, 낙관적 업데이트, 무한 스크롤, 프리페칭 전략',
          en: 'Server-state hydration, optimistic mutations, prefetching strategies',
        },
      },
      {
        name: 'Zustand & State Machines',
        level: 'Mastery',
        notes: {
          ko: '경량 클라이언트 상태, 슬라이스 패턴, 미들웨어 확장',
          en: 'Slice pattern, custom middlewares, minimal re-render selectors',
        },
      },
      {
        name: 'WebSockets & CRDT (Yjs)',
        level: 'Proficient',
        notes: {
          ko: '실시간 양방향 통신, 충돌 없는 분산 데이터 동기화',
          en: 'Real-time duplex synchronization, conflict-free replicated data types',
        },
      },
    ],
  },
  {
    title: {
      ko: '그래픽 & 인터랙션 (Graphics & Interaction)',
      en: 'Graphics & Interaction',
    },
    items: [
      {
        name: 'HTML5 Canvas & 2D Math',
        level: 'Mastery',
        notes: {
          ko: '행렬 변환, 공간 분할(Spatial Hashing), 부드러운 60fps 렌더 파이프라인',
          en: 'Spatial quadtree culling, affine matrix transforms, high-DPI rendering',
        },
      },
      {
        name: 'Motion (Framer Motion)',
        level: 'Mastery',
        notes: {
          ko: '스프링 물리 엔진 인터랙션, 레이아웃 애니메이션, 제스처 바인딩',
          en: 'Spring physics, layout animations, exit transitions, gesture handlers',
        },
      },
      {
        name: 'SVG & Micro-interactions',
        level: 'Proficient',
        notes: {
          ko: '정교한 벡터 패스 애니메이션, 인터랙티브 데이터 비주얼라이제이션',
          en: 'Path morphing, interactive SVG states, accessible diagrams',
        },
      },
    ],
  },
  {
    title: {
      ko: '품질 & 인프라 (Quality & Tooling)',
      en: 'Quality & Tooling',
    },
    items: [
      {
        name: 'Web Vitals & Performance Profiling',
        level: 'Mastery',
        notes: {
          ko: 'Chrome DevTools 프로파일링, 메모리 릭 탐지, FCP/LCP/INP 최적화',
          en: 'Memory leak diagnosis, flame chart analysis, INP/LCP debugging',
        },
      },
      {
        name: 'Playwright & Vitest',
        level: 'Proficient',
        notes: {
          ko: '단위 테스트, 컴포넌트 격리 테스트, E2E 시각적 회귀 자동화',
          en: 'Unit tests, isolated component testing, automated visual regression',
        },
      },
      {
        name: 'Vite & Modern Bundlers',
        level: 'Mastery',
        notes: {
          ko: '코드 스플리팅, 트리 쉐이킹, 플러그인 작성, 빌드 속도 튜닝',
          en: 'Tree shaking, granular chunking strategies, custom Vite plugins',
        },
      },
    ],
  },
];
