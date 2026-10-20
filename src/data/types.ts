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
  sourceUrl: string;
  about: string[];
  links: SocialLinks;
  highlights: string[];
}

export interface RelatedLink {
  name: string;
  url: string;
}

/** A company the work was done for, when the employer is a consultancy. */
export interface ClientLink extends RelatedLink {
  /** How it relates to the employer, e.g. 'Client' or 'End client'. */
  label: string;
  linkedIn?: string;
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  companyUrl: string;
  companyLinkedIn: string;
  /** Client chain, in order from the employer's client to the end client. */
  clients?: ClientLink[];
  productName?: string;
  productUrl?: string;
  relatedLinks?: RelatedLink[];
  period: string;
  domain: string;
  bullets: string[];
}

export interface Metric {
  value: string;
  label: string;
}

export interface StackLayer {
  layer: string;
  items: string[];
}

export interface TechnicalBreakdown {
  architecture: string;
  howItWasBuilt: string[];
  stack: StackLayer[];
}

export type CaseStudyKind = 'client' | 'side-project' | 'challenge' | 'learning';

export type Industry =
  | 'legal-tech'
  | 'health-tech'
  | 'fintech'
  | 'geospatial'
  | 'e-commerce'
  | 'internal-tools'
  | 'travel'
  | 'home-services'
  | 'automotive'
  | 'industrial'
  | 'media'
  | 'productivity'
  | 'marketing'
  | 'developer-platform'
  | 'cs-fundamentals';

/** Filterable tech: the languages the work is written in, plus whether it uses AI/LLMs. */
export type LanguageTag = 'TypeScript' | 'JavaScript' | 'Python' | 'AI';

/** Filterable cloud and delivery work. 'CI/CD' means pipelines that build, test or deploy on push. */
export type PlatformTag = 'AWS' | 'Azure' | 'Docker' | 'CI/CD' | 'Vercel' | 'Netlify' | 'Firebase' | 'Heroku';

export type TechTag = LanguageTag | PlatformTag;

export interface CaseStudy {
  id: string;
  kind: CaseStudyKind;
  industry: Industry;
  tech: TechTag[];
  /** Year the work started; omitted when it spans several roles. */
  year?: number;
  /**
   * Last activity as YYYY-MM-DD, used for "recently updated" sorting. Client work sets the end of the
   * role; for repos it is filled in from repoDates.json.
   */
  updated?: string;
  /** Work still in progress, e.g. a current role. Sorts ahead of any date. */
  ongoing?: boolean;
  title: string;
  company: string;
  companyUrl?: string;
  companyLinkedIn?: string;
  clients?: ClientLink[];
  productName?: string;
  productUrl?: string;
  relatedLinks?: RelatedLink[];
  tags: string[];
  /** One-sentence business result, written for recruiters. */
  headline: string;
  role: string;
  challenge: string;
  outcomes: string[];
  /** Hard numbers shown above the outcomes, e.g. { value: '-60%', label: 'report time' }. */
  metrics?: Metric[];
  technical: TechnicalBreakdown;
  /** Source code and live demo links. */
  links?: ProjectLink[];
}

export interface ProjectLink {
  label: string;
  url: string;
}

export interface SkillGroup {
  category: string;
  skills: string[];
  description?: string;
}

export interface Article {
  id: string;
  title: string;
  publication: string;
  date: string;
  url: string;
  teaser: string;
}

export interface NavItem {
  id: string;
  label: string;
}
