export interface Project {
  id: string;
  title: string;
  subtitle: string;
  category: 'design-system' | 'webapp' | 'canvas' | 'all';
  categoryLabel: string;
  period: string;
  role: string;
  team: string;
  image: string;
  summary: string;
  highlights: string[];
  metrics: { label: string; value: string; desc: string }[];
  problem: string;
  solution: string;
  architectureDetails: string[];
  techStack: string[];
  demoType?: 'interactive' | 'visual';
  codeSnippet?: {
    filename: string;
    code: string;
  };
}

export interface Article {
  id: string;
  title: string;
  category: string;
  date: string;
  readTime: string;
  summary: string;
  tags: string[];
  content: string[];
}

export interface Experience {
  period: string;
  company: string;
  role: string;
  department: string;
  description: string;
  achievements: string[];
  skills: string[];
}

export const DEVELOPER_INFO = {
  nameKorean: '김민성',
  nameEnglish: 'Minseong Kim',
  title: 'Senior Frontend Engineer',
  tagline: '사용자 경험과 성능의 경계를 넓히는 프론트엔드 엔지니어',
  description: '복잡한 비즈니스 로직을 직관적이고 매끄러운 사용자 인터페이스로 풀어냅니다. 컴포넌트 기반 아키텍처, 디자인 시스템 구축, 대규모 데이터 렌더링 최적화, 웹 접근성 준수를 통해 비즈니스 임팩트를 창출합니다.',
  email: 'kim24927584@gmail.com',
  github: 'https://github.com',
  linkedin: 'https://linkedin.com',
  location: '대한민국 서울특별시 (Seoul, South Korea)',
  avatar: '/src/assets/images/avatar_minseong_1791448526511.jpg',
  stats: [
    { label: '개발 경력', value: '4년+', detail: '2022 ~ 현재 프로덕트 프론트엔드 리드' },
    { label: 'Core Web Vitals 개선', value: '45%', detail: 'LCP 2.4s → 1.3s 단축' },
    { label: '디자인 시스템 재사용률', value: '85%+', detail: '사내 5개 핵심 서비스 공통 도입' },
    { label: 'Lighthouse 성능 스코어', value: '99/100', detail: '웹 접근성 & 성능 표준 준수' }
  ]
};

export const PROJECTS: Project[] = [
  {
    id: 'finflow-design-system',
    title: 'FinFlow 디자인 시스템 & 웹 콘솔',
    subtitle: '핀테크 멀티 프로덕트를 지원하는 토큰 기반 모노레포 디자인 시스템',
    category: 'design-system',
    categoryLabel: '디자인 시스템 & 아키텍처',
    period: '2024.03 - 2024.12',
    role: 'Frontend Tech Lead & Design System Architect',
    team: '코어 프론트엔드 팀 (엔지니어 4명, 프로덕트 디자이너 2명)',
    image: '/src/assets/images/finflow_dashboard_1791448547659.jpg',
    summary: '사내 5개 핀테크 프로덕트 간 디자인 일관성과 코드 중복 문제를 해결하기 위해 구축된 엔터프라이즈 모노레포 디자인 시스템 및 관리자 콘솔입니다.',
    highlights: [
      'Figma Tokens 자동 동기화 파이프라인 구축으로 디자이너-개발자 핸드오프 시간 70% 단축',
      'Radix UI 기반 WAI-ARIA 접근성 가이드라인(WCAG AA)을 100% 준수한 45개 헤드리스 컴포넌트 래핑',
      'Rollup & Tree-shaking 최적화로 번들 사이즈 38% 절감 (초기 로드 120KB → 74KB)',
      'Turborepo 기반 CI 빌드 캐시 도입으로 배포 파이프라인 소요 시간 4.5분에서 1.2분으로 73% 단축'
    ],
    metrics: [
      { label: '번들 사이즈 감축', value: '-38%', desc: '트리쉐이킹 최적화 및 경량 번들러' },
      { label: '컴포넌트 재사용률', value: '85%', desc: '전사 5개 웹 서비스 표준 채택' },
      { label: '핸드오프 리드타임', value: '-70%', desc: '디자인 토큰 자동 파이프라인' }
    ],
    problem: '급성장하는 서비스 환경에서 여러 팀이 각자 UI 컴포넌트를 중복 개발하고 있었으며, 디자인 가이드라인 불일치와 접근성 미준수 문제가 빈번했습니다. 또한 대형 컴포넌트 라이브러리 직접 의존으로 초기 로딩 속도가 저하되었습니다.',
    solution: 'Figma Tokens API와 연동된 CSS 변수 기반 디자인 토큰 파이프라인을 자동화하고, Radix UI 헤드리스 프리미티브를 래핑하여 접근성과 유연성을 동시에 확보했습니다. Turborepo 모노레포 환경에서 철저한 컴포넌트 단위 테스트와 Storybook 문서화를 진행했습니다.',
    architectureDetails: [
      'Turborepo + pnpm 기반 모노레포 아키텍처 설계',
      '디자인 토큰 (Colors, Typography, Spacing, Shadows) 자동 빌드 파이프라인',
      'Tailwind CSS 플러그인 형태로 토큰을 익스포트하여 개발 생산성 극대화',
      'Visual Regression Test (Playwright)를 통한 컴포넌트 변경 사전 감지'
    ],
    techStack: ['React 19', 'TypeScript', 'Tailwind CSS', 'Radix UI', 'Turborepo', 'Storybook', 'Vitest'],
    demoType: 'interactive',
    codeSnippet: {
      filename: 'useDesignToken.ts',
      code: `// FinFlow Design Token Theme Provider
export function applyThemeTokens(theme: ThemeConfig) {
  const root = document.documentElement;
  Object.entries(theme.tokens).forEach(([key, val]) => {
    root.style.setProperty(\`--ff-\${key}\`, val);
  });
  // WAI-ARIA High Contrast support
  if (theme.contrastMode === 'enhanced') {
    root.classList.add('ff-high-contrast');
  }
}`
    }
  },
  {
    id: 'hypercanvas-collaboration',
    title: 'HyperCanvas 실시간 협업 스위트',
    subtitle: 'Canvas 2D & WebGL 기반의 무한 캔버스 벡터 그래픽 협업 엔진',
    category: 'canvas',
    categoryLabel: '그래픽스 & 실시간 엔진',
    period: '2023.08 - 2024.02',
    role: 'Frontend Core Graphics Engineer',
    team: '인터랙션 엔지니어링 팀 (엔지니어 3명)',
    image: '/src/assets/images/hypercanvas_preview_1791448561260.jpg',
    summary: '웹 브라우저에서 수만 개의 벡터 노드와 다이어그램을 지연 없이 조작하고, 다수의 사용자가 실시간으로 동시 편집할 수 있는 무한 캔버스 도구입니다.',
    highlights: [
      'QuadTree 공간 분할 알고리즘 및 뷰포트 컬링(Viewport Culling)으로 10,000+ 오브젝트 60fps 유지',
      'Yjs CRDT와 WebSocket을 통한 충돌 없는 분산 동시 편집 및 오프라인 상태 복구 구현',
      '무거운 베지어 곡선 및 지오메트리 교차 연산을 Web Worker로 분리하여 메인 스레드 락 프리 달성',
      '마우스/터치/트랙패드 멀티 제스처(핀치 줌, 팬) 인터랙션 매트릭스 변환 최적화'
    ],
    metrics: [
      { label: '렌더링 프레임', value: '60 FPS', desc: '1만 개 도형 렌더링 시에도 무결점 유지' },
      { label: '동시 편집 지연시간', value: '<25ms', desc: 'CRDT 바이너리 델타 압축 전송' },
      { label: '메인 스레드 점유율', value: '14%', desc: 'Web Worker 비동기 지오메트리 계산' }
    ],
    problem: '캔버스 상에 오브젝트가 2,000개 이상 증가할 때 렌더링 틱당 40ms 이상 소요되어 15~20fps로 떨어지는 치명적인 버벅임이 발생했고, 다중 편집 시 동시 수정 충돌 문제가 있었습니다.',
    solution: '화면에 보이는 영역만 선별 렌더링하는 뷰포트 컬링과 QuadTree 공간 색인을 도입하고, 복잡한 곡선 보간 계산을 Web Worker로 격리했습니다. 충돌 해결을 위해 Yjs 기반 CRDT 구조를 적용하여 안정적인 동시성을 완성했습니다.',
    architectureDetails: [
      '2계층 렌더링 파이프라인 (정적 배경 레이어 캐싱 + 동적 인터랙션 레이어)',
      'Web Worker 기반 비동기 충돌 감지 및 바운딩 박스 계산',
      'WebSocket 바이너리 인코딩(Protobuf/CBOR)으로 네트워크 대역폭 65% 절약',
      'Custom Transform Matrix Hook을 활용한 부드러운 카메라 줌/팬 모션'
    ],
    techStack: ['Canvas 2D API', 'TypeScript', 'Yjs CRDT', 'WebSockets', 'Web Worker', 'Tailwind CSS'],
    demoType: 'interactive'
  },
  {
    id: 'commercepulse-analytics',
    title: 'CommercePulse 실시간 분석 대시보드',
    subtitle: '초당 수백 건의 트래픽을 집계하는 가상화 대규모 데이터 그리드',
    category: 'webapp',
    categoryLabel: '대규모 웹 애플리케이션',
    period: '2023.01 - 2023.07',
    role: 'Frontend Engineer',
    team: '데이터 플랫폼 프론트엔드 팀 (엔지니어 3명, 백엔드 4명)',
    image: '/src/assets/images/commercepulse_preview_1791448576353.jpg',
    summary: '실시간 주문, 결제 상태 및 재고 데이터를 초당 수백 건씩 시각화하는 고성능 B2B 커머스 분석 웹 대시보드입니다.',
    highlights: [
      'TanStack Virtual 기반 100,000+ 레코드 가상화 테이블로 메모리 누수 방지 및 즉각적 스크롤링 실현',
      'SSE(Server-Sent Events) 스트림 데이터의 requestAnimationFrame 기반 배치 업데이트 버퍼링 설계',
      'React 동시성(Concurrent) 기능과 useDeferredValue를 활용하여 필터링 입력 반응성 100% 보장',
      '복잡한 다차원 차트 컴포넌트의 선택적 렌더링 분리로 불필요한 리렌더링 90% 제거'
    ],
    metrics: [
      { label: '테이블 렌더링 성능', value: '10만 행', desc: '초기 마운트 60ms 이내 초고속 렌더링' },
      { label: 'CPU 사용률 개선', value: '-75%', desc: 'rAF 배치 버퍼링으로 프레임 드랍 제거' },
      { label: '데이터 필터링 지연', value: '<10ms', desc: '인덱스 기반 클라이언트 캐싱' }
    ],
    problem: '실시간으로 쏟아지는 트랜잭션 데이터로 인해 React 트리가 매초 수십 번씩 전체 리렌더링되며 브라우저 탭이 얼어붙는 현상이 발생했습니다.',
    solution: '초 단위로 인입되는 스트리밍 패킷을 rAF 기반 큐(Queue)로 묶어 초당 2~3회만 효율적으로 상태를 커밋하는 배치 버퍼 엔진을 개발했습니다. 테이블 렌더링은 TanStack Virtual을 활용해 뷰포트 내 수십 개 행만 마운트하도록 설계했습니다.',
    architectureDetails: [
      'SSE 스트리밍 이벤트용 Batch Buffer Custom Hook 설계',
      'TanStack Table + Virtualizer 연동 고성능 가상화 테이블 아키텍처',
      'Zustand 세분화된 셀렉터(Selector) 패턴으로 상태 구독 범위 최소화',
      '차트 데이터 SVG 렌더링 최적화 및 캔버스 백업 렌더러 구축'
    ],
    techStack: ['Next.js', 'React', 'TypeScript', 'TanStack Virtual', 'Zustand', 'Recharts', 'Tailwind CSS'],
    demoType: 'interactive'
  },
  {
    id: 'streamdoc-ai-workspace',
    title: 'StreamDoc AI 워크스페이스',
    subtitle: 'LLM 토큰 스트리밍과 실시간 마크다운 파싱을 결합한 인터랙티브 문서 도구',
    category: 'webapp',
    categoryLabel: '인터랙티브 웹 앱',
    period: '2024.08 - 2025.01',
    role: 'Frontend Engineer (Side Project & Core Open)',
    team: '개인 개발 및 오픈소스 기여',
    image: '/src/assets/images/finflow_dashboard_1791448547659.jpg',
    summary: '대규모 언어 모델의 스트리밍 출력을 버벅임 없이 실시간으로 파싱하고, 코드 블록과 다이어그램을 점진적으로 렌더링하는 워크스페이스입니다.',
    highlights: [
      'AST(Abstract Syntax Tree) 단위의 점진적(Incremental) 마크다운 스트리밍 파서 구현',
      '수식(KaTeX), 다이어그램(Mermaid), 신택스 하이라이팅을 분리된 비동기 마운트로 프레임 보존',
      '로컬 스토리지 자동 저장 및 인덱스드 DB(IndexedDB) 오프라인 동기화',
      '키보드 단축키 기반 커맨드 팔레트(Command-K) 및 접근성 단축키 시스템 구축'
    ],
    metrics: [
      { label: '스트리밍 렌더 지연', value: '<5ms', desc: '토큰 청크 유입 시 UI 프리징 제로' },
      { label: '파싱 효율', value: '+300%', desc: '전체 재파싱 대신 증분 델타 AST 업데이트' }
    ],
    problem: '기존 마크다운 렌더러들은 스트리밍 텍스트가 들어올 때마다 문서 전체를 처음부터 다시 파싱하고 DOM 트리를 재생성하여 긴 문서에서 타이핑 버벅임이 극심했습니다.',
    solution: '변경된 마지막 단락만 감지하여 증분 파싱하는 커스텀 AST 델타 파서를 구축하고, 코드 하이라이팅과 수식 렌더링을 Web Worker로 비동기 분리했습니다.',
    architectureDetails: [
      'Remark/Unified 기반 증분 스트리밍 파싱 파이프라인',
      'Monaco Editor 연동 실시간 코드 실행 샌드박스',
      'IndexedDB 기반 로컬 퍼시스턴스 레이어 설계'
    ],
    techStack: ['React 19', 'TypeScript', 'Tailwind CSS', 'IndexedDB', 'Web Worker', 'Lucide Icons'],
    demoType: 'visual'
  }
];

export const EXPERIENCES: Experience[] = [
  {
    period: '2023.04 — 현재 (재직 중)',
    company: '핀테크 테크 솔루션즈',
    role: 'Senior Frontend Engineer',
    department: '코어 플랫폼 & 디자인 시스템 팀',
    description: '결제 솔루션 및 가맹점 정산 웹 콘솔의 프론트엔드 개발을 리드하고, 전사 디자인 시스템 아키텍처를 주도하여 개발 생산성과 웹 성능을 극대화하고 있습니다.',
    achievements: [
      '전사 5개 프로덕트에 도입된 디자인 시스템(FinFlow) 설계 및 배포 주도, 신규 서비스 개발 기간 40% 단축',
      'Core Web Vitals 모니터링 체계를 구축하고 번들 스플리팅과 리렌더링 최적화를 통해 LCP 1.3초 달성',
      '디자인-개발 간 토큰 파이프라인 자동화 구축으로 UI 불일치 이슈 80% 이상 감소',
      '주니어 엔지니어 대상 클린 코드, React 19 동시성 모드, 접근성 가이드라인 멘토링 진행'
    ],
    skills: ['React 19', 'TypeScript', 'Next.js', 'Turborepo', 'Tailwind CSS', 'Web Vitals', 'Radix UI']
  },
  {
    period: '2022.01 — 2023.03',
    company: '데이터펄스 랩스',
    role: 'Frontend Engineer',
    department: 'B2B SaaS 프로덕트 팀',
    description: '대규모 이커머스 거래 분석 대시보드 프론트엔드를 개발하고, 레거시 상태 관리 아키텍처를 현대화했습니다.',
    achievements: [
      '레거시 Redux 구조를 Zustand 및 TanStack Query로 마이그레이션하여 상태 관리 보일러플레이트 코드 65% 감축',
      '10만 건 이상의 대용량 테이블 가상화(Virtualization)를 도입하여 렌더링 성능을 80ms 이내로 단축',
      'Vitest 및 Playwright E2E 테스트 스위트 도입으로 프로덕션 배포 시 회귀 버그 발생률 40% 감소',
      '웹소켓 기반 실시간 데이터 스트리밍 UI 컴포넌트 개발'
    ],
    skills: ['React', 'TypeScript', 'Zustand', 'TanStack Query', 'Canvas API', 'Vitest', 'Playwright']
  },
  {
    period: '2018.03 — 2022.02',
    company: '컴퓨터공학과 학사 졸업',
    role: '컴퓨터공학 학사 (B.S. in Computer Science)',
    department: '소프트웨어 및 웹 엔지니어링 전공',
    description: '자료구조, 알고리즘, 컴퓨터 네트워크, 운영체제, 데이터베이스 등 탄탄한 컴퓨터 과학 기본기를 수료했습니다.',
    achievements: [
      '학부 캡스톤 디자인 프로젝트 최우수상 (웹 기반 인터랙티브 협업 도구 개발)',
      '알고리즘 및 웹 표준 학술 동아리 활동 및 기술 세미나 발표 12회 진행',
      '정보처리기사 자격 취득'
    ],
    skills: ['Data Structures', 'Algorithms', 'Web Standards', 'Computer Architecture', 'Network']
  }
];

export const SKILL_CATEGORIES = [
  {
    category: 'Core Frontend',
    description: '견고하고 확장 가능한 프론트엔드 코어 역량',
    skills: [
      { name: 'React 19 / 18', level: 'Expert', desc: '동시성 모드, 서버 컴포넌트, 커스텀 훅 설계' },
      { name: 'TypeScript', level: 'Expert', desc: '고급 제네릭, 유니온 타입 설계, 타입 가드, 엄격 모드' },
      { name: 'Next.js (App Router)', level: 'Advanced', desc: 'SSR, ISR, 스트리밍 라우팅, 최적화 기법' },
      { name: 'Modern JavaScript (ESNext)', level: 'Expert', desc: '이벤트 루프, 프로미스, 이터레이터, 최신 문법' }
    ]
  },
  {
    category: 'Architecture & UI System',
    description: '디자인 시스템과 컴포넌트 아키텍처',
    skills: [
      { name: 'Design Systems', level: 'Expert', desc: 'Figma Tokens 연동, 컴포넌트 명세화, 접근성(A11y)' },
      { name: 'Tailwind CSS', level: 'Expert', desc: '커스텀 테마, 디자인 토큰 플러그인, CSS 변수 아키텍처' },
      { name: 'Radix UI / Headless', level: 'Expert', desc: 'WAI-ARIA 키보드 인터랙션 및 스크린리더 준수' },
      { name: 'Feature-Sliced Design (FSD)', level: 'Advanced', desc: '모듈식 계층 아키텍처, 결합도 최소화' }
    ]
  },
  {
    category: 'Performance & Real-time',
    description: '극한의 렌더링 최적화와 실시간 인터랙션',
    skills: [
      { name: 'Web Performance & Vitals', level: 'Expert', desc: 'LCP/INP/CLS 분석, 렌더링 프로파일링, 메모이제이션' },
      { name: 'DOM Virtualization', level: 'Expert', desc: 'TanStack Virtual 기반 10만+ 대용량 행 60fps 렌더링' },
      { name: 'Canvas 2D / WebGL', level: 'Intermediate', desc: '쿼드트리 공간 분할, 뷰포트 컬링, 벡터 그래픽스' },
      { name: 'WebSockets & CRDT (Yjs)', level: 'Advanced', desc: '실시간 다중 동시 편집, 델타 압축, 오프라인 복구' }
    ]
  },
  {
    category: 'Tooling & Testing',
    description: '안정적인 배포와 생산성을 높이는 도구 체계',
    skills: [
      { name: 'Turborepo / pnpm', level: 'Advanced', desc: '모노레포 파이프라인, 원격 캐시 최적화' },
      { name: 'Vite / Rollup', level: 'Advanced', desc: '트리쉐이킹, 플러그인 제작, 번들 분석 및 최적화' },
      { name: 'Vitest / RTL / Playwright', level: 'Advanced', desc: '단위 테스트, 통합 테스트, E2E 시각적 회귀 테스트' },
      { name: 'Git & GitHub Actions', level: 'Advanced', desc: 'CI/CD 자동화, 린트/타입체크/테스트/배포 파이프라인' }
    ]
  }
];

export const ARTICLES: Article[] = [
  {
    id: 'react-rendering-optimization',
    title: '대규모 React 앱에서 리렌더링 최적화와 메모이제이션의 허와 실',
    category: 'Web Performance',
    date: '2024.11.14',
    readTime: '6 min read',
    tags: ['React', 'Performance', 'useMemo', 'Profiler'],
    summary: '무조건적인 useMemo/useCallback 사용이 오히려 성능을 떨어뜨리는 이유와, 프로파일러 기반으로 리렌더링 병목을 정확히 격리하고 해결하는 실전 가이드.',
    content: [
      '수많은 프로젝트에서 "일단 성능이 좋아지겠지"라는 기대로 모든 함수와 원시값 연산에 useCallback과 useMemo를 무분별하게 감싸는 코드를 목격합니다. 하지만 이는 클로저 생성 비용과 의존성 배열 비교 연산 오버헤드를 발생시킵니다.',
      '진정한 렌더링 최적화의 첫 걸음은 "컴포넌트 합성(Component Composition)"입니다. 상태를 사용하는 자식 영역을 분리하거나 children prop을 활용하여 상위 트리의 불필요한 재귀적 렌더링을 DOM 레벨 이전에 원천 차단할 수 있습니다.',
      '또한 React DevTools Profiler의 "Highlight updates when components render" 기능을 활성화하고, Flamegraph를 통해 16ms(60fps)를 초과하는 커밋 단위를 정밀 추적해야 합니다.',
      '실무에서는 컴포넌트 쪼개기와 상태 끌어내리기(State Colocation)만으로도 전체 리렌더링 빈도의 70%를 제거할 수 있었습니다.'
    ]
  },
  {
    id: 'scalable-design-system-tokens',
    title: '디자인 토큰에서 모노레포 배포까지: 확장 가능한 디자인 시스템 구축기',
    category: 'Architecture',
    date: '2024.08.22',
    readTime: '8 min read',
    tags: ['Design System', 'Tokens', 'Turborepo', 'A11y'],
    summary: 'Figma Tokens API부터 CSS 변수 생성, Radix UI 헤드리스 컴포넌트 래핑, 그리고 Turborepo 모노레포를 통한 패키지 배포까지의 실제 경험을 정리했습니다.',
    content: [
      '디자인 시스템의 성패는 디자이너와 엔지니어 간의 "단일 진실 공급원(Single Source of Truth)" 구축 여부에 달려있습니다.',
      '우리는 Figma의 Variables와 Tokens Studio를 GitHub Actions와 연동하여, 디자이너가 토큰을 업데이트하고 PR을 생성하면 자동으로 Style Dictionary를 거쳐 CSS 변수 및 TypeScript 타입 정의로 변환되는 파이프라인을 구축했습니다.',
      'UI 구현체에서는 Radix UI와 같은 헤드리스 프리미티브를 기초로 삼아 키보드 포커스 트랩, 스크린리더 aria- 속성 등 복잡한 접근성 요구사항을 표준화했습니다.',
      '그 결과 신규 서비스 구축 시 기본 UI 구성에 소요되던 시간이 기존 3주에서 4일 이내로 획기적으로 단축되었습니다.'
    ]
  },
  {
    id: 'virtual-scroll-mechanics',
    title: '10만 개의 데이터 행을 버벅임 없이 렌더링하는 가상화(Virtualization) 원리',
    category: 'Engineering Deep Dive',
    date: '2024.05.09',
    readTime: '7 min read',
    tags: ['Virtualization', 'DOM', 'Browser Internals'],
    summary: '브라우저 렌더링 엔진의 레이아웃/페인트 파이프라인 한계를 극복하고, 뷰포트 내 요소만 계산하여 초당 60프레임을 유지하는 가상화 기법을 분석합니다.',
    content: [
      '브라우저가 10,000개 이상의 복잡한 DOM 노드를 렌더링하려고 하면, 스타일 재계산(Recalculate Styles)과 레이아웃(Layout/Reflow) 비용이 기하급수적으로 폭증합니다.',
      '가상화의 핵심 아이디어는 극도로 단순합니다: 사용자의 뷰포트 높이와 스크롤 오프셋을 기준으로 현재 눈에 보이는 N개(예: 20~30개)의 아이템만 DOM에 실시간으로 마운트하는 것입니다.',
      '가상 래퍼 컨테이너는 전체 10만 개 데이터의 총 높이(총 개수 × 행 높이)를 CSS translateY 또는 절대 위치로 유지하여 브라우저 스크롤바가 실제 전체 크기처럼 작동하도록 만듭니다.',
      '여기에 오버스캔(Overscan, 상하 3~5개 여유 버퍼)을 부여하면 고속 스크롤 중에도 빈 화면이 노출되지 않는 매끄러운 60fps 사용자 경험을 보장할 수 있습니다.'
    ]
  }
];

export const ENGINEERING_PHILOSOPHIES = [
  {
    title: '사용자 중심의 프레임과 응답성',
    description: '0.1초의 지연도 사용자의 몰입을 해칩니다. 최적화는 단순한 벤치마크 숫자가 아니라 사용자가 느끼는 즉각적인 피드백과 쾌적함에서 시작됩니다.'
  },
  {
    title: '지속 가능한 컴포넌트 아키텍처',
    description: '코드는 작성하는 시간보다 읽히고 수정되는 시간이 훨씬 깁니다. 모듈 간 결합도를 낮추고 명확한 책임을 부여하는 설계를 고수합니다.'
  },
  {
    title: '디자인과 엔지니어링의 완벽한 일치',
    description: '디자인 시스템은 단순한 UI 키트가 아닌 팀의 공통 언어입니다. 토큰 기반 표준화로 디자이너와 엔지니어 모두의 시간을 절약합니다.'
  },
  {
    title: '소외 없는 웹 접근성 (Accessibility)',
    description: '모든 사용자는 환경이나 신체적 제약에 상관없이 동등한 웹 경험을 누려야 합니다. WAI-ARIA 표준과 키보드 내비게이션을 기본 원칙으로 삼습니다.'
  }
];
