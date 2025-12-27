export interface Project {
  id: number;
  projectName: string;
  projectLink: string;
  projectRepoLink: string;
  projectPhotoLink: string;
  role: string;
  stack: string;
  startDate: string;
  endDate: string | null;
  summary: string;
}
