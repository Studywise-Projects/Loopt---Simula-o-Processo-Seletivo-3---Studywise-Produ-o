export interface ICandidate {
  id: number;
  name: string;
  age: number;
  picture: string;
  skills: Array<string>;
  jobId: number;
  approved: boolean;
}
