export interface Skill {
  id: string;
  group: number; // 1: Core, 2: Frontend, 3: Backend, 4: Tools, 5: AI
  radius: number;
}

export interface Link {
  source: string;
  target: string;
  value: number;
}

export interface GraphData {
  nodes: Skill[];
  links: Link[];
}

export interface Project {
  id: number;
  title: string;
  description: string;
  techStack: string[];
  role: string;
  image: string;
}

export interface ExperienceItem {
  id: number;
  role: string;
  company: string;
  period: string;
  location: string;
  description: string[];
  tech: string[];
}

export interface ChatMessage {
  id: string;
  role: 'user' | 'model' | 'system';
  text: string;
  timestamp: Date;
}

export enum ViewMode {
  DASHBOARD = 'DASHBOARD',
  PROJECTS = 'PROJECTS',
  EXPERIENCE = 'EXPERIENCE',
  TERMINAL = 'TERMINAL'
}