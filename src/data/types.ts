export interface Stat {
  label: string;
  value: string;
}

export interface SocialLinks {
  linkedin: string;
  github: string;
  medium: string;
}

export interface Profile {
  name: string;
  title: string;
  tagline: string;
  email: string;
  whatsapp: string;
  whatsappUrl: string;
  location: string;
  availability: string;
  avatarSrc: string;
  about: string[];
  links: SocialLinks;
  stats: Stat[];
}

export interface RelatedLink {
  name: string;
  url: string;
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  companyUrl: string;
  companyLinkedIn: string;
  productName?: string;
  productUrl?: string;
  relatedLinks?: RelatedLink[];
  period: string;
  domain: string;
  bullets: string[];
}

export interface CaseStudy {
  id: string;
  title: string;
  company: string;
  companyUrl?: string;
  companyLinkedIn?: string;
  productName?: string;
  productUrl?: string;
  relatedLinks?: RelatedLink[];
  tags: string[];
  problem: string;
  approach: string;
  impact: string;
  stack: string[];
}

export interface Project {
  id: string;
  name: string;
  description: string;
  githubUrl: string;
  stack: string[];
}

export interface SkillGroup {
  category: string;
  skills: string[];
}

export interface Article {
  id: string;
  title: string;
  publication: string;
  date: string;
  url: string;
  teaser: string;
  claps?: number;
}

export interface NavItem {
  id: string;
  label: string;
}
