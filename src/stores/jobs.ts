import { create } from 'zustand';
import { IJob } from '@/interfaces/IJob';

type State = {
  jobs: [IJob];
  selectedJob: any;
};

type Action = {
  setJobs: (jobs: State['jobs']) => void;
  setSelectedJob: (selectJob: State['selectedJob']) => void;
};

const useJobsStore = create<State & Action>((set) => ({
  jobs: [{ id: 0, label: '', requirements: [''], differentials: [''] }],
  selectedJob: {},

  setJobs: (jobs) => set(() => ({ jobs: jobs })),
  setSelectedJob: (selectedJob) => set(() => ({ selectedJob: selectedJob })),
}));

export default useJobsStore;
