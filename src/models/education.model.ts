type EducationType =
  | "degree"
  | "certification"
  | "bootcamp"
  | "course"
  | "diploma";

interface Institution {
  name: string;
  website?: string;
  logoUrl?: string;
}
interface EducationPeriod {
  startDate: Date;
  endDate?: Date;
}

export interface Education {
  id: number;
  title: string;
  type: EducationType;
  institution: Institution;
  period: EducationPeriod;
  description?: string;
}
