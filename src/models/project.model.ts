export interface Project {
  id: number;
  title: string;
  role: string;
  stack: string[];
  description: string;
  imageUrl: string;
  siteUrl?: string;
}