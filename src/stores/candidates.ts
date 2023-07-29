import { create } from 'zustand';
import { ICandidate } from '@/interfaces/ICandidate';

type State = {
  candidates: [ICandidate];
};

type Action = {
  setCandidates: (candidates: State['candidates']) => void;
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

  setCandidates: (candidates) => set(() => ({ candidates: candidates })),
}));

export default useCandidatesStore;
