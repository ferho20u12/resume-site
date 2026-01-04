export interface Education {
  id: number;
  name: string;
  isCertification: boolean;
  institutionName: string;
  institutionLink: string;
  institutionPhotoLink: string;  
  startDate: string;
  endDate: string | null;
  summary: string;
}
