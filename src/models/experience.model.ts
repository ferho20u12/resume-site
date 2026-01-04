export interface Experience {
  id: number;
  companyName: string;
  companyLink?: string | null;
  logoUrl?: string | null;
  position: string;
  startDate: Date;
  endDate: Date | null;
  description: string;
  location?: string;
  technologies?: string[];
}
