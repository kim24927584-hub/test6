export type Language = 'ko' | 'en';

export type ProjectCategory = 'all' | 'web-app' | 'performance' | 'design-system' | 'canvas';

export interface Project {
  id: string;
  title: string;
  subtitle: {
    ko: string;
    en: string;
  };
  period: string;
  category: Exclude<ProjectCategory, 'all'>;
  role: {
    ko: string;
    en: string;
  };
  featured: boolean;
  metrics: {
    label: { ko: string; en: string };
    value: string;
  }[];
  tags: string[];
  summary: {
    ko: string;
    en: string;
  };
  problem: {
    ko: string;
    en: string;
  };
  solution: {
    ko: string;
    en: string;
  };
  keyTakeaways: {
    ko: string[];
    en: string[];
  };
  architecture: string[];
  demoType: 'canvas' | 'commerce' | 'tokens' | 'dashboard';
  githubUrl: string;
  liveUrl: string;
  accentColor: string;
}

export interface ExperienceItem {
  id: string;
  company: string;
  role: {
    ko: string;
    en: string;
  };
  period: string;
  description: {
    ko: string;
    en: string;
  };
  achievements: {
    ko: string[];
    en: string[];
  };
  skills: string[];
}

export interface SkillCategory {
  title: {
    ko: string;
    en: string;
  };
  items: {
    name: string;
    level: string; // e.g., 'Mastery', 'Proficient', 'Familiar'
    notes: {
      ko: string;
      en: string;
    };
  }[];
}
