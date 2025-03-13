// types/types.ts
import { LucideIcon } from 'lucide-react';

export interface Service {
  icon: LucideIcon;
  title: string;
  description: string;
}

export interface Stat {
  icon: LucideIcon;
  value: string;
  label: string;
}

export interface TeamMember {
  name: string;
  role: string;
  image: string;
}

export interface SiteConfig {
  name: string;
  description: string;
  url: string;
  ogImage: string;
  links: {
    twitter: string;
    github: string;
  };
}

export interface BudgetRange {
  title: string;
}