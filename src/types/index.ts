export type IconName =
  | "wrench"
  | "sprinkler"
  | "droplet"
  | "chip"
  | "tools"
  | "pump"
  | "ruler"
  | "chat"
  | "home"
  | "gate"
  | "building"
  | "leaf"
  | "field"
  | "water"
  | "check"
  | "arrow"
  | "clock"
  | "shield"
  | "phone";

export interface Service {
  slug: string;
  title: string;
  navTitle: string;
  short: string;
  excerpt: string;
  heroImage: string;
  icon: IconName;
  featured: boolean;
  includes: string[];
  process: string[];
  faqs: { q: string; a: string }[];
  relatedSolutions: string[];
}

export interface Solution {
  slug: string;
  title: string;
  navTitle: string;
  short: string;
  excerpt: string;
  heroImage: string;
  icon: IconName;
  audience: string;
  painPoints: string[];
  solution: string[];
  faqs: { q: string; a: string }[];
  relatedServices: string[];
}

export interface Project {
  slug: string;
  title: string;
  status: "pending" | "published";
  featured: boolean;
  location: string;
  clientType: string;
  area: string;
  system: string;
  challenge: string;
  solution: string;
  result: string;
  images: string[];
}

export interface FaqItem {
  q: string;
  a: string;
}
