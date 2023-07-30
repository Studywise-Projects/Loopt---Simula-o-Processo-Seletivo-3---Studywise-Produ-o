import { create } from 'zustand';
import { ICandidate } from '@/interfaces/ICandidate';

type State = {
  candidates: Array<ICandidate>;
  filteredCandidates: Array<ICandidate>;
  selectedCandidate: ICandidate;
};

type Action = {
  setCandidates: (candidates: State['candidates']) => void;
  setSelectedCandidate: (selectedCandidate: State['selectedCandidate']) => void;
  setFilteredCandidate: (
    filteredCandidates: State['filteredCandidates'],
  ) => void;
};

const useCandidatesStore = create<State & Action>((set) => ({
  candidates: [
    {
      id: 0,
      name: '',
      age: 0,
      picture: '',
      skills: [''],
      jobId: 0,
      approved: false,
    },
  ],
  filteredCandidates: [
    {
      id: 0,
      name: '',
      age: 0,
      picture: '',
      skills: [''],
      jobId: 0,
      approved: false,
    },
  ],
  selectedCandidate: {
    id: 0,
    name: '',
    age: 0,
    picture: '',
    skills: [''],
    jobId: 0,
    approved: false,
  },

  setCandidates: (candidates) => set(() => ({ candidates: candidates })),
  setSelectedCandidate: (selectedCandidate) =>
    set(() => ({ selectedCandidate: selectedCandidate })),
  setFilteredCandidate: (filteredCandidates) =>
    set(() => ({ filteredCandidates: filteredCandidates })),
}));

export default useCandidatesStore;
